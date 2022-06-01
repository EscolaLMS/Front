import React, { useContext, useEffect } from "react";
import Logo from "../../../images/logo-orange.svg";
import ExampleAvatar from "../../../images/example-avatar.png";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Navigation } from "@escolalms/components/lib/components/molecules/Navigation/Navigation";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Search } from "@escolalms/components/lib/components/molecules/Search/Search";
import { Dropdown } from "@escolalms/components/lib/components/molecules/Dropdown/Dropdown";
import { Notifications } from "@escolalms/components/lib/components/molecules/Notifications/Notifications";
import "./index.scss";
import { Link, useHistory } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";
import { HeaderCard, HeaderUser } from "../../../icons";
import { t } from "i18next";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
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
      title: "Przeglądaj",
      key: "menuItem1",
      children: [
        {
          title: (
            <Link to="/">
              <Text>Item 1</Text>
            </Link>
          ),
          key: "submenu-1",
        },
        {
          title: <Link to="/">Item 2</Link>,
          key: "submenu-2",
        },
        {
          title: <Link to="/">Item 3</Link>,
          key: "submenu-3",
        },
        {
          title: <Link to="/">Item 4</Link>,
          key: "submenu-4",
        },
      ],
    },
    {
      title: "Przeglądaj",
      key: "menuItem1",
      children: [
        {
          title: (
            <Link to="/">
              <Text>Item 1</Text>
            </Link>
          ),
          key: "submenu-1",
        },
        {
          title: <Link to="/">Item 2</Link>,
          key: "submenu-2",
        },
        {
          title: <Link to="/">Item 3</Link>,
          key: "submenu-3",
        },
        {
          title: <Link to="/">Item 4</Link>,
          key: "submenu-4",
        },
      ],
    },
    {
      title: "Moje",
      key: "menuItem2",
      children: [
        {
          title: <Link to="/">Item 1</Link>,
          key: "submenu-1",
        },
        {
          title: <Link to="/">Item 2</Link>,
          key: "submenu-2",
        },
        {
          title: <Link to="/">Item 3</Link>,
          key: "submenu-3",
        },
        {
          title: <Link to="/">Item 4</Link>,
          key: "submenu-4",
        },
      ],
    },
  ];

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
            <Search
              onSubmit={() => console.log("clicked")}
              onChange={() => console.log("clicked")}
              onSearch={() => console.log("clicked")}
              filterOptions={() => console.log("clicked")}
              placeholder={t<string>("Header.Search")}
            >
              <div>Example search string 1</div>
              <div>Example search string 2</div>
              <div>Example search string 3</div>
            </Search>
          </div>
          <nav className="navigation">
            <Dropdown
              placeholder="Przeglądaj"
              options={[
                { label: "item1", value: "1" },
                { label: "item2", value: "2" },
                { label: "item3", value: "3" },
                { label: "item4", value: "4" },
                { label: "item5", value: "5" },
                { label: "item6", value: "6" },
              ]}
            />
            <Dropdown
              placeholder="Moje"
              options={[
                { label: "item1", value: "1" },
                { label: "item2", value: "2" },
                { label: "item3", value: "3" },
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
                  src={user?.avatar_url || ExampleAvatar}
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
              notifications={[
                {
                  id: "324241",
                  unread: true,
                  title: "Ostatni dzwonek na szkolenie BHP",
                  description:
                    "Już za tydzień upływa termin szkolenia BHP przy produkcji Big Mac Vege.",
                  dateTime: new Date(),
                },
                {
                  id: "324244",
                  unread: false,
                  title: "Masz do zrobienia kurs BHP",
                  description:
                    "Kursu BHP przy produkcji Big Mac Vege. Pamiętaj, że kurs jest obowiązkowy. Termin ukończenia upływa 31 marca 2022",
                  dateTime: new Date(Date.now() - 86400000),
                },
              ]}
              showAllLink="/"
            />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
