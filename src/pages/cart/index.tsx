import React, { ReactNode, useContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useTheme } from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import CartContent from "@/components/Cart/CartContent";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { getFontFromTheme } from "@escolalms/components/lib/theme/provider";

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

  return (
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
      <CartContent stripeKey={stripeKey} />
    </Elements>
  );
};

export default CartPage;
