import Echo from "laravel-echo";
import Pusher from "pusher-js";

interface WindowEnv {
  VITE_APP_WEBSOCKET_KEY?: string;
  VITE_APP_WEBSOCKET_HOST?: string;
  VITE_APP_WEBSOCKET_AUTH_ENDPOINT?: string;
  Pusher: typeof Pusher;
}

declare global {
  interface Window extends WindowEnv {}
}

export const getEchoInstance = (token: string): Echo<"pusher"> | null => {
  if (typeof window === "undefined") return null;

  const wsKey =
    window.VITE_APP_WEBSOCKET_KEY ||
    (import.meta.env.VITE_APP_WEBSOCKET_KEY as string) ||
    "";
  const wsHost =
    window.VITE_APP_WEBSOCKET_HOST ||
    (import.meta.env.VITE_APP_WEBSOCKET_HOST as string) ||
    "";
  const authEndpoint =
    window.VITE_APP_WEBSOCKET_AUTH_ENDPOINT ||
    (import.meta.env.VITE_APP_WEBSOCKET_AUTH_ENDPOINT as string) ||
    "";

  if (!wsKey) {
    console.warn("Echo: WebSocket configuration was not found.");
    return null;
  }

  try {
    window.Pusher = Pusher;
    Pusher.logToConsole = true;

    const isDev = window.location.hostname === "localhost";

    return new Echo({
      broadcaster: "pusher",
      key: wsKey,
      wsHost: wsHost,
      authEndpoint: authEndpoint,
      forceTLS: !isDev,
      wsPort: isDev ? 80 : 443,
      wssPort: isDev ? 80 : 443,
      disableStats: true,
      enabledTransports: ["ws", "wss"],
      cluster: "mt1",
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      },
    });
  } catch (error) {
    console.error("Echo init error:", error);
    return null;
  }
};
