import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { EscolaLMSContext } from '@escolalms/sdk/lib/context';
import Image from '@escolalms/sdk/lib/components/Image';
import { API } from '@escolalms/sdk/lib';
import { useTranslation } from 'react-i18next';

export const CourseCard: React.FC<{ course: API.Course }> = ({ course }) => {
  const { settings } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  return (
    <div className="single-courses-box">
      <div className="courses-image">
        {course.image_path && (
          <Link to={`/courses/${course.id}`} className="d-block image">
            <Image path={course.image_path} srcSizes={[380, 380 * 2]} />
          </Link>
        )}

        <div
          className={`price shadow ${
            (course.base_price === 0 || course.base_price === undefined) && 'free'
          }`}
        >
          {course.base_price === 0 || course.base_price === undefined
            ? t('FREE')
            : `${settings?.currencies?.default} ${(course.base_price / 100).toFixed(2)}`}
        </div>
      </div>
      <div className="courses-content">
        {course.author && (
          <div className="course-author d-flex align-items-center">
            {course.author.path_avatar && (
              <Image
                path={course.author.path_avatar}
                srcSizes={[35, 35 * 2]}
                className="rounded-circle"
              />
            )}
            <span>
              {course.author.first_name} {course.author.last_name}
            </span>
          </div>
        )}

        <h3>
          <Link to={`/courses/${course.id}`}>{course.title}</Link>
        </h3>

        <p>{course.subtitle}</p>

        <ul className="courses-box-footer d-flex justify-content-between align-items-center">
          {course.scorm_id && (
            <li>
              <i className="flaticon-agenda"></i> SCORM
            </li>
          )}
          {course.lessons_count && course.lessons_count > 0 && (
            <li>
              <i className="flaticon-agenda"></i> {course.lessons_count}{' '}
              {t('Lesson', { count: course.lessons_count })}, {course.topic_count}{' '}
              {t('Topic', { count: course.topic_count })}
            </li>
          )}

          {course.users_count && course.users_count > 0 && (
            <li>
              <i className="flaticon-people"></i> {course.users_count}{' '}
              {t('Student', { count: course.users_count })}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
