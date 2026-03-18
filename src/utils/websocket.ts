import Echo from "laravel-echo";
import Pusher from "pusher-js";

export const getEchoInstance = (token: string) => {
  if (typeof window === "undefined") return null;

  try {
    (window as unknown as Window & { Pusher: typeof Pusher }).Pusher = Pusher;

    const __DEV__ = window.location.hostname === "localhost";

    return new Echo({
      broadcaster: "pusher",
      key: import.meta.env.VITE_APP_WEBSOCKET_KEY,
      wsHost: import.meta.env.VITE_APP_WEBSOCKET_HOST,
      authEndpoint: import.meta.env.VITE_APP_WEBSOCKET_AUTH_ENDPOINT,
      wsPort: 80,
      wssPort: 443,
      forceTLS: !__DEV__,
      enabledTransports: __DEV__ ? ["ws"] : ["wss"],
      cluster: "mt1",
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      },
    });
  } catch {
    return null;
  }
};
