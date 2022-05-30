import React, { useContext, useEffect } from "react";
import Logo from "../../../images/logo-orange.svg";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useTranslation } from "react-i18next";
import { Navigation } from "@escolalms/components/lib/components/molecules/Navigation/Navigation";
import "./index.scss";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Przeglądaj",
    key: "menuItem1",
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
    config,
  } = useContext(EscolaLMSContext);

  const user = userObj.value;

  const platformVisibility =
    config?.escolalms_courses?.platform_visibility === "public" || false;

  const fullVisibility =
    config?.escolalms_courses?.course_visibility === "show_all" || false;

  useEffect(() => {
    user && fetchCart();
    user && fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Navigation
      logo={{
        src: Logo,
        width: 50,
        height: 50,
      }}
      menuItems={menuItems}
    />
  );
};

export default Navbar;
