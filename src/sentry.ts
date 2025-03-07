import * as Sentry from "@sentry/react";

declare global {
  interface Window {
    VITE_APP_SENTRYDSN: string;
    VITE_APP_SENTRY_RELEASE: string;
    VITE_APP_SENTRY_ENV: string;
  }
}

const SENTRYDSN =
  window.VITE_APP_SENTRYDSN || import.meta.env.VITE_APP_SENTRYDSN;

const SENTRY_RELEASE =
  window.VITE_APP_SENTRY_RELEASE ||
  import.meta.env.VITE_APP_SENTRY_RELEASE ||
  "dev-main";

const SENTRY_ENV =
  window.VITE_APP_SENTRY_ENV ||
  import.meta.env.VITE_APP_SENTRY_ENV ||
  "development";

function configSentry() {
  if (SENTRYDSN && window.location.hostname.indexOf("localhost") === -1) {
    Sentry.init({
      dsn: SENTRYDSN,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],
      // Tracing
      tracesSampleRate: 0.1, //  Capture 100% of the transactions
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      // tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      // Session Replay
      replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
      replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
      environment: SENTRY_ENV,
      release: SENTRY_RELEASE,
    });
  }
  return null;
}
export default configSentry();
