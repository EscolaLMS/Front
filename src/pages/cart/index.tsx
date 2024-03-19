import React, { ReactNode, useContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useTheme } from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import StripeContent from "@/components/Cart/CartContent/stripe";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { getFontFromTheme } from "@escolalms/components/lib/theme/provider";
import Przelewy24Content from "@/components/Cart/CartContent/p24";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray4};
  padding-top: 57px;
  min-height: calc(100vh - 452px);

  h1 {
    margin-bottom: 20px;
  }
`;

enum PaymentGateway {
  Stripe = "stripe",
  Przelewy24 = "Przelewy24",
}

type Props = {
  children?: ReactNode;
};

const CartPage: React.FC<Props> = () => {
  const { config } = useContext(EscolaLMSContext);
  const stripePromise = (publishable_key: string) =>
    loadStripe(publishable_key);
  const stripeConfigs: any = config?.value?.escolalms_payments?.drivers;
  const stripeKey = stripeConfigs?.stripe?.publishable_key;
  const theme = useTheme();
  const font = getFontFromTheme(theme);

  const defaultGateway = config?.value?.escolalms_payments?.default_gateway;

  if (defaultGateway === PaymentGateway.Przelewy24) {
    return (
      <StyledWrapper>
        <Przelewy24Content />
      </StyledWrapper>
    );
  }

  if (defaultGateway === PaymentGateway.Stripe) {
    return (
      <StyledWrapper>
        <Elements
          stripe={stripePromise(stripeKey)}
          options={{
            fonts: [
              {
                cssSrc: font.links[0],
              },
            ],
          }}
        >
          <StripeContent stripeKey={stripeKey} />
        </Elements>
      </StyledWrapper>
    );
  }
};

export default CartPage;
