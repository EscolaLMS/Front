import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { EscolaLMSContext } from "@/escolalms/context";
import Image from "@/escolalms/components/Image";
import { useTranslation } from "react-i18next";

export const CourseCard: React.FC<{ course: API.Course }> = ({ course }) => {
  const { settings } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  return (
    <div className="single-courses-box">
      <div className="courses-image">
        {course.image_path && (
          <Link href={`/courses/${course.id}`}>
            <a className="d-block image">
              <Image path={course.image_path} srcSizes={[380, 380 * 2]} />
            </a>
          </Link>
        )}
        <a href="#" className="fav">
          <i className="flaticon-heart"></i>
        </a>
        <div className="price shadow">
          {course.base_price === 0
            ? t("FREE")
            : `${settings?.currencies?.default} ${(
                course.base_price / 100
              ).toFixed(2)}`}
        </div>
      </div>
      <div className="courses-content">
        {course.author && (
          <div className="course-author d-flex align-items-center">
            {course.author.path_avatar && (
              <Image
                path={course.author.path_avatar}
                srcSizes={[35, 35 * 2]}
                className="rounded-circle"
              />
            )}
            <span>
              {course.author.first_name} {course.author.last_name}
            </span>
          </div>
        )}

        <h3>
          <Link href={`/courses/${course.id}`}>
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
              <i className="flaticon-agenda"></i> {course.lessons_count}{" "}
              {t("Lesson", { count: course.lessons_count })},{" "}
              {course.topic_count} {t("Topic", { count: course.topic_count })}
            </li>
          )}
          {course.users_count > 0 && (
            <li>
              <i className="flaticon-people"></i> {course.users_count}{" "}
              {t("Student", { count: course.users_count })}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
