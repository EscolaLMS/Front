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
import useCamera, { cameraPermissions } from "@/hooks/meeting/useCamera";
import { API } from "@escolalms/sdk/lib";
import { IMeetRecording } from "@/components/Consultations/ConsultationCard/JitsyMeeting/types";
import {
  JITSY_ANALYTICS_INTERVAL,
  JITSY_TUTOR_INTERVAL,
} from "@/utils/constants";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";

export const StyledModal = styled(Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
`;

const StyledAccessWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  .button-reload {
    margin-top: 20px;
  }
`;

type JitsyMeetingProps = {
  jitsyData: Omit<API.JitsyData, "yt_url" | "yt_stream_url" | "yt_stream_key">;
  term: string;
  consultationTermId?: number;
  consultationId?: number;
  close?: () => void;
  onRecordingAvailable?: (url: string) => void;
  modelId: number;
  modelType: "consultation" | "webinar";
};

const JitsyMeeting: React.FC<JitsyMeetingProps> = ({
  jitsyData,
  modelId,
  modelType,
  term,
  consultationTermId,
  close,
  onRecordingAvailable,
}) => {
  const [showMeeting, setShowMeeting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { token } = useContext(EscolaLMSContext);
  const { isStudent } = useRoles();
  const { t } = useTranslation();

  const { camera, getDataUrl, cameraAccessStatus } = useCamera();
  const userConsentedRef = useRef(false);
  const isCameraMutedRef = useRef(false);

  const recordingIdRef = useRef<number | null>(null);
  const recordingUrlRef = useRef<string | null>(null);
  const recordingExpiryRef = useRef<number | null>(null);

  const analyticsIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const recommenderIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const apiRef = useRef<IJitsiMeetExternalApi | null>(null);
  const recordingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const preparePayload = useCallback(
    (action: "start-recording" | "end-recording") => {
      const now = new Date().toISOString();
      const payload: IMeetRecording = {
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

      return payload;
    },
    [modelId, modelType, term]
  );

  const sendRecordingEvent = useCallback(
    async (action: "start-recording" | "end-recording") => {
      if (isStudent) return;
      try {
        const payload = preparePayload(action);

        const response = await fetch(
          `${API_URL}/api/recommender/meet-recordings`,
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
    if (analyticsIntervalRef.current) {
      clearInterval(analyticsIntervalRef.current);
      analyticsIntervalRef.current = null;
    }
    if (recommenderIntervalRef.current) {
      clearInterval(recommenderIntervalRef.current);
      recommenderIntervalRef.current = null;
    }

    if (recordingTimeoutRef.current) {
      clearTimeout(recordingTimeoutRef.current);
      recordingTimeoutRef.current = null;
    }
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
    const userEmail = jitsyData.data.userInfo.email;

    if (isStudent && !analyticsIntervalRef.current) {
      analyticsIntervalRef.current = setInterval(async () => {
        if (isCameraMutedRef.current || !userConsentedRef.current) return;

        const blob = await getDataUrl();
        if (blob) {
          const screenshotPayload = {
            dataURL: blob,
            timestamp: Date.now(),
            userID: userId,
          };

          workerRef.current?.postMessage({
            modelId: Number(modelId),
            modelType,
            userId,
            userEmail,
            consultationTermId,
            screenshots: [screenshotPayload],
            term,
            token,
          });
        }
      }, JITSY_ANALYTICS_INTERVAL);
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
              {
                dataURL: blob,
                timestamp: Date.now(),
                userID: userId,
              },
            ],
            token,
          });
        }
      }, JITSY_TUTOR_INTERVAL);
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

  const onApiReady = useCallback(
    async (api: IJitsiMeetExternalApi) => {
      apiRef.current = api;
      await camera();

      api.on(
        "recordingLinkAvailable",
        (event: { link: string; ttl: number }) => {
          recordingUrlRef.current = event.link;
          if (onRecordingAvailable) {
            onRecordingAvailable(event.link);
          }
          if (event.ttl) {
            recordingExpiryRef.current = event.ttl * 1000;
          }
        }
      );

      api.on("recordingStatusChanged", async (status: { on: boolean }) => {
        if (status.on) {
          recordingUrlRef.current = null;
          recordingExpiryRef.current = null;
          startScreenshotFlows();
          await sendRecordingEvent("start-recording");
        } else {
          stopAllIntervals();
          if (recordingTimeoutRef.current)
            clearTimeout(recordingTimeoutRef.current);

          recordingTimeoutRef.current = setTimeout(async () => {
            if (recordingIdRef.current) {
              await sendRecordingEvent("end-recording");
              recordingIdRef.current = null;
              recordingUrlRef.current = null;
            }
            recordingTimeoutRef.current = null;
          }, 500);
        }
      });

      api.on("videoMuteStatusChanged", (e: { muted: boolean }) => {
        isCameraMutedRef.current = e.muted;
      });

      api.on("videoConferenceLeft", () => {
        stopAllIntervals();
        if (!isStudent && recordingIdRef.current) {
          sendRecordingEvent("end-recording");
        }
      });
    },
    [
      camera,
      isStudent,
      onRecordingAvailable,
      sendRecordingEvent,
      startScreenshotFlows,
      stopAllIntervals,
    ]
  );

  useEffect(() => {
    return () => {
      stopAllIntervals();

      if (!isStudent && recordingIdRef.current) {
        sendRecordingEvent("end-recording");
      }

      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }

      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
    };
  }, [stopAllIntervals, isStudent, sendRecordingEvent]);

  useEffect(() => {
    const handleUnload = () => {
      if (!isStudent && recordingIdRef.current) {
        const payload = preparePayload("end-recording");
        navigator.sendBeacon(
          `${API_URL}/api/recommender/meet-recordings`,
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
          interfaceConfigOverwrite={{
            ...jitsyData.data.interfaceConfigOverwrite,
          }}
          configOverwrite={{
            ...jitsyData.data.configOverwrite,
            prejoinConfig: {
              enabled: false,
            },
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
        animation="zoom"
        maskAnimation="fade"
      >
        <JitsyMeetingMessage
          message={t("ConsultationPage.AdditionalRecording")}
          closeToast={() => [setShowModal(false), setShowMeeting(true)]}
          userConsentedRef={userConsentedRef}
        />
      </StyledModal>
      {!showMeeting && !showModal && <JitsyMeetingSkeleton />}
      {!showModal &&
        !showMeeting &&
        cameraAccessStatus === cameraPermissions.DENIED && (
          <StyledAccessWrapper>
            <Text>{t("ConsultationPage.BlockedAccess")}</Text>
            <Text>{t("ConsultationPage.BlockedAccessEnable")}</Text>
            <div className="button-reload">
              <Button onClick={() => window.location.reload()}>
                {t("ConsultationPage.ReloadPage")}
              </Button>
            </div>
          </StyledAccessWrapper>
        )}
    </>
  );
};

export default JitsyMeeting;
