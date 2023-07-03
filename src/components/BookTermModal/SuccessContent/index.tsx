import styled, { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { IconSuccess } from "../../../icons";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

const SuccessContentStyles = styled.div`
  text-align: center;

  .text {
    margin: 1.5rem 0 3rem 0;
  }
`;

interface SuccessContentProps {
  onClick: () => void;
}

const SuccessContent = ({ onClick }: SuccessContentProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <SuccessContentStyles>
      <IconSuccess width="50px" height="50px" color={theme.primaryColor} />
      <Text className="text">{t("ConsultationPage.successTermInfo")}</Text>
      <Button mode="secondary" onClick={onClick} block>
        {t("ConsultationPage.Understand")}
      </Button>
    </SuccessContentStyles>
  );
};

export default SuccessContent;
