import { useEffect, useState } from "react";
import { getEchoInstance } from "@/utils/websocket";
import { SocketDataState, MeetingAnalyticsSocketData } from "@/types/sockets";

export const useMeetingSockets = (
  modelId?: number,
  termUnix?: number,
  token?: string | null,
  modelType: "consultation" | "webinar" = "consultation"
) => {
  const [socketData, setSocketData] = useState<SocketDataState | null>(null);

  useEffect(() => {
    if (!modelId || !termUnix || !token) return;

    const echo = getEchoInstance(token);
    if (!echo) return;

    const channelName = `${modelType}.${modelId}.${termUnix}`;
    const privateChannel = echo.private(channelName);

    const processData = (payload: MeetingAnalyticsSocketData) => {
      if (!payload) return;
      setSocketData({ ...payload, _updatedAt: Date.now() });
    };

    echo.connector.pusher.connection.bind("connected", () => {
      console.log(`🟢 PUSHER CONNECTED TO ${channelName}`);
    });

    privateChannel.listen(
      ".AggregatedFrameStored",
      (data: MeetingAnalyticsSocketData) => processData(data)
    );

    privateChannel.listen(
      "AggregatedFrameStored",
      (data: MeetingAnalyticsSocketData) => processData(data)
    );

    return () => {
      echo.leave(channelName);
      echo.connector.pusher.connection.unbind("connected");
    };
  }, [modelId, termUnix, token, modelType]);

  return { socketData };
};
