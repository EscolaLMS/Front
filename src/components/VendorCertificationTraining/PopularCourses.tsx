import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Image from '@escolalms/sdk/lib/react/components/Image';

import Preloader from '../Preloader';
import { API } from '@escolalms/sdk/lib';

const PopularCourses = () => {
  const { fetchCourses, courses, settings } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchCourses({ per_page: 3 });
  }, []);

  return (
    <div className="courses-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Go at your own pace</span>
          <h2>Popular Project Management Courses</h2>
          <p>
            Explore all of our courses and pick your suitable ones to enroll and start learning with
            us! We ensure that you will never regret it!
          </p>
        </div>

        <div className="row">
          {courses.list ? (
            courses.list.data.map((course: API.Course) => (
              <div className="col-lg-4 col-md-6" key={course.id}>
                <div className="single-courses-box without-boxshadow">
                  <div className="courses-image">
                    <Link className="d-block image" to={`courses/${course.id}`}>
                      <img src={course.image_url} alt="Course" />
                    </Link>

                    <div className="price shadow">
                      {course.base_price === 0 || course.base_price === undefined
                        ? 'FREE'
                        : `${settings?.currencies?.default} ${(course.base_price / 100).toFixed(
                            2,
                          )}`}
                    </div>
                  </div>
                  <div className="courses-content">
                    <div className="course-author d-flex align-items-center">
                      {course.author?.path_avatar && (
                        <Image
                          path={course.author?.path_avatar}
                          size={100}
                          className="rounded-circle"
                          alt="Course Shape"
                        />
                      )}

                      <span>
                        {course.author?.first_name} {course.author?.last_name}
                      </span>
                    </div>
                    <h3>
                      <Link to={`courses/${course.id}`}>{course.title}</Link>
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
                          <i className="flaticon-agenda"></i> {course.lessons_count} Lessons,{' '}
                          {course.topic_count} Topics
                        </li>
                      )}
                      {course.users_count && course.users_count > 0 && (
                        <li>
                          <i className="flaticon-people"></i> {course.users_count}
                          Students
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Preloader />
          )}

          <div className="col-lg-12 col-md-12">
            <div className="courses-info">
              <Link className="default-btn" to="/courses">
                <i className="flaticon-user"></i> View All Courses <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
