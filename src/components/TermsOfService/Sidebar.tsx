import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/connector/lib/context";
import Image from "@escolalms/connector/lib/components/Image";

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
            {/* activeClassName="active */}
            <Link to="/" className="nav-link">
              {t("Home")}
            </Link>
          </li>

          <li className="nav-item megamenu">
            <Link to="/courses" className="nav-link">
              {t("Courses")}
            </Link>
          </li>

          <li className="nav-item megamenu">
            <Link to="/tutors" className="nav-link">
              {t("Tutors")}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              {t("Contact Us")}
            </Link>
          </li>
        </ul>
      </div>

      <div className="widget widget_recent_courses">
        <h3 className="widget-title">{t("RecentCourses")}</h3>
        {courses &&
          courses?.list?.data?.map((course) => (
            <div key={course.id} className="item">
              <Link to={`/courses/${course.id}`} className="thumb">
                <Image path={course.image_path} srcSizes={[380, 380 * 2]} />
              </Link>
              <div className="info">
                <span>
                  {settings.currencies.default}{" "}
                  {(course.base_price / 100).toFixed(2)}
                </span>
                <h4 className="title usmall">
                  <Link to={`/courses/${course.id}`}>{course.title}</Link>
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
