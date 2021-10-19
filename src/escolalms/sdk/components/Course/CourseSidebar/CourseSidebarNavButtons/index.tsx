import React, {useCallback, useContext} from 'react';
import { API } from '@escolalms/sdk/lib';
import { useHistory } from 'react-router-dom';
import "./index.scss";
import {EscolaLMSContext} from "@escolalms/sdk/lib/react/context";
import {useTranslation} from "react-i18next";

export const CourseSidebarNavButtons: React.FC<{
  course: API.CourseProgram;
  lessonId: number;
  topicId: number;
  preview?: boolean;
}> = ({ course, lessonId, topicId, preview = false }) => {
    const program = (course?.lessons || []).filter((lesson) => lesson && lesson.topics && lesson?.topics?.length > 0) as API.Lesson[];

    const { t } = useTranslation();
    const { getNextPrevTopic } = useContext(EscolaLMSContext);
    const history = useHistory();


    const onNextPrevTopic = useCallback(
        (next = true) => {
            const nextTopic = getNextPrevTopic(Number(topicId), next);

            nextTopic && history.push(preview
                ? `/courses/preview/${course.id}/${nextTopic?.lesson_id}/${nextTopic?.id}`
                : `/course/${course.id}/${nextTopic?.lesson_id}/${nextTopic?.id}`
            );
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [lessonId, topicId, program, course.id, history, preview]
    );

  if (!course && !program) {
    return <React.Fragment />;
  }

  return (
      <div className="course-program-sidebar-nav-buttons">
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
      </div>
  );
};

export default CourseSidebarNavButtons;
