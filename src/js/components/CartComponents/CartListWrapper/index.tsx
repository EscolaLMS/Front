import React, { ReactElement } from "react";
import { ICartListWrapper } from "../../../interfaces/cart";
import "./index.scss";

const CartListWrapper: React.FC<ICartListWrapper> = ({
  title,
  children,
  type = "transparent",
}): ReactElement => {
  return (
    <section className={`cart-list ${type}`}>
      <h3>{title}</h3>
      <div className="content">{children}</div>
    </section>
  );
};

export default CartListWrapper;
