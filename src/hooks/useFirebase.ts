import { useContext, useEffect } from "react";
import { FirebaseMessaging } from "@capacitor-firebase/messaging";
import { LocalNotifications } from "@capacitor/local-notifications";
import { notyficationTokens } from "@escolalms/sdk/lib/services/notify";
import { initializeApp } from "firebase/app";
import { API_URL, VITE_APP_FIREBASE_VAPID_KEY } from "@/config/index";
import { firebaseConfig } from "@/utils/firebase";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

export const useFirebase = () => {
  const { token } = useContext(EscolaLMSContext);

  const requestPermissions = async () => {
    const result = await FirebaseMessaging.requestPermissions();
    return result.receive;
  };

  const getToken = async () => {
    const result = await FirebaseMessaging.getToken({
      vapidKey: VITE_APP_FIREBASE_VAPID_KEY,
    });
    return result.token;
  };

  const addNotificationReceivedListener = async () => {
    await FirebaseMessaging.addListener("notificationReceived", (event) => {
      const notification = event.notification;
      LocalNotifications.schedule({
        notifications: [
          {
            title: notification.title as string,
            body: notification.body as string,
            id: (notification.data as { id: number }).id,
          },
        ],
      });
    });
  };

  const initializeFirebase = async () => {
    initializeApp(firebaseConfig);

    const PermissionState = await requestPermissions();

    if (PermissionState === "granted") {
      const firebasetoken = await getToken();
      notyficationTokens(API_URL, token!, {
        token: firebasetoken,
      });
    }

    await addNotificationReceivedListener();
  };

  useEffect(() => {
    if (VITE_APP_FIREBASE_VAPID_KEY && token) {
      initializeFirebase();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
};
