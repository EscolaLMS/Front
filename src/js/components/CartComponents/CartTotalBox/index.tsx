import React, { ReactElement, useCallback, useState, useEffect } from "react";
import Button from "../../FormElements/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  // addDiscountToCart,
  fetchCart,
  clearCart,
  cartPay,
} from "../../../redux/cart/actions";
import { ICartState } from "../../../redux/cart/reducer";
import { IRootState } from "../../../interfaces/redux";
import { Dispatch } from "redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentModal from "./../PaymentModal";
import "./index.scss";
import { useHistory } from "react-router";
import routeRoutes from "../../Routes/routes";

import { IAppSettingsState } from "../../../redux/appSettings/reducer";

const stripePromise = (publishable_key: string) => loadStripe(publishable_key);

const CartTotalBox: React.FC<{
  price: number;
  subtotal: number;
  tax: number;
  discount: number;
  dCode?: string;
}> = ({ price, subtotal, tax, discount, dCode }): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const history = useHistory();
  // const [discountCode, setDiscountCode] = useState<string>("");
  const [modalActive, setModalActive] = useState(false);

  const cart: ICartState = useSelector<IRootState, ICartState>(
    (state): ICartState => state.Cart
  );

  const appSettings: IAppSettingsState = useSelector<
    IRootState,
    IAppSettingsState
  >((state): IAppSettingsState => state.AppSettings);

  /*
  const addDiscountCode = useCallback(() => {
    dispatch(addDiscountToCart({ code: discountCode }));
  }, [discountCode]);
  */

  const onPay = useCallback(() => {
    if (cart?.data && !cart.loading && cart?.data?.total <= 0) {
      dispatch(cartPay({ paymentMethodId: undefined }));
    } else {
      setModalActive(true);
    }
  }, [cart]);

  useEffect(() => {
    cart.addedCode && dispatch(fetchCart());
  }, [cart?.addedCode]);

  useEffect(() => {
    if (cart.paid) {
      setModalActive(false);
      dispatch(fetchCart());
      dispatch(clearCart());
      history.push(routeRoutes.myCourses);
    }
  }, [cart.paid]);

  /*
  useEffect(() => {
    discount && setDiscountCode("");
  }, [discount]);
  */

  if (!appSettings.data?.stripe?.publishable_key) {
    return <pre>`appSettings.data.stripe.publishable_key` seems missing</pre>;
  }

  return (
    <section className="cart-box">
      <Elements
        stripe={stripePromise(appSettings.data?.stripe?.publishable_key)}
      >
        <h5>
          Subtotal <span>£{subtotal}</span>
        </h5>
        <h5>
          Tax <span>£{tax}</span>{" "}
        </h5>
        {discount ? (
          <div className="green">
            <h4>
              Discount
              <span>-£{discount}</span>
            </h4>
            <h4>
              Code
              <span>{dCode}</span>
            </h4>
          </div>
        ) : (
          ""
        )}
        <h3>
          Total <span>£{price}</span>
        </h3>
        {/*
        <div className="content">
          <div className="discount">
            <h4>
              Add discount code <small>(optional)</small>
            </h4>
            <div>
              <span className="value">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
              </span>
              <span>
                <button onClick={() => addDiscountCode()}>Add</button>
              </span>
            </div>
          </div>
        </div>
        */}
        <footer>
          <Button
            disabled={cart.loading}
            loading={cart.loading}
            className="black"
            onClick={() => onPay()}
          >
            Pay now
          </Button>
        </footer>
        <PaymentModal
          active={modalActive}
          close={() => setModalActive(false)}
        />
      </Elements>
    </section>
  );
};

export default CartTotalBox;
