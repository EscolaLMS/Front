import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import { EscolaLMSContext } from "@escolalms/connector/lib/context";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const { t, i18n } = useTranslation();

  const languages = ["pl", "en"].filter((lang) => lang !== i18n.language);
  const {
    program,
    user: userObj,
    logout,
    progress,
    courseProgress,
  } = useContext(EscolaLMSContext);

  const user = userObj.value;

  const { search } = useLocation();
  const params = search;
  const lessonId =
    params && params[0] ? params[0] : program?.value?.lessons[0]?.id;
  const topicId =
    params && params[1] ? params[1] : program?.value?.lessons[0]?.topics[0]?.id;

  const lesson = useMemo(
    () =>
      program.value?.lessons.find((lesson) => lesson.id === Number(lessonId)),
    [program, lessonId]
  );

  const topic = useMemo(
    () => lesson?.topics?.find((topic) => topic.id === Number(topicId)),
    [lesson, topicId]
  );

  const progProc = Math.round((courseProgress(program.value?.id) || 0) * 100);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  // find lesson & topic

  return (
    <React.Fragment>
      <div className="top-progress">
        <div
          className="top-progress-bar"
          style={{ width: `${progProc}%` }}
        ></div>
        <div className="top-progress-value">{progProc}%</div>
      </div>
      <div id="navbar" className="navbar-area">
        <div className="escolalms-nav course-nav">
          <div className="container-fluid">
            <div className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img src={Logo} alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <h3 className="course-navbar-title">
                  {program.value && program.value.title}.{" "}
                  {lesson && lesson.title}
                  {topic && (
                    <span>
                      <br />
                      <small>{topic.title}</small>
                    </span>
                  )}
                </h3>

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <i className="bx bx-chevron-left"></i>
                      {t("Back to website")}
                    </Link>
                  </li>
                </ul>

                {/* <SearchForm /> */}

                <span>{"  "} &nbsp;&nbsp;&nbsp;| </span>

                {languages.map((lang) => (
                  <button
                    className="lang-btn"
                    key={lang}
                    onClick={(e) => {
                      e.preventDefault();
                      i18n.changeLanguage(lang);
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
