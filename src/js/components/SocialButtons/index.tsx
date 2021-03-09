import React, { ReactElement } from "react";
import Icon from "../Icon";
import API from "../../services/api";

const SocialButtons: React.FC<{ isRegister?: boolean }> = ({
  isRegister,
}): ReactElement => {
  return (
    <div className="auth-page__social-btns">
      <a
        className="button blue social"
        href={`${API.url}/auth/social/facebook`}
      >
        <Icon name="facebook" />
        {isRegister ? "Register with facebook" : "Login with facebook"}
      </a>

      <a className="button red social" href={`${API.url}/auth/social/google`}>
        <Icon name="google" />
        {isRegister ? "Register with Google" : "Login with Google"}
      </a>
    </div>
  );
};

export default SocialButtons;
