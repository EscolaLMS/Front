import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { JitsyData } from "@escolalms/sdk/lib/types/api";
import ContentLoader from "@/components/_App/ContentLoader";
import { ConsultationMeetModalStyles } from "./MeetModalStyles";
import JitsyMeeting from "@/components/Consultations/ConsultationCard/JitsyMeeting";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { QuestionnairesModal } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Rate";

interface Props {
  onClose: () => void;
  visible: boolean;
  consultationTermId: number;
  term: string;
  consultationId?: number;
}

const ConsultationMeetModal = ({
  onClose,
  visible,
  consultationId,
  term,
  consultationTermId,
}: Props) => {
  const [meetData, setMeetData] = useState<JitsyData | null>(null);
  const [loading, setLoading] = useState(false);
  const { generateConsultationJitsy } = useContext(EscolaLMSContext);

  console.log(term);

  useEffect(() => {
    const getMeetUrl = async () => {
      setLoading(true);
      const res = await generateConsultationJitsy(consultationTermId, term);

      if (res.success) {
        setMeetData((res as { data: JitsyData }).data);
      }
      setLoading(false);
    };

    getMeetUrl();
    return () => {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("questionnaire_")) {
          localStorage.removeItem(key);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      onClose={onClose}
      visible={visible}
      animation="zoom"
      maskAnimation="fade"
      destroyOnClose={true}
      width="100vw"
      height="100vh"
      bodyStyle={{
        minHeight: "93vh",
      }}
    >
      <ConsultationMeetModalStyles>
        {loading && <ContentLoader />}
        {!loading && meetData && (
          <JitsyMeeting
            jitsyData={meetData}
            close={onClose}
            consultationId={consultationId}
            consultationTermId={consultationTermId}
            term={term}
          />
        )}
      </ConsultationMeetModalStyles>
      <QuestionnairesModal
        entityId={Number(consultationId)}
        entityModel={QuestionnaireModelType.CONSULTATION}
      />
    </Modal>
  );
};

export default ConsultationMeetModal;
