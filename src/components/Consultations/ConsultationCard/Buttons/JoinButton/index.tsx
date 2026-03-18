import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { ConsultationModalContext } from "@/components/Consultations/ConsultationCard/Buttons/context";

interface Props {
  consultationTermId: number;
  term: string;
  consultationId?: number;
  name?: string;
}

const ConsultationCardJoinButton = ({
  consultationTermId,
  term,
  consultationId,
  name,
}: Props) => {
  const consultationModalContext = useContext(ConsultationModalContext);

  const { t } = useTranslation();

  return (
    <>
      <Button
        mode="secondary"
        onClick={() => [
          consultationModalContext?.setConsultationData({
            consultationTermId,
            term,
            consultationId,
            name,
          }),
          consultationModalContext?.setModalOpen(true),
        ]}
      >
        {t("ConsultationPage.Join")}
      </Button>
    </>
  );
};

export default ConsultationCardJoinButton;
