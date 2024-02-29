import React, { useContext, useState, useMemo } from "react";
import { t } from "i18next";
import { isAfter } from "date-fns";
import { API } from "@escolalms/sdk/lib";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";
import { CourseAgenda } from "@escolalms/components/lib/components/organisms/CourseAgenda/CourseAgenda";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { getFlatTopics } from "@escolalms/components/lib/utils/course";
import { useLessonProgram } from "@/hooks/useLessonProgram";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { userIsCourseAuthor } from "@/utils/index";

const StyledSidebar = styled.aside`
  padding-bottom: 100px;
  .show-agenda-btn {
    width: 100%;
  }
  .agenda-wrapper {
    ${isMobile &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transform: translate(100%, 0);
      transition: transform 0.25s;
      overflow: scroll;
      padding: 40px 0 55px;
      z-index: 10;
      background-color: ${({ theme }) =>
        theme.mode === "dark" ? theme.dm__background : theme.background};
      &--visible {
        transform: translate(0, 0);
      }
      .hide-agenda-btn {
        display: block;
        margin: 0 15px 0 auto;
      }
    `}
  }
`;

export const CourseSidebar: React.FC<{
  course: API.CourseProgram;
  topicId: number;
  onCompleteTopic?: () => void;
  onCourseFinish?: () => void;
}> = ({ course, topicId, onCompleteTopic, onCourseFinish }) => {
  const { progress } = useLessonProgram(course);
  const {
    courseProgressDetails,
    user,
    program: courseProgram,
  } = useContext(EscolaLMSContext);
  const currentCourseProgram = useMemo(
    () => courseProgram.value,
    [courseProgram.value]
  );
  const currentCourseProgress = useMemo(
    () =>
      (progress.value ?? []).find(
        ({ course: { id } }) => id === Number(course.id)
      ),
    [progress, course.id]
  );

  const history = useHistory();
  const [agendaVisible, setAgendaVisible] = useState(false);
  const program = (course?.lessons || []).filter(
    (lesson) => (lesson?.topics?.length ?? 0) > 0
  );
  const { topicIsFinished } = useContext(EscolaLMSContext);
  const flatTopics = useMemo(
    () => getFlatTopics(course.lessons ?? []),
    [course.lessons]
  );

  const getCourseProgress = useMemo(() => {
    const courseId = course.id;
    if (
      courseProgressDetails &&
      courseProgressDetails.byId &&
      courseProgressDetails.byId[Number(courseId)] &&
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
  }, [progress, course]);

  const finishedTopics = flatTopics
    .filter((item: API.Topic) => {
      return (
        topicIsFinished(item.id) ||
        getCourseProgress?.some(
          (progressItem) =>
            progressItem.topic_id === item.id && progressItem.status === 1
        )
      );
    })
    .map((item: API.Topic) => item.id);

  const availableTopicsIds = useMemo(() => {
    const activeLessons = (currentCourseProgram?.lessons ?? []).filter(
      (l) =>
        // TODO: Add active_from to sdk Lesson type.
        // @ts-ignore
        l.active_from === null ||
        (l.active_from && isAfter(new Date(), new Date(l.active_from)))
    );

    const activeLessonsFlatTopics = getFlatTopics(activeLessons);

    const { incomplete, in_progress, complete } =
      activeLessonsFlatTopics.reduce<{
        in_progress: number[];
        complete: number[];
        incomplete: number[];
      }>(
        (acc, t) => {
          const el = (currentCourseProgress?.progress ?? []).find(
            ({ topic_id }) => topic_id === t.id
          );
          if (!el) return acc;

          const statusMap = {
            [API.CourseProgressItemElementStatus.INCOMPLETE]: "incomplete",
            [API.CourseProgressItemElementStatus.COMPLETE]: "complete",
            [API.CourseProgressItemElementStatus.IN_PROGRESS]: "in_progress",
          } as const;

          return {
            ...acc,
            [statusMap[el.status]]: [...acc[statusMap[el.status]], t.id],
          };
        },
        {
          in_progress: [],
          incomplete: [],
          complete: [],
        }
      );

    if (in_progress.length) return [...in_progress, ...complete];

    const firstInCompletedLessonId = incomplete?.[0] ? [incomplete[0]] : [];
    return [...complete, ...firstInCompletedLessonId];
  }, [currentCourseProgram?.lessons, currentCourseProgress?.progress]);

  if (!course && !program) {
    return <React.Fragment />;
  }
  return (
    <StyledSidebar>
      {isMobile && (
        <Button
          mode="outline"
          className="show-agenda-btn"
          onClick={() => setAgendaVisible(true)}
        >
          {t("CourseProgram.ShowAgenda").toString()}
        </Button>
      )}
      <div
        className={`${
          agendaVisible
            ? "agenda-wrapper agenda-wrapper--visible"
            : "agenda-wrapper"
        }`}
      >
        {isMobile && (
          <Button
            className="hide-agenda-btn"
            mode="secondary"
            onClick={() => setAgendaVisible(false)}
          >
            &#10005;
          </Button>
        )}
        <CourseAgenda
          areAllTopicsUnlocked={userIsCourseAuthor(
            Number(user.value?.id),
            course
          )}
          onNextTopicClick={() => {
            const currentTopicIndex = flatTopics.findIndex(
              (t) => t.id === topicId
            );
            const nextTopic = flatTopics?.[currentTopicIndex + 1];

            if (nextTopic && currentTopicIndex !== -1) {
              history.push(
                `/course/${course.id}/${nextTopic.lesson_id}/${nextTopic.id}`
              );
              setAgendaVisible(false);
            }
          }}
          mobile={isMobile}
          lessons={course.lessons}
          currentTopicId={topicId}
          finishedTopicIds={finishedTopics}
          onMarkFinished={() => onCompleteTopic?.()}
          onTopicClick={(topic) => {
            history.push(`/course/${course.id}/${topic.lesson_id}/${topic.id}`);
            setAgendaVisible(false);
          }}
          onCourseFinished={() => onCourseFinish?.()}
          availableTopicsIds={availableTopicsIds}
        />
      </div>
    </StyledSidebar>
  );
};

export default CourseSidebar;
