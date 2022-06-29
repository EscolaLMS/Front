import { useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";

import { LoginForm, ResetPasswordForm } from "@escolalms/components";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledLoginPage = styled.div`
  min-height: calc(100vh - 583px);
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    padding-bottom: ${isMobile ? "50px" : "100px"};
  }
`;

const Login = () => {
  const { search, state } = useLocation<{ referrer?: string }>();
  const { user, socialAuthorize } = useContext(EscolaLMSContext);
  const [view, setView] = useState<
    "login" | "forgotPassword" | "register" | "success"
  >("login");
  const { t } = useTranslation();
  const history = useHistory();
  const token = search.split("?token=")[1];
  const referrer =
    (state && state.referrer) || search.split("?referrer=")[1] || "/";

  if (token) {
    socialAuthorize(token);
    setTimeout(() => {
      history.push(referrer);
    }, 1000);
  }

  if (!user.loading && !token && user.value) {
    history.push(referrer);
  }

  return (
    <Layout metaTitle={t("LoginAndRegister")}>
      <StyledLoginPage>
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
      </StyledLoginPage>
    </Layout>
  );
};

export default Login;
