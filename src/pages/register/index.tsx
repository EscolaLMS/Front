import { SetStateAction, useContext, useEffect, useState } from "react";
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
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Col, Container, Row } from "react-grid-system";
import { Link as LinkComponent } from "@escolalms/components/lib/components/atoms/Link/Link";

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
      text-align: center;
      margin-top: 20px;
    }
  }
`;

const StyledModal = styled(Modal)`
  a {
    font-size: 1.14em;
  }
`;

const RegisterPage = () => {
  const { search } = useLocation();
  const { user, socialAuthorize } = useContext(EscolaLMSContext);
  const [view, setView] = useState<"" | "success" | "register">("");
  const [modalVisible, setModalVisible] = useState(false);
  const { settings } = useContext(EscolaLMSContext);

  const [email, setEmail] = useState<string>("");
  const history = useHistory();
  const token = search.split("?token=")[1];
  const { t } = useTranslation();

  const footerFromApi: string = settings?.value?.config?.registerWarning;

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

  useEffect(() => {
    setModalVisible(view === "success");
  }, [view]);

  const EmailActivation = () => {
    return (
      <StyledContent>
        <Container>
          <Row justify={"center"}>
            <Col md={12}>
              <div className="content-container">
                <Title className="email-title" level={3}>
                  {t("EmailActivation.Title")}
                </Title>
                <MarkdownRenderer
                  components={{
                    a: (props) => <span>{props.children}</span>,
                  }}
                >
                  {t("EmailActivation.Text", { email })}
                </MarkdownRenderer>
                <MarkdownRenderer>
                  {t("EmailActivation.HelpText")}
                </MarkdownRenderer>

                <div className="back-text">
                  <LinkComponent onClick={() => setView("register")} underline>
                    {t("EmailActivation.RegisterAgain")}
                  </LinkComponent>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledContent>
    );
  };

  return (
    <Layout metaTitle={t("LoginAndRegister")}>
      {footerFromApi && (
        <StyledModal
          onClose={() => setModalVisible(false)}
          visible={modalVisible}
          animation="zoom"
          maskAnimation="fade"
          destroyOnClose={true}
          width={800}
        >
          <Title level={4} className="modal-title">
            {t("Warning")}
          </Title>
          <MarkdownRenderer>{footerFromApi}</MarkdownRenderer>
          <Button mode="outline" onClick={() => setModalVisible(false)}>
            {t("I'm aware")}
          </Button>
        </StyledModal>
      )}

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
                  onSuccess={(
                    _: any,
                    values: { email: SetStateAction<string> }
                  ) => {
                    setView("success");
                    setEmail(values.email);
                  }}
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
