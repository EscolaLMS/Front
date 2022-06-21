import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { Orders as OrdersList } from "@escolalms/components/lib/components/molecules/Orders/Orders";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { API } from "@escolalms/sdk/lib";
import { format } from "date-fns";
import styled from "styled-components";
import Preloader from "@/components/Preloader";
import { isMobile } from "react-device-detect";
import { t } from "i18next";
import { toast } from "react-toastify";

const StyledOrdersList = styled.section`
  margin-top: 35px;
  .name-container {
    p {
      display: inline;
      margin: 0;
    }
  }
`;

const Orders = () => {
  const { user, orders, fetchOrders, fetchOrderInvoice } =
    useContext(EscolaLMSContext);
  const [mappedOrders, setMappedOrders] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/login");
    } else {
      fetchOrders();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownloadInvoice = useCallback((id: number) => {
    fetchOrderInvoice(id)
      .then((response) => {
        const url = `data:application/pdf;base64,${response}`;
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${t("MyProfilePage.InvoiceTitle")} ${id}.pdf`
        );

        document.body.appendChild(link);

        link.click();

        // Clean up and remove the link
        link && link.parentNode && link.parentNode.removeChild(link);
      })
      .catch((err) => {
        if (err) {
          toast.error(t<string>("UnexpectedError"));
          console.log(err);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    orders.list &&
      !orders.loading &&
      setMappedOrders(
        orders?.list?.data.map((item) => {
          return {
            title: (
              <div className="name-container">
                {item?.items?.map((product: API.CartItem, index) => (
                  <Text key={index}>
                    <strong>
                      {product?.product?.name}
                      {index + 1 !== item?.items?.length && ", "}
                    </strong>
                  </Text>
                ))}
              </div>
            ),
            price: <Text>{item.subtotal} zł</Text>,
            date: item.created_at ? (
              <Text>{format(new Date(item.created_at), "dd.MM.yyyy")}</Text>
            ) : (
              ""
            ),
            actions: (
              <Button
                mode="outline"
                onClick={() => handleDownloadInvoice(item.id)}
              >
                {t<string>("MyProfilePage.Invoice")}
              </Button>
            ),
          };
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  return (
    <ProfileLayout title={t("MyProfilePage.OrdersHistory")}>
      <StyledOrdersList>
        {orders.list?.data.length === 0 ? (
          <Text style={{ paddingLeft: isMobile ? 20 : 40 }}>
            {t<string>("MyProfilePage.OrdersEmpty")}
          </Text>
        ) : (
          <OrdersList mobile={isMobile} data={mappedOrders} />
        )}
      </StyledOrdersList>
      {orders.loading && <Preloader />}
    </ProfileLayout>
  );
};

export default Orders;
