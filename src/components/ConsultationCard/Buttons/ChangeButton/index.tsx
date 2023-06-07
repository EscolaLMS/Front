import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";

interface Props {
  showBookTerm: (value: boolean) => void;
}

const ConsultationCardChangeButton = ({ showBookTerm }: Props) => {
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    showBookTerm(true);
  }, [showBookTerm]);

  return (
    <Button mode="secondary" onClick={onClick} block>
      {t("ConsultationPage.ChangeTerm")}
    </Button>
  );
};

export default ConsultationCardChangeButton;
