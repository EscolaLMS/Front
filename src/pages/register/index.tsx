import { useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Link, useHistory } from "react-router-dom";
import Layout from "@/components/_App/Layout";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { RegisterForm } from "@escolalms/components";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Col, Container, Row } from "react-grid-system";

const StyledRegisterPage = styled.div`
  min-height: calc(100vh - 500px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primaryColor}!important;
`;

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

const RegisterPage = () => {
  const { search } = useLocation();
  const { user, socialAuthorize } = useContext(EscolaLMSContext);
  const [view, setView] = useState<string>("");
  const [email] = useState("");
  const history = useHistory();
  const token = search.split("?token=")[1];
  const { t } = useTranslation();
  const fieldLabels = {
    "AdditionalFields.Privacy Policy": (
      <Text size="14">
        {t("AcceptCheckbox")}{" "}
        <StyledLink to="/privacy-policy">{t("PrivacyPolicy")}</StyledLink>
      </Text>
    ),
    "AdditionalFields.Terms of Service": (
      <Text size="14">
        {t("AcceptCheckbox")}{" "}
        <StyledLink to="/privacy-policy">{t("TermsOfService")}</StyledLink>
      </Text>
    ),
  };
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
        <Container>
          <Row justify={"center"}>
            <Col md={12}>
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
            </Col>
          </Row>
        </Container>
      </StyledContent>
    );
  };

  return (
    <Layout metaTitle={t("LoginAndRegister")}>
      {view !== "success" ? (
        <StyledRegisterPage>
          <Container
            style={{
              paddingBottom: `${isMobile ? "50px" : "100px"}`,
            }}
          >
            <Row justify="center">
              <Col md={12}>
                <RegisterForm
                  return_url={"#/email-verify"}
                  fieldLabels={fieldLabels}
                  mobile={isMobile}
                  onLoginLink={() => history.push("/login")}
                  onSuccess={() => setView("success")}
                />
              </Col>
            </Row>
          </Container>
        </StyledRegisterPage>
      ) : (
        <EmailActivation />
      )}
    </Layout>
  );
};

export default RegisterPage;
