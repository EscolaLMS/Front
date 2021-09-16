import { EscolaLMSContext } from "@/escolalms/context";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import StripeCheckout from "react-stripe-checkout";

const CheckoutBtn = ({ handleCheckout, image, name, price }) => {
  const stripeTotal = Number(price);
  const { t } = useTranslation();
  const { settings } = useContext(EscolaLMSContext);

  return (
    <div>
      {settings?.currencies?.default && settings?.stripe?.publishable_key ? (
        <StripeCheckout
          name={name}
          amount={stripeTotal}
          image={image}
          currency={settings?.currencies?.default}
          stripeKey={settings?.stripe?.publishable_key}
          token={handleCheckout}
          triggerEvent="onClick"
        >
          <button className="default-btn">
            <i className="flaticon-tag"></i> {t("buy now")} <span></span>
          </button>
        </StripeCheckout>
      ) : (
        <pre className="error">
          settings?.currencies?.default or settings?.stripe?.publishable_key
          missing
        </pre>
      )}
    </div>
  );
};

export default CheckoutBtn;
