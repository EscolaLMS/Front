import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";

interface Props {
  showBookTerm: (value: boolean) => void;
  inComing: boolean;
  isApproved: boolean;
}

const ConsultationCardChangeButton = ({
  showBookTerm,
  inComing,
  isApproved,
}: Props) => {
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    showBookTerm(true);
  }, [showBookTerm]);

  return (
    <Button mode="secondary" onClick={onClick}>
      {inComing && isApproved
        ? t("ConsultationPage.ChangeTerm")
        : t("ConsultationPage.Book")}
    </Button>
  );
};

export default ConsultationCardChangeButton;
