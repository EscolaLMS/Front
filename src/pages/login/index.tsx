import { useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";

import { ResetPasswordForm } from "@escolalms/components/lib/components/organisms/ResetPasswordForm/ResetPasswordForm";
import { LoginForm } from "@escolalms/components/lib/components/organisms/LoginForm/LoginForm";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Container";
import routeRoutes from "@/components/Routes/routes";

const StyledLoginPage = styled.div`
  min-height: calc(100vh - 583px);
  display: flex;
  align-items: center;
  justify-content: center;
  /* TODO: export colors */
  background-color: #f8f8f8;
  @media (max-width: 991px) {
    padding-top: 100px;
    min-height: 100%;
    padding-bottom: 50px;
    /* TODO: make a wrapper for it */
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
        <Container>
          <Row justify={"center"}>
            <Col md={12}>
              {view === "login" ? (
                <LoginForm
                  onResetPasswordLink={() => setView("forgotPassword")}
                  onRegisterLink={() => history.push(routeRoutes.register)}
                  mobile={isMobile}
                />
              ) : (
                <ResetPasswordForm
                  mobile={isMobile}
                  backToLogin={() => setView("login")}
                  onRegisterLink={() => history.push(routeRoutes.register)}
                  return_url="#/reset-password"
                  onFirstStepSuccess={() =>
                    toast.success(t<string>("LoginPage.ForgotSuccess"))
                  }
                  onFirstStepError={() =>
                    toast.error(t<string>("UnexpectedError"))
                  }
                />
              )}
            </Col>
          </Row>
        </Container>
      </StyledLoginPage>
    </Layout>
  );
};

export default Login;
