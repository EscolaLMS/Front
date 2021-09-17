import { EscolaLMSContext } from "../../escolalms/context";
import React, { ReactElement } from "react";
import { useContext } from "react";

const SocialButtons: React.FC<{ isRegister?: boolean }> = ({
  isRegister,
}): ReactElement => {
  const { apiUrl } = useContext(EscolaLMSContext);
  return (
    <div className="auth-page__social-btns">
      <a
        className="button blue social"
        href={`${apiUrl}/api/auth/social/facebook`}
      >
        {isRegister ? "Register with facebook" : "Login with facebook"}
      </a>

      <a
        className="button red social"
        href={`${apiUrl}/api/auth/social/google`}
      >
        {isRegister ? "Register with Google" : "Login with Google"}
      </a>
    </div>
  );
};

export default SocialButtons;
