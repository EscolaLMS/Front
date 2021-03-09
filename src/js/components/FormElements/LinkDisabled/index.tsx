import React, { ReactElement, FunctionComponent, ReactNode } from "react";

import { Link } from "react-router-dom";

import "react-circular-progressbar/dist/styles.css";

const DisabledLink: FunctionComponent<{
  to: string;
  disabled: boolean;
  children: ReactNode;
}> = ({ disabled, to, children }): ReactElement => {
  return disabled ? (
    <span className="disabled-link">{children}</span>
  ) : (
    <Link className={disabled ? "disabled-link" : ""} to={to}>
      {children}
    </Link>
  );
};

export default DisabledLink;
