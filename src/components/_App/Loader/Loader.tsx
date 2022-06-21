import styled from "styled-components";
import Layout from "@/components/_App/Layout";
import { Spin, Title } from "@escolalms/components";
import { useTranslation } from "react-i18next";

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
