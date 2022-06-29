import React, { useEffect } from "react";
import { API } from "@escolalms/sdk/lib";
import CourseProgramContent from "@/components/Course/CourseProgramContent";
import CourseSidebar from "@/components/Course/CourseSidebar";
import { useLessonProgram } from "../../hooks/useLessonProgram";
import { useTranslation } from "react-i18next";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";

const CourseProgramLessonsPreview: React.FC<{
  program: API.CourseProgram;
}> = ({ program }) => {
  const { topic, lesson, onNextTopicPreview } = useLessonProgram(
    program,
    `/courses/preview/`
  );
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [topic?.id, lesson?.id]);

  return (
    <React.Fragment>
      <div className="container-fluid course-program course-program-page">
        <div className="course-program-container">
          <div className="course-program-wrapper course-program-wrapper-preview">
            <div className="course-program-player">
              <div className="course-program-player-content">
                <h2>{topic?.title}</h2>

                {topic && topic.introduction && (
                  <div className={`col-lg-12 col-md-12 col-sm-12`}>
                    <div className="container-md">
                      <MarkdownRenderer>{topic.introduction}</MarkdownRenderer>
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
                    preview={true}
                    lessonId={Number(lesson?.id)}
                    topicId={Number(topic?.id)}
                  />
                </div>
              </div>

              <div className="row">
                {lesson && lesson.summary && (
                  <div className={`col-lg-12 col-md-12 col-sm-12`}>
                    <div className="course-program-summary">
                      <MarkdownRenderer>{lesson.summary}</MarkdownRenderer>
                    </div>
                  </div>
                )}
                {topic && topic.summary && (
                  <div className={`col-lg-12 col-md-12 col-sm-12`}>
                    <div className="course-program-summary">
                      <MarkdownRenderer>{topic.summary}</MarkdownRenderer>
                      {/* Leave it in case the business changes its mind. */}
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

              <div className="course-program-player-next">
                <button
                  className={`default-btn default-btn-equal`}
                  onClick={() => onNextTopicPreview()}
                >
                  <div className="course-program-player-next-button__wrapper">
                    {t("Next Topic")} &gt;
                  </div>
                  <span></span>
                </button>
              </div>
            </div>
            <CourseSidebar
              course={program}
              lessonId={Number(lesson?.id)}
              topicId={Number(topic?.id)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseProgramLessonsPreview;
