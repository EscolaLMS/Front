import React from 'react';
import { API } from '@escolalms/sdk/lib';

import "./index.scss";
import CourseTimetable from "@/escolalms/sdk/components/Course/CourseTimetable";
import CourseSidebarNavButtons from "@/escolalms/sdk/components/Course/CourseSidebar/CourseSidebarNavButtons";

export const CourseSidebar: React.FC<{
  course: API.CourseProgram;
  lessonId: number;
  topicId: number;
  preview?: boolean;
}> = ({ course, lessonId, topicId, preview = false }) => {
  const program = (course?.lessons || []).filter((lesson) => lesson && lesson.topics && lesson?.topics?.length > 0) as API.Lesson[];

  if (!course && !program) {
    return <React.Fragment />;
  }

  return (
      <div className="course-program-sidebar">
        <CourseSidebarNavButtons
            course={course}
            lessonId={lessonId}
            topicId={topicId}
            preview={preview}
        />
        <CourseTimetable
            course={course}
            lessonId={lessonId}
            topicId={topicId}
            preview={preview}
        />
      </div>
  );
};

export default CourseSidebar;
