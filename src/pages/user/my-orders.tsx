import React, { useContext, useEffect } from "react";
import PageBanner from "../../components/Common/PageBanner";
import { Link, useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Preloader from "@/components/Preloader";
import { useTranslation } from "react-i18next";
import Layout from "../../components/_App/Layout";
import { API } from "@escolalms/sdk/lib";

const Orders = () => {
  const { user, orders, fetchOrders } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      fetchOrders();
    }
  }, [history, user, fetchOrders]);

  const parsePrice = (price: string) => parseInt(price) / 100;

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t("OrdersPage.MyOrders")}
          homePageUrl="/"
          homePageText={t("Home")}
          activePageText={t("OrdersPage.MyOrders")}
        />

        <div className="cart-area">
          <div className="container">
            {orders.loading && <Preloader />}

            {orders.list?.data.length === 0 ? (
              <p className="text-center">{t("OrdersPage.ListEmpty")}</p>
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
                      {orders.list?.data?.map((order: API.OrderListItem) => (
                        <tr key={order.id}>
                          <td className="order-id">{order.id}</td>
                          <td className="order-created">
                            {new Date(
                              String(order.created_at)
                            ).toLocaleDateString("en-US")}
                          </td>
                          <td className="order-price">
                            <strong>{t("OrdersPage.Price.Subtotal")}:</strong>{" "}
                            {parsePrice(String(order.subtotal))} <br />
                            <strong>{t("OrdersPage.Price.Tax")}:</strong>{" "}
                            {parsePrice(String(order.tax))} <br />
                            <strong>{t("OrdersPage.Price.Total")}:</strong>{" "}
                            {parsePrice(String(order.total))} <br />
                          </td>
                          <td className="order-items">
                            {order.items?.map((item) => {
                              const type = item.buyable_type.split("\\").pop();
                              switch (type) {
                                case "Course":
                                  return (
                                    <Link to={`/courses/${item.buyable_id}`}>
                                      {t(`Courses_plural`)}
                                      <small> ID: {item.buyable_id}</small>
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
