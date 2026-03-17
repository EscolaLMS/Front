import { useCallback, useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { JitsyData } from "@escolalms/sdk/lib/types";
import ContentLoader from "@/components/_App/ContentLoader";
import { ConsultationMeetModalStyles } from "./MeetModalStyles";
import JitsyMeeting from "@/components/Consultations/ConsultationCard/JitsyMeeting";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { QuestionnairesModal } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Rate";
import { ConsultationModalContext } from "@/components/Consultations/ConsultationCard/Buttons/context";
import { EndMeetingQuestionnairesModal } from "@/components/Consultations/ConsultationCard/EndMeetingQuestionnaires";
import MeetingAnalyticsOverlay from "@/components/MeetingAnalyticsOverlay/MeetingAnalyticsOverlay";
import styled from "styled-components";

interface Props {
  onClose: () => void;
}

const JitsiContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ConsultationMeetModal = ({ onClose }: Props) => {
  const [meetData, setMeetData] = useState<JitsyData | null>(null);
  const [isEnded, setIsEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { generateConsultationJitsy } = useContext(EscolaLMSContext);
  const consultationModalContext = useContext(ConsultationModalContext);
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);

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
    window.location.reload();
  }, [setIsEnded, onClose, consultationModalContext]);

  return (
    <>
      <Modal
        visible={consultationModalContext?.isModalOpen}
        animation="zoom"
        maskAnimation="fade"
        width="100vw"
        height="100vh"
        bodyStyle={{
          minHeight: "100vh",
          padding: 0,
          background: "black",
        }}
      >
        <ConsultationMeetModalStyles>
          {loading && <ContentLoader />}
          <JitsiContainer>
            <MeetingAnalyticsOverlay
              onClose={handleOnClose}
              recordingUrl={recordingUrl}
            />
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
                onRecordingAvailable={setRecordingUrl}
              />
            )}
          </JitsiContainer>
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
