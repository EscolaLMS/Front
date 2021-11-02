import React from 'react';
import { API } from '@escolalms/sdk/lib';
import './index.scss';

import { useTranslation } from 'react-i18next';
import { useLessonProgram } from '@/escolalms/sdk/hooks/useLessonProgram';

export const CourseSidebarNavButtons: React.FC<{
  course: API.CourseProgram;
  preview?: boolean;
}> = ({ course, preview = false }) => {
  const program = (course?.lessons || []).filter(
    (lesson) => lesson && lesson.topics && lesson?.topics?.length > 0,
  ) as API.Lesson[];

  const { t } = useTranslation();

  const { onNextTopicPreview } = useLessonProgram(
    course,
    preview ? `/courses/preview/` : `/course/`,
  );

  if (!course && !program) {
    return <React.Fragment />;
  }

  return (
    <div className="course-program-sidebar-nav-buttons">
      <button
        onClick={() => onNextTopicPreview(false)}
        type="button"
        className="btn btn-light"
        title={t('next topic')}
      >
        {t('prev')}
      </button>
      <button
        onClick={() => onNextTopicPreview(true)}
        type="button"
        className="btn btn-light"
        title={t('prev topic')}
      >
        {t('next')}
      </button>
    </div>
  );
};

export default CourseSidebarNavButtons;
