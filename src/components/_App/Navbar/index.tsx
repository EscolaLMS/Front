import { useContext } from "react";
import Logo from "../../../images/logo-orange.svg";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Navigation } from "@escolalms/components/lib/components/molecules/Navigation/Navigation";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Dropdown } from "@escolalms/components/lib/components/molecules/Dropdown/Dropdown";
import { SearchCourses } from "@escolalms/components/lib/components/organisms/SearchCourses/SearchCourses";
import { Link, useHistory } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";
import { HeaderCard } from "../../../icons";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib";
import Container from "@/components/Container";
import { useLanguage } from "@/hooks/useLanguage";
import { useCart } from "@/hooks/useCart";
import routeRoutes from "@/components/Routes/routes";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? " rgba(35, 34, 37, 0.95)"
      : "rgba(255, 255, 255, 0.95)"};
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

    @media (max-width: 1200px) {
      &,
      & img {
        max-width: 100px;
      }
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
    width: 100%;

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
      margin: 0 24px;
      column-gap: 20px;
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
    column-gap: 28px;
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
        top: -1px;
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
          top: 0;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: ${({ theme }) => theme.primaryColor};
          color: ${({ theme }) => theme.white};
        }
      }
    }
  }
  .not-logged-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 10px;
    margin-right: 20px;
    .divider {
      height: 15px;
      width: 2px;
      background-color: #4a4a4a;
      opacity: 0.4;
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
  .user-avatar {
    margin-right: 16px;
  }
`;

const CustomMobileMenuItem = styled.div``;

const Navbar = () => {
  const { t } = useTranslation();
  const { languageObject, handleLanguageChange } = useLanguage();

  const { user: userObj, settings, logout } = useContext(EscolaLMSContext);
  const user = userObj.value;
  const history = useHistory();
  const theme = useTheme();
  const { cart } = useCart();

  const menuItems = [
    {
      title: (
        <Text noMargin bold>
          {t("Menu.Browse")}
        </Text>
      ),
      key: "menuItem1",
      children: [
        {
          title: (
            <Link to={routeRoutes.home}>
              <Text noMargin bold>
                {t("Menu.HomePage")}
              </Text>
            </Link>
          ),
          key: "submenu-1",
        },
        {
          title: (
            <Link to={routeRoutes.courses}>
              <Text noMargin bold>
                {t("Menu.Courses")}
              </Text>
            </Link>
          ),
          key: "submenu-2",
        },
        {
          title: (
            <Link to={routeRoutes.tutors}>
              <Text noMargin bold>
                {t("Menu.Tutors")}
              </Text>
            </Link>
          ),
          key: "submenu-3",
        },
        {
          title: (
            <Link to={routeRoutes.consultations}>
              <Text noMargin bold>
                {t("Menu.Consultations")}
              </Text>
            </Link>
          ),
          key: "submenu-4",
        },
        {
          title: (
            <Link to={routeRoutes.events}>
              <Text noMargin bold>
                {t("Menu.Events")}
              </Text>
            </Link>
          ),
          key: "submenu-5",
        },
        {
          title: (
            <Link to={routeRoutes.webinars}>
              <Text noMargin bold>
                {t("Menu.Webinars")}
              </Text>
            </Link>
          ),
          key: "submenu-6",
        },
        {
          title: (
            <Link to={routeRoutes.packages}>
              <Text noMargin bold>
                {t("Menu.Packages")}
              </Text>
            </Link>
          ),
          key: "submenu-7",
        },
      ],
    },
    {
      title: (
        <Text noMargin bold>
          {t("Menu.Me")}
        </Text>
      ),
      key: "menuItem2",
      children: [
        {
          title: (
            <Link to={routeRoutes.myProfile}>
              <Text noMargin bold>
                {t("Menu.Profile")}
              </Text>
            </Link>
          ),
          key: "submenu-1",
        },
        {
          title: (
            <Link to={routeRoutes.myOrders}>
              <Text noMargin bold>
                {t("Menu.Orders")}
              </Text>
            </Link>
          ),
          key: "submenu-3",
        },
        {
          title: (
            <Link to={routeRoutes.myNotifications}>
              <Text noMargin bold>
                {t("Menu.Notifications")}
              </Text>
            </Link>
          ),
          key: "submenu-4",
        },
      ],
    },
    {
      title: user ? (
        <CustomMobileMenuItem>
          <Link to={routeRoutes.myProfile}>
            <Text noMargin bold>
              {user?.first_name} {user?.last_name}
            </Text>
          </Link>
        </CustomMobileMenuItem>
      ) : (
        <Button
          mode={"secondary"}
          block
          onClick={() => history.push(routeRoutes.login)}
        >
          {t<string>("Header.Login")}
        </Button>
      ),
      key: "menuItem3",
    },
  ];

  if (isMobile) {
    return (
      <StyledHeader>
        <Navigation
          mobile
          logo={{
            src: settings?.value?.global?.logo || Logo,
            width: 150,
            height: 50,
            onClick: () => history.push(routeRoutes.home),
            alt: "Logo",
          }}
          menuItems={menuItems}
          search={
            <SearchCourses
              onItemSelected={(item) => history.push(`/courses/${item.id}`)}
              onInputSubmitted={(input) =>
                history.push(`/courses/?title=${input}`)
              }
            />
          }
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
        <Link to="/" aria-label={t("Go to the main page")}>
          <img
            src={settings?.value?.global?.logo || Logo}
            alt="Logo"
            className="logo"
          />
        </Link>
        <div className="menu-container">
          <div className="search-container">
            <SearchCourses
              onItemSelected={(item) => history.push(`/courses/${item.id}`)}
              onInputSubmitted={(input) =>
                history.push(`/courses/?title=${input}`)
              }
            />
          </div>
          <nav className="navigation">
            <Dropdown
              // placeholder={t("Menu.Browse")}
              // HACKED we need use default value with translation insted placeholder
              // placeholder prop doesn't re-render when we changing language
              // this bug is in all Dropdowns
              value={{ label: t("Menu.Browse"), value: "" }}
              onChange={(e) => {
                if (e.value !== "") {
                  history.push(e.value);
                }
              }}
              options={[
                { label: t("Menu.HomePage"), value: routeRoutes.home },
                { label: t("Menu.Courses"), value: routeRoutes.courses },
                { label: t("Menu.Tutors"), value: routeRoutes.tutors },
                {
                  label: t("Menu.Consultations"),
                  value: routeRoutes.consultations,
                },
                { label: t("Menu.Events"), value: routeRoutes.events },
                { label: t("Menu.Webinars"), value: routeRoutes.webinars },
                { label: t("Menu.Packages"), value: routeRoutes.packages },
              ]}
            />
            <Dropdown
              placeholder={t("Menu.Language")}
              onChange={(e) =>
                handleLanguageChange({
                  label: String(e.label),
                  value: e.value,
                })
              }
              options={[
                { label: "Polski", value: "pl" },
                { label: "English", value: "en" },
              ]}
              value={languageObject}
            />
            {user?.id && (
              <Dropdown
                placeholder={
                  user?.first_name && user?.last_name
                    ? `${user?.first_name} ${user?.last_name}`
                    : t("Menu.Profile")
                }
                options={[
                  {
                    label: t("Navbar.MyCourses"),
                    value: routeRoutes.myProfile,
                  },
                  { label: t("Navbar.MyOrders"), value: routeRoutes.myOrders },
                  {
                    label: t("Navbar.MyConsultations"),
                    value: routeRoutes.myConsultations,
                  },
                  {
                    label: t("Navbar.MyWebinars"),
                    value: routeRoutes.myWebinars,
                  },
                  {
                    label: t("Navbar.MyStationaryEvents"),
                    value: routeRoutes.myStationaryEvents,
                  },
                  {
                    label: t("Navbar.MyTasks"),
                    value: routeRoutes.myTasks,
                  },
                  {
                    label: t("Navbar.MyBookmarks"),
                    value: routeRoutes.myBookmarks,
                  },
                  {
                    label: t("MyProfilePage.Notifications"),
                    value: routeRoutes.myNotifications,
                  },
                  { label: t("Navbar.EditProfile"), value: routeRoutes.myData },
                  { label: t("Navbar.Logout"), value: routeRoutes.logout },
                ]}
                onChange={(e) =>
                  e.value !== "logout"
                    ? history.push(e.value)
                    : logout().then(() => history.push(routeRoutes.home))
                }
              />
            )}
          </nav>

          {!!user?.avatar && (
            <Link to={routeRoutes.myProfile}>
              <Avatar
                src={user.avatar}
                alt={user.first_name}
                size={"small"}
                className="user-avatar"
              />
            </Link>
          )}

          {!user?.id && (
            <div className="not-logged-container">
              <Link to={routeRoutes.login}>
                <Text>{t<string>("Header.Login")}</Text>
              </Link>
              <div className="divider" />
              <Link to={routeRoutes.register}>
                <Text>{t<string>("Header.Register")}</Text>
              </Link>
            </div>
          )}

          {user && (
            <div className="icons-container">
              <button
                type="button"
                className="cart-icon"
                onClick={() => history.push(routeRoutes.cart)}
                data-tooltip={String(cart.data?.items.length)}
                aria-label={t("CoursePage.GoToCheckout")}
              >
                {cart.data && cart.data.items?.length > 0 && (
                  <span>{cart.data.items.length}</span>
                )}{" "}
                <HeaderCard mode={theme.mode} />
              </button>
            </div>
          )}
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Navbar;
