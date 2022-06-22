import Layout from "@/components/_App/Layout";
import { Button, Text } from "@escolalms/components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledErrorPage = styled.div`
  min-height: calc(100vh - 150px);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ErrorBox: React.FC<{ error: string }> = ({ error }) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Layout>
      <StyledErrorPage>
        <Text size="16">
          <strong>{t("CoursePage.ErrorOccurred")}</strong>
        </Text>
        <Text size="14">{error}</Text>
        <hr />
        <Button mode="secondary" onClick={() => history.push("/courses")}>
          {t("CoursePage.SeeOtherCourses")}
        </Button>
      </StyledErrorPage>
    </Layout>
  );
};
export default ErrorBox;
