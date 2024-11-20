import * as Sentry from "@sentry/react";

declare global {
  interface Window {
    VITE_APP_SENTRYDSN: string;
  }
}

const SENTRYDSN =
  window.VITE_APP_SENTRYDSN || import.meta.env.VITE_APP_SENTRYDSN;

function configSentry() {
  if (SENTRYDSN && window.location.hostname.indexOf("localhost") === -1) {
    Sentry.init({
      dsn: SENTRYDSN,
      tracesSampleRate: 1,
    });
  }
  return null;
}
export default configSentry();
