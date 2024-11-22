import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Container from "@/components/Common/Container";

import routeRoutes from "@/components/Routes/routes";
import { getStylesBasedOnTheme } from "@escolalms/components/lib/utils/utils";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { ThankYouIcon } from "@/icons/index";
import { isMobile } from "react-device-detect";

const CartSuccessPageStyled = styled.div<{ $isMobile: boolean }>`
  .cart-success-container {
    font-family: ${({ theme }) => theme.font};
    background: ${({ theme }) =>
      getStylesBasedOnTheme(theme.mode, theme.black, theme.white, theme.white)};
    border-radius: ${({ theme }) => theme.cardRadius}px;
    padding: 98px 20px 180px;
    display: grid;
    place-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 16px;
    text-align: center;

    .cart-success-buttons {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
      justify-content: center;
      margin: 0.8em;
    }
    div {
      display: flex;
      flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
      align-items: center;
      justify-content: center;
      gap: 5px;
      a,
      p {
        margin: 0;
      }
      a {
        p {
          color: ${({ theme }) => theme.primaryColor};
        }
      }
    }
  }
`;

const CartSuccess = () => {
  const { t } = useTranslation();

  const { fetchProgress } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartSuccessPageStyled $isMobile={isMobile}>
      <Container>
        <div className="cart-success-container">
          <ThankYouIcon />
          <Title level={2}>{t("Cart.ThankYouTitle")}</Title>
          <div>
            <Text size="16" className="cart-success-text">
              {t("Cart.ThankYouText")}
            </Text>
          </div>
          <div>
            <Link to={routeRoutes.myProfile}>
              <Text size="16">{t("Navbar.MyCourses")}</Text>
            </Link>
            <Link to={routeRoutes.myConsultations}>
              <Text size="16">{t("Navbar.MyConsultations")}</Text>
            </Link>
          </div>
          <div>
            <Text size="16">{t("Cart.Status")}</Text>{" "}
            <Link to={routeRoutes.myOrders}>
              <Text size="16">{t("Navbar.MyOrders")}</Text>
            </Link>
          </div>
        </div>
      </Container>
    </CartSuccessPageStyled>
  );
};

export default CartSuccess;
