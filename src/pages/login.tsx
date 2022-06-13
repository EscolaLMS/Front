import { useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";

import { LoginForm, ResetPasswordForm } from "@escolalms/components";
import { toast } from "react-toastify";
import { t } from "i18next";

const Login = () => {
  const { search } = useLocation();
  const { user, socialAuthorize } = useContext(EscolaLMSContext);
  const [view, setView] = useState<
    "login" | "forgotPassword" | "register" | "success"
  >("login");

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
    <Layout metaTitle={t("LoginAndRegister")}>
      <div className="profile-authentication-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              {view === "login" ? (
                <LoginForm
                  onResetPasswordLink={() => setView("forgotPassword")}
                  onRegisterLink={() => history.push("/register")}
                  mobile={isMobile}
                />
              ) : (
                <ResetPasswordForm
                  mobile={isMobile}
                  backToLogin={() => setView("login")}
                  onRegisterLink={() => history.push("/register")}
                  return_url="#/reset-password"
                  onFirstStepSuccess={() =>
                    toast.success(t<string>("LoginPage.ForgotSuccess"))
                  }
                  onFirstStepError={() =>
                    toast.error(t<string>("UnexpectedError"))
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
