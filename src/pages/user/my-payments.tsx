import React, { useContext, useEffect, useCallback, useState } from "react";

import PageBanner from "../../components/Common/PageBanner";

import { useHistory } from "react-router-dom";
import { EscolaLMSContext } from "../../escolalms/context";

import Preloader from "../../components/Preloader";
import { loadStripe } from "@stripe/stripe-js";
import { useTranslation } from "react-i18next";
import Layout from "../../components/_App/Layout";

const stripePromise = (publishable_key: string) => loadStripe(publishable_key);

const Orders = ({ pageProps }) => {
  const { user, fetchPayments, payments } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      fetchPayments();
    }
  }, [history, user]);

  console.log(payments);

  return (
    <Layout {...pageProps}>
      <React.Fragment>
        <PageBanner
          pageTitle={t("PaymentsPage.MyPayments")}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t("PaymentsPage.MyPayments")}
        />

        <div className="cart-area ptb-100">
          <div className="container">
            {payments.loading && <Preloader />}

            {payments?.list?.data?.length === 0 ? (
              <p className="text-center">Payment list is empty!</p>
            ) : (
              <form>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">
                          {t("PaymentsPage.TableCols.PaymentId")}
                        </th>
                        <th scope="col">
                          {t("PaymentsPage.TableCols.Created")}
                        </th>
                        <th scope="col">{t("PaymentsPage.TableCols.Price")}</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {payments &&
                        payments?.list?.data.map((payment) => (
                          <tr key={payment.id}>
                            <td className="order-id">{payment.id}</td>
                            <td className="order-created">
                              {new Date().toLocaleDateString("en-US")}
                            </td>
                            <td className="order-price">
                              {(payment.amount / 100).toFixed(2)}{" "}
                              {payment.currency}
                            </td>
                            <td className="order-items">
                              {t(
                                `PaymentsPage.PaymentStatus.${payment.status}`
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </form>
            )}
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Orders;
