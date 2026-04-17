import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { JitsyData } from "@escolalms/sdk/lib/types";
import ContentLoader from "@/components/_App/ContentLoader";
import { WebinarMeetModalStyles } from "./WebinarMeetModalStyles";
import { useTranslation } from "react-i18next";
import { toast } from "@/utils/toast";
import styled from "styled-components";
import JitsyMeeting from "@/components/Consultations/ConsultationCard/JitsyMeeting";
import MeetingAnalyticsOverlay from "@/components/MeetingAnalyticsOverlay/MeetingAnalyticsOverlay";
import { EndMeetingQuestionnairesModal } from "@/components/Consultations/ConsultationCard/EndMeetingQuestionnaires";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { API } from "@escolalms/sdk/lib";
import { useRoles } from "@/hooks/useRoles";

interface Props {
  onClose: () => void;
  visible: boolean;
  webinarId: number;
  webinar?: API.Webinar;
}

const JitsiContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const WebinarMeetModal = ({ onClose, visible, webinarId, webinar }: Props) => {
  const [webinarMeetData, setWebinarMeetData] = useState<JitsyData | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);
  const [participantCount, setParticipantCount] = useState<number>(0);
  const onCloseRef = useRef(onClose);
  const { generateWebinarJitsy } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { isTutor } = useRoles();

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const getMeetUrl = async () => {
      if (!webinarId || !visible || webinarMeetData) return;

      setLoading(true);
      try {
        const res = await generateWebinarJitsy(webinarId);
        if (res.success) {
          setWebinarMeetData((res as { data: JitsyData }).data);
        } else {
          toast(t("WebinarPage.ErrorWhileGeneratingUrl"), "error");
          onCloseRef.current();
        }
      } catch (error) {
        console.error("Error generating Jitsi URL:", error);
        toast(t("WebinarPage.ErrorWhileGeneratingUrl"), "error");
      } finally {
        setLoading(false);
      }
    };
    getMeetUrl();
  }, [webinarId, visible, generateWebinarJitsy, t, webinarMeetData]);

  useEffect(() => {
    return () => {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("questionnaire_")) {
          localStorage.removeItem(key);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (visible) {
      setIsEnded(false);
    }
  }, [visible]);

  const handleOnClose = useCallback(() => {
    setIsEnded(true);
    isTutor && onClose();
  }, [isTutor, onClose]);

  return (
    <>
      <Modal
        visible={visible}
        animation="zoom"
        maskAnimation="fade"
        destroyOnClose={true}
        width="100vw"
        height="100vh"
        bodyStyle={{
          minHeight: "100vh",
          padding: 0,
          background: "black",
        }}
      >
        <WebinarMeetModalStyles>
          {loading && <ContentLoader />}
          <JitsiContainer>
            <MeetingAnalyticsOverlay
              onClose={handleOnClose}
              recordingUrl={recordingUrl}
              modelType="webinar"
              webinar={webinar}
              participantCount={participantCount}
            />
            {!loading && webinarMeetData && (
              <JitsyMeeting
                key={webinarId}
                jitsyData={webinarMeetData}
                modelId={webinarId}
                modelType="webinar"
                close={handleOnClose}
                onRecordingAvailable={setRecordingUrl}
                term={webinar?.active_to ?? ""}
                participantCount={participantCount}
                onParticipantCountChange={setParticipantCount}
                webinar={webinar}
              />
            )}
          </JitsiContainer>
        </WebinarMeetModalStyles>
      </Modal>

      {isEnded && (
        <EndMeetingQuestionnairesModal
          entityId={webinarId}
          entityModel={QuestionnaireModelType.WEBINAR}
          setIsEnded={() => {
            setIsEnded(false);
            onClose();
          }}
        />
      )}
    </>
  );
};

export default WebinarMeetModal;
