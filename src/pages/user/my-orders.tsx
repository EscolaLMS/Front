import React, { useContext, useEffect } from "react";

import PageBanner from "../../components/Common/PageBanner";
import { Link, useHistory } from "react-router-dom";
import { EscolaLMSContext } from "../../escolalms/context";

import Preloader from "../../components/Preloader";
import { loadStripe } from "@stripe/stripe-js";
import { useTranslation } from "react-i18next";
import Layout from "../../components/_App/Layout";

// const stripePromise = (publishable_key: string) => loadStripe(publishable_key);

const Orders = ({ pageProps }) => {
  const { user, orders, fetchOrders } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      fetchOrders();
    }
  }, [history, user]);

  const parsePrice = (price: string) => parseInt(price) / 100;

  return (
    <Layout {...pageProps}>
      <React.Fragment>
        {/* <Navbar /> */}
        <PageBanner
          pageTitle={t("OrdersPage.MyOrders")}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t("OrdersPage.MyOrders")}
        />

        <div className="cart-area ptb-100">
          <div className="container">
            {orders.loading && <Preloader />}

            {orders.list?.length === 0 ? (
              <p className="text-center">Order list is empty!</p>
            ) : (
              <form>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">
                          {t("PaymentsPage.TableCols.OrderId")}
                        </th>
                        <th scope="col">
                          {t("PaymentsPage.TableCols.Created")}
                        </th>
                        <th scope="col">{t("PaymentsPage.TableCols.Price")}</th>
                        <th scope="col">{t("PaymentsPage.TableCols.Items")}</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.list?.map((order) => (
                        <tr key={order.id}>
                          <td className="order-id">{order.id}</td>
                          <td className="order-created">
                            {new Date(order.created_at).toLocaleDateString(
                              "en-US"
                            )}
                          </td>
                          <td className="order-price">
                            <strong>{t("OrdersPage.Price.Subtotal")}:</strong>{" "}
                            {parsePrice(order.subtotal)} <br />
                            <strong>{t("OrdersPage.Price.Tax")}:</strong>{" "}
                            {parsePrice(order.tax)} <br />
                            <strong>{t("OrdersPage.Price.Total")}:</strong>{" "}
                            {parsePrice(order.total)} <br />
                          </td>
                          <td className="order-items">
                            {order.items.map((item) => {
                              const type = item.buyable_type.split("\\").pop();
                              switch (type) {
                                case "Course":
                                  return (
                                    <Link href={`/courses/${item.buyable_id}`}>
                                      <a>
                                        {t(`Courses_plural`)}
                                        <small> ID: {item.buyable_id}</small>
                                      </a>
                                    </Link>
                                  );
                                default:
                                  return (
                                    <p>
                                      {t(`Courses_plural`)}
                                      <small>ID: {item.buyable_id}</small>
                                    </p>
                                  );
                              }
                            })}
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
