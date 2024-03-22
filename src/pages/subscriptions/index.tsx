import Container from "@/components/Common/Container";
import ActiveSubscription from "@/components/Subscriptions/ActiveSubscription";
import SubscriptionBox from "@/components/Subscriptions/Box";
import ContentLoader from "@/components/_App/ContentLoader";
import Layout from "@/components/_App/Layout";
import useSubscriptions from "@/hooks/useSubscriptions";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray4};
  padding-top: 57px;
  min-height: calc(100vh - 452px);
  padding-bottom: 50px;

  h1 {
    margin-bottom: 20px;
  }
`;

const SubscriptionsContainer = styled.div<{ $isMobile: boolean }>`
  border-radius: ${({ theme }) => theme.cardRadius}px;
  padding: ${({ $isMobile }) => ($isMobile ? "20px" : "50px 90px")};

  background-color: ${({ theme }) => theme.white};
  border: 1px solid #eaeaea;
`;

const SubscriptionsPage = () => {
  const { t } = useTranslation();
  const {
    subscriptions,
    isLoading,
    getActiveSubscription,
    subscriptionCancel,
  } = useSubscriptions();
  const { user } = useContext(EscolaLMSContext);

  return (
    <Layout metaTitle={t("Subscriptions.Subs")}>
      <StyledWrapper>
        <Container>
          <Title level={1}>{t("Subscriptions.Subs")}</Title>
          <Text size="16">{t("Subscriptions.Text")}</Text>
          {getActiveSubscription && user.value?.id && (
            <ActiveSubscription
              activeSubscription={getActiveSubscription}
              subscriptionCancel={subscriptionCancel}
            />
          )}
          {!getActiveSubscription?.id && (
            <SubscriptionsContainer $isMobile={isMobile}>
              {isLoading && <ContentLoader />}
              {!isLoading && (
                <Row>
                  {subscriptions.map((subscription) => (
                    <Col lg={6} md={12} key={subscription.id}>
                      <SubscriptionBox subscription={subscription} />
                    </Col>
                  ))}
                </Row>
              )}
            </SubscriptionsContainer>
          )}
        </Container>
      </StyledWrapper>
    </Layout>
  );
};
export default SubscriptionsPage;
