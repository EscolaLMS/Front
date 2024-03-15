import Container from "@/components/Common/Container";
import Layout from "@/components/_App/Layout";
import { StarIcon } from "@/icons/index";
import { formatPrice } from "@/utils/index";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";

import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useContext, useEffect } from "react";
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

const StyledSubscription = styled.div<{ $isMobile: boolean }>`
  border-radius: ${({ theme }) => theme.cardRadius}px;
  border: 1px solid #eaeaea;
  padding: ${({ $isMobile }) => ($isMobile ? "20px" : "23px 100px")};
  transition: border 0.3s ease-in-out;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "30px" : "0")};
  .content {
    text-align: center;
    max-width: 210px;
    position: relative;
    margin: 0 auto;

    p {
      margin-bottom: 0;
    }
    .information {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.5px;
      margin-top: 5px;
      background-color: ${({ theme }) => theme.secondaryColor};
    }
    .divider {
      width: 21px;
      height: 3px;
      border-radius: 18px;
      background-color: ${({ theme }) => theme.primaryColor};
      margin: 23px auto 16px auto;
    }
    .description {
      margin-bottom: 17px;
    }
    .price {
      margin-bottom: 30px;
    }
    button {
      width: 100%;
    }
    .tag {
      position: absolute;
      top: -37px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 18px;
      width: fit-content;
      background-color: ${({ theme }) => theme.textColor};
      padding: 3px 14px;

      p {
        text-transform: uppercase;
        color: ${({ theme }) => theme.white};
        margin-bottom: 0;
      }
    }
  }

  &:hover {
    border: 1px solid #333333;
  }
`;

const SubscriptionBox = () => {
  return (
    <StyledSubscription $isMobile={isMobile}>
      <div className="content">
        <div className="tag">
          <Text size="13">Najtańsza oferta</Text>
        </div>
        <Text>Dostęp przez</Text>
        <Title level={1} as={"h4"}>
          1 rok
        </Title>
        <Text className="information" size="13">
          <StarIcon /> 3-dniowy darmowy okres próbny
        </Text>
        <div className="divider"></div>
        <Text size="13" className="description">
          Otrzymujesz nielimitowany dostęp do wszystkich kursów na platformie w
          cenie
        </Text>
        <Text size="24" className="price" bold>
          {formatPrice(29999)} zł
        </Text>
        <Button mode="secondary">Wybieram</Button>
      </div>
    </StyledSubscription>
  );
};

const SubscriptionsPage = () => {
  const { t } = useTranslation();
  const { fetchProducts } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchProducts({
      type: "subscription-all-in",
    });
  }, [fetchProducts]);

  return (
    <Layout metaTitle={t("Subscriptions")}>
      <StyledWrapper>
        <Container>
          <Title level={1}>Subskrypcje</Title>
          <Text size="16">
            Dostęp do kursów na platformie możesz uzyskać w modelu
            subskrypcyjnym, który jest najtańszą formą korzystania.
          </Text>
          <SubscriptionsContainer $isMobile={isMobile}>
            <Row>
              <Col lg={6} md={12}>
                <SubscriptionBox />
              </Col>
              <Col lg={6} md={12}>
                <SubscriptionBox />
              </Col>
            </Row>
          </SubscriptionsContainer>
        </Container>
      </StyledWrapper>
    </Layout>
  );
};
export default SubscriptionsPage;
