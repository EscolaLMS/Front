import { useContext, useCallback, useState, useMemo } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InvoiceData } from "@escolalms/sdk/lib/types";
import { APP_URL } from "@/config/index";
import { toast } from "@/utils/toast";

export enum PaymentGateway {
  Stripe = "Stripe",
  Przelewy24 = "Przelewy24",
}

const usePayment = () => {
  const {
    config,
    user,
    cart,
    fetchCart,
    removeFromCart,
    payWithStripe,
    payWithP24,
    subscriptionPayWithP24,
    courses,
    realizeVoucher,
    resetCart,
  } = useContext(EscolaLMSContext);

  const { t } = useTranslation();
  const { push, location } = useHistory();
  const [processing, setProcessing] = useState(false);

  const [discountStatus, setDiscountStatus] = useState<
    "granted" | "error" | undefined
    //@ts-ignore TODO: add additional_discount type to SDK types
  >(cart?.value?.additional_discount > 0 ? "granted" : undefined);

  const payByStripe = useCallback(
    async (paymentMethodId: string) => {
      setProcessing(true);
      try {
        if (!user.value?.email) {
          toast(`${t("MissingEmailError")}`, "error");
          setProcessing(false);
          return;
        }
        await payWithStripe(
          paymentMethodId,
          `${APP_URL}/#/cart?status=success`
        );
        setProcessing(false);

        push("/cart?status=success");
        resetCart();
      } catch (error) {
        toast(`${t("UnexpectedError")}`, "error");
        setProcessing(false);
        console.error(error);
      }
    },
    [payWithStripe, push, t, user.value?.email, resetCart]
  );

  const payByP24 = useCallback(
    async (values?: InvoiceData) => {
      setProcessing(true);
      try {
        if (!user.value?.email) {
          toast(`${t("MissingEmailError")}`, "error");
          setProcessing(false);
          return;
        }
        const request = await payWithP24(
          user.value?.email,
          `${APP_URL}/#/cart?status=success`,
          values ? values : undefined
        ); // @ts-ignore
        if (request.data.redirect_url === undefined) {
          toast(`${t("UnexpectedError")}`, "error");
          setProcessing(false);
          return;
        }

        setProcessing(false);
        resetCart();
        // @ts-ignore
        window.open(request.data.redirect_url);
      } catch (error) {
        toast(`${t("UnexpectedError")}`, "error");
        setProcessing(false);
        console.error(error);
      }
    },
    [payWithP24, t, user.value?.email, resetCart]
  );

  const buySubscriptionByP24 = useCallback(
    async (subId: number) => {
      setProcessing(true);

      if (!user.value?.email) {
        toast(`${t("MissingEmailError")}`, "error");
        setProcessing(false);
        return;
      }
      try {
        const request = await subscriptionPayWithP24(
          subId,
          user.value?.email,
          `${APP_URL}/#/cart?status=success`
        );
        // @ts-ignore
        if (request.data.redirect_url === undefined) {
          toast(`${t("UnexpectedError")}`, "error");
          setProcessing(false);
          return;
        }

        setProcessing(false); // @ts-ignore
        window.open(request.data.redirect_url);
        resetCart();
      } catch (error) {
        toast(`${t("UnexpectedError")}`, "error");
      }
    },
    [t, subscriptionPayWithP24, user.value?.email, resetCart]
  );

  const defaultGateway = useMemo(() => {
    return config?.value?.escolalms_payments?.default_gateway ===
      PaymentGateway.Przelewy24
      ? PaymentGateway.Przelewy24
      : PaymentGateway.Stripe;
  }, [config]);

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
    defaultGateway,
  };
};

export default usePayment;
