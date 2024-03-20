import Layout from "@/components/_App/Layout";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import Container from "@/components/Common/Container";
import routeRoutes from "@/components/Routes/routes";

const Styled404 = styled.div`
  height: calc(100vh - 452px);
  padding-top: 122px;
  background-color: ${({ theme }) => theme.gray4};
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        <Container>
          <div className="content">
            <Title level={3}>{t("Custom404Page.Info")}</Title>
            <Text>{t("Custom404Page.NotFound")}</Text>
            <Button onClick={() => history.push(routeRoutes.home)}>
              {t("Home")}
            </Button>
          </div>
        </Container>
      </Styled404>
    </Layout>
  );
};

export default Custom404;
