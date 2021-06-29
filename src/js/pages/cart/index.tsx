import React, { ReactElement, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import MainLayout from "../../layouts/MainLayout";
import { ICartState } from "../../redux/cart/reducer";
import { IRootState } from "../../interfaces/redux";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
// import { relatedCart } from "../../redux/cart/actions";
import CartListWrapper from "../../components/CartComponents/CartListWrapper";
import CartItem from "../../components/CartComponents/CartItem";
import CartTotalBox from "../../components/CartComponents/CartTotalBox";
import "./index.scss";
import EmptyCart from "./empty";
import Loader from "../../components/Loader";

const CartPage: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const cart: ICartState = useSelector<IRootState, ICartState>(
    (state) => state.Cart
  );

  /*
  useEffect(() => {
    cart.data &&
      cart?.data?.items?.length > 0 &&
      dispatch(relatedCart({ "courses[]": cart.data?.items.map((i) => i.id) }));
  }, [cart.data?.items]);
  */

  return (
    <MainLayout>
      {cart.loading && <Loader width={100} height={100} />}
      {cart?.data?.items && cart?.data?.items?.length > 0 ? (
        <article className="cart-page">
          <PageHeader title="Your cart" search={false} />

          <div className="container">
            <div className="row">
              <div className="col-lg-16">
                <CartListWrapper
                  title={
                    cart?.data?.items
                      ? `Added ${cart.data?.items.length} item${
                          cart?.data?.items?.length > 1 ? "s" : ""
                        }`
                      : "There are no courses in the cart"
                  }
                >
                  {cart.data?.items.map((item: API.Course) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.summary}
                      image={item.image_url}
                      price={item.base_price}
                      size="medium"
                    />
                  ))}
                </CartListWrapper>
                {cart.related?.length > 0 && (
                  <CartListWrapper
                    title="Frequently bought together"
                    type="green"
                  >
                    {cart.related?.map((item) => (
                      <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.course_title}
                        description={item.short_description}
                        image={item.thumb_image}
                        price={item.price}
                        size="medium"
                        type="add"
                      />
                    ))}
                  </CartListWrapper>
                )}
              </div>
              <div className="col-lg-8">
                <CartTotalBox
                  price={cart.data?.total || 0}
                  subtotal={cart.data?.subtotal || 0}
                  tax={cart.data?.tax || 0}
                  discount={cart?.data?.discount?.value || 0}
                  dCode={cart?.data?.discount?.code}
                />
              </div>
            </div>
          </div>
        </article>
      ) : (
        <EmptyCart />
      )}
    </MainLayout>
  );
};

export default CartPage;
