import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import ConsultationMeetModal from "@/components/Consultations/ConsultationCard/MeetModal";
import { EndMeetingQuestionnairesModal } from "@/components/Consultations/ConsultationCard/EndMeetingQuestionnaires";
import { QuestionnaireModelType } from "@/types/questionnaire";

interface Props {
  consultationTermId: number;
  term: string;
  consultationId?: number;
}

const ConsultationCardJoinButton = ({
  consultationTermId,
  term,
  consultationId,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
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
        consultationId={consultationId}
        term={term}
        setIsEnded={() => setIsEnded(true)}
      />
      {isEnded && (
        <EndMeetingQuestionnairesModal
          entityId={Number(consultationId)}
          entityModel={QuestionnaireModelType.CONSULTATION}
        />
      )}
    </>
  );
};

export default ConsultationCardJoinButton;
