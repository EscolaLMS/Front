import React, { ReactElement, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Image from "../../Image";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  fetchCart,
  addToCart,
} from "../../../redux/cart/actions";
import { IRootState } from "../../../interfaces/redux";
import { ICartState } from "../../../redux/cart/reducer";
import { ICartItem } from "../../../interfaces/cart";
import ReactMarkdown from "react-markdown";

import "./index.scss";

const CartItem: React.FC<ICartItem> = ({
  id,
  image,
  title,
  description,
  price,
  size = "medium",
  type = "remove",
}): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const cart: ICartState = useSelector<IRootState, ICartState>(
    (state): ICartState => state.Cart
  );

  useEffect(() => {
    cart?.removed && dispatch(fetchCart());
  }, [cart.removed]);

  useEffect(() => {
    cart?.added && dispatch(fetchCart());
  }, [cart.added]);

  const removeHandler = useCallback(() => {
    dispatch(removeFromCart(id));
  }, [id]);

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart(id));
  }, [id]);

  return (
    <div className={`cart-item ${size}`}>
      <picture>
        <Image src={image} alt="img" />
      </picture>
      <div className="cart-content">
        <Link to={`/course/${id}`}>
          <h5>{title}</h5>
        </Link>
        {description && (
          <ReactMarkdown className="program-markdown">
            {description}
          </ReactMarkdown>
        )}
        <div className="wrapper-price">
          <span>£{price}</span>
          {type === "remove" ? (
            <button className="remove-btn" onClick={() => removeHandler()}>
              Remove item
            </button>
          ) : (
            <button className="add-btn" onClick={() => addToCartHandler()}>
              Add to basket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
