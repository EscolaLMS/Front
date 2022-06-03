import React, { useContext, useEffect } from "react";
import Logo from "../../../images/logo-orange.svg";
import ExampleAvatar from "../../../images/example-avatar.png";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Navigation } from "@escolalms/components/lib/components/molecules/Navigation/Navigation";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Dropdown } from "@escolalms/components/lib/components/molecules/Dropdown/Dropdown";
import { Notifications } from "@escolalms/components/lib/components/molecules/Notifications/Notifications";
import { SearchCourses } from "@escolalms/components/lib/components/organisms/SearchCourses/SearchCourses";
import "./index.scss";
import { Link, useHistory } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";
import { HeaderCard, HeaderUser } from "../../../icons";
import { t } from "i18next";
import { getEventType } from "../../../utils";

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
      column-gap: 55px;
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
      .name {
        min-width: 100px;
        margin: 0;
        max-width: 100px;
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
  const {
    user: userObj,
    settings,
    notifications,
    fetchNotifications,
    cart,
    fetchCart,
  } = useContext(EscolaLMSContext);
  const user = userObj.value;
  const history = useHistory();
  const theme = useTheme();
  // const platformVisibility =
  //   config?.escolalms_courses?.platform_visibility === "public" || false;
  // const fullVisibility =
  //   config?.escolalms_courses?.course_visibility === "show_all" || false;

  // useEffect(() => {
  //   user && fetchCart();
  //   user && fetchNotifications();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  useEffect(() => {
    fetchNotifications();
    user && fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const menuItems = [
    {
      title: <Text style={{ margin: 0, padding: 0 }}>Przeglądaj</Text>,
      key: "menuItem1",
      children: [
        {
          title: (
            <Link to="/">
              <Text>Strona główna</Text>
            </Link>
          ),
          key: "submenu-1",
        },
        {
          title: <Link to="/courses">Kursy</Link>,
          key: "submenu-2",
        },
        {
          title: <Link to="/tutors">Trenerzy</Link>,
          key: "submenu-3",
        },
      ],
    },
    {
      title: <Text style={{ margin: 0, padding: 0 }}>Moje</Text>,
      key: "menuItem2",
      children: [
        {
          title: <Link to="/user/my-profile">Konto</Link>,
          key: "submenu-1",
        },
        {
          title: <Link to="/user/my-profile">Kursy</Link>,
          key: "submenu-2",
        },
        {
          title: <Link to="/user/my-orders">Zamówienia</Link>,
          key: "submenu-3",
        },
        {
          title: <Link to="/user/my-notifications">Notyfikacje</Link>,
          key: "submenu-4",
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
          <Text style={{ margin: 0, padding: 0 }}>Zaloguj/zarejestruj się</Text>
        </Link>
      ),
      key: "menuItem3",
    },
  ];

  const mappedNotifications = notifications.list
    ? notifications.list.map((item) => {
        return {
          id: item.id,
          unread: item.read_at ? true : false,
          description: "",
          title: t<string>(`Notifications.${getEventType(item.event)}`),
          dateTime: new Date(item.created_at),
        };
      })
    : [];

  if (isMobile) {
    return (
      <StyledHeader>
        <Navigation
          mobile
          logo={{
            src: settings?.global?.logo || Logo,
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
            <img src={settings?.global?.logo || Logo} alt="" />
          </Link>
        </div>
        <div className="menu-container">
          <div className="search-container">
            <SearchCourses
              onItemSelected={(item) => history.push(`/courses/${item.id}`)}
              onInputSubmitted={(input) => console.log("submitted", input)}
            />
          </div>
          <nav className="navigation">
            <Dropdown
              placeholder="Przeglądaj"
              onChange={(e) => history.push(e.value)}
              options={[
                { label: "Strona główna", value: "/" },
                { label: "Kursy", value: "/courses" },
                { label: "Instruktorzy", value: "/tutors" },
              ]}
            />
            <Dropdown
              placeholder="Moje"
              onChange={(e) => history.push(e.value)}
              options={[
                { label: "Konto", value: "/user/my-profile" },
                { label: "Kursy", value: "/user/my-profile" },
                { label: "Zamówienia", value: "/user/my-order" },
                { label: "Notyfikacje", value: "/user/my-notifications" },
              ]}
            />
          </nav>
          {user ? (
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
              <Link to="/authentication">
                <Text>{t<string>("Header.Login")}</Text>
              </Link>
              <div className="divider" />
              <Link to="/authentication">
                <Text>{t<string>("Header.Register")}</Text>
              </Link>
              <HeaderUser mode={theme.mode} />
            </div>
          )}
          <div className="icons-container">
            <button
              type="button"
              className="cart-icon"
              onClick={() => history.push("/cart")}
              data-tooltip={String(cart.value?.items.length)}
            >
              {cart.value && cart.value.items?.length > 0 && (
                <span>{cart.value.items.length}</span>
              )}
              <HeaderCard mode={theme.mode} />
            </button>
            <Notifications
              notifications={mappedNotifications}
              showAllLink="#/user/my-notifications"
            />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
