import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { IRootState } from "./../../../interfaces/redux";
import { IAuthState } from "./../../../redux/auth/reducer";
import { IMenuItem } from "./../../../interfaces/menu";

import Icon from "../../Icon";

import menuItems from "./menuItems";

import "./index.scss";

const SidebarMenu: React.FC = (): ReactElement => {
  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state): IAuthState => state.Auth
  );

  return (
    <nav className="main-menu">
      <picture>
        {auth?.user?.avatar ? (
          <img src={auth.user.avatar} alt={auth.user.name} />
        ) : (
          <span className="letter">{auth.user.name.slice(0, 1)}</span>
        )}
      </picture>
      <ul>
        {menuItems.map((item: IMenuItem, index: number) => {
          return (
            <li key={index}>
              <NavLink to={item.link}>
                <Icon name={item.icon} />
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
