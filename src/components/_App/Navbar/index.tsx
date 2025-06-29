import { useContext, useEffect, useMemo, useState } from "react";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Navigation } from "@escolalms/components/lib/components/molecules/Navigation/Navigation";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { SearchCourses } from "@escolalms/components/lib/components/organisms/SearchCourses/SearchCourses";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";
import {
  HamburguerIcon,
  HeaderCard,
  HeaderNotification,
  ProfileIcon,
} from "../../../icons";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import Container from "@/components/Common/Container";
import routeRoutes from "@/components/Routes/routes";
import { DropdownMenu } from "@escolalms/components/lib/index";
import { DropdownMenuItem } from "@escolalms/components/lib/components/molecules/DropdownMenu/DropdownMenu";
import NotificationsDrawer from "@/components/Notifications/drawer";
import MobileDrawer from "@/components/_App/MobileDrawer";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import useDeleteAccountModal from "@/hooks/useDeleteAccount";
import DeleteAccountModal from "@/components/Authentication/DeleteAccountModal";
import { isMobilePlatform } from "@/utils/index";
import { metaDataKeys } from "@/utils/meta";
import { VITE_APP_PUBLIC_IMG_BUCKET_FOLDER } from "@/config/index";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: ${({ theme }) =>
    theme.mode === "dark" ? " rgba(35, 34, 37, 0.95)" : theme.white};
  backdrop-filter: blur(10px);
  padding: ${isMobile ? "11px 0" : "22px 0"};

  .logo-container {
    margin-right: 30px;

    &,
    & img {
      width: 100%;
      height: auto;
      max-width: 150px;
      max-height: 37px;
    }

    img {
      width: 100%;
      height: auto;
      transition: opacity 0.25s;
      &:hover {
        opacity: 0.55;
      }
    }
  }
  .menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    .search-container {
      min-width: 250px;
      @media (max-width: 1200px) {
        min-width: 180px;
      }
      @media (max-width: 991px) {
        min-width: 200px;
        margin-left: 15px;
      }
    }
    .navigation {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      gap: 10px;
      .Dropdown-root {
        min-width: 105px;
      }
      @media (max-width: 1366px) {
        margin: 0 50px;
      }
      @media (max-width: 1200px) {
        margin: 0 30px;
        column-gap: 30px;
      }
      @media (max-width: 991px) {
        margin: 0 30px;
        column-gap: 30px;
      }
      .Dropdown-menu {
        overflow-y: unset;
        max-height: unset;
      }
    }
  }
  .logo {
    width: auto;
    height: 37px;
  }
  .user-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .user-details {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      column-gap: 10px;
      margin-right: 21px;
      text-decoration: none;
      &:hover {
        p {
          color: ${({ theme }) => theme.primaryColor};
        }
      }
      .name {
        min-width: 100px;
        margin: 0;
      }
    }
  }
  .icons-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 5px;

    button {
      appearance: none;
      outline: none;
      border: none;
      background: transparent;
      padding: 0;
      margin: 0;
      cursor: pointer;

      &.cart-icon {
        position: relative;
        &.cart {
          svg {
            width: 25px;
          }
        }
        svg {
          path {
            transition: fill 0.25s;
          }
        }
        &:hover {
          svg {
            path {
              fill: ${({ theme }) => theme.primaryColor};
            }
          }
        }
        span {
          position: absolute;
          right: -5px;
          top: -1px;
          min-width: 20px;
          min-height: 20px;
          border-radius: 50%;
          background: ${({ theme }) => theme.secondaryColor};
          color: ${({ theme }) => theme.textColor};
          font-size: 13px;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .not-logged-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 6px;
    margin-right: 20px;
    button {
      font-weight: 400;
    }
    a {
      text-decoration: none;
      p {
        font-weight: 700;
        &:hover {
          color: ${({ theme }) => theme.primaryColor};
        }
      }
    }
  }
`;

const LastMobileMenuItem = styled.div`
  span {
    font-size: 13px;
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.textColor};
    margin-top: 15px;
    text-align: center;
    display: block;
    margin-bottom: 8px;
  }
`;

const SearchMobileWrapper = styled.div`
  padding: 0px 25px;
  margin-top: 18px;
  > div {
    width: auto;
  }
`;

const StyledMobileDrawerNavigation = styled.div`
  padding-top: 35px;
  ul {
    li {
      list-style: none;
      &:not(:last-of-type) {
        margin-bottom: 30px;
      }
      button {
        all: unset;
      }
      a,
      button {
        color: ${({ theme }) => theme.textColor};
        font-family: ${({ theme }) => theme.font};
        font-size: 16px;
        font-weight: 700;
      }
      .delete-account {
        color: ${({ theme }) => theme.errorColor};
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;

const Navbar = () => {
  const { t } = useTranslation();
  const {
    showModal,
    closeModal,
    loading,
    handleDeleteAccount,
    triggerDeleteAccount,
  } = useDeleteAccountModal();

  const {
    user: userObj,
    settings,
    logout,
    notifications,
    cart,
  } = useContext(EscolaLMSContext);
  const user = userObj?.value;
  const history = useHistory();
  const theme = useTheme();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);

  useEffect(() => {
    if (
      settings?.value?.onboarding?.isShown &&
      user &&
      user.id &&
      // @ts-ignore
      !user.isOnboardingCompleted
    ) {
      history.push(routeRoutes.onboarding);
    }
  }, [user, history, settings?.value?.onboarding?.isShown]);

  const displayCartItems = useMemo(() => {
    return cart?.value?.items?.length ?? 0;
  }, [cart]);

  const getProperLogoPath = useMemo(() => {
    const bucket = VITE_APP_PUBLIC_IMG_BUCKET_FOLDER.replace(/^\/|\/$/g, ""); // e.g. "/wellms" // -> "wellms"

    // Full link, e.g. "https://randomdomain/somefolder/folder/testimg.jpg"
    const url = settings.value.global.logo;

    // 1. Extract pathname: "/wellms/avatars/testimg.jpg"
    let relativePath = new URL(url).pathname;

    // 2. Remove the bucket prefix
    const bucketPrefix = `/${bucket}`; // "/wellms"
    if (relativePath.startsWith(bucketPrefix)) {
      relativePath = relativePath.slice(bucketPrefix.length);
    }

    // 3. Make sure the result begins with one leading slash
    if (!relativePath.startsWith("/")) {
      relativePath = "/" + relativePath;
    }

    return relativePath;
  }, [settings.value.global.logo]);

  const menuItems = [
    {
      title: (
        <Link to={routeRoutes.home}>
          <Text noMargin bold>
            {t("Menu.HomePage")}
          </Text>
        </Link>
      ),
      key: "menu-1",
    },
    {
      title: (
        <Link to={routeRoutes.courses}>
          <Text noMargin bold>
            {t("Menu.Courses")}
          </Text>
        </Link>
      ),
      key: "menu-2",
    },
    {
      title: (
        <Link to={routeRoutes.courses}>
          <Text noMargin bold>
            {t("Menu.Consultations")}
          </Text>
        </Link>
      ),
      key: "menu-3",
    },
    {
      title: (
        <Link to={routeRoutes.subscriptions}>
          <Text noMargin bold>
            {t("MyProfilePage.Subscriptions")}
          </Text>
        </Link>
      ),
      key: "menu-4",
    },
    {
      title: settings?.value?.config?.[metaDataKeys.termsPageMetaKey] && (
        <Link
          to={`/${settings?.value?.config?.[metaDataKeys.termsPageMetaKey]}`}
        >
          <Text noMargin bold>
            {t("Terms")}
          </Text>
        </Link>
      ),
      key: "menu-5",
    },

    {
      title: user ? null : (
        <LastMobileMenuItem>
          <Button
            mode={"primary"}
            block
            onClick={() => history.push(routeRoutes.login)}
          >
            {t<string>("Header.Login")}
          </Button>
          <span>{t("Login.NoAccount")}</span>
          <Button
            mode={"outline"}
            block
            onClick={() => history.push(routeRoutes.register)}
          >
            {t<string>("Login.Signup")}
          </Button>
        </LastMobileMenuItem>
      ),
      key: "menuItem3",
    },
  ];

  if (isMobile) {
    return (
      <StyledHeader>
        <Navigation
          mobile
          logo={
            <div className="logo-container">
              <Link to="/" aria-label={t("Go to the main page")}>
                <ResponsiveImage
                  path={getProperLogoPath || ""}
                  srcSizes={[100, 200, 300]}
                />
              </Link>
            </div>
          }
          cart={
            user?.id && !isMobilePlatform ? (
              <div className="icons-container">
                <button
                  type="button"
                  className="cart-icon cart"
                  onClick={() => history.push(routeRoutes.cart)}
                  data-tooltip={String(cart?.value?.items.length)}
                  aria-label={t("CoursePage.GoToCheckout")}
                >
                  <HeaderCard mode={theme.mode} />

                  {cart && (cart?.value?.items?.length ?? 0) > 0 ? (
                    <span>{displayCartItems}</span>
                  ) : null}
                </button>
              </div>
            ) : null
          }
          notification={
            user?.id ? (
              <div className="icons-container">
                <button
                  type="button"
                  className="cart-icon"
                  onClick={() => history.push(routeRoutes.myNotifications)}
                  data-tooltip={String(notifications.list?.meta.total)}
                  aria-label={t("CoursePage.Notifications")}
                >
                  <HeaderNotification mode={theme.mode} />
                  {notifications.list?.meta.total &&
                  notifications.list?.meta.total > 0 ? (
                    <span>{notifications.list?.meta.total}</span>
                  ) : null}
                </button>
              </div>
            ) : null
          }
          profile={
            user?.id ? (
              <div className="icons-container">
                <button
                  type="button"
                  className="cart-icon"
                  onClick={() => setShowMobileDrawer(true)}
                  aria-label={t("CoursePage.GoToCheckout")}
                >
                  {!!user?.avatar ? (
                    <Avatar
                      src={user.avatar}
                      alt={user.first_name}
                      size={"superSmall"}
                      className="user-avatar"
                    />
                  ) : (
                    <ProfileIcon mode={theme.mode} />
                  )}
                </button>
              </div>
            ) : null
          }
          menuItems={menuItems}
        />
        <SearchMobileWrapper>
          <SearchCourses
            onItemSelected={(item) => history.push(`/courses/${item.id}`)}
            onInputSubmitted={(input) =>
              history.push(`/courses/?title=${input}`)
            }
          />
        </SearchMobileWrapper>
        <MobileDrawer
          isOpen={showMobileDrawer}
          onClose={() => setShowMobileDrawer(false)}
          height={"62vh"}
        >
          <StyledMobileDrawerNavigation>
            <ul>
              <li>
                <NavLink to={routeRoutes.myProfile}>
                  {t("Navbar.MyCourses")}
                </NavLink>
              </li>
              <li>
                <NavLink to={routeRoutes.myConsultations}>
                  {t("MyProfilePage.MyConsultations")}
                </NavLink>
              </li>
              <li>
                <NavLink to={routeRoutes.myCertificates}>
                  {t("Navbar.MyCertificates")}
                </NavLink>
              </li>
              <>
                <li>
                  <NavLink to={routeRoutes.mySubscriptions}>
                    {t("MyProfilePage.Subscriptions")}
                  </NavLink>
                </li>
              </>
              <>
                <li>
                  <NavLink to={routeRoutes.myOrders}>
                    {t("Navbar.MyOrders")}
                  </NavLink>
                </li>
              </>
              <li>
                <NavLink to={routeRoutes.myData}>
                  {t("Navbar.EditProfile")}
                </NavLink>
              </li>
              {settings?.value?.config?.[metaDataKeys.termsPageMetaKey] && (
                <li>
                  <NavLink
                    to={`/${
                      settings?.value?.config?.[metaDataKeys.termsPageMetaKey]
                    }`}
                  >
                    {t("Terms")}
                  </NavLink>
                </li>
              )}
              <li>
                <button
                  onClick={() =>
                    logout().then(() => history.push(routeRoutes.home))
                  }
                >
                  {t("Navbar.Logout")}
                </button>
              </li>
              <li>
                <button
                  className="delete-account"
                  onClick={() => triggerDeleteAccount()}
                >
                  {t("MyProfilePage.DeleteAccount")}
                </button>
              </li>
            </ul>
          </StyledMobileDrawerNavigation>
        </MobileDrawer>
        <DeleteAccountModal
          closeModal={() => closeModal()}
          showModal={showModal}
          handleDeleteAccount={() => {
            history.push(routeRoutes.home);
            closeModal();
            setShowMobileDrawer(false);
            handleDeleteAccount();
          }}
          isLoading={loading}
        />
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="logo-container">
          <Link to="/" aria-label={t("Go to the main page")}>
            <ResponsiveImage
              path={getProperLogoPath || ""}
              srcSizes={[50, 100, 150]}
            />
          </Link>
        </div>
        <div className="search-container">
          <SearchCourses
            onItemSelected={(item) => history.push(`/courses/${item.id}`)}
            onInputSubmitted={(input) =>
              history.push(`/courses/?title=${input}`)
            }
          />
        </div>
        <div className="menu-container">
          <nav className="navigation">
            <DropdownMenu
              menuItems={[
                {
                  id: 1,
                  content: t("Menu.HomePage"),
                  redirect: routeRoutes.home,
                },

                {
                  id: 2,
                  content: t("Menu.Courses"),
                  redirect: routeRoutes.courses,
                },
                {
                  id: 3,
                  content: t("Menu.Consultations"),
                  redirect: routeRoutes.consultations,
                },
                {
                  id: 4,
                  content: t("MyProfilePage.Subscriptions"),
                  redirect: routeRoutes.subscriptions,
                },
                {
                  id: 5,
                  content: t("Terms"),
                  redirect: `/${
                    settings?.value?.config?.[metaDataKeys.termsPageMetaKey]
                  }`,
                },
                // {
                //   id: 3,
                //   content: t("Menu.Tutors"),
                //   redirect: routeRoutes.tutors,
                // },
                // {
                //   id: 4,
                //   content: t("Menu.Consultations"),
                //   redirect: routeRoutes.consultations,
                // },
                // {
                //   id: 5,
                //   content: t("Menu.Events"),
                //   redirect: routeRoutes.events,
                // },
                // {
                //   id: 6,
                //   content: t("Menu.Webinars"),
                //   redrect: routeRoutes.webinars,
                // },
                // {
                //   id: 7,
                //   content: t("Menu.Packages"),
                //   redirect: routeRoutes.packages,
                // },
              ]}
              onChange={(e: DropdownMenuItem) => {
                if (e.redirect && e.redirect !== "") {
                  history.push(e?.redirect);
                }
              }}
              child={
                <Button mode="icon" className="dropdown">
                  Menu <HamburguerIcon />
                </Button>
              }
            />
            {/* TODO: set this to admin panel and show it conditionally */}
            {/* <DropdownMenu
              menuItems={[
                {
                  id: "pl",
                  content: "Polski",
                },
                {
                  id: "en",
                  content: "English",
                },
              ]}
              onChange={(e: DropdownMenuItem) =>
                handleLanguageChange({
                  label: String(e.content),
                  value: String(e.id),
                })
              }
              child={
                <Button mode="icon" className="dropdown">
                  {t("Menu.Language")} <LanguageIcon mode={theme.mode} />
                </Button>
              }
            /> */}

            {user && (
              <div className="icons-container">
                <button
                  type="button"
                  className="cart-icon"
                  onClick={() => history.push(routeRoutes.cart)}
                  data-tooltip={String(cart?.value?.items.length ?? 0)}
                  aria-label={t("CoursePage.GoToCheckout")}
                >
                  <HeaderCard mode={theme.mode} />

                  {(cart?.value?.items?.length ?? 0) > 0 ? (
                    <span>{displayCartItems}</span>
                  ) : null}
                </button>
              </div>
            )}

            {user && (
              <div className="icons-container">
                <button
                  type="button"
                  className="cart-icon"
                  onClick={() => setShowNotifications(!showNotifications)}
                  data-tooltip={String(notifications.list?.meta.total)}
                  aria-label={t("CoursePage.GoToCheckout")}
                >
                  <HeaderNotification mode={theme.mode} />
                  {notifications.list?.meta.total &&
                  notifications.list?.meta.total > 0 ? (
                    <span>{notifications.list?.meta.total}</span>
                  ) : null}
                </button>
              </div>
            )}

            {user?.id && (
              <DropdownMenu
                menuItems={[
                  {
                    id: 1,
                    content: t("Navbar.MyProfile"),
                    redirect: routeRoutes.myOrders,
                  },
                  {
                    id: 2,
                    content: t("Navbar.MyCourses"),
                    redirect: routeRoutes.myProfile,
                  },

                  // {
                  //   id: 2,
                  //   content: t("Navbar.MyOrders"),
                  //   redirect: routeRoutes.myOrders,
                  // },
                  {
                    id: 3,
                    content: t("Navbar.MyConsultations"),
                    redirect: routeRoutes.myConsultations,
                  },
                  // {
                  //   id: 4,
                  //   content: t("Navbar.MyWebinars"),
                  //   redirect: routeRoutes.myWebinars,
                  // },
                  // {
                  //   id: 5,
                  //   content: t("Navbar.MyStationaryEvents"),
                  //   redirect: routeRoutes.myStationaryEvents,
                  // },
                  // {
                  //   id: 6,
                  //   content: t("Navbar.MyTasks"),
                  //   redrect: routeRoutes.myTasks,
                  // },
                  // {
                  //   id: 7,
                  //   content: t("Navbar.MyBookmarks"),
                  //   redirect: routeRoutes.myBookmarks,
                  // },
                  // {
                  //   id: 8,
                  //   content: t("Menu.Notifications"),
                  //   redirect: routeRoutes.myNotifications,
                  // },
                  // {
                  //   id: 9,
                  //   content: t("Navbar.EditProfile"),
                  //   redirect: routeRoutes.myData,
                  // },
                  {
                    id: 10,
                    content: t("Navbar.Logout"),
                    redirect: routeRoutes.logout,
                  },
                ]}
                onChange={(e: DropdownMenuItem) =>
                  e.redirect && e.redirect !== "logout"
                    ? history.push(e.redirect)
                    : logout().then(() => history.push(routeRoutes.home))
                }
                child={
                  <Button mode="icon" className="dropdown">
                    {!!user?.avatar ? (
                      <Avatar
                        src={user.avatar}
                        alt={user.first_name}
                        size={"superSmall"}
                        className="user-avatar"
                      />
                    ) : (
                      <ProfileIcon mode={theme.mode} />
                    )}
                  </Button>
                }
              />
            )}
          </nav>

          {!user?.id && (
            <div className="not-logged-container">
              <Button
                mode="secondary"
                onClick={() => history.push(routeRoutes.login)}
              >
                {t<string>("Header.Login")}
              </Button>

              <Button
                mode="secondary outline"
                onClick={() => history.push(routeRoutes.register)}
              >
                {t<string>("Header.Register")}
              </Button>
            </div>
          )}
        </div>{" "}
      </Container>
      <NotificationsDrawer
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
    </StyledHeader>
  );
};

export default Navbar;
