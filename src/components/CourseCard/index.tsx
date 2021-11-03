import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { API } from '@escolalms/sdk/lib';
import { useTranslation } from 'react-i18next';

import './index.scss';
import LmsBox from '@/components/Common/LmsBox';
import CourseAuthor from '@/components/CourseAuthor';
import CourseCardHeader from '@/components/CourseCard/CourseCardHeader';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';

export const CourseCard: React.FC<{ course: API.Course; finishDate?: Date | undefined }> = ({
  course,
}) => {
  const { settings } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const isFree = useMemo(
    () => course.base_price === 0 || course.base_price === undefined,
    [course.base_price],
  );
  const price = useMemo(
    () =>
      isFree
        ? t('FREE')
        : `${settings?.currencies?.default || ''} ${((course?.base_price || 0) / 100).toFixed(2)}`,
    [course.base_price, settings?.currencies?.default, isFree, t],
  );

  return (
    <LmsBox className={`course-card ${isFree ? 'course-card--free' : ''}`}>
      <CourseCardHeader
        className="course-card__header"
        course={course}
        imgSizes={[380, 380 * 2]}
        badge={price}
      />

      <LmsBox.Content className="course-card__content">
        {course.author && <CourseAuthor className="course-card__author" author={course.author} />}

        <LmsBox.Title className="course-card__title">
          <Link to={`/courses/${course.id}`}>{course.title}</Link>
        </LmsBox.Title>

        <LmsBox.SubTitle className="course-card__subtitle">{course.subtitle}</LmsBox.SubTitle>

        <div className="course-card__footer">
          <ul className="courses-box-footer d-flex justify-content-between align-items-center">
            {!!course.scorm_id && (
              <li>
                <i className="flaticon-agenda" /> SCORM
              </li>
            )}
            {!!course.lessons_count && (
              <li>
                <i className="flaticon-agenda" /> {course.lessons_count}{' '}
                {/*@ts-ignore TODO: remove when sdk will be fixed*/}
                {t('Lesson', { count: course.lessons_count })}, {course.topics_count || 0}{' '}
                {/*@ts-ignore TODO: remove when sdk will be fixed*/}
                {t('Topic', { count: course.topics_count || 0 })}
              </li>
            )}

            {!!course.users_count && (
              <li>
                <i className="flaticon-people" /> {course.users_count}{' '}
                {t('Student', { count: course.users_count })}
              </li>
            )}
          </ul>
        </div>
      </LmsBox.Content>
    </LmsBox>
  );
};

export default CourseCard;
