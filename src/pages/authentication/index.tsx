import React, { useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import {
  LoginForm,
  RegisterForm,
  ResetPasswordForm,
} from "@escolalms/components";
import { toast } from "react-toastify";
import { t } from "i18next";
import styled from "styled-components";

const StyledContent = styled.div`
  .content-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .email-title {
      text-align: center;
    }

    .email-main-text {
      text-align: center;
      margin: 25px 0 85px;
      font-weight: 700;
      span {
        color: ${({ theme }) => theme.primaryColor};
      }
    }

    .email-help-text {
      margin: 0 auto 20px 0;
      ul {
        padding-left: 15px;
        margin-left: 0;
        li {
          font-size: 12px;
        }
      }
    }

    .back-text {
      margin: 0 auto 0 0;
      button {
        appearance: none;
        outline: none;
        border: none;
        background: transparent;
        text-decoration: underline;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
`;

const Authentication = () => {
  const { search } = useLocation();
  const { user, socialAuthorize } = useContext(EscolaLMSContext);
  const [view, setView] = useState<
    "login" | "forgotPassword" | "register" | "success"
  >("login");
  const [email, setEmail] = useState("");
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

  const EmailActivation = () => {
    return (
      <StyledContent>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="content-container">
                <Title className="email-title" level={3}>
                  Aby dokończyć proces rejestracji sprawdź swoją pocztę
                </Title>
                <Text className="email-main-text" size="16">
                  Wysłaliśmy wiadomość na adres <br /> <span>{email}</span> z
                  linkiem do aktywacji Twojego konta. <br /> Przejdź do poczty i
                  potwierdź swój adres e-mail.
                </Text>
                <Text className="email-help-text" size="14">
                  <strong>Nie dostałeś maila?</strong> <br />
                  <ul>
                    <li>Sprawdź folder SPAM</li>
                    <li>Sprawdź czy poprawnie wpisałeś adres e-mail</li>
                    <li>
                      Nie możemy dostarczyć wiadomości na Twój adres (zazwyczaj
                      przez firewalla lub filtry na poczcie)
                    </li>
                  </ul>
                </Text>
                <Text className="back-text" size="14">
                  <button type="button" onClick={() => setView("register")}>
                    Wpisz adres ponownie
                  </button>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </StyledContent>
    );
  };

  return (
    <Layout>
      {view !== "success" ? (
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
                    onRegisterLink={() => setView("register")}
                    return_url="#/reset-password"
                    onFirstStepSuccess={() =>
                      toast.success(t<string>("LoginPage.ForgotSuccess"))
                    }
                    onFirstStepError={() =>
                      toast.error(t<string>("UnexpectedError"))
                    }
                  />
                ) : (
                  //TODO: when confirmation page ready redirect to it on onSuccess props
                  <RegisterForm
                    mobile={isMobile}
                    onLoginLink={() => setView("login")}
                    onSuccess={() => setView("success")}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmailActivation />
      )}
    </Layout>
  );
};

export default Authentication;
