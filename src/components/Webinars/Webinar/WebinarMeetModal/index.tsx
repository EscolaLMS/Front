import { useCallback, useContext, useEffect, useState } from "react";
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

interface Props {
  onClose: () => void;
  visible: boolean;
  webinarId: number;
}

const JitsiContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const WebinarMeetModal = ({ onClose, visible, webinarId }: Props) => {
  const [webinarMeetData, setWebinarMeetData] = useState<JitsyData | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);

  const { generateWebinarJitsy } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  useEffect(() => {
    const getMeetUrl = async () => {
      setLoading(true);
      if (webinarId) {
        try {
          const res = await generateWebinarJitsy(webinarId);
          if (res.success) {
            setWebinarMeetData((res as { data: JitsyData }).data);
          } else {
            toast(`${t("WebinarPage.ErrorWhileGeneratingUrl")}`, "error");
            onClose();
          }
        } catch (error) {
          console.error(error);
          toast(`${t("WebinarPage.ErrorWhileGeneratingUrl")}`, "error");
        } finally {
          setLoading(false);
        }
      }
    };

    if (visible) {
      getMeetUrl();
    }

    return () => {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("questionnaire_")) {
          localStorage.removeItem(key);
        }
      });
    };
  }, [webinarId, visible, generateWebinarJitsy, t, onClose]);

  useEffect(() => {
    if (visible) setIsEnded(false);
  }, [visible]);

  const handleOnClose = useCallback(() => {
    setIsEnded(true);
    onClose();
    window.location.reload();
  }, [onClose]);

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
            />
            {!loading && webinarMeetData && (
              <JitsyMeeting
                jitsyData={webinarMeetData}
                close={handleOnClose}
                consultationId={webinarId}
                consultationTermId={0}
                term={""}
                onRecordingAvailable={setRecordingUrl}
              />
            )}
          </JitsiContainer>
        </WebinarMeetModalStyles>
      </Modal>

      {isEnded && (
        <EndMeetingQuestionnairesModal
          entityId={webinarId}
          entityModel={QuestionnaireModelType.WEBINAR}
          setIsEnded={setIsEnded}
        />
      )}
    </>
  );
};

export default WebinarMeetModal;
