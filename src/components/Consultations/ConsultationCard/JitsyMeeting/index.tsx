import { useCallback, useEffect, useRef } from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { IJitsiMeetExternalApi } from "@jitsi/react-sdk/lib/types";

import * as API from "@escolalms/sdk/lib/types/api";
import useCamera from "@/hooks/meeting/useCamera";
import { getCurrentUser, saveImage } from "@/utils/meeting";
import { toast } from "react-toastify";
import JitsyMeetingMessage from "@/components/Consultations/ConsultationCard/JitsyMeeting/Message";
import { useRoles } from "@/hooks/useRoles";
import { useTranslation } from "react-i18next";

const FRAME_RATE = 0.3;

declare global {
  interface Window {
    api: IJitsiMeetExternalApi;
  }
}

type Props = {
  jitsyData: Omit<API.JitsyData, "yt_url" | "yt_stream_url" | "yt_stream_key">; // or API.JitsyData but yt_stream in this type should be optional

  consultationTermId: number;
  consultationId?: number;
  close?: () => void;
};

const JitsyMeeting: React.FC<Props> = ({
  jitsyData,
  consultationTermId,
  consultationId,
  close,
}) => {
  const { camera, getDataUrl, hasCameraAccess } = useCamera();
  const userConsentedRef = useRef(false);
  const isMeetingActive = useRef(false);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const { isStudent } = useRoles();
  const { t } = useTranslation();

  const handleConferenceJoined = useCallback(() => {
    console.log("Video conference joined");
    isMeetingActive.current = true;
  }, []);

  const handleConferenceLeft = useCallback(() => {
    console.log("Video conference left");
    isMeetingActive.current = false;
    window.location.reload();
  }, []);

  const handleRecordingStatusChanged = useCallback(
    async (
      api: IJitsiMeetExternalApi,
      getDataUrl: () => Promise<string | null>,
      status: {
        on: boolean;
        mode: string;
        error?: string;
        transcription: boolean;
      }
    ) => {
      if (status.on) {
        console.log("Recording has started in mode:", status.mode);

        if (!intervalIdRef.current) {
          intervalIdRef.current = setInterval(async () => {
            const dataUrl = await getDataUrl();
            const currentUser = await getCurrentUser(api);

            if (currentUser) {
              console.log("Saving image...");
              if (dataUrl) {
                saveImage(
                  consultationId ?? 0,
                  consultationTermId,
                  jitsyData.data.userInfo.email,
                  dataUrl,
                  `${currentUser.displayName}.png`
                );
              } else {
                console.error("Failed to get data URL for saving image.");
              }
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
    [consultationId, consultationTermId, jitsyData.data.userInfo.email]
  );

  const onApiReady = useCallback(
    async (api: IJitsiMeetExternalApi) => {
      window.api = api;
      await camera();
      api.addListener("videoConferenceJoined", () => handleConferenceJoined());
      api.addListener("videoConferenceLeft", () => handleConferenceLeft());

      api.on("recordingStatusChanged", (status) => {
        if (getDataUrl && userConsentedRef.current) {
          handleRecordingStatusChanged(
            api,
            async () => await getDataUrl(),
            status
          );
        } else {
          console.error(
            "User has not consented to record video or data url is not available."
          );
        }
      });
    },
    [
      camera,
      handleConferenceJoined,
      handleConferenceLeft,
      getDataUrl,
      handleRecordingStatusChanged,
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
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // here modal

    setTimeout(() => {
      if (hasCameraAccess && isMeetingActive && isStudent) {
        toast(
          <JitsyMeetingMessage
            message={t("ConsultationPage.AdditionalRecording")}
            closeToast={toast.dismiss}
            userConsentedRef={userConsentedRef}
          />,
          {
            position: "top-center",
            autoClose: false,
          }
        );
      }
    }, 5000);

    return () => {};
  }, [hasCameraAccess, isMeetingActive, isStudent, t]);

  return (
    <>
      {jitsyData && (
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
    </>
  );
};

export default JitsyMeeting;
