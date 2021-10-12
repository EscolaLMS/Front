import React, { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/connector/lib/context';
// import "./CourseNavbar.scss";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const {
    program,

    courseProgress,
  } = useContext(EscolaLMSContext);

  const { lessonID, topicID } = useParams<{ lessonID?: string; topicID?: string }>();

  const lessonId = lessonID;
  const topicId = topicID;

  const lesson = useMemo(
    () => program.value?.lessons.find((lesson) => lesson.id === Number(lessonId)),
    [program, lessonId],
  );

  const topic = useMemo(
    () => lesson?.topics?.find((topic) => topic.id === Number(topicId)),
    [lesson, topicId],
  );

  const progProc = Math.round((courseProgress(Number(program.value?.id)) || 0) * 100);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

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
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="course-nav">
          <div className="top-progress">
            <div className="top-progress-bar" style={{ width: `${progProc}%` }}></div>
          </div>
          <div className="navbar navbar-expand-lg navbar-light">
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
                {program.value && program.value.title}. {lesson && lesson.title}
                {topic && (
                  <span>
                    <br />
                    <small>{topic.title}</small>
                  </span>
                )}
              </h3>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Wyjdź z kursu{' '}
                <div className="close">
                  <i className="bx bx-x"></i>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
