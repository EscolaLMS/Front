import React, { useMemo } from "react";
import { Input } from "@escolalms/components/lib/components/atoms/Input/Input";
import { useTranslation } from "react-i18next";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";

type Props = {
  billingDetails: {
    name: string;
  };
  setBillingDetails: ({ name }: { name: string }) => void;
};

const PaymentForm: React.FC<Props> = ({
  billingDetails,
  setBillingDetails,
}) => {
  const { t } = useTranslation();

  const options = useMemo(
    () => ({
      style: {
        base: {
          iconColor: "#c4f0ff",
          color: "#000000",
          fontWeight: 500,
          fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          fontSize: "16px",
          fontSmoothing: "antialiased",
          ":-webkit-autofill": {
            color: "#000000",
          },
          "::placeholder": {
            color: "#999999",
          },
        },
        invalid: {
          color: "#ff0000",
        },
      },
    }),
    []
  );

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="input-wrapper">
          <Input
            label="Imię Nazwisko"
            type="text"
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                name: e.currentTarget.value,
              })
            }
            value={billingDetails.name}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-wrapper">
          {/* <Input
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                cardNumber: e.currentTarget.value,
              })
            }
            id="cardNumber"
            value={billingDetails.cardNumber}
            label="Numer karty"
            type="text"
          /> */}
          <CardNumberElement />
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-wrapper">
          {/* <Input
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                expireDate: e.currentTarget.value,
              })
            }
            value={billingDetails.expireDate}
            label="Data ważności"
            type="text"
          /> */}
          <CardExpiryElement options={options} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-wrapper">
          {/* <Input
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                cvc: e.currentTarget.value,
              })
            }
            value={billingDetails.cvc}
            id="card-cvc-element"
            label="Kod CVC/CCV"
            type="text"
          /> */}
          <CardCvcElement options={options} />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
