import React, { useContext, useEffect, useMemo, useRef } from "react";
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
import { HeaderCard, HeaderUser } from "../../../icons";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components";
import { Container } from "react-grid-system";

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
  const { i18n, t } = useTranslation();
  const i18nRef = useRef(i18n.language);

  const {
    user: userObj,
    settings,
    cart,
    fetchCart,
    logout,
  } = useContext(EscolaLMSContext);
  const user = userObj.value;
  const history = useHistory();
  const theme = useTheme();

  const currentLanguageObject = useMemo(
    () =>
      i18n.language === "pl"
        ? { label: "Polski", value: "pl" }
        : { label: "English", value: "en" },
    [i18n.language]
  );

  useEffect(() => {
    user && fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (i18n.language !== i18nRef.current) return;
    const defaultLanguage = localStorage.getItem("defaultLanguage");

    if (!defaultLanguage) {
      const currentLanguage = currentLanguageObject;
      localStorage.setItem("defaultLanguage", JSON.stringify(currentLanguage));
    }

    defaultLanguage && i18n.changeLanguage(JSON.parse(defaultLanguage).value);
  }, [i18n, currentLanguageObject]);

  useEffect(() => {
    if (i18nRef.current === currentLanguageObject.value) return;
    i18nRef.current = currentLanguageObject.value;
    const currentLanguage = currentLanguageObject;
    localStorage.setItem("defaultLanguage", JSON.stringify(currentLanguage));
  }, [currentLanguageObject]);

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
            <Link to="/">
              <Text noMargin bold>
                {t("Menu.HomePage")}
              </Text>
            </Link>
          ),
          key: "submenu-1",
        },
        {
          title: (
            <Link to="/courses">
              <Text noMargin bold>
                {t("Menu.Courses")}
              </Text>
            </Link>
          ),
          key: "submenu-2",
        },
        {
          title: (
            <Link to="/tutors">
              <Text noMargin bold>
                {t("Menu.Tutors")}
              </Text>
            </Link>
          ),
          key: "submenu-3",
        },
        {
          title: (
            <Link to="/consultations">
              <Text noMargin bold>
                {t("Menu.Consultations")}
              </Text>
            </Link>
          ),
          key: "submenu-4",
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
            <Link to="/user/my-profile">
              <Text noMargin bold>
                {t("Menu.Profile")}
              </Text>
            </Link>
          ),
          key: "submenu-1",
        },
        {
          title: (
            <Link to="/user/my-orders">
              <Text noMargin bold>
                {t("Menu.Orders")}
              </Text>
            </Link>
          ),
          key: "submenu-3",
        },
        {
          title: (
            <Link to="/user/my-notifications">
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
          <Link to="/user/my-profile">
            <Text noMargin bold>
              {user?.first_name} {user?.last_name}
            </Text>
          </Link>
        </CustomMobileMenuItem>
      ) : (
        <Button mode={"secondary"} block onClick={() => history.push("/login")}>
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
            onClick: () => history.push("/"),
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
              placeholder={t("Menu.Browse")}
              onChange={(e) => history.push(e.value)}
              options={[
                { label: t("Menu.HomePage"), value: "/" },
                { label: t("Menu.Courses"), value: "/courses" },
                { label: t("Menu.Tutors"), value: "/tutors" },
                { label: t("Menu.Consultations"), value: "/consultations" },
              ]}
            />
            <Dropdown
              placeholder={t("Menu.Language")}
              onChange={(e) => i18n.changeLanguage(e.value)}
              options={[
                { label: "Polski", value: "pl" },
                { label: "English", value: "en" },
              ]}
            />
            {user?.id && (
              <Dropdown
                placeholder={
                  user?.first_name && user?.last_name
                    ? `${user?.first_name} ${user?.last_name}`
                    : t("Menu.Profile")
                }
                options={[
                  { label: t("Navbar.MyCourses"), value: "/user/my-profile" },
                  { label: t("Navbar.MyOrders"), value: "/user/my-orders" },
                  {
                    label: t("MyProfilePage.Notifications"),
                    value: "/user/my-notifications",
                  },
                  { label: t("Navbar.EditProfile"), value: "/user/my-data" },
                  { label: t("Navbar.Logout"), value: "logout" },
                ]}
                onChange={(e) =>
                  e.value !== "logout"
                    ? history.push(e.value)
                    : logout().then(() => history.push("/"))
                }
              />
            )}
          </nav>

          {!!user?.avatar && (
            <Link to="/user/my-profile">
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
              <Link to="/login">
                <Text>{t<string>("Header.Login")}</Text>
              </Link>
              <div className="divider" />
              <Link to="/register">
                <Text>{t<string>("Header.Register")}</Text>
              </Link>
            </div>
          )}

          {user && (
            <div className="icons-container">
              <button
                type="button"
                className="cart-icon"
                onClick={() => history.push("/cart")}
                data-tooltip={String(cart.value?.items.length)}
                aria-label={t("CoursePage.GoToCheckout")}
              >
                {cart.value && cart.value.items?.length > 0 && (
                  <span>{cart.value.items.length}</span>
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
