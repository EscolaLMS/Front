import React, { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { API } from '@escolalms/sdk/lib';
import TopProgress from "@/components/Common/TopProgress";
import { useTranslation } from "react-i18next";
import "./index.scss";
import LangButton from "@/components/Common/LangButton";

const CourseNavbar = () => {
  const {
    program,
    courseProgress,
  } = useContext(EscolaLMSContext);

  // const brandLogo = 'http://localhost:3000/images/logo.svg'; // TODO
  const brandLogo = ''; // TODO

  const { t } = useTranslation();

  const { lessonID: lessonId } = useParams<{ lessonID?: string; topicID?: string }>();

  const lesson = useMemo(
    () => program.value?.lessons.find((lesson: API.Lesson) => lesson.id === Number(lessonId)),
    [program, lessonId],
  );

  const progress = Math.round((courseProgress(Number(program.value?.id)) || 0) * 100);

  // React.useEffect(() => {
  //   let elementId = document.getElementById("navbar");
  //   document.addEventListener("scroll", () => {
  //     if (window.scrollY > 170) {
  //       elementId.classList.add("is-sticky");
  //     } else {
  //       elementId.classList.remove("is-sticky");
  //     }
  //   });
  //   window.scrollTo(0, 0);
  // });

  // find lesson & topic

  return (
    <div id="navbar" className="course-navbar">
      <TopProgress progress={progress} />

      <div className="course-navbar__wrapper">
        <div className="course-navbar__header">
          {
            // @ts-ignore TODO remove when brandLogo will connect to api
            (brandLogo && brandLogo !== '') && (
              <Link to="/" className="course-navbar__logo">
                <img src={brandLogo} alt="logo"/>
              </Link>
          )}

          <div className="course-navbar__title-wrapper">
            <h1 className="course-navbar__title">
              {program.value && program.value.title}
            </h1>

            {lesson && (
                <p className="course-navbar__subtitle">{lesson.title}</p>
            )}
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

export default CourseNavbar;
