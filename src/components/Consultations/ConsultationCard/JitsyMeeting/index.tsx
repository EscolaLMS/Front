import { useCallback, useEffect, useRef, useState } from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { IJitsiMeetExternalApi } from "@jitsi/react-sdk/lib/types";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

import * as API from "@escolalms/sdk/lib/types";
import useCamera, { cameraPermissions } from "@/hooks/meeting/useCamera";
import { getCurrentUser } from "@/utils/meeting";
import JitsyMeetingMessage from "@/components/Consultations/ConsultationCard/JitsyMeeting/Message";
import { useRoles } from "@/hooks/useRoles";
import { useTranslation } from "react-i18next";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import styled from "styled-components";
import { API_URL } from "@/config/index";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import JitsyMeetingSkeleton from "@/components/Skeletons/JitsyMeeting";

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

const RecordButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const FRAME_RATE = 3;
const SEND_INTERVAL = 3000;

declare global {
  interface Window {
    api: IJitsiMeetExternalApi;
  }
}

type Props = {
  jitsyData: Omit<API.JitsyData, "yt_url" | "yt_stream_url" | "yt_stream_key">; // or API.JitsyData but yt_stream in this type should be optional
  term: string;
  consultationTermId: number;
  consultationId?: number;
  close?: () => void;
};

const JitsyMeeting: React.FC<Props> = ({
  jitsyData,
  term,
  consultationTermId,
  consultationId,
  close,
}) => {
  const [showMeeting, setShowMeeting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { camera, getDataUrl, hasCameraAccess, cameraAccessStatus } =
    useCamera();
  const userConsentedRef = useRef(false);
  const isMeetingActive = useRef(false);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);

  const { isStudent } = useRoles();
  const { t } = useTranslation();

  const handleConferenceJoined = useCallback(() => {
    console.log("Video conference joined");
    isMeetingActive.current = true;
  }, []);

  const handleConferenceLeft = useCallback(() => {
    console.log("Video conference left");
    isMeetingActive.current = false;
  }, []);

  interface RecordingLinkAvailableEvent {
    link: string;
  }

  const handleRecordingLinkAvailable = useCallback(
    (event: RecordingLinkAvailableEvent) => {
      if (event.link) {
        setRecordingUrl(event.link);
      }
    },
    []
  );

  const saveImagesInWorker = useCallback(
    (
      consultationId: number,
      consultationTermId: number,
      userEmail: string,
      userId: number,
      screenshots: { dataURL: Blob; timestamp: number }[],
      term: string
    ) => {
      if (!workerRef.current) {
        workerRef.current = new Worker(
          new URL("../../../../workers/saveImageWorker.ts", import.meta.url),
          { type: "module" }
        );
        workerRef.current.postMessage({
          apiUrl: API_URL, // Ensure it's available in window
        });
      }

      workerRef.current.onmessage = (event: MessageEvent) => {
        const { success, error } = event.data;

        if (success) {
          console.log("Images saved successfully via Worker.");
        } else {
          console.error("Error saving images in Worker:", error);
        }
      };

      workerRef.current.onerror = (err) => {
        console.error("Worker encountered an error:", err);
      };

      workerRef.current.postMessage({
        consultationId,
        consultationTermId,
        userEmail,
        userId,
        screenshots,
        term,
      });
    },
    []
  );

  const handleRecordingStatusChanged = useCallback(
    async (
      api: IJitsiMeetExternalApi,
      getDataUrl: () => Promise<Blob | null>,
      status: {
        on: boolean;
        mode: string;
        error?: string;
        transcription: boolean;
      }
    ) => {
      if (status.on) {
        console.log("Recording has started in mode:", status);

        let screenshots: {
          dataURL: Blob;
          timestamp: number;
          userID: number;
          consultationId: number | undefined;
        }[] = [];

        if (!intervalIdRef.current) {
          intervalIdRef.current = setInterval(async () => {
            const dataUrl = await getDataUrl();
            if (dataUrl) {
              screenshots.push({
                dataURL: dataUrl,
                timestamp: new Date().getTime(),
                userID: jitsyData.data.userInfo.id,
                consultationId,
              });

              if (screenshots.length === FRAME_RATE * (SEND_INTERVAL / 1000)) {
                const currentUser = await getCurrentUser(api);

                if (currentUser) {
                  console.log("Saving images...");

                  saveImagesInWorker(
                    consultationId ?? 0,
                    consultationTermId,
                    jitsyData.data.userInfo.email,
                    // @ts-ignore
                    jitsyData.data.userInfo.id,
                    screenshots,
                    term
                  );
                  screenshots = [];
                } else {
                  console.error(
                    "Failed to get current user for saving images."
                  );
                }
              }
            } else {
              console.error("Failed to get data URL for screenshot.");
            }
          }, 1000 / FRAME_RATE);
        }
      } else {
        console.log("Recording has stopped.");
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
          intervalIdRef.current = null;
        }

        if (status.error) {
          console.error("Recording error:", status.error);
        }
      }
    },
    [
      consultationId,
      consultationTermId,
      jitsyData.data.userInfo.email, // @ts-ignore
      jitsyData.data.userInfo.id,
      term,
      saveImagesInWorker,
    ]
  );

  const onApiReady = useCallback(
    async (api: IJitsiMeetExternalApi) => {
      window.api = api;
      await camera();

      api.addListener("videoConferenceJoined", () => handleConferenceJoined());
      api.addListener("videoConferenceLeft", () => handleConferenceLeft());

      api.addListener("recordingLinkAvailable", (event) =>
        handleRecordingLinkAvailable(event)
      );
      api.on("recordingStatusChanged", (status) => {
        if (userConsentedRef.current)
          handleRecordingStatusChanged(
            api,
            async () => (await getDataUrl()) as Blob,
            status
          );
      });
    },
    [
      camera,
      handleConferenceJoined,
      handleConferenceLeft,
      getDataUrl,
      handleRecordingStatusChanged,
      userConsentedRef,
      handleRecordingLinkAvailable,
    ]
  );

  const handleReadyToClose = () => {
    if (close) {
      close();
    }
    window.api?.dispose();
    window.location.reload();
  };

  const getProperRoomName = useCallback(() => {
    const regex = /\/([^/?]+)\?/;
    const match = jitsyData.url.match(regex);

    // If there's a match, return the captured group, otherwise return null
    return match ? match[1] : jitsyData.data.roomName;
  }, [jitsyData]);

  useEffect(() => {
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const checkPermissions = async () => {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      try {
        if (hasCameraAccess && isMeetingActive && isStudent) {
          setShowModal(true);
        } else {
          setShowModal(false);
          if (!isStudent) {
            setShowMeeting(true);
          }
        }
      } catch (error) {
        console.error("Error checking permissions:", error);
        setShowModal(false);
      }
    };

    checkPermissions();
  }, [hasCameraAccess, isMeetingActive, isStudent, t]);

  return (
    <>
      {jitsyData && !showModal && showMeeting && (
        <JaaSMeeting
          jwt={jitsyData.data.jwt}
          appId={jitsyData.data.app_id}
          roomName={getProperRoomName()}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "calc(100vh - 76px)";
            iframeRef.style.width = "100%";
          }}
          onApiReady={onApiReady}
          onReadyToClose={handleReadyToClose}
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
        onClose={() => [setShowModal(false), setShowMeeting(true)]}
        visible={showModal}
        animation="zoom"
        maskAnimation="fade"
        destroyOnClose={true}
        width={468}
        closable={false}
        maskClosable={false}
      >
        <JitsyMeetingMessage
          message={t("ConsultationPage.AdditionalRecording")}
          closeToast={() => [setShowModal(false), setShowMeeting(true)]}
          userConsentedRef={userConsentedRef}
        />
      </StyledModal>
      {!showModal && !showMeeting && <JitsyMeetingSkeleton />}
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
      {recordingUrl && !isStudent && (
        <RecordButtonWrapper>
          <Button
            onClick={() => recordingUrl && window.open(recordingUrl, "_blank")}
          >
            <Text>{t("ConsultationPage.DownloadRecording")}</Text>
          </Button>
        </RecordButtonWrapper>
      )}
    </>
  );
};

export default JitsyMeeting;
