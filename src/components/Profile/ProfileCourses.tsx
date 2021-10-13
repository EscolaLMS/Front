import React, { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Image from '@escolalms/sdk/lib/react/components/Image';
import { API } from '@escolalms/sdk/lib';
import CourseCard from '../CourseCard';

// type StartedCourse = API.CourseProgressItem & {
//   categories: API.CategoryListItem[];
// };

const UserCourse: React.FC<{
  course: API.Course;
  progress?: number;
  categories: API.CategoryListItem[];
}> = ({ course, progress, categories }) => {
  const percProgress = progress ? Math.round(progress * 100) : 0;

  return (
    <div className="single-courses-box">
      <div className="courses-wrapper">
        <div className="courses-image">
          <Link className="d-block image" to={`/kurs/${course.id}`}>
            {course.image_path && <Image path={course.image_path} srcSizes={[160, 106]} />}
          </Link>
        </div>

        <div className="courses-content">
          <div className="courses-categories">
            {categories &&
              categories.map((category) => (
                <Link to={`/materialy-szkoleniowe?free=true&category_id=${category.id}`}>
                  {category.name}
                </Link>
              ))}
          </div>

          <h3>
            <Link to={`/kurs/${course.id}`}>{course.title}</Link>
          </h3>
          <div className="courses-progress">
            <span>Ukończono</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percProgress}%` }}
              ></div>
              <div className="circle-wrapper" style={{ left: `${percProgress - 1}%`, top: '-3px' }}>
                <div className="circle"></div>
                <span> {percProgress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-continue">
        <Link to={`/kurs/${course.id}`}>Kontynuuj</Link>
      </div>
    </div>
  );
};

const ProfileCourses = () => {
  const { progress, fetchProgress } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progressMap = useMemo(() => {
    return progress.value?.reduce((acc: API.CourseProgressItem, curr: API.CourseProgressItem) => {
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
        course.course.base_price &&
        course.total_spent_time &&
        course.progress?.length > 0 &&
        course.course.base_price > 0 &&
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
        course &&
        course.course &&
        course.course.base_price &&
        course.course.base_price > 0 &&
        course.progress?.length > 0 &&
        course.total_spent_time === 0,
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
            <div className="profile-courses margin-bottom-50">
              <div className="">
                <h2>Dokończ rozpoczęty kurs</h2>
                <div className="row">
                  {startedCourses.map((item: any) => (
                    <div className="col-lg-12 col-md-12" key={item.course.id}>
                      <UserCourse
                        categories={item.categories}
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
            <div className="ended-courses available margin-bottom-50">
              <div className="">
                <h2>Dostępne kursy</h2>
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
            <div className="ended-courses">
              <div className="">
                <h2>Ukończone kursy</h2>
                <div className="row">
                  {finishedCourses.map((item: API.CourseProgressItem) => (
                    <div className="col-lg-4 col-md-12" key={item.course.id}>
                      <CourseCard
                        course={item.course}

                        // finishDate={item.finish_date}
                      />
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
