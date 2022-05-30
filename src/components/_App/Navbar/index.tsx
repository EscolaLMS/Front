import React, { useContext, useEffect } from "react";
import Logo from "../../../images/logo-orange.svg";
import ExampleAvatar from "../../../images/example-avatar.png";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useTranslation } from "react-i18next";
import { Navigation } from "@escolalms/components/lib/components/molecules/Navigation/Navigation";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Search } from "@escolalms/components/lib/components/molecules/Search/Search";
import { Dropdown } from "@escolalms/components/lib/components/molecules/Dropdown/Dropdown";
import "./index.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

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
    min-width: 50px;
  }
  .menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    .search-container {
      min-width: 380px;
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
      @media (max-width: 1200px) {
        margin: 0 50px;
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
    column-gap: 10px;
  }
`;

const Navbar = () => {
  const { t } = useTranslation();
  const [menu, setMenu] = React.useState(true);
  const { user: userObj, config } = useContext(EscolaLMSContext);
  const user = userObj.value;
  // const platformVisibility =
  //   config?.escolalms_courses?.platform_visibility === "public" || false;
  // const fullVisibility =
  //   config?.escolalms_courses?.course_visibility === "show_all" || false;

  // useEffect(() => {
  //   user && fetchCart();
  //   user && fetchNotifications();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

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
            src: Logo,
            width: 50,
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
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="menu-container">
          <div className="search-container">
            <Search
              onSubmit={() => console.log("clicked")}
              onChange={() => console.log("clicked")}
              onSearch={() => console.log("clicked")}
              filterOptions={() => console.log("clicked")}
              placeholder="Szukaj"
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
          {user && (
            <div className="user-container">
              <Avatar
                src={user?.avatar_url || ExampleAvatar}
                alt={user?.first_name}
                size={"small"}
              />
              <Text>
                {user?.first_name} {user?.last_name}
              </Text>
            </div>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
