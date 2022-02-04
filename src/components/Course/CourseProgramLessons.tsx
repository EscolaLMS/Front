import React, { useEffect, useMemo } from 'react';
import { API } from '@escolalms/sdk/lib';
import CourseProgramContent from '../../escolalms/sdk/components/Course/CourseProgramContent';
import CourseSidebar from '../../escolalms/sdk/components/Course/CourseSidebar';
import MarkdownReader from '../../escolalms/sdk/components/Markdown/MarkdownReader';
import { fixContentForMarkdown } from '../../escolalms/sdk/utils/markdown';
import { useLessonProgram } from '../../escolalms/sdk/hooks/useLessonProgram';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';

export const courseIncomplete = 0;
export const courseComplete = 1;
export const courseInProgress = 2;

export const CourseProgramLessons: React.FC<{ program: API.CourseProgram; courseId?: number }> = ({
  program,
  courseId,
}) => {
  const {
    topic,
    lesson,
    onNextTopic,
    getNextPrevTopic,
    isDisabledNextTopicButton,
    setIsDisabledNextTopicButton,
    sendProgress,
    progress,
  } = useLessonProgram(program);

  const { push } = useHistory();
  const location = useLocation();
  const { t } = useTranslation();

  // if pathname contain 3 splited items we cannot fire topicbreakpoint effect otherwise we can
  const startWithBreakPoint = location.pathname.split('/').length === 3;

  const getCourseProgress = useMemo(() => {
    return (
      progress &&
      progress.value &&
      progress.value.find(
        (courseProgress: API.CourseProgressItem) => courseProgress.course.id === Number(courseId),
      )
    );
  }, [progress, courseId]);

  const topicBreakPoint = useMemo(() => {
    const currentProgress = (getCourseProgress && getCourseProgress.progress) || [];

    const lastStartedLesson = currentProgress
      .filter(
        (topic: API.CourseProgressItemElement) =>
          topic.status === API.CourseProgressItemElementStatus.IN_PROGRESS,
      )
      .sort(
        (a: API.CourseProgressItemElement, b: API.CourseProgressItemElement) =>
          new Date(b.started_at as string).getTime() - new Date(a.started_at as string).getTime(),
      )[0];

    if (!lastStartedLesson) {
      return currentProgress.filter(
        (topic: API.CourseProgressItemElement) =>
          topic.status === API.CourseProgressItemElementStatus.INCOMPLETE,
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
          lesson.topics.some((topic: API.Topic) => topic.id === topicBreakPoint.topic_id),
      )
    );
  }, [program, topicBreakPoint]);

  useEffect(() => {
    if (startWithBreakPoint) {
      if (findLessonBreakPoint && topicBreakPoint) {
        push(`/course/${program.id}/${findLessonBreakPoint.id}/${topicBreakPoint.topic_id}`, null);
      }
    }
  }, [startWithBreakPoint, findLessonBreakPoint, program, push, topicBreakPoint]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    fixContentForMarkdown(`${lesson.summary}`) !== '' &&
    topic &&
    topic.summary &&
    fixContentForMarkdown(`${topic.summary}`) !== ''
      ? 6
      : 12;

  return (
    <React.Fragment>
      <div className="container-fluid course-program course-program-page">
        <div className="course-program-wrapper">
          <div className="course-program-player">
            <div className="course-program-player-content">
              <h2>{topic && topic?.title}</h2>
              {topic &&
                topic.introduction &&
                fixContentForMarkdown(`${topic.introduction}`) !== '' && (
                  <div className={`col-lg-12 col-md-12 col-sm-12`}>
                    <div className="container-md">
                      <MarkdownReader>{topic.introduction}</MarkdownReader>
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
                  setIsDisabledNextTopicButton={setIsDisabledNextTopicButton}
                />
              </div>
            </div>
            <div className="course-program-content__container">
              <div className="row">
                {lesson && lesson.summary && fixContentForMarkdown(`${lesson.summary}`) !== '' && (
                  <div className={`col-lg-${columnWidth} col-md-${columnWidth} col-sm-12`}>
                    <div className="course-program-summary">
                      <div className="container-md">
                        <MarkdownReader>{lesson.summary}</MarkdownReader>
                      </div>
                    </div>
                  </div>
                )}
                {topic && topic.summary && fixContentForMarkdown(`${topic.summary}`) !== '' && (
                  <div className={`col-lg-${columnWidth} col-md-${columnWidth} col-sm-12`}>
                    <div className="course-program-summary">
                      <div className="container-md">
                        <MarkdownReader>{topic.summary}</MarkdownReader>
                      </div>

                      {topic && topic.resources && topic.resources?.length > 0 && (
                        <React.Fragment>
                          <h3>{t('CourseProgram.TopicAttachment')}</h3>
                          <div className="file-list">
                            {topic.resources.map((resource) => {
                              console.log(resource);
                              return (
                                <a target="_blank" href={resource.url} rel="noreferrer">
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

            {getNextPrevTopic(Number(topic?.id)) && (
              <div className="course-program-player-next">
                <button
                  disabled={topic && topic.can_skip ? false : isDisabledNextTopicButton}
                  className={`default-btn default-btn-equal`}
                  onClick={onNextTopic}
                >
                  <div className="course-program-player-next-button__wrapper">
                    {t('Next Topic')} &gt;
                  </div>
                  <span></span>
                </button>
              </div>
            )}
          </div>

          <CourseSidebar
            course={program}
            lessonId={Number(lesson?.id)}
            topicId={Number(topic?.id)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseProgramLessons;
