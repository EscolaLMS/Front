import React, { useMemo } from "react";

import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/connector/lib";
import Preloader from "../../components/Preloader";
import CourseProgramContent from "./CourseProgramContent";
import CourseProgramList from "./CourseProgramList";

export const CourseProgramLessons: React.FC<{ program: API.CourseProgram }> = ({
  program,
}) => {
  const { lessonID, topicID } = useParams();

  const lessonId = lessonID ? lessonID : program.lessons[0].id;
  const topicId = topicID ? topicID : program?.lessons[0]?.topics[0]?.id;

  const lesson = useMemo(
    () => program.lessons.find((lesson) => lesson.id === Number(lessonId)),
    [program, lessonId]
  );

  const topic = useMemo(
    () => lesson && lesson.topics.find((topic) => topic.id === Number(topicId)),
    [lesson, topicId]
  );

  const { t } = useTranslation();

  if (!program) {
    return <Preloader />;
  }

  const columnWidth = topic && topic.summary ? 6 : 12;

  return (
    <React.Fragment>
      <div className="container-fluid course-program">
        <div className="course-program-player">
          <div className="course-program-player-content">
            <CourseProgramContent
              preview={true}
              lessonId={Number(lessonId)}
              topicId={Number(topicId)}
            />
          </div>
          <div className="row">
            {lesson && lesson.summary && (
              <div
                className={`col-lg-${columnWidth} col-md-${columnWidth} col-sm-12`}
              >
                <div className="course-program-summary">
                  <div className="container-md">
                    <h3>Lesson summary</h3>
                    <ReactMarkdown>{lesson.summary}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
            {topic && topic.summary && (
              <div className={`col-lg-6 col-md-6 col-sm-12`}>
                <div className="course-program-summary">
                  <h3>Topic summary</h3>
                  <div className="container-md">
                    <ReactMarkdown>{topic.summary}</ReactMarkdown>
                  </div>
                  {topic.resources?.length > 0 && (
                    <React.Fragment>
                      <h3>{t("CourseProgram.TopicAttachment")}</h3>
                      <div className="file-list">
                        {topic.resources.map((resource) => (
                          <a target="_blank" href={resource.url}>
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
    </React.Fragment>
  );
};

export default CourseProgramLessons;
