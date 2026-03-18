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
    const channel = echo.private(channelName);

    const processData = (payload: MeetingAnalyticsSocketData) => {
      if (!payload) return;
      setSocketData({ ...payload, _updatedAt: Date.now() });
    };

    channel.listen(
      ".AggregatedFrameStored",
      (data: MeetingAnalyticsSocketData) => {
        processData(data);
      }
    );

    channel.listen(
      "AggregatedFrameStored",
      (data: MeetingAnalyticsSocketData) => {
        processData(data);
      }
    );

    channel.listenToAll(
      (eventName: string, data: MeetingAnalyticsSocketData) => {
        if (eventName.includes("AggregatedFrameStored")) {
          processData(data);
        }
      }
    );

    return () => {
      echo.leave(channelName);
    };
  }, [consultationId, termUnix, token]);

  return { socketData };
};
