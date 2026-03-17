import { useEffect, useState } from "react";
import { getEchoInstance } from "@/utils/websocket";
import { SocketDataState, MeetingAnalyticsSocketData } from "@/types/sockets";

export const useMeetingSockets = (
  consultationId?: number,
  termUnix?: number,
  token?: string | null
) => {
  const [socketData, setSocketData] = useState<SocketDataState | null>(null);

  useEffect(() => {
    if (!consultationId || !termUnix || !token) return;

    const echo = getEchoInstance(token);
    if (!echo) return;

    const channelName = `consultation.${consultationId}.${termUnix}`;
    console.log("Subskrypcja kanału:", channelName);

    const channel = echo.private(channelName);

    const processData = (payload: MeetingAnalyticsSocketData) => {
      if (!payload) return;
      console.log("Hook: Otrzymano paczkę:", payload);
      setSocketData({ ...payload, _updatedAt: Date.now() });
    };

    channel.listen(
      ".AggregatedFrameStored",
      (data: MeetingAnalyticsSocketData) => {
        console.log("Event: .AggregatedFrameStored");
        processData(data);
      }
    );

    channel.listen(
      "AggregatedFrameStored",
      (data: MeetingAnalyticsSocketData) => {
        console.log("Event: AggregatedFrameStored");
        processData(data);
      }
    );

    channel.listenToAll(
      (eventName: string, data: MeetingAnalyticsSocketData) => {
        console.log("DEBUG WS (Nazwa Eventu):", eventName, data);

        if (eventName.includes("AggregatedFrameStored")) {
          processData(data);
        }
      }
    );

    return () => {
      console.log("Leaving channel:", channelName);
      echo.leave(channelName);
    };
  }, [consultationId, termUnix, token]);

  return { socketData };
};
