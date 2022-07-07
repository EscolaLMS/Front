import Layout from "@/components/_App/Layout";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button, Text, Title } from "@escolalms/components";
import { isMobile } from "react-device-detect";

const Styled404 = styled.div`
  height: 100vh;
  margin-top: ${isMobile ? 0 : "-167px"};
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    row-gap: 30px;
  }
`;

const Custom404 = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Layout>
      <Styled404>
        <div className="container">
          <div className="content">
            <Title level={3}>{t("Custom404Page.Info")}</Title>
            <Text>{t("Custom404Page.NotFound")}</Text>
            <Button onClick={() => history.push("/courses")}>
              {t("Home")}
            </Button>
          </div>
        </div>
      </Styled404>
    </Layout>
  );
};

export default Custom404;
