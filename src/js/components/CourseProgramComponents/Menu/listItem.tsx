import React, { ReactElement, FunctionComponent } from "react";

import DisabledLink from "../../FormElements/LinkDisabled/index";
import Icon from "../../Icon";

import "react-circular-progressbar/dist/styles.css";

const MenuElement: FunctionComponent<{
  active: boolean;
  completed: boolean;
  link: string;
  title: string;
}> = ({ active, completed, link, title }): ReactElement => {
  return (
    <li className={active ? "active" : ""}>
      <DisabledLink disabled={!completed && false} to={link}>
        <div className="icon-wrapper">
          <Icon
            color={completed ? "" : "light-gray"}
            name={completed ? "checkmark-after" : "circle"}
          />
        </div>
        <span className="menu__lecture-name">{title}</span>
      </DisabledLink>
    </li>
  );
};

export default MenuElement;
