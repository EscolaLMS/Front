import React, { useMemo, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { API } from '@escolalms/sdk/lib';
import CourseProgramContent from './CourseProgramContent';
import CourseSidebar from './CourseSidebar';
import MarkdownReader from '../Markdown/MarkdownReader';
import { fixContentForMarkdown } from '../../utils/markdown';

export const CourseProgramLessonsPreview: React.FC<{ program: API.CourseProgram }> = ({
  program,
}) => {
  const { lessonID, topicID } = useParams<{ lessonID: string; topicID: string }>();

  const lessonId = lessonID ? lessonID : program.lessons[0].id;

  const topicId = topicID
    ? topicID
    : (program &&
        program.lessons &&
        program.lessons[0] &&
        program.lessons[0].topics &&
        program?.lessons[0]?.topics[0]?.id) ||
      0;

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
      <div className="container-fluid course-program course-program-page">
        <div className="course-program-container">
          <div className="course-program-wrapper course-program-wrapper-preview">
            <div className="course-program-player">
              <div className="course-program-player-content">
                <h2>{topic?.title}</h2>
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
                    preview={true}
                    lessonId={Number(lessonId)}
                    topicId={Number(topicId)}
                  />
                </div>
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
                            {/* Leave it in case the business changes its mind. */}
                            {/* {topic.resources.map((resource) => (
                              <a target="_blank" href={resource.url} rel="noreferrer">
                                {resource.name}
                              </a>
                            ))} */}
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <CourseSidebar
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

export default CourseProgramLessonsPreview;
