import { useCallback, useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { JitsyData } from "@escolalms/sdk/lib/types/api";
import ContentLoader from "@/components/_App/ContentLoader";
import { ConsultationMeetModalStyles } from "./MeetModalStyles";
import JitsyMeeting from "@/components/Consultations/ConsultationCard/JitsyMeeting";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { QuestionnairesModal } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Rate";
import { ConsultationModalContext } from "@/components/Consultations/ConsultationCard/Buttons/context";
import { EndMeetingQuestionnairesModal } from "@/components/Consultations/ConsultationCard/EndMeetingQuestionnaires";

interface Props {
  onClose: () => void;
}

const ConsultationMeetModal = ({ onClose }: Props) => {
  const [meetData, setMeetData] = useState<JitsyData | null>(null);
  const [isEnded, setIsEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { generateConsultationJitsy } = useContext(EscolaLMSContext);
  const consultationModalContext = useContext(ConsultationModalContext);

  useEffect(() => {
    const getMeetUrl = async () => {
      setLoading(true);
      if (consultationModalContext?.consultationData) {
        const res = await generateConsultationJitsy(
          consultationModalContext?.consultationData?.consultationTermId,
          consultationModalContext?.consultationData?.term
        );
        if (res.success) {
          setMeetData((res as { data: JitsyData }).data);
        }
        setLoading(false);
      }
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
  }, [consultationModalContext?.consultationData]);

  useEffect(() => {
    setIsEnded(false);
  }, [consultationModalContext?.consultationData]);

  const handleOnClose = useCallback(() => {
    setIsEnded(true);
    consultationModalContext?.setModalOpen?.(false);
    onClose();
  }, [setIsEnded, onClose, consultationModalContext]);

  return (
    <>
      <Modal
        onClose={handleOnClose}
        visible={consultationModalContext?.isModalOpen}
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
              close={handleOnClose}
              consultationId={
                consultationModalContext?.consultationData?.consultationId
              }
              consultationTermId={
                consultationModalContext?.consultationData
                  ?.consultationTermId ?? 0
              }
              term={consultationModalContext?.consultationData?.term ?? ""}
            />
          )}
        </ConsultationMeetModalStyles>
        <QuestionnairesModal
          entityId={Number(
            consultationModalContext?.consultationData?.consultationId
          )}
          entityModel={QuestionnaireModelType.CONSULTATION}
        />
      </Modal>
      {isEnded && (
        <EndMeetingQuestionnairesModal
          entityId={Number(
            consultationModalContext?.consultationData?.consultationId
          )}
          entityModel={QuestionnaireModelType.CONSULTATION}
          setIsEnded={setIsEnded}
        />
      )}
    </>
  );
};

export default ConsultationMeetModal;
