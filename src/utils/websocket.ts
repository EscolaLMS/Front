import Echo from "laravel-echo";
import Pusher from "pusher-js";

export const getEchoInstance = (token: string) => {
  if (typeof window === "undefined") return null;

  try {
    (window as any).Pusher = Pusher;

    return new Echo({
      broadcaster: "pusher",
      key: import.meta.env.VITE_APP_WEBSOCKET_KEY,
      wsHost: import.meta.env.VITE_APP_WEBSOCKET_HOST,
      authEndpoint: import.meta.env.VITE_APP_WEBSOCKET_AUTH_ENDPOINT,
      wsPort: 80,
      wssPort: 80,
      forceTLS: false,
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
  } catch {
    return null;
  }
};
