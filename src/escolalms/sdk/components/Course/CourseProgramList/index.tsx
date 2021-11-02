import React from 'react';
import { API } from '@escolalms/sdk/lib';
import { useTranslation } from 'react-i18next';
import { getTopicType } from '@/escolalms/sdk/utils/helpers';

// TODO: duplicated (merge into CourseTimetable)
const CourseProgramList: React.FC<{
  program: API.Lesson[];
  onPreview?: (topic: API.Topic) => void;
}> = ({ program, onPreview = null }) => {
  const { t } = useTranslation();

  return (
    <div className="courses-curriculum">
      {program.map((lesson, lesson_index) => {
        return (
          <React.Fragment key={lesson.id}>
            <h3 className="d-flex justify-content-between align-items-center">
              <span>
                <small>{lesson_index + 1}. </small> {lesson.title}
              </span>
              <div className="courses-meta">
                {lesson.duration && <span className="duration">{lesson.duration}</span>}
              </div>
            </h3>
            <ul>
              {lesson?.topics?.map((topic, topic_index) => {
                return (
                  <li key={topic.id}>
                    <div className="d-flex justify-content-between align-items-center anchor">
                      <span className="courses-name">
                        <small>
                          {lesson_index + 1}.{topic_index + 1}{' '}
                        </small>
                        {topic.title}
                      </span>
                      <div className="courses-meta">
                        {topic.topicable_type && (
                          <span className="questions">
                            {topic &&
                              topic.topicable_type &&
                              t(`${getTopicType(topic.topicable_type)}`)}
                          </span>
                        )}
                        {topic.preview ? (
                          <span
                            className="status preview"
                            onClick={(e) => {
                              e.preventDefault();
                              onPreview && onPreview(topic);
                            }}
                            onKeyDown={(e) => {
                              e.preventDefault();
                              onPreview && onPreview(topic);
                            }}
                            role="button"
                            tabIndex={-1}
                          >
                            {t('Preview')}
                          </span>
                        ) : (
                          <span className="status locked">
                            <i className="flaticon-password" />
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CourseProgramList;
