import React, { useContext } from 'react';

import { CoursesContext } from '../../components/Courses/CoursesContext';
import CourseCard from '../../components/CourseCard';
import Pagination from '../../components/Pagination';
import Preloader from '../../components/Preloader';
import { useTranslation } from 'react-i18next';
enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

const CoursesCollection: React.FC<{ className?: string; itemCol?: number }> = ({
  className = '',
  itemCol = 6,
}) => {
  const { setParams, courses, onlyFree } = useContext(CoursesContext);
  const { t } = useTranslation();
  if (courses.loading) {
    return <Preloader />;
  }

  if (!courses.list || !courses.list.data?.length) {
    return <div className="col-lg-8">{t('NoCourses')}</div>;
  }

  return (
    <div className={className}>
      <div className="escolalms-grid-sorting row align-items-center">
        <div className="col-lg-8 col-md-6 result-count">
          <p>
            {t('Found')} <span className="count">{courses.list.meta.total}</span>{' '}
            {t('FoundCourses', { count: courses.list.meta.total })}
          </p>
        </div>

        <div className="col-lg-4 col-md-6 ordering">
          <div className="select-box">
            <select
              className="form-control"
              onBlur={(e) => {
                const [order_by, order] = e.target.value.split('|');
                // @ts-ignore // TODO: fix any
                setParams((prevParams) => ({
                  ...prevParams,
                  order_by,
                  order: order as Order,
                  free: onlyFree ? true : prevParams?.free,
                }));
              }}
            >
              <option disabled>Sortuj według</option>
              <option value="title|ASC">Tytuł</option>
              <option value="created_at|ASC">Data dodania</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        {
          // @ts-ignore // TODO: fix any
          courses.list.data.map((course) => (
            <div className={`col-lg-${itemCol} col-md-6`} key={course.id}>
              <CourseCard course={course} />
            </div>
          ))
        }
        {courses.list.meta.total > courses.list.meta.per_page && (
          <Pagination
            total={courses.list.meta.total}
            perPage={courses.list.meta.per_page}
            currentPage={courses.list.meta.current_page}
            onPage={(i) =>
              // @ts-ignore // TODO: fix any
              setParams((prevParams) => ({
                ...prevParams,
                page: i,
                per_page: 6,
                free: true,
              }))
            }
          />
        )}
      </div>
    </div>
  );
};

export default CoursesCollection;
