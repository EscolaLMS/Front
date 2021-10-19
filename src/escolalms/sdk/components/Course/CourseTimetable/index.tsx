import React, {useCallback, useEffect, useState} from 'react';
import "./index.scss";
import {API} from "@escolalms/sdk/lib";
import MetaTag from "@/components/Common/MetaTag";
import CourseTimetableTopicList from "@/escolalms/sdk/components/Course/CourseTimetable/CourseTimetableTopicList";

const CourseTimetable: React.FC<{
    className?: string
    course: API.CourseProgram;
    lessonId: number;
    topicId: number;
    preview?: boolean;
}> = ({className = '', course, lessonId, topicId, preview = false}) => {
    const program = (course?.lessons || []).filter((lesson) => lesson && lesson.topics && lesson?.topics?.length > 0) as API.Lesson[];

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
        <ul className={`course-timetable ${className}`}>
            {program.map((lesson, lesson_index) => {
                const isOpen = lesson && lesson.id && openLessons.includes(lesson.id);

                return (
                    <li className="course-timetable__lesson" key={lesson.id}>
                        <h3
                            className={`d-flex justify-content-between align-items-center ${
                                lessonId === lesson.id ? 'active' : ''
                            }`}
                        >
                            <div
                                className="course-timetable__lesson-wrapper"
                                role="button"
                                onClick={() => lesson && lesson.id && toggleOpenLesson(lesson.id)}
                                onKeyDown={() => lesson && lesson.id && toggleOpenLesson(lesson.id)}
                                tabIndex={-1}
                            >
                                <span>
                                  <span className="box">
                                    {isOpen ? (
                                        <i className="bx bx-chevron-up" />
                                    ) : (
                                        <i className="bx bx-chevron-down" />
                                    )}
                                  </span>
                                    {lesson_index + 1}. {lesson.title}{' '}
                                </span>

                                {lesson.duration && (
                                    <div className="course-timetable__duration">
                                        <MetaTag className="meta-tag--red">{lesson.duration}</MetaTag>
                                    </div>
                                )}
                            </div>
                        </h3>

                        {isOpen && (
                            <CourseTimetableTopicList
                                topics={(lesson?.topics || [])}
                                courseId={course.id as number}
                                lessonId={lesson.id as number}
                                activeTopicId={topicId}
                                preview={preview}
                            />
                        )}
                    </li>
                );
            })}
        </ul>
  );
};

export default CourseTimetable;
