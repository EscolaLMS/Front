import { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";

interface Props {
  consultationTermId: number;
}

const ConsultationCardJoinButton = ({ consultationTermId }: Props) => {
  const { t } = useTranslation();
  const { generateConsultationJitsy } = useContext(EscolaLMSContext);

  const onClick = useCallback(async () => {
    const response = await generateConsultationJitsy(consultationTermId);
    if (response.success) {
      window.open(response.data.url, "_blank", "noreferrer");
    }
  }, [consultationTermId, generateConsultationJitsy]);

  return (
    <Button mode="secondary" onClick={onClick}>
      {t("ConsultationPage.Join")}
    </Button>
  );
};

export default ConsultationCardJoinButton;
