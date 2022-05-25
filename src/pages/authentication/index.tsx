import React, { useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";
import "./index.scss";
import {
  LoginForm,
  RegisterForm,
  ResetPasswordForm,
} from "@escolalms/components";

const Authentication = () => {
  const { search } = useLocation();
  const { user, socialAuthorize } = useContext(EscolaLMSContext);
  const [view, setView] = useState<"login" | "forgotPassword" | "register">(
    "login"
  );
  const history = useHistory();
  const token = search.split("?token=")[1];

  if (token) {
    socialAuthorize(token);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  }

  if (!user.loading && !token && user.value) {
    history.push("/");
  }

  return (
    <Layout>
      <React.Fragment>
        <div className="profile-authentication-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                {view === "login" ? (
                  <LoginForm
                    onResetPasswordLink={() => setView("forgotPassword")}
                    onRegisterLink={() => setView("register")}
                    mobile={isMobile}
                  />
                ) : view === "forgotPassword" ? (
                  <ResetPasswordForm
                    mobile={isMobile}
                    backToLogin={() => setView("login")}
                  />
                ) : (
                  //TODO: when confirmation page ready redirect to it on onSuccess props
                  <RegisterForm
                    mobile={isMobile}
                    onLoginLink={() => setView("login")}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Authentication;
