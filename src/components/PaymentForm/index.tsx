import React, { useMemo } from "react";
import { Input } from "@escolalms/components/lib/components/atoms/Input/Input";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import styled, { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import { getFontFromTheme } from "@escolalms/components/lib/theme/provider";

type Props = {
  billingDetails: {
    name: string;
  };
  setBillingDetails: ({ name }: { name: string }) => void;
};

const StyledForm = styled.div`
  .input-wrapper {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#333" : theme.cardBackgroundColor};
    &--custom {
      @media (max-width: 991px) {
        margin-bottom: 30px;
      }
    }
    .StripeElement {
      color: ${({ theme }) =>
        theme.mode === "dark" ? "#c3c3c3" : theme.gray1};
      padding: 11px 12px 13px;
      border: 1px solid
        ${({ theme }) => (theme.mode === "dark" ? theme.gray5 : theme.gray4)};
      &--focus {
        border: 1px solid
          ${({ theme }) => (theme.mode === "dark" ? theme.gray5 : theme.gray3)};
      }
      &--empty + label {
        display: none;
      }
      &--invalid + label,
      &--focus + label,
      &--complete + label {
        display: block;
        top: -8px;
        left: 24px;
      }
    }
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => (theme.mode === "dark" ? "#c3c3c3" : theme.gray1)};
  font-size: 10px;
  padding: 0 2px;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#000" : theme.white};
`;

const PaymentForm: React.FC<Props> = ({
  billingDetails,
  setBillingDetails,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const font = getFontFromTheme(theme).fontFamily;
  const fontFamily = font.split(",")[0].replace(/['"]/g, "");

  const options = useMemo(() => {
    return {
      style: {
        base: {
          fontFamily: fontFamily,
          backgroundColor: "transparent",
          padding: "11px 12px 13px",
          border: `1px solid red`,
          color: theme.mode === "dark" ? theme.white : theme.gray1,
          fontSize: "12px",
          "::placeholder": {
            color: theme.mode === "dark" ? "#c3c3c3" : theme.gray1,
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
      <Row>
        <Col lg={6}>
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
        </Col>
        <Col lg={6}>
          <div className="input-wrapper">
            <CardNumberElement options={options} id="cardNumber" />
            <StyledLabel htmlFor="cardNumber">
              {t<string>("Card number")}
            </StyledLabel>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div className="input-wrapper">
            <CardExpiryElement options={options} id="cardExpiry" />
            <StyledLabel htmlFor="cardExpiry">
              {t<string>("Expiration date")}
            </StyledLabel>
          </div>
        </Col>
        <Col lg={6}>
          <div className="input-wrapper">
            <CardCvcElement options={options} id="cardCVC" />
            <StyledLabel htmlFor="cardCVC">CVC</StyledLabel>
          </div>
        </Col>
      </Row>
    </StyledForm>
  );
};

export default PaymentForm;
