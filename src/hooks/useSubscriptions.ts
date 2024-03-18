import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useContext, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

// available subscriptions  ['subscription-all-in', 'subscription']

const useSubscriptions = () => {
  const { fetchProducts, products } = useContext(EscolaLMSContext);

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

  useEffect(() => {
    fetchSubscriptions();
  }, [fetchSubscriptions]);

  return {
    fetchSubscriptions,
    subscriptions: products?.list?.data ?? [],
    isLoading: products.loading,
  };
};

export default useSubscriptions;
