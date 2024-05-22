import React from "react";
import ReactDOM from "react-dom/client";
import { EscolaLMSContextProvider } from "@escolalms/sdk/lib/react/context";
import App from "./App";
import WebFont from "webfontloader";
import "./i18n";
import "./sentry";
import { GlobalThemeProvider } from "@escolalms/components/lib/theme/provider";
import { API_URL } from "./config";

declare global {
  interface Window {
    VITE_APP_API_URL: string;
    VITE_APP_URL: string;
    VITE_APP_FIREBASE_VAPID_KEY: string;
    VITE_APP_FIREBASE_APIKEY: string;
    VITE_APP_FIREBASE_AUTHDOMAIN: string;
    VITE_APP_FIREBASE_PROJECTID: string;
    VITE_APP_FIREBASE_STORAGEBUCKET: string;
    VITE_APP_FIREBASE_MESSAGINGSENDERID: string;
    VITE_APP_FIREBASE_APPID: string;
    VITE_APP_IOS_APIKEY: string;
    VITE_APP_ANDROID_APIKEY: string;
  }
}

WebFont.load({
  google: {
    families: [
      "Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800",
    ],
  },
});

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    {API_URL ? (
      <EscolaLMSContextProvider apiUrl={API_URL} initialFetch={false}>
        <GlobalThemeProvider>
          <App />
        </GlobalThemeProvider>
      </EscolaLMSContextProvider>
    ) : (
      <pre>
        error `process.env.VITE_APP_PUBLIC_API_URL || window.VITE_APP_API_URL`
        not set
      </pre>
    )}
  </React.StrictMode>
);
