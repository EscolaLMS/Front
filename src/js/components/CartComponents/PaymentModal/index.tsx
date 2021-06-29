import React, { ReactElement, useMemo, useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { cartPay } from "../../../redux/cart/actions";
import { ICartState } from "../../../redux/cart/reducer";
import { IRootState } from "../../../interfaces/redux";
import { Input } from "../../FormElements/Inputs";
import Button from "../../FormElements/Button/Button";
import { Dispatch } from "redux";
import "./index.scss";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "15px",
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const PaymentModal: React.FC<{ active: boolean; close: () => void }> = ({
  active,
  close,
}): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [error, setError] = useState<string | undefined>(undefined);
  const [processing, setProcessing] = useState(false);

  const [billingDetails, setBillingDetails] = useState({
    name: "",
  });

  const cart: ICartState = useSelector<IRootState, ICartState>(
    (state): ICartState => state.Cart
  );

  useEffect(() => {
    setProcessing(cart.loading);
  }, [cart.loading]);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (!billingDetails.name) {
      setError("Card holder can not be empty.");
    }

    if (!stripe || !elements || !billingDetails.name) {
      return;
    }

    const cardNumber = elements.getElement(CardNumberElement);
    cardNumber && setProcessing(true);
    cardNumber &&
      stripe
        .createPaymentMethod({
          type: "card",
          card: cardNumber,
          billing_details: billingDetails,
        })
        .then((res) => {
          setProcessing(false);
          if (res.error) {
            setError(res.error.message);
          } else {
            dispatch(cartPay({ paymentMethodId: res?.paymentMethod?.id }));
          }
        })
        .catch((error) => {
          setProcessing(false);
          setError(error);
        });
  };

  return (
    <div className={`payment-modal ${active && "active"}`}>
      <div className="modal">
        <button className="close" onClick={() => close()}>
          x
        </button>
        <h4>Credit Card details</h4>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-lg-24">
                <label>
                  <p>Card number</p>
                  <CardNumberElement options={options} />
                </label>
              </div>
              <div className="col-lg-24">
                <Input
                  label="Card holder"
                  className="input margin-15"
                  id="card_holder"
                  name="card_holder"
                  type="text"
                  placeholder="Name"
                  onChange={(e) =>
                    setBillingDetails({
                      ...billingDetails,
                      name: e.currentTarget.value,
                    })
                  }
                  value={billingDetails.name}
                />
              </div>
              <div className="col-lg-12">
                <label>
                  <p>Expiration date</p>
                  <CardExpiryElement options={options} />
                </label>
              </div>
              <div className="col-lg-12">
                <label>
                  <p>CVC</p>
                  <CardCvcElement options={options} />
                </label>
              </div>
              <div className="col-lg-24">
                {error && <p className="error">{error}</p>}
                <Button type="submit" loading={processing} className="black">
                  Pay £{cart.data?.total}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
