import React, { lazy, useContext, useEffect } from "react";

import Routes from "./components/Routes";

import styled, { createGlobalStyle } from "styled-components";
import { isMobile } from "react-device-detect";
import * as Sentry from "@sentry/react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import TechnicalMaintenanceScreen from "./components/_App/TechnicalMaintenanceScreen";
import "react-loading-skeleton/dist/skeleton.css";
import themes from "@escolalms/components/lib/theme";
import routeRoutes from "@/components/Routes/routes";

import { notyficationTokens } from "@escolalms/sdk/lib/services/notify";
import { API_URL } from "@/config/index";

import { initializeApp } from "firebase/app";
import { FirebaseMessaging } from "@capacitor-firebase/messaging";
import { firebaseConfig } from "./utils/firebase";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const Customizer = lazy(
  () => import("./components/_App/ThemeCustomizer/ThemeCustomizer")
);

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  #root {
    height: 100%;
  }
  #__ybug-launcher {
    right: 135px !important;
  }
  .table-responsive {
    td,
    tr,
    th {
      border: 1px solid
        ${({ theme }) => (theme.mode === "dark" ? theme.gray1 : theme.gray3)};
      padding: 5px;
    }
    table {
      border: 1px solid
        ${({ theme }) => (theme.mode === "dark" ? theme.gray1 : theme.gray3)};
      border-collapse: collapse;
    }
  }
  a {
    text-decoration: none;
  }
`;

const StyledMain = styled.main<{ noPadding?: boolean }>`
  height: fit-content;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.dm__background : theme.background};
  padding-top: ${({ noPadding }) =>
    noPadding ? "0px" : isMobile ? "92px" : "57px"};
`;

const mapStringToTheme = (theme: string) => {
  return themes[theme];
};

const App = () => {
  const { token } = useContext(EscolaLMSContext);

  const { fetchSettings, settings, fetchNotifications, fetchConfig } =
    useContext(EscolaLMSContext);

  useEffect(() => {
    fetchSettings();
    fetchNotifications();
    fetchConfig();
  }, [fetchSettings, fetchNotifications, fetchConfig]);

  useEffect(() => {
    const requestPermissions = async () => {
      const result = await FirebaseMessaging.requestPermissions();
      console.log("xxx " + JSON.stringify(result));
      return result.receive;
    };

    const getToken = async () => {
      const result = await FirebaseMessaging.getToken({
        vapidKey:
          "BEl5YpvQIVmiLKccskEgnNFFOGdayRuWh6UsqBqlaSbIRsxWTnqJ1bwQ_uI79xf53LI2pEYvmL1pQRp1qRQZ7ps",
      });
      return result.token;
    };

    const addNotificationReceivedListener = async () => {
      await FirebaseMessaging.addListener("notificationReceived", (event) => {
        console.log("xxx notificationReceived", { event });

        const notification: any = event.notification;
        LocalNotifications.schedule({
          notifications: [
            {
              title: notification.title,
              body: notification.body,
              id: notification.data.id,
            },
          ],
        });
      });
    };

    const initializeFirebase = async () => {
      const firebaseApp = initializeApp(firebaseConfig);

      const PermissionState = await requestPermissions();

      console.log("xxx " + PermissionState);

      if (PermissionState === "granted") {
        const firebasetoken = await getToken();
        console.log("xxx receive token " + firebasetoken);
        if (token) {
          console.log("xxx send token " + firebasetoken);
          notyficationTokens(API_URL, token, {
            token: firebasetoken,
          });
        }
      }

      await addNotificationReceivedListener();
    };

    initializeFirebase();
  }, [token]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledMain
        noPadding={
          settings?.value?.global?.technicalMaintenance ||
          location.href.includes(routeRoutes.onboarding)
        }
      >
        <Customizer theme={mapStringToTheme(settings.value?.theme?.theme)} />
        {settings?.value?.global?.technicalMaintenance ? (
          <TechnicalMaintenanceScreen
            text={settings?.value?.global?.technicalMaintenanceText}
          />
        ) : (
          <Routes />
        )}
      </StyledMain>
    </React.Fragment>
  );
};

// preventing local storage persist store versioning error
window.addEventListener("error", (event: ErrorEvent) => {
  if (event.message.includes("Cannot read properties of undefined")) {
    if (!window.location.href.includes("noerrorrefresh")) {
      localStorage.removeItem("lms");
      window.location.href = window.location.href + "#noerrorrefresh";
    }
  }
});

export default Sentry.withProfiler(App);
