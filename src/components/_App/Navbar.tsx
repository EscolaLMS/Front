import React, { useCallback, useContext, useEffect } from "react";
import Link from "@/utils/ActiveLink";
// import { handleLogout } from "@/utils/auth";
import SearchForm from "./SearchForm";
import { EscolaLMSContext } from "@/escolalms/context";
import { useTranslation } from "react-i18next";

export const UserNavbarItem = ({ user, toggleNavbar, logout }) => {
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
              <Link href="/user/my-profile" activeClassName="active">
                <a
                  onClick={() => toggleNavbar && toggleNavbar()}
                  className="nav-link"
                >
                  My Profile
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/user/my-courses" activeClassName="active">
                <a
                  onClick={() => toggleNavbar && toggleNavbar()}
                  className="nav-link"
                >
                  My Courses
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/user/my-orders" activeClassName="active">
                <a
                  onClick={() => toggleNavbar && toggleNavbar()}
                  className="nav-link"
                >
                  My Orders
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/user/my-payments" activeClassName="active">
                <a
                  onClick={() => toggleNavbar && toggleNavbar()}
                  className="nav-link"
                >
                  My Payments
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    logout && logout();
                  }}
                >
                  Logout
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link href="/authentication">
          <a className="default-btn">
            <i className="flaticon-user"></i> Login/Register <span></span>
          </a>
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
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img src="/images/logo.svg" alt="logo" />
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
                {/* <SearchForm /> */}

                <ul className="navbar-nav">
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
                    <Link href="/pages">
                      <a className="nav-link">{t("Pages")}</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">{t("Contact Us")}</a>
                    </Link>
                  </li>
                </ul>

                <div className="others-option d-flex align-items-center">
                  {user && (
                    <div className="option-item">
                      <div className="cart-btn">
                        <Link href="/cart">
                          <a>
                            <i className="flaticon-shopping-cart"></i>{" "}
                            {cart?.value?.items?.length > 0 && (
                              <span>{cart?.value?.items?.length}</span>
                            )}
                          </a>
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
