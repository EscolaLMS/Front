import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';

const Sidebar = () => {
  const { t } = useTranslation();
  const { settings, courses, fetchCourses } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchCourses({ per_page: 3 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="widget-area">
      <div className="widget widget_recent_courses">
        <h3 className="widget-title">{t('RecentCourses')}</h3>
        {courses &&
          courses?.list?.data?.map((course: API.Course) => (
            <div key={course.id} className="item">
              {course.image_path && (
                <Link to={`/courses/${course.id}`} className="thumb">
                  <Image path={course.image_path} srcSizes={[380, 380 * 2]} />
                </Link>
              )}
              <div className="info">
                {settings.currencies && course.base_price && (
                  <span>
                    {settings.currencies.default} {(course.base_price / 100).toFixed(2)}
                  </span>
                )}
                <h4 className="title usmall">
                  <Link to={`/courses/${course.id}`}>{course.title}</Link>
                </h4>
              </div>
              <div className="clear" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
