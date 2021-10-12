import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { API } from '@escolalms/sdk/lib';

export const CourseProgramList: React.FC<{
  course: API.CourseProgram;
  lessonId: number;
  topicId: number;
  preview?: boolean;
}> = ({ course, lessonId, topicId, preview = false }) => {
  const program =
    course &&
    course.lessons &&
    course.lessons.filter((lesson) => lesson && lesson.topics && lesson?.topics?.length > 0);

  const { topicIsFinished } = useContext(EscolaLMSContext);

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

  if (!course && !program) {
    return <React.Fragment />;
  }

  return (
    <div className="course-program-sidebar">
      {program.map((lesson, lesson_index) => {
        const isOpen = lesson && lesson.id && openLessons.includes(lesson.id);

        return (
          <React.Fragment key={lesson.id}>
            <h3
              className={`d-flex justify-content-between align-items-center ${
                lessonId === lesson.id ? 'active' : ''
              }`}
            >
              <div
                role="button"
                onClick={() => lesson && lesson.id && toggleOpenLesson(lesson.id)}
                onKeyDown={() => lesson && lesson.id && toggleOpenLesson(lesson.id)}
                tabIndex={-1}
              >
                <span>
                  <span className="box">
                    {isOpen ? (
                      <i className="bx bx-chevron-up"></i>
                    ) : (
                      <i className="bx bx-chevron-down"></i>
                    )}
                  </span>
                  {lesson_index + 1}. {lesson.title}{' '}
                </span>

                <div className="courses-meta">
                  {lesson.duration && <span className="duration">{lesson.duration}</span>}
                </div>
              </div>
            </h3>
            {isOpen && (
              <ul>
                {lesson &&
                  lesson.topics &&
                  lesson.topics.map((topic) => {
                    return (
                      <li
                        key={topic.id}
                        className={`${topicId === topic.id ? 'active' : ''} ${
                          topic && topic.id && topicIsFinished(topic.id) ? 'finished' : ''
                        }`}
                      >
                        <Link
                          className="d-flex justify-content-between align-items-center"
                          to={
                            preview
                              ? `/materialy-szkoleniowe/${course.id}/${lesson.id}/${topic.id}`
                              : `/kurs/${course.id}/${lesson.id}/${topic.id}`
                          }
                        >
                          <span className="courses-name">
                            <i className="bx bx-check"></i>
                            {topic.title}
                          </span>
                          <div className="courses-meta">
                            <span
                              className={`status ${
                                topic &&
                                topic?.topicable_type &&
                                topic?.topicable_type.split('\\').pop()
                              }`}
                            ></span>
                          </div>
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
