import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ProfileLayout from "@/components/Profile/ProfileLayout";

const Orders = () => {
  const { user, fetchPayments } = useContext(EscolaLMSContext);
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      fetchPayments();
    }
  }, [history, user, fetchPayments]);

  return <ProfileLayout title="Płatności">płatności...</ProfileLayout>;
};

export default Orders;
