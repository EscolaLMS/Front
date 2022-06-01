import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Image from "@escolalms/sdk/lib/react/components/Image";
import CourseCardBadge from "@/components/CourseCard/CourseCardBadge";
import { API } from "@escolalms/sdk/lib";

export const CourseCardHeader: React.FC<{
  className?: string;
  course: API.Course;
  imgSizes: number[];
  badge?: string;
}> = ({ className = "", course, imgSizes, badge }) => {
  return (
    <div className={`course-card-header ${className}`}>
      {course.image_path && (
        <Link
          to={`/courses/${course.id}`}
          className="course-card-header__image d-block"
        >
          <Image path={course.image_path} srcSizes={imgSizes} />
        </Link>
      )}

      <CourseCardBadge className="course-card-header__badge">
        {badge}
      </CourseCardBadge>
    </div>
  );
};

export default CourseCardHeader;
