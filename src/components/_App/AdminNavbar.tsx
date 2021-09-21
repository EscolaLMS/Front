import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import SearchForm from "./SearchForm";

const AdminNavbar = ({ user }) => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

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

  const isAdmin = user && user.role === "admin";
  const isTeacher = user && user.role === "teacher";

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="escolalms-nav admin-nav">
          <div className="container-fluid">
            <div className="navbar navbar-expand-lg navbar-light">
              <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                <img src={Logo} alt="logo" />
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
                <SearchForm />

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Home <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          eLearning School
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/index-2">
                          <a onClick={toggleNavbar} className="nav-link">
                            Vendor Certification Training
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/index-3"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Online Training School
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/index-4"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Distance Learning
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/index-5"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Language School
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/index-6"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Modern Schooling
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/index-7"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Yoga Training
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/index-8"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Health Coaching
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/index-9"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          Kindergaten
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/courses"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      Courses
                    </Link>
                  </li>

                  {((user && isTeacher) || (user && isAdmin)) && (
                    <li className="nav-item">
                      <Link to="/teacher/dashboard" className="nav-link">
                        Teacher Dashboard
                      </Link>
                    </li>
                  )}
                  {user && isAdmin && (
                    <li className="nav-item">
                      <Link to="/admin/dashboard" className="nav-link">
                        Dashboard
                      </Link>
                    </li>
                  )}
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <div className="cart-btn">
                      <Link to="/cart">
                        <i className="flaticon-shopping-cart"></i>{" "}
                        <span>3</span>
                      </Link>
                    </div>
                  </div>

                  <div className="option-item">
                    {user ? (
                      <div className="user-dropdown">
                        <Link
                          to="/"
                          onClick={(e) => e.preventDefault()}
                          className="default-btn"
                        >
                          <i className="flaticon-user"></i> {user.name}{" "}
                          <span></span>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/my-courses"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              My Courses
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/user/my-profile"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              My Profile
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/user/edit-profile"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Edit Profile
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/user/edit-password"
                              onClick={toggleNavbar}
                              className="nav-link"
                            >
                              Edit Password
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/"
                              className="nav-link"
                              onClick={(e) => {
                                e.preventDefault();
                                // handleLogout();
                              }}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <Link to="/authentication" className="default-btn">
                        <i className="flaticon-user"></i> Login/Register{" "}
                        <span></span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminNavbar;
