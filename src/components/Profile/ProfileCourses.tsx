import React, { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';
import CourseCard from '../CourseCard';
import { useTranslation } from 'react-i18next';

const UserCourse: React.FC<{ course: API.Course; progress?: number }> = ({ course, progress }) => {
  const percProgress = progress && Math.round(progress * 100);

  return (
    <div className="single-courses-box">
      <div className="courses-image">
        <Link to={`/courses/${course.id}`} className="d-block image">
          {course.image_path && <Image path={course.image_path} srcSizes={[300, 600, 900]} />}
        </Link>

        <div className="price shadow">{percProgress} %</div>
      </div>
      <div className="courses-progress progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percProgress}%` }}
        ></div>
      </div>
      <div className="courses-content">
        <h3>
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </h3>

        <p>{course.subtitle}</p>
      </div>
    </div>
  );
};

const ProfileCourses = () => {
  const { progress, fetchProgress } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progressMap = useMemo(() => {
    return progress.value?.reduce((acc: object, curr: API.CourseProgressItem) => {
      return {
        ...acc,
        [curr.course.id ? curr.course.id : -1]:
          curr.progress.reduce((pAcc, pCurr) => {
            return pCurr.status === 1 ? pAcc + 1 : pAcc;
          }, 0) / curr.progress.length,
      };
    }, {});
  }, [progress]);

  const startedCourses = useMemo(() => {
    return progress.value?.filter(
      (course: API.CourseProgressItem) =>
        course &&
        course.course &&
        course.total_spent_time &&
        course.progress?.length > 0 &&
        course.total_spent_time > 0 &&
        !course.finish_date,
    );
  }, [progress]);

  const finishedCourses = useMemo(() => {
    return progress.value?.filter((course: API.CourseProgressItem) => course.finish_date);
  }, [progress]);

  const availableCourses = useMemo(() => {
    return progress.value?.filter(
      (course: API.CourseProgressItem) =>
        course && course.course && course.progress?.length > 0 && course.total_spent_time === 0,
    );
  }, [progress]);

  return (
    <div className="my-courses-page">
      {progress.value && progress.value.length === 0 ? (
        <div className="profile-courses no-data">
          <div className="">
            <p>Nie masz kursów.</p>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {startedCourses && startedCourses?.length > 0 && (
            <div className="profile-courses pt-100 margin-bottom-50">
              <div className="">
                <h2>{t('MyCoursesPage.Finish')}</h2>
                <div className="row">
                  {startedCourses.map((item: any) => (
                    <div className="col-lg-12 col-md-12" key={item.course.id}>
                      <UserCourse
                        // categories={item.categories}
                        course={item.course}
                        // TODO fix this
                        //@ts-ignore
                        progress={
                          progressMap &&
                          item &&
                          item.course &&
                          item.course.id &&
                          // @ts-ignore
                          progressMap[item.course.id] &&
                          // @ts-ignore
                          typeof progressMap[item.course.id] === 'number'
                            ? // @ts-ignore
                              progressMap[item.course.id]
                            : 0
                        }
                      />{' '}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {availableCourses && availableCourses?.length > 0 && (
            <div className="ended-courses available margin-bottom-50 pt-70">
              <div className="">
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
          {finishedCourses && finishedCourses?.length > 0 && (
            <div className="ended-courses pt-70">
              <div className="">
                <h2>{t('MyCoursesPage.Finished')}</h2>
                <div className="row">
                  {finishedCourses.map((item: API.CourseProgressItem) => (
                    <div className="col-lg-4 col-md-12" key={item.course.id}>
                      <CourseCard course={item.course} finishDate={item.finish_date} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default ProfileCourses;
