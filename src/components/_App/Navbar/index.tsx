import React, { useContext, useEffect } from "react";
import Logo from "../../../images/logo-orange.svg";
import ExampleAvatar from "../../../images/example-avatar.png";
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
import { Button } from "@escolalms/components";

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
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .logo-container {
    min-width: 150px;
    max-width: 150px;
    margin-right: 30px;

    @media (max-width: 1200px) {
      min-width: 100px;
      max-width: 100px;
    }

    img {
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
        min-width: 250px;
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
      margin: 0 85px 0 80px;
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
`;

const CustomMobileMenuItem = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  display: flex !important;
  padding: 0 !important;
  margin: 0 !important;
`;

const Navbar = () => {
  const { i18n, t } = useTranslation();

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
  useEffect(() => {
    user && fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const menuItems = [
    {
      title: (
        <Text style={{ margin: 0, padding: 0 }}>
          {t("Header.BrowsePlaceholder")}
        </Text>
      ),
      key: "menuItem1",
      children: [
        {
          title: (
            <Link to="/">
              <Text>{t("Menu.HomePage")}</Text>
            </Link>
          ),
          key: "submenu-1",
        },
        {
          title: <Link to="/courses">{t("Menu.Courses")}</Link>,
          key: "submenu-2",
        },
        {
          title: <Link to="/tutors">{t("Menu.Tutors")}</Link>,
          key: "submenu-3",
        },
      ],
    },
    {
      title: <Text style={{ margin: 0, padding: 0 }}>{t("Menu.Me")}</Text>,
      key: "menuItem2",
      children: [
        {
          title: <Link to="/user/my-profile">{t("Menu.Profile")}</Link>,
          key: "submenu-1",
        },
        {
          title: <Link to="/user/my-profile">{t("Menu.Courses")}</Link>,
          key: "submenu-2",
        },
        {
          title: <Link to="/user/my-orders">{t("Menu.Orders")}</Link>,
          key: "submenu-3",
        },
        {
          title: (
            <Link to="/user/my-notifications">{t("Menu.Notifications")}</Link>
          ),
          key: "submenu-4",
        },
        {
          title: (
            <Button onClick={() => logout().then(() => history.push("/"))}>
              Wyloguj
            </Button>
          ),
          key: "submenu-5",
        },
      ],
    },
    {
      title: user ? (
        <CustomMobileMenuItem>
          <Link to="/user/my-profile">
            {user?.first_name} {user?.last_name}
          </Link>
        </CustomMobileMenuItem>
      ) : (
        <Link to="/authentication">
          <Text style={{ margin: 0, padding: 0 }}>
            {t("Menu.LoginRegister")}
          </Text>
        </Link>
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
          }}
          menuItems={menuItems}
        />
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <img src={settings?.value?.global?.logo || Logo} alt="" />
          </Link>
        </div>
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
                placeholder={t("Menu.Profile")}
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

          {user?.id ? (
            <div className="user-container">
              <Link to="/user/my-profile" className="user-details">
                <Text className="name">
                  <strong>
                    {user?.first_name} {user?.last_name}
                  </strong>
                </Text>
                <Avatar
                  src={user?.avatar || ExampleAvatar}
                  alt={user?.first_name}
                  size={"small"}
                />
              </Link>
            </div>
          ) : (
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
              >
                {cart.value && cart.value.items?.length > 0 && (
                  <span>{cart.value.items.length}</span>
                )}{" "}
                <HeaderCard mode={theme.mode} />
              </button>
            </div>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
