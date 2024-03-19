import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useContext, useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

// available subscriptions  ['subscription-all-in', 'subscription']

const useSubscriptions = () => {
  const {
    fetchProducts,
    fetchMyProducts,
    products,
    userProducts,
    user,
    attachProduct,
  } = useContext(EscolaLMSContext);

  const { t } = useTranslation();

  const fetchSubscriptions = useCallback(async () => {
    try {
      await fetchProducts({
        type: "subscription-all-in",
        pageSize: 500,
      });
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      toast.error(String(t("UnexpectedError")));
    }
  }, [fetchProducts, t]);

  const fetchMySubscriptions = useCallback(async () => {
    try {
      await fetchMyProducts({
        type: "subscription-all-in",
        pageSize: 500,
      });
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      toast.error(String(t("UnexpectedError")));
    }
  }, [fetchMyProducts, t]);

  const getCheapestSubscription = useMemo(() => {
    return products?.list?.data?.reduce((acc, curr) => {
      if (acc.price > curr.price) {
        return curr;
      }
      return acc;
    }, products?.list?.data[0]);
  }, [products?.list?.data]);

  const getActiveSubscription = useMemo(() => {
    // TODO: when ts models are ready, remove  this comment
    // @ts-ignore
    return userProducts?.list?.data?.find((product) => product?.is_active);
  }, [userProducts?.list?.data]);

  useEffect(() => {
    if (user.value?.id) {
      fetchMySubscriptions();
    }
    fetchSubscriptions();
  }, [fetchSubscriptions, fetchMySubscriptions, user.value?.id]);

  return {
    fetchSubscriptions,
    fetchMySubscriptions,
    userProducts: userProducts?.list?.data ?? [],
    subscriptions: products?.list?.data ?? [],
    isLoading: products.loading,
    getCheapestSubscription,
    getActiveSubscription,
    attachProduct,
  };
};

export default useSubscriptions;
