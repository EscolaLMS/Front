import React, { useEffect } from 'react';
import { API } from '@escolalms/sdk/lib';
import CourseProgramContent from '../../escolalms/sdk/components/Course/CourseProgramContent';
import CourseSidebar from '../../escolalms/sdk/components/Course/CourseSidebar';
import MarkdownReader from '../../escolalms/sdk/components/Markdown/MarkdownReader';
import { fixContentForMarkdown } from '../../escolalms/sdk/utils/markdown';
import { useLessonProgram } from '../../escolalms/sdk/hooks/useLessonProgram';

export const courseIncomplete = 0;
export const courseComplete = 1;
export const courseInProgress = 2;

export const CourseProgramLessons: React.FC<{ program: API.CourseProgram }> = ({ program }) => {
  const [
    topic,
    lesson,
    onNextTopic,
    getNextPrevTopic,
    isDisabledNextTopicButton,
    setIsDisabledNextTopicButton,
  ] = useLessonProgram(program, `/course/`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lesson?.id, topic?.id]);

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
              <div className="course-program-player-content__wrapper">
                <CourseProgramContent
                  lessonId={Number(lesson?.id)}
                  topicId={topic && Number(topic.id)}
                  setIsDisabledNextTopicButton={setIsDisabledNextTopicButton}
                />
              </div>
            </div>

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

                    {/* Leave it in case the business changes its mind.  */}

                    {/* {topic && topic.resources && topic.resources?.length > 0 && (
                      <React.Fragment>
                        <h3>{t('CourseProgram.TopicAttachment')}</h3>
                        <div className="file-list">
                          {topic.resources.map((resource) => (
                            <a target="_blank" href={resource.url} rel="noreferrer">
                              {resource.name}
                            </a>
                          ))}
                        </div>
                      </React.Fragment>
                    )} */}
                  </div>
                </div>
              )}
            </div>
            {getNextPrevTopic(Number(topic?.id)) && (
              <div className="course-program-player-next">
                <button
                  disabled={topic && topic.can_skip ? false : isDisabledNextTopicButton}
                  className={`default-btn`}
                  onClick={onNextTopic}
                >
                  <div className="course-program-player-next-button__wrapper">
                    Następna lekcja &gt;
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
