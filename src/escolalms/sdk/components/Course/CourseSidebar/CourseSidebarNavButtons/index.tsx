import React, { useContext } from 'react';
import { API } from '@escolalms/sdk/lib';
import './index.scss';

import { useTranslation } from 'react-i18next';
import { useLessonProgram } from '@/escolalms/sdk/hooks/useLessonProgram';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react';

export const CourseSidebarNavButtons: React.FC<{
  course: API.CourseProgram;

  topicId: number;
  preview?: boolean;
}> = ({ course, topicId, preview = false }) => {
  const program = (course?.lessons || []).filter(
    (lesson) => lesson && lesson.topics && lesson?.topics?.length > 0,
  ) as API.Lesson[];
  const { getNextPrevTopic } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const { onNextTopicPreview } = useLessonProgram(
    course,
    preview ? `/courses/preview/` : `/course/`,
  );

  const prevTopic = getNextPrevTopic(Number(topicId), false);
  const nextTopic = getNextPrevTopic(Number(topicId), true);

  if (!course && !program) {
    return <React.Fragment />;
  }

  return (
    <div className="course-program-sidebar-nav-buttons">
      <button
        disabled={!prevTopic?.id}
        onClick={() => onNextTopicPreview(false)}
        type="button"
        className="btn btn-light"
        title={t('next topic')}
      >
        {t('prev')}
      </button>
      <button
        disabled={!nextTopic?.id}
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
