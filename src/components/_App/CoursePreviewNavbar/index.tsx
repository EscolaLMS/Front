import React from "react";
import LangButton from "@/components/Common/LangButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CoursePreviewNavbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="course-navbar">
      <div className="course-navbar__wrapper">
        <div className="course-navbar__header">
          <div className="course-navbar__title-wrapper">
            <h1 className="course-navbar__title">{t("CoursePreviewNavbar")}</h1>
          </div>
        </div>

        <div className="course-navbar__links">
          <Link to="/" className="course-navbar__close-link">
            <i className="bx bx-chevron-left" />
            {t("Back to website")}
          </Link>

          <LangButton className="course-navbar__lang-button" />
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewNavbar;
