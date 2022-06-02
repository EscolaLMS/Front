import React, { useMemo } from "react";
import { Input } from "@escolalms/components/lib/components/atoms/Input/Input";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import styled, { useTheme } from "styled-components";
import { t } from "i18next";

type Props = {
  billingDetails: {
    name: string;
  };
  setBillingDetails: ({ name }: { name: string }) => void;
};

const StyledForm = styled.div`
  .input-wrapper {
    padding: 11px 12px 13px;
    border: 1px solid
      ${({ theme }) => (theme.mode === "dark" ? theme.gray5 : theme.gray4)};

    &--custom {
      @media (max-width: 991px) {
        margin-bottom: 30px;
      }
    }
  }
`;

const PaymentForm: React.FC<Props> = ({
  billingDetails,
  setBillingDetails,
}) => {
  const theme = useTheme();

  const options = useMemo(() => {
    return {
      style: {
        base: {
          backgroundColor: theme.mode === "dark" ? theme.gray1 : theme.gray5,
          padding: "11px 12px 13px",
          border: `1px solid red`,
          color: theme.mode === "dark" ? theme.white : theme.gray1,
          fontSize: "16px",
          "::placeholder": {
            color: theme.mode === "dark" ? theme.white : theme.gray1,
          },
        },
        invalid: {
          color: "#ff0000",
        },
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledForm>
      <div className="row">
        <div className="col-lg-6">
          <div className="input-wrapper--custom">
            <Input
              label={t<string>("Cart.FullName")}
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
        <div className="col-lg-6">
          <div className="input-wrapper">
            <CardNumberElement options={options} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-wrapper">
            <CardExpiryElement options={options} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-wrapper">
            <CardCvcElement options={options} />
          </div>
        </div>
      </div>
    </StyledForm>
  );
};

export default PaymentForm;
