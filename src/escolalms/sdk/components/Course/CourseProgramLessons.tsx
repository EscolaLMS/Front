import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { API } from '@escolalms/sdk/lib';
import { useTranslation } from 'react-i18next';
import CourseProgramContent from './CourseProgramContent';
import CourseProgramList from './CourseProgramList';
import MarkdownReader from '../Markdown/MarkdownReader';
import { fixContentForMarkdown } from '../../utils/markdown';

export const courseIncomplete = 0;
export const courseComplete = 1;
export const courseInProgress = 2;

export const CourseProgramLessons: React.FC<{ program: API.CourseProgram }> = ({ program }) => {
  const [isDisabledNextTopicButton, setIsDisabledNextTopicButton] = useState(false);

  const { push } = useHistory();
  const { lessonID, topicID } = useParams<{ lessonID: string; topicID: string }>();

  const lessonId = lessonID ? lessonID : program.lessons[0].id;
  // TODO fix me
  //@ts-ignore
  const topicId = topicID ? topicID : (program && program?.lessons[0]?.topics[0]?.id) || 0;

  const { sendProgress, getNextPrevTopic } = useContext(EscolaLMSContext);

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lessonId, topicId]);

  const lesson = useMemo(
    () => program.lessons.find((lesson) => lesson.id === Number(lessonId)),
    [program, lessonId],
  );

  const topic = useMemo(
    () => lesson && lesson.topics && lesson.topics.find((topic) => topic.id === Number(topicId)),
    [lesson, topicId],
  );

  const onNextTopic = useCallback(() => {
    program.id &&
      sendProgress(program.id, [{ topic_id: Number(topicId), status: 1 }]).then(() => {
        const nextTopic = getNextPrevTopic(Number(topicId));

        nextTopic && push(`/kurs/${program.id}/${nextTopic.lesson_id}/${nextTopic.id}`, null);
      });
  }, [topicId, program, push, getNextPrevTopic, sendProgress]);

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
      <div className="container-fluid course-program">
        <div className="course-program-wrapper">
          <div className="course-program-player">
            <div className="course-program-player-content">
              <h2>{topic?.title}</h2>
              <CourseProgramContent
                lessonId={Number(lessonId)}
                topicId={Number(topicId)}
                setIsDisabledNextTopicButton={setIsDisabledNextTopicButton}
              />
            </div>

            <div className="row">
              {lesson && lesson.summary && fixContentForMarkdown(`${lesson.summary}`) !== '' && (
                <div className={`col-lg-${columnWidth} col-md-${columnWidth} col-sm-12`}>
                  <div className="course-program-summary">
                    <div className="container-md">
                      {/* <h3>{t("LessonSummary")}</h3> */}
                      <MarkdownReader>{lesson.summary}</MarkdownReader>
                    </div>
                  </div>
                </div>
              )}
              {topic && topic.summary && fixContentForMarkdown(`${topic.summary}`) !== '' && (
                <div className={`col-lg-${columnWidth} col-md-${columnWidth} col-sm-12`}>
                  <div className="course-program-summary">
                    <div className="container-md">
                      {/* <h3>{t("TopicSummary")}</h3> */}
                      <MarkdownReader>{topic.summary}</MarkdownReader>
                    </div>
                    {topic && topic.resources && topic.resources?.length > 0 && (
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
                    )}
                  </div>
                </div>
              )}
            </div>
            {getNextPrevTopic(Number(topicId)) && (
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
          <CourseProgramList
            course={program}
            lessonId={Number(lessonId)}
            topicId={Number(topicId)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseProgramLessons;
