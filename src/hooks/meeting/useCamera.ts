import { useState, useRef, useEffect, useCallback } from "react";

enum cameraPermissions {
  GRANTED = "granted",
  // DENIED = "denied",
}

const useCamera = () => {
  const [hasCameraAccess, setHasCameraAccess] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getCameraStream = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
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

  const getDataUrl = async () => {
    if (videoRef.current && streamRef.current) {
      const canvasElement = document.createElement("canvas");
      const ctx = canvasElement.getContext("2d");

      const track = streamRef.current.getVideoTracks()[0];
      const settings = track.getSettings();

      canvasElement.height = settings.height || 0;
      canvasElement.width = settings.width || 0;
      ctx?.drawImage(videoRef.current, 0, 0);
      const dataURL = canvasElement.toDataURL("image/png", 1.0);

      // Cleanup
      ctx?.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasElement.remove();
      return dataURL;
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
  }, [restartVideoTrack]);

  return { camera, hasCameraAccess, restartVideoTrack, getDataUrl };
};

export default useCamera;
