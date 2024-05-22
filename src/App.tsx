import React, { lazy, useContext, useEffect } from "react";

import Routes from "./components/Routes";

import styled, { createGlobalStyle } from "styled-components";
import { isMobile } from "react-device-detect";
import * as Sentry from "@sentry/react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import TechnicalMaintenanceScreen from "./components/_App/TechnicalMaintenanceScreen";
import themes from "@escolalms/components/lib/theme";
import routeRoutes from "@/components/Routes/routes";
import { useFirebase } from "@/hooks/useFirebase";
import "react-loading-skeleton/dist/skeleton.css";

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
    background-color: ${({ theme }) => theme.gray4};

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
  const { fetchSettings, settings, fetchNotifications, fetchConfig } =
    useContext(EscolaLMSContext);

  useFirebase();

  useEffect(() => {
    fetchSettings();
    fetchNotifications();
    fetchConfig();
  }, [fetchSettings, fetchNotifications, fetchConfig]);

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
