import { Blob } from "buffer";
import { useState, useRef, useEffect, useCallback } from "react";
import { WorkerResponse } from "src/workers/dataUrlWorker";

// Enums
enum cameraPermissions {
  GRANTED = "granted",
}

const useCamera = () => {
  const [hasCameraAccess, setHasCameraAccess] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const workerRef = useRef<Worker | null>(null); // Web Worker ref

  const getCameraStream = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });
      setHasCameraAccess(true);
      streamRef.current = stream;

      // Create and configure video element
      if (!videoRef.current) {
        videoRef.current = document.createElement("video");
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
      }

      videoRef.current.srcObject = stream;
      videoRef.current.play();

      return videoRef.current; // Return the video element if needed
    } catch (err) {
      console.error("Camera access denied or not available:", err);
      setHasCameraAccess(false); // Camera access denied
      return null;
    }
  }, []);

  const restartVideoTrack = useCallback(async () => {
    if (streamRef.current) {
      // Stop all existing tracks in the stream
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    // Re-attempt to get the camera stream
    return await getCameraStream();
  }, [getCameraStream]);

  const camera = async () => {
    return await getCameraStream();
  };

  const getDataUrl = async (): Promise<Blob | null> => {
    if (videoRef.current && streamRef.current) {
      const canvasElement = document.createElement("canvas");
      const ctx = canvasElement.getContext("2d");

      const track = streamRef.current.getVideoTracks()[0];
      const settings = track.getSettings();

      canvasElement.height = settings.height || 720;
      canvasElement.width = settings.width || 1280;

      ctx?.drawImage(
        videoRef.current,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );

      const imageBitmap = await createImageBitmap(canvasElement);

      if (!workerRef.current) {
        workerRef.current = new Worker(
          new URL("../../workers/dataUrlWorker.ts", import.meta.url),
          {
            type: "module",
          }
        );
      }

      return new Promise((resolve, reject) => {
        workerRef.current!.onmessage = (
          event: MessageEvent<WorkerResponse>
        ) => {
          const { success, blob, error } = event.data;

          if (success && blob) {
            resolve(blob);
          } else {
            reject(error || "Unknown error occurred in Web Worker.");
          }
        };

        workerRef.current!.onerror = (err) => {
          console.error("Worker error:", err);
          reject("Web Worker encountered an error.");
        };

        workerRef.current!.postMessage({
          canvasData: imageBitmap,
          width: canvasElement.width,
          height: canvasElement.height,
        });
      });
    }
    return null;
  };

  useEffect(() => {
    const handlePermissionChange = async () => {
      const permissionStatus = await navigator.permissions.query({
        name: "camera" as PermissionName,
      });

      // If permission is granted, restart the video track
      if (permissionStatus.state === cameraPermissions.GRANTED) {
        await restartVideoTrack();
      }

      // Listen for permission changes
      permissionStatus.onchange = async () => {
        if (permissionStatus.state === cameraPermissions.GRANTED) {
          await restartVideoTrack();
        } else {
          setHasCameraAccess(false);
        }
      };
    };

    handlePermissionChange();

    return () => {
      // Clean up Workera
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, [restartVideoTrack]);

  return { camera, hasCameraAccess, restartVideoTrack, getDataUrl };
};

export default useCamera;
