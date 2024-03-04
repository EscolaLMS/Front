import { useContext, useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";

interface Props {
  courseId: number | undefined;
  program: API.CourseProgram;
  topic: API.Topic | undefined;
}

export const useCourseBreakPoint = ({ courseId, program, topic }: Props) => {
  const { courseProgressDetails, progress } = useContext(EscolaLMSContext);
  const location = useLocation();
  const { push } = useHistory();
  // if pathname contain 3 splited items we cannot fire topicbreakpoint effect otherwise we can
  const startWithBreakPoint = location.pathname.split("/").length === 3;

  const getCourseProgress = useMemo(() => {
    if (
      courseProgressDetails.byId?.[Number(courseId)] &&
      courseProgressDetails.byId[Number(courseId)].value
    ) {
      return courseProgressDetails.byId[Number(courseId)].value;
    }
    return (
      progress &&
      progress.value &&
      progress.value.find(
        (courseProgress: API.CourseProgressItem) =>
          courseProgress.course.id === Number(courseId)
      )?.progress
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, courseId]);

  const topicBreakPoint = useMemo(() => {
    const currentProgress = getCourseProgress || [];

    const lastStartedLesson = currentProgress
      .filter(
        (topic: API.CourseProgressItemElement) =>
          topic.status === API.CourseProgressItemElementStatus.IN_PROGRESS
      )
      .sort(
        (a: API.CourseProgressItemElement, b: API.CourseProgressItemElement) =>
          new Date(b.started_at as string).getTime() -
          new Date(a.started_at as string).getTime()
      )[0];

    if (!lastStartedLesson) {
      return currentProgress.filter(
        (topic: API.CourseProgressItemElement) =>
          topic.status === API.CourseProgressItemElementStatus.INCOMPLETE
      )[0];
    }
    return lastStartedLesson;
  }, [getCourseProgress]);

  const findLessonBreakPoint = useMemo(() => {
    return (
      topicBreakPoint &&
      program.lessons.find(
        (lesson: API.Lesson) =>
          lesson &&
          lesson.topics &&
          lesson.topics.some(
            (topic: API.Topic) => topic.id === topicBreakPoint.topic_id
          )
      )
    );
  }, [program, topicBreakPoint]);

  useEffect(() => {
    if (startWithBreakPoint) {
      if (findLessonBreakPoint && topicBreakPoint) {
        push(
          `/course/${program.id}/${findLessonBreakPoint.id}/${topicBreakPoint.topic_id}`,
          null
        );
      }
    }
  }, [
    startWithBreakPoint,
    findLessonBreakPoint,
    program,
    push,
    topicBreakPoint,
  ]);

  const finishedTopicIndex = getCourseProgress?.findIndex((ttopic) => {
    return (
      ttopic.topic_id === topic?.id &&
      ttopic.status === API.CourseProgressItemElementStatus.COMPLETE
    );
  });

  return {
    getCourseProgress,
    finishedTopicIndex,
  };
};
