import React, { useCallback, useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { Orders as OrdersList } from "@escolalms/components/lib/components/molecules/Orders/Orders";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { API } from "@escolalms/sdk/lib";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { formatDate } from "@/utils/date";
import Pagination from "@/components/Common/Pagination";
import OrdersSkeleton from "@/components/Skeletons/Orders";

const StyledOrdersList = styled.section`
  margin-top: 20px;

  @media (max-width: 991px) {
    margin-top: 0;
  }
  .name-container {
    p {
      display: inline;
      margin: 0;
    }
  }

  * {
    box-sizing: border-box;
  }
`;

const Orders = () => {
  const { orders, fetchOrders, fetchOrderInvoice } =
    useContext(EscolaLMSContext);

  const { t } = useTranslation();
  const [loadingId, setLoadingId] = useState(-1);

  useEffect(() => {
    fetchOrders({
      page: 1,
      order_by: "created_at",
      order: "DESC",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchOrders({
        page,
        order_by: "created_at",
        order: "DESC",
      });
    },
    [fetchOrders]
  );

  const handleDownloadInvoice = useCallback(
    async (id: number) => {
      setLoadingId(id);
      try {
        const response = await fetchOrderInvoice(id);
        if (response) {
          // create hidden link
          const element = document.createElement("a");
          document.body.appendChild(element);
          element.setAttribute(
            "href",
            URL.createObjectURL(new Blob([response]))
          );
          element.setAttribute(
            "download",
            `${t("MyProfilePage.InvoiceTitle")} ${id}.pdf`
          );
          element.style.display = "";
          element.click();
          document.body.removeChild(element);
          setLoadingId(-1);
        }
      } catch (error) {
        setLoadingId(-1);
        toast.error(t<string>("UnexpectedError"));
        console.log(error);
      }
    },
    [fetchOrderInvoice, t]
  );

  return (
    <ProfileLayout title={t("MyProfilePage.OrdersHistory")}>
      <StyledOrdersList>
        {!orders.loading && orders.list?.data.length === 0 && (
          <Text>{t<string>("MyProfilePage.OrdersEmpty")}</Text>
        )}
        {!orders.loading &&
          !orders.error &&
          orders &&
          orders.list?.data &&
          orders.list?.data.length > 0 && (
            <OrdersList
              mobile={isMobile}
              data={(orders?.list?.data || []).map((item) => {
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
                  status: <Text>{t(`OrderStatus.${item.status}`)}</Text>,
                  price: <Text>{item.subtotal} zł</Text>,
                  date: item.created_at ? (
                    <Text>{formatDate(item.created_at)}</Text>
                  ) : (
                    ""
                  ),
                  actions: (
                    <Button
                      mode="outline"
                      onClick={() => handleDownloadInvoice(item.id)}
                      loading={loadingId === item.id}
                    >
                      {t<string>("MyProfilePage.Invoice")}
                    </Button>
                  ),
                };
              })}
            />
          )}

        {orders.loading && <OrdersSkeleton />}
        {Number(orders?.list?.meta?.total) >
          Number(orders?.list?.meta?.per_page) && (
          <Pagination
            total={Number(orders?.list?.meta?.total)}
            perPage={Number(orders?.list?.meta?.per_page)}
            currentPage={Number(orders?.list?.meta?.current_page)}
            onPage={handlePageChange}
          />
        )}
      </StyledOrdersList>
    </ProfileLayout>
  );
};

export default Orders;
