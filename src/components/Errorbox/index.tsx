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

  .buttons-block {
    display: grid;
    gap: 8px;
  }
`;

interface AlternativeButton {
  goTo: string;
  goToText: string;
}

interface Props {
  error: string;
  goTo?: string;
  goToText?: string;
  alternativeButton?: AlternativeButton;
}

const ErrorBox: React.FC<Props> = ({
  error,
  goTo = "/courses",
  goToText,
  alternativeButton,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const buttonText = goToText ?? t("CoursePage.SeeOtherCourses");

  return (
    <Layout>
      <StyledErrorPage>
        <Text size="16">
          <strong>{t("CoursePage.ErrorOccurred")}</strong>
        </Text>
        <Text size="14">{error}</Text>
        <hr />
        <div className="buttons-block">
          <Button mode="secondary" onClick={() => history.push(goTo)}>
            {buttonText}
          </Button>
          {alternativeButton && (
            <Button
              mode="outline"
              onClick={() => history.push(alternativeButton.goTo)}
            >
              {alternativeButton.goToText}
            </Button>
          )}
        </div>
      </StyledErrorPage>
    </Layout>
  );
};
export default ErrorBox;
