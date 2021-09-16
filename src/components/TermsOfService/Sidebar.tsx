import React, { useContext, useEffect } from "react";
import Link from "@/utils/ActiveLink";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@/escolalms/context";
import Image from "@/escolalms/components/Image";

const Sidebar = () => {
  const { t } = useTranslation();
  const { settings, courses, fetchCourses } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchCourses({ per_page: 3 });
  }, []);

  return (
    <div className="widget-area">
      <div className="widget widget_insight">
        <ul>
          <li className="nav-item">
            <Link href="/" activeClassName="active">
              <a className="nav-link">{t("Home")}</a>
            </Link>
          </li>

          <li className="nav-item megamenu">
            <Link href="/courses">
              <a className="nav-link">{t("Courses")}</a>
            </Link>
          </li>

          <li className="nav-item megamenu">
            <Link href="/tutors">
              <a className="nav-link">{t("Tutors")}</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">{t("Contact Us")}</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="widget widget_recent_courses">
        <h3 className="widget-title">{t("RecentCourses")}</h3>
        {courses &&
          courses?.list?.data?.map((course) => (
            <div key={course.id} className="item">
              <Link href={`/courses/${course.id}`}>
                <a className="thumb">
                  <Image path={course.image_path} srcSizes={[380, 380 * 2]} />
                </a>
              </Link>
              <div className="info">
                <span>
                  {settings.currencies.default}{" "}
                  {(course.base_price / 100).toFixed(2)}
                </span>
                <h4 className="title usmall">
                  <Link href={`/courses/${course.id}`}>
                    <a>{course.title}</a>
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
