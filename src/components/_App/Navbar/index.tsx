import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../images/logo.svg';

import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { useTranslation } from 'react-i18next';
import { API } from '@escolalms/sdk/lib';
import LangButton from '@/components/Common/LangButton';
import routes from '@/components/Routes/routes';
import { format } from 'date-fns';
import './index.scss';

const UserNavbarItem: React.FC<{
  user?: API.UserItem;
  logout: () => void;
  toggleNavbar: () => void;
}> = ({ user, logout, toggleNavbar }) => {
  const { t } = useTranslation();
  return (
    <div className="option-item">
      {user ? (
        <div className="user-dropdown">
          <a
            onClick={(e) => e.preventDefault()}
            onKeyDown={(e) => e.preventDefault()}
            className="default-btn"
            href="#/profile"
            role="button"
          >
            <i className="flaticon-user" /> {user.first_name} <span></span>
          </a>

          <ul className="dropdown-menu">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/user/my-profile"
                onClick={() => toggleNavbar && toggleNavbar()}
              >
                {t('Navbar.MyProfile')}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/user/my-courses"
                onClick={() => toggleNavbar && toggleNavbar()}
              >
                {t('Navbar.MyCourses')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/user/my-orders"
                onClick={() => toggleNavbar && toggleNavbar()}
                className="nav-link"
              >
                {t('Navbar.MyOrders')}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/user/my-payments"
                onClick={() => toggleNavbar && toggleNavbar()}
                className="nav-link"
              >
                {t('Navbar.MyPayments')}
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
                {t('Navbar.Logout')}
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/authentication" className="default-btn">
          <i className="flaticon-user" /> {t('Login')}/{t('Register')}
        </Link>
      )}
    </div>
  );
};

const UserNotifications = () => {
  const { notifications, readNotify } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const getEventType = (event: string) => event.split('\\').pop() as String;

  return (
    <div className="option-item">
      <div className="user-dropdown">
        <div className="notify">
          <i className="bx bx-bell" />
          {!!notifications.list?.length && <span>{notifications.list.length}</span>}
        </div>

        <ul className="dropdown-menu notify-list">
          {notifications && notifications.list && notifications.list.length > 0 ? (
            notifications.list.map((notification: API.Notification) => {
              return (
                <li className="notify-list__item">
                  <div>
                    <p>{t(`Notifications.${getEventType(notification.event)}`)}</p>
                    <small>{format(new Date(notification.created_at), 'dd/MM/yyyy')}</small>
                  </div>
                  <button type="button" onClick={() => readNotify(notification.id)}>
                    <i className="bx bx-trash" />
                  </button>
                </li>
              );
            })
          ) : (
            <li className="notify-list__item">{t('Notifications.NoNotifications')}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation();

  const [menu, setMenu] = React.useState(true);

  const {
    user: userObj,
    logout,
    cart,
    fetchCart,
    fetchNotifications,
    settings,
  } = useContext(EscolaLMSContext);

  const customLogo = settings.global?.logo || Logo;

  const user = userObj.value;

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    user && fetchCart();
    user && fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="escolalms-nav">
          <div className="container-fluid">
            <div className="navbar navbar-expand-lg navbar-light">
              <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                <img src={customLogo} alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar" />
                <span className="icon-bar middle-bar" />
                <span className="icon-bar bottom-bar" />
              </button>

              <div className={classOne} id="navbarSupportedContent">
                {/* <SearchForm /> */}

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink exact={true} className="nav-link" to={routes.home}>
                      {t('Home')}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to={routes.courses}>
                      {t('Courses')}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to={routes.tutors}>
                      {t('Tutors')}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to={routes.contact}>
                      {t('Contact Us')}
                    </NavLink>
                  </li>
                </ul>

                <div className="others-option d-flex align-items-center">
                  {user && (
                    <div className="option-item">
                      <div className="cart-btn">
                        <Link to="/cart">
                          <i className="flaticon-shopping-cart" />{' '}
                          {(cart?.value?.items?.length || 0) > 0 && (
                            <span>{cart?.value?.items?.length}</span>
                          )}
                        </Link>
                      </div>
                    </div>
                  )}
                  {user && <UserNotifications />}
                  <UserNavbarItem user={user} toggleNavbar={toggleNavbar} logout={logout} />

                  <LangButton />
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
