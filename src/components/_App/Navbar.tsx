import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";

import { EscolaLMSContext } from "@escolalms/connector/lib/context";
import { useTranslation } from "react-i18next";

export const UserNavbarItem = ({ user, toggleNavbar, logout }) => {
  const { t } = useTranslation();
  return (
    <div className="option-item">
      {user ? (
        <div className="user-dropdown">
          <Link href="/">
            <a onClick={(e) => e.preventDefault()} className="default-btn">
              <i className="flaticon-user"></i> {user.first_name} <span></span>
            </a>
          </Link>

          <ul className="dropdown-menu">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/user/my-profile"
                onClick={() => toggleNavbar && toggleNavbar()}
              >
                {t("Navbar.MyProfile")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/user/my-courses"
                onClick={() => toggleNavbar && toggleNavbar()}
              >
                {t("Navbar.MyCourses")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/user/my-orders"
                onClick={() => toggleNavbar && toggleNavbar()}
                className="nav-link"
              >
                {t("Navbar.MyOrders")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/user/my-payments"
                onClick={() => toggleNavbar && toggleNavbar()}
                className="nav-link"
              >
                {t("Navbar.MyPayments")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  logout && logout();
                }}
              >
                {t("Navbar.Logout")}
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/authentication" className="default-btn">
          <i className="flaticon-user"></i> Login/Register <span></span>
        </Link>
      )}
    </div>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = window.localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const languages = ["pl", "en"].filter((lang) => lang !== i18n.language);

  const [menu, setMenu] = React.useState(true);
  const {
    user: userObj,
    logout,
    cart,
    fetchCart,
  } = useContext(EscolaLMSContext);

  const user = userObj.value;

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    const listener = () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", listener);
    window.scrollTo(0, 0);
    return () => document.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    user && fetchCart();
  }, [user]);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="escolalms-nav">
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
                {/* <SearchForm /> */}

                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/">
                      {t("Home")}
                    </NavLink>
                  </li>

                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/courses">
                      {t("Courses")}
                    </NavLink>
                  </li>

                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/tutors">
                      {t("Tutors")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/pages">
                      {t("Pages")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      {t("Contact Us")}
                    </NavLink>
                  </li>
                </ul>

                <div className="others-option d-flex align-items-center">
                  {user && (
                    <div className="option-item">
                      <div className="cart-btn">
                        <Link to="/cart">
                          <i className="flaticon-shopping-cart"></i>{" "}
                          {cart?.value?.items?.length > 0 && (
                            <span>{cart?.value?.items?.length}</span>
                          )}
                        </Link>
                      </div>
                    </div>
                  )}

                  <UserNavbarItem
                    user={user}
                    toggleNavbar={toggleNavbar}
                    logout={logout}
                  />

                  {languages &&
                    languages.map((lang) => (
                      <button
                        className="lang-btn"
                        key={lang}
                        onClick={(e) => {
                          e.preventDefault();
                          i18n.changeLanguage(lang);
                          window.localStorage.setItem("lang", lang);
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
      </div>
    </React.Fragment>
  );
};

export default Navbar;
