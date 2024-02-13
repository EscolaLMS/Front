import styled from "styled-components";
import Layout from "@/components/_App/Layout";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { useTranslation } from "react-i18next";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const Loader = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <StyledDiv>
        <Title level={3}> {t("Loading")}</Title>
        <Spin />
      </StyledDiv>
    </Layout>
  );
};
