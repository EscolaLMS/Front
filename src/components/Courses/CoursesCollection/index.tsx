import React, { useContext } from 'react';
import { CoursesContext } from '@/components/Courses/CoursesContext';
import CourseCard from '@/components/CourseCard';
import Pagination from '@/components/Pagination';
import { useTranslation, Trans } from 'react-i18next';
import { API } from '@escolalms/sdk/lib';
import './index.scss';

enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

const CoursesCollection: React.FC<{ className?: string; itemCol?: number }> = ({
  className = '',
  itemCol = 6,
}) => {
  const { params, setParams, courses } = useContext(CoursesContext);
  const { t } = useTranslation();

  if (courses && (!courses.list || !courses.list.data?.length)) {
    return <div className="col-lg-8">{t('NoCourses')}</div>;
  }

  return (
    <div className={className}>
      <div className="escolalms-grid-sorting row align-items-center">
        <div className="col-lg-8 col-md-6 result-count">
          <p>
            <Trans
              i18nKey="FoundCourses"
              values={{ count: courses?.list?.meta.total || 0 }}
              components={{ strong: <span className="count" /> }}
            />
          </p>
        </div>

        <div className="col-lg-4 col-md-6 ordering">
          <div className="select-box">
            <select
              className="form-control"
              onBlur={(e) => {
                const [order_by, order] = e.target.value.split('|');

                setParams &&
                  setParams({
                    ...params,
                    order_by,
                    order: order as Order,
                  });
              }}
            >
              <option disabled>{t('SortBy')}</option>
              <option value="title|ASC">{t('Title')}</option>
              <option value="created_at|ASC">{t('DateAdded')}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        {courses &&
          courses.list &&
          courses.list.data.map((course: API.CourseListItem) => (
            <div className={`col-lg-${itemCol} col-md-6`} key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        {courses && courses.list && courses.list.meta.total > courses.list.meta.per_page && (
          <Pagination
            total={courses.list.meta.total}
            perPage={courses.list.meta.per_page}
            currentPage={courses.list.meta.current_page}
            onPage={(i) =>
              setParams &&
              setParams({
                ...params,
                page: i,
                per_page: 6,
              })
            }
          />
        )}
      </div>
    </div>
  );
};

export default CoursesCollection;
