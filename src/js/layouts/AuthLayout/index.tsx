import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../images/logo.svg";

import Icon from "../../components/Icon";

import Image from "../../components/Image";

import "./index.scss";

const AuthLayout: React.FC<{ hideCloseButton?: boolean }> = ({
  children,
  hideCloseButton,
}): ReactElement => {
  return (
    <article className="auth-page">
      <div className="auth-logo">
        <Link className="logo" to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
        {!hideCloseButton && (
          <Link className="close" to={"/"}>
            <Icon name="close" />
          </Link>
        )}
      </div>

      <div className="auth-page__wrapper">
        <div className="auth-page__img-wrapper"></div>
        {children}
      </div>
    </article>
  );
};

export default AuthLayout;
