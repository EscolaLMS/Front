import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
import Container from "@/components/Common/Container";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import routeRoutes from "@/components/Routes/routes";

const CartSuccessPageStyled = styled.section`
  .cart-success-container {
    font-family: ${({ theme }) => theme.font};
    background: #f8f8f8;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    padding: 16px;
    display: grid;
    place-content: center;
    gap: 16px;

    .cart-success-title {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      margin: 0.8em;
    }

    .cart-success-text {
      font-size: 18px;
      text-align: center;
    }

    .cart-success-buttons {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
      justify-content: center;
      margin: 0.8em;
    }
  }
`;

const CartSuccess = () => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { fetchProgress } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout metaTitle={t("Cart.Cart")}>
      <CartSuccessPageStyled>
        <Container>
          <div className="cart-success-container">
            <h2 className="cart-success-title">{t("Cart.ThankYouTitle")}</h2>
            <p className="cart-success-text">{t("Cart.ThankYouText")}</p>
            <div className="cart-success-buttons">
              <Button
                mode="primary"
                onClick={() => push(routeRoutes.myProfile)}
              >
                {t("Menu.Profile")}
              </Button>
              <Button mode="primary" onClick={() => push(routeRoutes.courses)}>
                {t("Menu.Courses")}
              </Button>
            </div>
          </div>
        </Container>
      </CartSuccessPageStyled>
    </Layout>
  );
};

export default CartSuccess;
