//@ts-nocheck - remove when Course Top Nav will have fixed notes props
import React, { useEffect, useMemo } from "react";
import { API } from "@escolalms/sdk/lib";
import CourseProgramContent from "../../escolalms/sdk/components/Course/CourseProgramContent";
import CourseSidebar from "../../escolalms/sdk/components/Course/CourseSidebar";
import { fixContentForMarkdown } from "../../escolalms/sdk/utils/markdown";
import { useLessonProgram } from "../../escolalms/sdk/hooks/useLessonProgram";
import { useTranslation } from "react-i18next";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { CourseTopNav } from "@escolalms/components/lib/components/molecules/CourseTopNav/CourseTopNav";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { useHistory, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const StyledCourse = styled.section`
  .main-title {
    margin-bottom: 20px;
  }
  .course-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
`;

export const courseIncomplete = 0;
export const courseComplete = 1;
export const courseInProgress = 2;

export const CourseProgramLessons: React.FC<{
  program: API.CourseProgram;
  courseId?: number;
}> = ({ program, courseId }) => {
  const {
    topic,
    lesson,
    onNextTopic,
    onPrevTopic,
    getNextPrevTopic,
    isDisabledNextTopicButton,
    setIsDisabledNextTopicButton,
    sendProgress,
    progress,
  } = useLessonProgram(program);
  const { topicID } = useParams<{ lessonID: string; topicID: string }>();
  const { push } = useHistory();
  const location = useLocation();
  const { t } = useTranslation();
  // if pathname contain 3 splited items we cannot fire topicbreakpoint effect otherwise we can
  const startWithBreakPoint = location.pathname.split("/").length === 3;

  const getCourseProgress = useMemo(() => {
    return (
      progress &&
      progress.value &&
      progress.value.find(
        (courseProgress: API.CourseProgressItem) =>
          courseProgress.course.id === Number(courseId)
      )
    );
  }, [progress, courseId]);

  const topicBreakPoint = useMemo(() => {
    const currentProgress =
      (getCourseProgress && getCourseProgress.progress) || [];

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lesson?.id, topic?.id]);

  useEffect(() => {
    // if last topic send progress

    if (!getNextPrevTopic(Number(topic?.id))) {
      sendProgress(program.id, [{ topic_id: Number(topic?.id), status: 1 }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic?.id, program]);

  const columnWidth =
    lesson &&
    lesson.summary &&
    fixContentForMarkdown(`${lesson.summary}`) !== "" &&
    topic &&
    topic.summary &&
    fixContentForMarkdown(`${topic.summary}`) !== ""
      ? 6
      : 12;

  return (
    <React.Fragment>
      <StyledCourse className="course-program-wrapper">
        <div className="container">
          <Title className="main-title" level={3}>
            {program.title}
          </Title>
          <div className="row flex-lg-row flex-column-reverse">
            <div className="col-lg-9">
              <div className="course-program-player">
                <div className="course-program-player-content">
                  {topic &&
                    topic.introduction &&
                    fixContentForMarkdown(`${topic.introduction}`) !== "" && (
                      <div className={`col-lg-12 col-md-12 col-sm-12`}>
                        <div className="container-md">
                          <MarkdownRenderer>
                            {topic.introduction}
                          </MarkdownRenderer>
                        </div>
                      </div>
                    )}
                  <div
                    className="course-program-player-content__wrapper"
                    style={{
                      ...((topic?.json?.wrapperStyle as object) || {}),
                    }}
                  >
                    <CourseProgramContent
                      lessonId={Number(lesson?.id)}
                      topicId={topic && Number(topic.id)}
                      setIsDisabledNextTopicButton={
                        setIsDisabledNextTopicButton
                      }
                    />
                  </div>
                </div>
                <div className="course-program-content__container">
                  <div className="row">
                    {lesson &&
                      lesson.summary &&
                      fixContentForMarkdown(`${lesson.summary}`) !== "" && (
                        <div
                          className={`col-lg-${columnWidth} col-md-${columnWidth} col-sm-12`}
                        >
                          <div className="course-program-summary">
                            <div className="container-md">
                              <MarkdownRenderer>
                                {lesson.summary}
                              </MarkdownRenderer>
                            </div>
                          </div>
                        </div>
                      )}
                    {topic &&
                      topic.summary &&
                      fixContentForMarkdown(`${topic.summary}`) !== "" && (
                        <div
                          className={`col-lg-${columnWidth} col-md-${columnWidth} col-sm-12`}
                        >
                          <div className="course-program-summary">
                            <div className="container-md">
                              <MarkdownRenderer>
                                {topic.summary}
                              </MarkdownRenderer>
                            </div>

                            {topic &&
                              topic.resources &&
                              topic.resources?.length > 0 && (
                                <React.Fragment>
                                  <h3>{t("CourseProgram.TopicAttachment")}</h3>
                                  <div className="file-list">
                                    {topic.resources.map((resource) => {
                                      console.log(resource);
                                      return (
                                        <a
                                          target="_blank"
                                          href={resource.url}
                                          rel="noreferrer"
                                        >
                                          {resource.name}
                                        </a>
                                      );
                                    })}
                                  </div>
                                </React.Fragment>
                              )}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <CourseSidebar
                course={program}
                lessonId={Number(lesson?.id)}
                topicId={Number(topic?.id)}
              />
            </div>
          </div>
        </div>
        <div className="course-nav">
          <CourseTopNav
            onFinish={() => console.log("clicked")}
            mobile={isMobile}
            onNext={onNextTopic}
            isFinished={false}
            onPrev={onPrevTopic}
            hasPrev={getNextPrevTopic(Number(topic?.id), false) ? true : false}
            hasNext={!isDisabledNextTopicButton}
          />
        </div>
      </StyledCourse>
    </React.Fragment>
  );
};

export default CourseProgramLessons;
