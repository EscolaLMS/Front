import * as Sentry from '@sentry/react';

function configSentry() {
  if (process.env.REACT_APP_SENTRYDSN && window.location.hostname.indexOf('localhost') === -1) {
    Sentry.init({
      dsn: process.env.REACT_APP_SENTRYDSN,
    });
  }
  return null;
}
export default configSentry();
