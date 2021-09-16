import React, { useCallback, useContext, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { EscolaLMSContext } from "@/escolalms/context";

import { useTranslation } from "react-i18next";

export const CourseProgramList: React.FC<{
  course: API.CourseProgram;
  lessonId: number;
  topicId: number;
  preview?: boolean;
}> = ({ course, lessonId, topicId, preview = false }) => {
  const program =
    course && course.lessons.filter((lesson) => lesson?.topics?.length > 0);
  if (!course && !program) {
    return <React.Fragment />;
  }

  const { t } = useTranslation();

  const { push } = useRouter();

  const { topicIsFinished, getNextPrevTopic, fontSizeToggle } =
    useContext(EscolaLMSContext);

  const [openLessons, setOpenLessons] = useState<number[]>([lessonId]);

  const toggleOpenLesson = useCallback((lessonId: number) => {
    setOpenLessons((prevState) => {
      return prevState.includes(lessonId)
        ? prevState.filter((id) => id !== lessonId)
        : [...prevState, lessonId];
    });
  }, []);

  useEffect(() => {
    if (!openLessons.includes(lessonId)) {
      setOpenLessons([...openLessons, lessonId]);
    }
  }, [lessonId, openLessons]);

  const onNextPrevTopic = useCallback(
    (next = true) => {
      const nextTopic = getNextPrevTopic(Number(topicId), next);

      nextTopic &&
        push(
          `/course/${course.id}/${nextTopic.lesson_id}/${nextTopic.id}`,
          null,
          { shallow: true }
        );

      // send progress
      // refresh page
    },
    [lessonId, topicId, program, push]
  );

  return (
    <div className="course-program-sidebar">
      <div className="text-right">
        <button
          onClick={() => onNextPrevTopic(false)}
          type="button"
          className="btn btn-light"
          title={t("next topic")}
        >
          {t("prev")}
        </button>
        <button
          onClick={() => onNextPrevTopic(true)}
          type="button"
          className="btn btn-light"
          title={t("prev topic")}
        >
          {t("next")}
        </button>
        <button
          onClick={() => fontSizeToggle(true)}
          type="button"
          title={t("change font size")}
          className="btn btn-light"
        >
          a+-
        </button>
      </div>

      {program.map((lesson, lesson_index) => {
        const isOpen = openLessons.includes(lesson.id);

        return (
          <React.Fragment key={lesson.id}>
            <h3
              className={`d-flex justify-content-between align-items-center ${
                lessonId === lesson.id ? "active" : ""
              }`}
              onClick={() => toggleOpenLesson(lesson.id)}
            >
              {lesson_index + 1}. {lesson.title}{" "}
              {isOpen ? (
                <i className="bx bx-chevron-down"></i>
              ) : (
                <i className="bx bx-chevron-up"></i>
              )}
              <div className="courses-meta">
                <span className="duration">{lesson.duration}</span>
              </div>
            </h3>
            {isOpen && (
              <ul>
                {lesson.topics.map((topic) => {
                  return (
                    <li
                      key={topic.id}
                      className={`${topicId === topic.id ? "active" : ""} ${
                        topicIsFinished(topic.id) ? "finished" : ""
                      }`}
                    >
                      <Link
                        href={
                          preview
                            ? `/courses/preview/${course.id}/${lesson.id}/${topic.id}`
                            : `/course/${course.id}/${lesson.id}/${topic.id}`
                        }
                        shallow={true}
                      >
                        <a className="d-flex justify-content-between align-items-center">
                          <span className="courses-name">
                            <i className="bx bx-check"></i>
                            {topic.title}
                          </span>
                          <div className="courses-meta">
                            <span className="questions">
                              {t(topic.topicable_type.split("\\").pop())}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CourseProgramList;
