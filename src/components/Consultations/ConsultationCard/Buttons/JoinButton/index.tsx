import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import ConsultationMeetModal from "@/components/Consultations/ConsultationCard/MeetModal";

interface Props {
  consultationTermId: number;
}

const ConsultationCardJoinButton = ({ consultationTermId }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Button mode="secondary" onClick={() => setShowModal(true)}>
        {t("ConsultationPage.Join")}
      </Button>
      <ConsultationMeetModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        consultationTermId={consultationTermId}
      />
    </>
  );
};

export default ConsultationCardJoinButton;
