import routeRoutes from "@/components/Routes/routes";
import useSubscriptions from "@/hooks/useSubscriptions";
import { formatPrice } from "@/utils/index";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Button } from "@escolalms/components/lib/index";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useCallback, useContext } from "react";
import { isMobile } from "react-device-detect";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledProductModal = styled.div`
  text-align: center;
  .modal-header {
    margin-bottom: 10px;
  }
`;

const StyledProductBox = styled.div<{ $isMobile: boolean }>`
  border-radius: ${({ theme }) => theme.cardRadius}px;
  border: 1px solid ${({ theme }) => theme.gray3};
  padding: 20px 40px;
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "20px" : "0")};
  min-height: 240px;

  .title {
    min-height: 45px;
  }
  .divider {
    width: 21px;
    height: 3px;
    border-radius: 18px;
    background-color: ${({ theme }) => theme.primaryColor};
    margin: 10px auto;
  }
  .description {
    margin-bottom: 30px;
    min-height: 30px;
  }
  .price {
    margin-bottom: 22px;
  }
  button {
    width: 100%;
  }
`;

type Props = {
  course: API.Course;
};

const ProductModal: React.FC<Props> = ({ course }) => {
  const { getCheapestSubscription } = useSubscriptions();
  const { cart, addToCart } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { push } = useHistory();

  const handleBuyCourse = useCallback(() => {
    addToCart(Number(course.product?.id)).then(() => push(routeRoutes.cart));
  }, [course.product?.id, addToCart, push]);

  return (
    <StyledProductModal>
      <Title className="modal-header" level={2}>
        {t("Subscriptions.GetAccess")}
      </Title>
      <Text>{t("Subscriptions.YouHaveTwoOptions")}</Text>
      <Row>
        <Col lg={6} md={12} sm={12}>
          <StyledProductBox className="product-box" $isMobile={isMobile}>
            <Title className="title" level={3}>
              {t("Buy Course")}
            </Title>
            <div className="divider"></div>
            <Text className="description" size={"13"}>
              {course.title}
            </Text>
            <Text className="price" size="24" bold>
              {formatPrice(course.product?.gross_price)} zł
            </Text>
            <Button loading={cart.loading} onClick={() => handleBuyCourse()}>
              {t("Subscriptions.IPick")}
            </Button>
          </StyledProductBox>
        </Col>
        {getCheapestSubscription?.id && (
          <Col lg={6} md={12} sm={12}>
            <StyledProductBox className="product-box" $isMobile={isMobile}>
              <Title className="title" level={3}>
                {getCheapestSubscription?.name}
              </Title>
              <div className="divider"></div>
              <Text className="description" size={"13"}>
                {getCheapestSubscription?.description}
              </Text>
              <Text className="price" size="24" bold>
                {t("From")} {formatPrice(getCheapestSubscription?.gross_price)}{" "}
                zł
              </Text>
              <Button onClick={() => push(routeRoutes?.subscriptions)}>
                {t("Subscriptions.IPick")}
              </Button>
            </StyledProductBox>
          </Col>
        )}
      </Row>
    </StyledProductModal>
  );
};

export default ProductModal;
