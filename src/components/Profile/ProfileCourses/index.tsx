import React, { useContext, useEffect, useMemo } from 'react';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { API } from '@escolalms/sdk/lib';
import CourseCard from '../../CourseCard';
import { useTranslation } from 'react-i18next';
import UserCourseCard from '@/components/Profile/UserCourseCard';
import './index.scss';
import Preloader from '@/components/Preloader';

const ProfileCourses = () => {
  const { progress, fetchProgress } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progressMap = useMemo(() => {
    return (progress.value || []).reduce((acc: object, curr: API.CourseProgressItem) => {
      return {
        ...acc,
        [curr.course.id ? curr.course.id : -1]: Math.round(
          ((curr.progress || []).reduce(
            (pAcc, pCurr) => (pCurr.status === 1 ? pAcc + 1 : pAcc),
            0,
          ) /
            curr.progress.length) *
            100,
        ),
      };
    }, {});
  }, [progress]);

  const startedCourses = useMemo(() => {
    return (progress.value || []).filter(
      (item: API.CourseProgressItem) =>
        item.total_spent_time &&
        item.progress.length > 0 &&
        item.total_spent_time > 0 &&
        !item.finish_date,
    );
  }, [progress]);

  const finishedCourses = useMemo(() => {
    return (progress.value || []).filter((course: API.CourseProgressItem) => course.finish_date);
  }, [progress]);

  const availableCourses = useMemo(() => {
    return (progress.value || []).filter(
      (course: API.CourseProgressItem) =>
        course && course.course && course.progress?.length > 0 && course.total_spent_time === 0,
    );
  }, [progress]);

  return (
    <div className="my-courses-page">
      <React.Fragment>
        {progress.loading ? (
          <Preloader />
        ) : (
          <React.Fragment>
            {!!startedCourses.length && (
              <div className="profile-courses profile-courses--with-data">
                <h2>{t('MyCoursesPage.Finish')}</h2>
                <hr />
                <div className="row courses-wrapper">
                  {startedCourses.map((item: API.CourseProgressItem) => (
                    <div className="col-lg-6 col-md-6 course-col" key={item.course.id}>
                      <UserCourseCard
                        course={item.course}
                        progress={
                          item.course.id && progressMap[item.course.id]
                            ? progressMap[item.course.id]
                            : 0
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!!availableCourses.length && (
              <div className="ended-courses available">
                <div>
                  <h2>{t('MyCoursesPage.Available')}</h2>
                  <div className="row">
                    {availableCourses.map((item: API.CourseProgressItem) => (
                      <div className="col-lg-4 col-md-12" key={item.course.id}>
                        <CourseCard course={item.course} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!!finishedCourses.length && (
              <div className="ended-courses">
                <div>
                  <h2>{t('MyCoursesPage.Finished')}</h2>
                  <div className="row">
                    {finishedCourses.map((item: API.CourseProgressItem) => (
                      <div className="col-lg-4 col-md-12" key={item.course.id}>
                        <CourseCard course={item.course} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
      {!(progress.value || []).length && (
        <div className="profile-courses no-data">
          <div className="">
            <p>{t('MyCoursesPage.NoData')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCourses;
