import { useCallback, useEffect, useRef, useState } from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { IJitsiMeetExternalApi } from "@jitsi/react-sdk/lib/types";

import * as API from "@escolalms/sdk/lib/types";
import useCamera from "@/hooks/meeting/useCamera";
import { getCurrentUser } from "@/utils/meeting";
import JitsyMeetingMessage from "@/components/Consultations/ConsultationCard/JitsyMeeting/Message";
import { useRoles } from "@/hooks/useRoles";
import { useTranslation } from "react-i18next";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import styled from "styled-components";
import { API_URL } from "@/config/index";

export const StyledModal = styled(Modal)`
  .rc-dialog-content {
    border-radius: 15px;
  }
  .rc-dialog-body {
    padding: 14px 0;
  }
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
  const [showModal, setShowModal] = useState(false);
  const { camera, getDataUrl, hasCameraAccess } = useCamera();
  const userConsentedRef = useRef(false);
  const isMeetingActive = useRef(false);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const workerRef = useRef<Worker | null>(null);

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
        console.log("Recording has started in mode:", status.mode);

        let screenshots: { dataURL: Blob; timestamp: number }[] = [];

        if (!intervalIdRef.current) {
          intervalIdRef.current = setInterval(async () => {
            const dataUrl = await getDataUrl();
            if (dataUrl) {
              screenshots.push({
                dataURL: dataUrl,
                timestamp: new Date().getTime(),
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
    ]
  );

  const handleReadyToClose = () => {
    if (close) {
      close();
    }
    window.api?.dispose();
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
    if (hasCameraAccess && isMeetingActive && isStudent) {
      setShowModal(true);
    }

    return () => {};
  }, [hasCameraAccess, isMeetingActive, isStudent, t]);

  return (
    <>
      {jitsyData && !showModal && (
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
          }}
        />
      )}
      <StyledModal
        onClose={() => setShowModal(false)}
        visible={showModal}
        animation="zoom"
        maskAnimation="fade"
        destroyOnClose={true}
        width={468}
      >
        <JitsyMeetingMessage
          message={t("ConsultationPage.AdditionalRecording")}
          closeToast={() => setShowModal(false)}
          userConsentedRef={userConsentedRef}
        />
      </StyledModal>
    </>
  );
};

export default JitsyMeeting;
