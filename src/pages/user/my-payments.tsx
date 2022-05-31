import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "../../components/_App/Layout";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import styled from "styled-components";

const StyledProfile = styled.section``;

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

  return (
    <Layout>
      <StyledProfile>
        <ProfileHeader title="Płatności" />
        <div>Płatności...</div>
      </StyledProfile>
    </Layout>
  );
};

export default Orders;
