import { useContext, useEffect, useCallback, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import routeRoutes from "@/components/Routes/routes";
import { InvoiceData } from "@escolalms/sdk/lib/types/api";
import { APP_URL } from "@/config/index";

const usePayment = () => {
  const {
    user,
    cart,
    fetchCart,
    removeFromCart,
    payWithStripe,
    payWithP24,
    courses,
    realizeVoucher,
  } = useContext(EscolaLMSContext);

  const { t } = useTranslation();
  const { push, location } = useHistory();
  const [processing, setProcessing] = useState(false);

  const [discountStatus, setDiscountStatus] = useState<
    "granted" | "error" | undefined
    //@ts-ignore TODO: add additional_discount type to SDK types
  >(cart.value.additional_discount > 0 ? "granted" : undefined);

  useEffect(() => {
    if (!user.loading && !user.value) {
      push(routeRoutes.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payByStripe = useCallback(
    async (paymentMethodId: string) => {
      setProcessing(true);
      try {
        if (!user.value?.email) {
          toast.error(`${t("MissingEmailError")}`);
          setProcessing(false);
          return;
        }
        await payWithStripe(
          paymentMethodId,
          `${APP_URL}/#/cart?status=success`
        );
        setProcessing(false);
        push("/cart?status=success");
      } catch (error) {
        toast.error(`${t("UnexpectedError")}`);
        setProcessing(false);
        console.error(error);
      }
    },
    [payWithStripe, push, t, user.value?.email]
  );

  const payByP24 = useCallback(
    async (values?: InvoiceData) => {
      setProcessing(true);
      try {
        if (!user.value?.email) {
          toast.error(`${t("MissingEmailError")}`);
          setProcessing(false);
          return;
        }
        const request = await payWithP24(
          user.value?.email,
          `${APP_URL}/#/cart?status=success`,
          values ? values : undefined
        );
        if (request.data.redirect_url === undefined) {
          toast.error(`${t("UnexpectedError")}`);
          setProcessing(false);
          return;
        }
        setProcessing(false);
        window.open(request.data.redirect_url);
      } catch (error) {
        toast.error(`${t("UnexpectedError")}`);
        setProcessing(false);
        console.error(error);
      }
    },
    [payWithP24, t, user.value?.email]
  );

  const buySubscriptionByP24 = useCallback(
    async (subId: string) => {
      setProcessing(true);
      try {
        console.log("buySubscriptionByP24", subId);
      } catch (error) {
        toast.error(`${t("UnexpectedError")}`);
      }
    },
    [t]
  );

  return {
    user,
    processing,
    setProcessing,
    discountStatus,
    payByStripe,
    payByP24,
    removeFromCart,
    courses,
    cart,
    location,
    push,
    realizeVoucher,
    setDiscountStatus,
    fetchCart,
    buySubscriptionByP24,
  };
};

export default usePayment;
