import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { EscolaLMSContext } from "../../escolalms/context";
import Image from "../../escolalms/components/Image";
import Preloader from "../Preloader";

const PopularCourses = () => {
  const { fetchCourses, courses, settings } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchCourses({ pageSize: 3 });
  }, []);

  return (
    <div className="courses-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Go at your own pace</span>
          <h2>Popular Project Management Courses</h2>
          <p>
            Explore all of our courses and pick your suitable ones to enroll and
            start learning with us! We ensure that you will never regret it!
          </p>
        </div>

        <div className="row">
          {courses.list ? (
            courses.list.data.map((course) => (
              <div className="col-lg-4 col-md-6" key={course.id}>
                <div className="single-courses-box without-boxshadow">
                  <div className="courses-image">
                    <Link href={`courses/${course.id}`}>
                      <a className="d-block image">
                        <img src={course.image_url} alt="image" />
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="fav">
                        <i className="flaticon-heart"></i>
                      </a>
                    </Link>

                    <div className="price shadow">
                      {course.base_price === 0
                        ? "FREE"
                        : `${settings?.currencies?.default} ${(
                            course.base_price / 100
                          ).toFixed(2)}`}
                    </div>
                  </div>
                  <div className="courses-content">
                    <div className="course-author d-flex align-items-center">
                      {course.author?.path_avatar && (
                        <Image
                          path={course.author?.path_avatar}
                          size={100}
                          className="rounded-circle"
                          alt="image"
                        />
                      )}

                      <span>
                        {course.author?.first_name} {course.author?.last_name}
                      </span>
                    </div>
                    <h3>
                      <Link href={`courses/${course.id}`}>
                        <a>{course.title}</a>
                      </Link>
                    </h3>
                    <p>{course.subtitle}</p>
                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                      {course.scorm_id && (
                        <li>
                          <i className="flaticon-agenda"></i> SCORM
                        </li>
                      )}
                      {course.lessons_count > 0 && (
                        <li>
                          <i className="flaticon-agenda"></i>{" "}
                          {course.lessons_count} Lessons, {course.topic_count}{" "}
                          Topics
                        </li>
                      )}
                      {course.users_count > 0 && (
                        <li>
                          <i className="flaticon-people"></i>{" "}
                          {course.users_count}
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
              <Link href="/courses">
                <a className="default-btn">
                  <i className="flaticon-user"></i> View All Courses{" "}
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
