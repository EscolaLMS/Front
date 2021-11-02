import React, { useContext, useEffect, useCallback, useState } from 'react';

import PageBanner from '@/components/Common/PageBanner';
import { Link, useHistory } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { useTranslation } from 'react-i18next';
import Preloader from '@/components/Preloader';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentModal from '@/components/PaymentModal';
import Layout from '@/components/_App/Layout';
import { API } from '@escolalms/sdk/lib';
import './index.scss';

const stripePromise = (publishable_key: string) => loadStripe(publishable_key);

const CartPage = () => {
  const { user, cart, fetchCart, settings, removeFromCart, payWithStripe, fetchProgress } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { location, push } = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      push('/authentication');
    } else {
      fetchCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, user]);

  const priceLiteral = useCallback(
    (course) => {
      return course.base_price === 0
        ? t('FREE')
        : `${settings?.currencies?.default} ${(course.base_price / 100).toFixed(2)}`;
    },
    [settings, t],
  );

  const [modal, setModal] = useState(false);

  const onPay = useCallback((paymentMethodId) => {
    payWithStripe(paymentMethodId).then(() => {
      push('/user/my-courses');
      fetchCart();
      fetchProgress();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('Cart.Cart')}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t('Cart.Cart')}
        />

        <div className="cart-area">
          <div className="container">
            {cart.loading && <Preloader />}

            {cart?.value?.items?.length === 0 ? (
              <p className="text-center">{t('Cart.CartIsEmpty')}!</p>
            ) : (
              <React.Fragment>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">{t('Cart.Columns.Product')}</th>
                        <th scope="col">{t('Cart.Columns.Name')}</th>
                        <th scope="col">{t('Cart.Columns.Price')}</th>
                        <th scope="col">{t('Cart.Columns.Remove')}</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart &&
                        cart?.value?.items?.map((item: API.Course) => (
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
                              <span
                                aria-hidden="true"
                                className="remove"
                                onClick={() => removeFromCart(Number(item.id))}
                              >
                                <i className="bx bx-trash"></i>
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <div className="cart-totals">
                  <h3>{t('Cart.CartSummary')}</h3>

                  <ul>
                    <li>
                      {t('OrdersPage.Price.Subtotal')}{' '}
                      <span>
                        {settings?.currencies?.default} {Number(cart.value?.subtotal).toFixed(2)}
                      </span>
                    </li>
                    <li>
                      {t('OrdersPage.Price.Tax')}{' '}
                      <span>
                        {settings?.currencies?.default} {Number(cart.value?.tax).toFixed(2)}
                      </span>
                    </li>
                    <li>
                      {t('OrdersPage.Price.Total')}{' '}
                      <span>
                        {settings?.currencies?.default} {Number(cart.value?.total).toFixed(2)}
                      </span>
                    </li>
                  </ul>

                  {Number(cart.value?.total) === 0 ? (
                    <button className="default-btn" onClick={() => onPay(0)}>
                      <i className="flaticon-shopping-cart"></i> {t('Cart.FreeCheckout')}{' '}
                      <span></span>
                    </button>
                  ) : (
                    <button type="button" className="default-btn" onClick={() => setModal(true)}>
                      <i className="flaticon-shopping-cart"></i>
                      {t('Cart.PayWithStripe')} <span></span>
                    </button>
                  )}
                </div>
              </React.Fragment>
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
      </React.Fragment>
    </Layout>
  );
};

export default CartPage;
