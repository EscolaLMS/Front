import React, { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { API } from '@escolalms/sdk/lib';
import CourseCard from '../CourseCard';
import { useTranslation } from 'react-i18next';
import LmsBox from "@/components/Common/LmsBox";
import CourseCardHeader from "@/components/CourseCard/CourseCardHeader";
import LmsProgressBar from "@/components/Common/LmsProgressBar";

const UserCourseCard: React.FC<{ course: API.Course; progress?: number }> = ({ course, progress = 0 }) => {
  return (
    <LmsBox className="user-course-card">
      <CourseCardHeader
          className="user-course-card__header"
          course={course}
          imgSizes={[300, 600, 900]}
          badge={`${progress} %`}
      />

      <LmsProgressBar className="user-course-card__progress" progress={progress} />

      <LmsBox.Content className="user-course-card__content">
        <LmsBox.Title className="user-course-card__title">
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </LmsBox.Title>

        <LmsBox.SubTitle className="user-course-card__subtitle">{course.subtitle}</LmsBox.SubTitle>
      </LmsBox.Content>
    </LmsBox>
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
        [curr?.course?.id ? curr.course.id : -1]: Math.round(
            (
                (curr?.progress || [])
                    .reduce((pAcc, pCurr) => pCurr.status === 1 ? pAcc + 1 : pAcc, 0) / curr.progress.length
            ) * 100
        ),
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
                      <UserCourseCard
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
