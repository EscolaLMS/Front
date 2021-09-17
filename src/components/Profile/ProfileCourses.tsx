import React, { useContext, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { EscolaLMSContext } from "../../escolalms/context";
import Image from "../../escolalms/components/Image";

const UserCourse: React.FC<{ course: API.Course; progress?: number }> = ({
  course,
  progress,
}) => {
  const percProgress = Math.round(progress * 100);
  return (
    <div className="single-courses-box">
      <div className="courses-image">
        <Link className="d-block image" to={`/courses/${course.id}`}>
          <Image path={course.image_path} srcSizes={[300, 600, 900]} />
        </Link>
        <a href="#" className="fav">
          <i className="flaticon-heart"></i>
        </a>
        <div className="price shadow">{percProgress} %</div>
      </div>
      <div className="courses-progress progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percProgress}%` }}
        >
          {percProgress}%
        </div>
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

  useEffect(() => {
    fetchProgress();
  }, []);

  const progressMap = useMemo(() => {
    return progress.value?.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.course.id]:
          curr.progress.reduce((pAcc, pCurr) => {
            return pCurr.status === 1 ? pAcc + 1 : pAcc;
          }, 0) / curr.progress.length,
      };
    }, {});
  }, [progress]);

  return (
    <div className="profile-courses pb-70">
      <h3 className="title">My Courses</h3>
      <div className="row">
        {progress.value && progress.value.length === 0 && (
          <p>
            You have no courses yet. Find one on{" "}
            <Link to="/courses">courses</Link> page.
          </p>
        )}
        {progress.value?.map((item) => (
          <div className="col-lg-4 col-md-6" key={item.course.id}>
            <UserCourse
              course={item.course}
              progress={progressMap[item.course.id]}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCourses;
