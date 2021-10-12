import React, { useContext, useEffect, useCallback, useState } from 'react';

import PageBanner from '../components/Common/PageBanner';
import { Link, useHistory } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/context';

import Preloader from '../components/Preloader';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentModal from '../components/PaymentModal';
import Layout from '../components/_App/Layout';

const stripePromise = (publishable_key: string) => loadStripe(publishable_key);

const Cart = () => {
  const { user, cart, fetchCart, settings, removeFromCart, payWithStripe, fetchProgress } =
    useContext(EscolaLMSContext);

  const { location, push } = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      push('/authentication');
    } else {
      fetchCart();
    }
  }, [location, user]);

  const priceLiteral = useCallback(
    (course) => {
      return course.base_price === 0
        ? 'FREE'
        : `${settings?.currencies?.default} ${(course.base_price / 100).toFixed(2)}`;
    },
    [settings],
  );

  const [modal, setModal] = useState(false);

  const onPay = useCallback((paymentMethodId) => {
    payWithStripe(paymentMethodId).then(() => {
      push('/user/my-courses');
      fetchCart();
      fetchProgress();
    });

    /*
    if (cart?.data && !cart.loading && cart?.data?.total <= 0) {
      dispatch(cartPay({ paymentMethodId: undefined }));
    } else {
      setModalActive(true);
    }
    */
  }, []);

  return (
    <Layout>
      <React.Fragment>
        {/* <Navbar /> */}
        <PageBanner pageTitle="Cart" homePageUrl="/" homePageText="Home" activePageText="Cart" />

        <div className="cart-area ptb-100">
          <div className="container">
            {cart.loading && <Preloader />}

            {cart?.value?.items?.length === 0 ? (
              <p className="text-center">Cart is empty!</p>
            ) : (
              <form>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart &&
                        cart?.value?.items?.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <Link to={`/courses/${item.id}`}>
                                <img src={item.image_url} alt="item" />
                              </Link>
                            </td>

                            <td className="product-name">
                              <Link to={`/courses/${item.id}`}>{item.title}</Link>
                            </td>

                            <td className="product-price">
                              <span className="unit-amount">{priceLiteral(item)}</span>
                            </td>

                            <td className="product-subtotal">
                              <a
                                href="#cart"
                                className="remove"
                                onClick={() => removeFromCart(Number(item.id))}
                              >
                                <i className="bx bx-trash"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/*<div className="cart-buttons">
              <div className="row align-items-center">
                <div className="col-lg-7 col-sm-7 col-md-7">
                  <div className="shopping-coupon-code">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon code"
                      name="coupon-code"
                      id="coupon-code"
                    />
                    <button type="submit">Apply Coupon</button>
                  </div>
                </div>

                <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                  <Link href="#">
                    <a className="default-btn">
                      <i className="flaticon-history"></i> Update Cart{" "}
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
                  </div>*/}

                <div className="cart-totals">
                  <h3>Cart Totals</h3>

                  <ul>
                    <li>
                      Subtotal{' '}
                      <span>
                        {settings?.currencies?.default} {Number(cart.value?.subtotal).toFixed(2)}
                      </span>
                    </li>
                    <li>
                      Tax{' '}
                      <span>
                        {settings?.currencies?.default} {Number(cart.value?.tax).toFixed(2)}
                      </span>
                    </li>
                    <li>
                      Total{' '}
                      <span>
                        {settings?.currencies?.default} {Number(cart.value?.total).toFixed(2)}
                      </span>
                    </li>
                  </ul>

                  {Number(cart.value?.total) === 0 ? (
                    <button className="default-btn" onClick={() => onPay(0)}>
                      <i className="flaticon-shopping-cart"></i> Free Checkout <span></span>
                    </button>
                  ) : (
                    <button className="default-btn" onClick={() => setModal(true)}>
                      <i className="flaticon-shopping-cart"></i> Pay with stripe Checkout{' '}
                      <span></span>
                    </button>
                  )}
                </div>
              </form>
            )}

            {settings?.stripe?.publishable_key && Number(cart.value?.total) > 0 && (
              <Elements stripe={stripePromise(settings.stripe.publishable_key)}>
                <PaymentModal
                  total={`${Number(cart.value?.total).toFixed(2)} ${settings?.currencies?.default}`}
                  active={modal}
                  onClose={() => setModal(false)}
                  onPaymentId={onPay}
                />
              </Elements>
            )}
          </div>
        </div>

        {/* <Footer /> */}
      </React.Fragment>
    </Layout>
  );
};

export default Cart;
