import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { IJitsiMeetExternalApi } from "@jitsi/react-sdk/lib/types";
import JitsyMeetingMessage from "@/components/Consultations/ConsultationCard/JitsyMeeting/Message";
import { useRoles } from "@/hooks/useRoles";
import { useTranslation } from "react-i18next";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import styled from "styled-components";
import JitsyMeetingSkeleton from "@/components/Skeletons/JitsyMeeting";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API_URL } from "@/config/index";
import useCamera from "@/hooks/meeting/useCamera";

export const StyledModal = styled(Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`;

const JitsyMeeting: React.FC<any> = ({
  jitsyData,
  modelId,
  modelType,
  term,
  consultationTermId,
  close,
  onRecordingAvailable,
}) => {
  const RECOMMENDER_TUTOR_INTERVAL = 15000;
  const ANALYTICS_INTERVAL = 1000;

  const [showMeeting, setShowMeeting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { token } = useContext(EscolaLMSContext);
  const { isStudent } = useRoles();
  const { t } = useTranslation();

  const { camera, getDataUrl } = useCamera();
  const userConsentedRef = useRef(false);
  const isCameraMutedRef = useRef(false);

  const recordingIdRef = useRef<number | null>(null);
  const recordingUrlRef = useRef<string | null>(null);
  const recordingExpiryRef = useRef<number | null>(null);

  const analyticsIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const recommenderIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const apiRef = useRef<IJitsiMeetExternalApi | null>(null);

  const preparePayload = useCallback(
    (action: "start-recording" | "end-recording") => {
      const now = new Date().toISOString();
      const payload: any = {
        id: recordingIdRef.current || 0,
        model_type: modelType,
        model_id: Number(modelId),
        action,
        term: term || now,
      };

      if (action === "start-recording") {
        payload.start_at = now;
      } else {
        payload.end_at = now;
        if (recordingUrlRef.current) {
          payload.url = recordingUrlRef.current;
        }

        if (recordingExpiryRef.current) {
          payload.url_expiration_time_millis = recordingExpiryRef.current;
        }
      }

      if (modelType === "consultation") {
        payload.consultation_term_id = consultationTermId || 0;
      }
      return payload;
    },
    [modelId, modelType, term, consultationTermId]
  );

  const sendRecordingEvent = useCallback(
    async (action: "start-recording" | "end-recording") => {
      if (isStudent) return;
      try {
        const payload = preparePayload(action);

        const response = await fetch(
          "https://rekomender.api.s.wellms.io/api/recommender/meet-recordings",
          {
            method: "POST",
            keepalive: true,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          }
        );

        const result = await response.json();

        if (action === "start-recording" && result?.data?.id) {
          recordingIdRef.current = result.data.id;
        }
      } catch (e) {
        console.error("Recording API error", e);
      }
    },
    [isStudent, token, preparePayload]
  );

  const stopAllIntervals = useCallback(() => {
    if (analyticsIntervalRef.current)
      clearInterval(analyticsIntervalRef.current);
    if (recommenderIntervalRef.current)
      clearInterval(recommenderIntervalRef.current);
    analyticsIntervalRef.current = null;
    recommenderIntervalRef.current = null;
  }, []);

  const startScreenshotFlows = useCallback(() => {
    if (!workerRef.current) {
      workerRef.current = new Worker(
        new URL("../../../../workers/saveImageWorker.ts", import.meta.url),
        { type: "module" }
      );
      workerRef.current.postMessage({ apiUrl: API_URL });
    }

    const userId = jitsyData.data.userInfo.id;

    if (isStudent && !analyticsIntervalRef.current) {
      let screenshots: any[] = [];
      analyticsIntervalRef.current = setInterval(async () => {
        if (isCameraMutedRef.current || !userConsentedRef.current) return;
        const blob = await getDataUrl();
        if (blob) {
          screenshots.push({
            dataURL: blob,
            timestamp: Date.now(),
            userID: userId,
          });
          if (screenshots.length >= 1) {
            workerRef.current?.postMessage({
              modelId: Number(modelId),
              modelType,
              userId,
              userEmail: jitsyData.data.userInfo.email,
              consultationTermId,
              screenshots,
              term,
              token,
            });
            screenshots = [];
          }
        }
      }, ANALYTICS_INTERVAL);
    }

    if (!isStudent && !recommenderIntervalRef.current) {
      recommenderIntervalRef.current = setInterval(async () => {
        if (isCameraMutedRef.current) return;
        const blob = await getDataUrl();
        if (blob) {
          workerRef.current?.postMessage({
            action: "recommender-screens",
            modelId: Number(modelId),
            modelType,
            userId,
            term: term || new Date().toISOString(),
            screenshots: [
              { dataURL: blob, timestamp: Date.now(), userID: userId },
            ],
            token,
          });
        }
      }, RECOMMENDER_TUTOR_INTERVAL);
    }
  }, [
    isStudent,
    modelId,
    modelType,
    term,
    token,
    jitsyData,
    getDataUrl,
    consultationTermId,
  ]);

  const onApiReady = (api: IJitsiMeetExternalApi) => {
    apiRef.current = api;
    camera();

    api.on("recordingLinkAvailable", (event: { link: string; ttl: number }) => {
      recordingUrlRef.current = event.link;
      if (onRecordingAvailable) {
        onRecordingAvailable(event.link);
      }
      if (event.ttl) {
        recordingExpiryRef.current = event.ttl * 1000;
      }
    });

    api.on("recordingStatusChanged", async (status: { on: boolean }) => {
      if (status.on) {
        recordingUrlRef.current = null;
        recordingExpiryRef.current = null;
        startScreenshotFlows();
        await sendRecordingEvent("start-recording");
      } else {
        stopAllIntervals();
        setTimeout(async () => {
          if (recordingIdRef.current) {
            await sendRecordingEvent("end-recording");
            recordingIdRef.current = null;
            recordingUrlRef.current = null;
          }
        }, 500);
      }
    });

    api.addListener("videoMuteStatusChanged", (e: { muted: boolean }) => {
      isCameraMutedRef.current = e.muted;
    });

    api.on("videoConferenceLeft", () => {
      stopAllIntervals();
      if (!isStudent && recordingIdRef.current) {
        sendRecordingEvent("end-recording");
      }
    });
  };

  useEffect(() => {
    return () => {
      stopAllIntervals();

      if (!isStudent && recordingIdRef.current) {
        sendRecordingEvent("end-recording");
      }

      workerRef.current?.terminate();
      if (apiRef.current) {
        apiRef.current.dispose();
      }
    };
  }, [stopAllIntervals, isStudent, sendRecordingEvent]);

  useEffect(() => {
    const handleUnload = () => {
      if (!isStudent && recordingIdRef.current) {
        const payload = preparePayload("end-recording");
        navigator.sendBeacon(
          "https://rekomender.api.s.wellms.io/api/recommender/meet-recordings",
          JSON.stringify(payload)
        );
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [isStudent, preparePayload]);

  useEffect(() => {
    const init = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        isStudent ? setShowModal(true) : setShowMeeting(true);
      } catch {
        setShowMeeting(true);
      }
    };
    init();
  }, [isStudent]);

  const getProperRoomName = () => {
    const regex = /\/([^/?]+)\?/;
    const match = jitsyData.url.match(regex);
    return match ? match[1] : jitsyData.data.roomName;
  };

  return (
    <>
      {showMeeting && (
        <JaaSMeeting
          jwt={jitsyData.data.jwt}
          appId={jitsyData.data.app_id}
          roomName={getProperRoomName()}
          onApiReady={onApiReady}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "calc(100vh - 76px)";
            iframeRef.style.width = "100%";
          }}
          onReadyToClose={async () => {
            stopAllIntervals();
            if (!isStudent && recordingIdRef.current) {
              await sendRecordingEvent("end-recording");
            }
            close?.();
          }}
          configOverwrite={{
            ...jitsyData.data.configOverwrite,
            prejoinConfig: { enabled: false },
            constraints: {
              video: {
                deviceId: localStorage.getItem("preferredCamera") || undefined,
              },
              audio: {
                deviceId: localStorage.getItem("preferredMic") || undefined,
              },
            },
          }}
        />
      )}
      <StyledModal
        visible={showModal}
        onClose={() => [setShowModal(false), setShowMeeting(true)]}
        closable={false}
        maskClosable={false}
        destroyOnClose={true}
        width={468}
      >
        <JitsyMeetingMessage
          message={t("ConsultationPage.AdditionalRecording")}
          closeToast={() => [setShowModal(false), setShowMeeting(true)]}
          userConsentedRef={userConsentedRef}
        />
      </StyledModal>
      {!showMeeting && !showModal && <JitsyMeetingSkeleton />}
    </>
  );
};

export default JitsyMeeting;
