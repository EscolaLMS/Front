import React, { useMemo, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { API } from '@escolalms/sdk/lib';
import CourseProgramContent from './CourseProgramContent';
import CourseProgramList from './CourseProgramList';
import MarkdownReader from '../Markdown/MarkdownReader';
import { fixContentForMarkdown } from '../../utils/markdown';
export const CourseProgramLessons: React.FC<{ program: API.CourseProgram }> = ({ program }) => {
  const { lessonID, topicID } = useParams<{ lessonID: string; topicID: string }>();

  const lessonId = lessonID ? lessonID : program.lessons[0].id;
  // TODO FIX_ME
  //@ts-ignore
  const topicId = topicID ? topicID : program?.lessons[0]?.topics[0]?.id;

  const lesson = useMemo(
    () => program.lessons.find((lesson) => lesson.id === Number(lessonId)),
    [program, lessonId],
  );

  const topic = useMemo(
    () => lesson && lesson.topics && lesson.topics.find((topic) => topic.id === Number(topicId)),
    [lesson, topicId],
  );

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lessonId, topicId]);

  return (
    <React.Fragment>
      <div className="container-fluid course-program">
        <div className="course-program-container">
          <div className="course-program-wrapper course-program-wrapper-preview">
            <div className="course-program-player">
              <div className="course-program-player-content">
                {topic &&
                  topic.introduction &&
                  fixContentForMarkdown(`${topic.introduction}`) !== '' && (
                    <div className={`col-lg-12 col-md-12 col-sm-12`}>
                      <div className="container-md">
                        <MarkdownReader>{topic.introduction}</MarkdownReader>
                      </div>
                    </div>
                  )}
                <h2>{topic?.title}</h2>
                <CourseProgramContent
                  preview={true}
                  lessonId={Number(lessonId)}
                  topicId={Number(topicId)}
                />
              </div>

              <div className="row">
                {lesson && lesson.summary && fixContentForMarkdown(`${lesson.summary}`) !== '' && (
                  <div className={`col-lg-12 col-md-12 col-sm-12`}>
                    <div className="course-program-summary">
                      <MarkdownReader>{lesson.summary}</MarkdownReader>
                    </div>
                  </div>
                )}
                {topic && topic.summary && fixContentForMarkdown(`${topic.summary}`) !== '' && (
                  <div className={`col-lg-12 col-md-12 col-sm-12`}>
                    <div className="course-program-summary">
                      <MarkdownReader>{topic.summary}</MarkdownReader>

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
            </div>
            <CourseProgramList
              preview={true}
              course={program}
              lessonId={Number(lessonId)}
              topicId={Number(topicId)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseProgramLessons;
