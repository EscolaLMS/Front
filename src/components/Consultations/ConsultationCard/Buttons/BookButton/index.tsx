import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";

interface Props {
  showBookTerm: (value: boolean) => void;
}

const ConsultationCardBookButton = ({ showBookTerm }: Props) => {
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    showBookTerm(true);
  }, [showBookTerm]);

  return (
    <Button mode="secondary" onClick={onClick}>
      {t("ConsultationPage.Book")}
    </Button>
  );
};

export default ConsultationCardBookButton;
