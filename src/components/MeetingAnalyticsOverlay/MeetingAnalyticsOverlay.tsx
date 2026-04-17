import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
  useCallback,
} from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useMeetingSockets } from "@/hooks/useAnalyticsWebsockets";
import { ConsultationModalContext } from "@/components/Consultations/ConsultationCard/Buttons/context";
import { useRoles } from "@/hooks/useRoles";
import { DataPoint, EMOTION_POOL, EmotionHistory } from "@/types/sockets";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import { useJitsyAnalyticsControl } from "@/hooks/meeting/useJitsyAnalyticsControl";

const getColorByValue = (val: number) => {
  if (val < 35) return "#FF4D4D";
  if (val < 70) return "#FFC107";
  return "#7CFF6B";
};

export default function MeetingAnalyticsOverlay({
  onClose,
  modelType = "consultation",
  recordingUrl,
  webinar,
  participantCount,
}: {
  onClose: () => void;
  modelType?: "consultation" | "webinar";
  recordingUrl?: string | null;
  webinar?: API.Webinar & {
    analyze_enabled?: boolean;
  };
  participantCount: number;
}) {
  const { isTutor } = useRoles();
  const { fetchConsultation, consultation, token } =
    useContext(EscolaLMSContext);
  const consultationModalContext = useContext(ConsultationModalContext);
  const { t } = useTranslation();
  const [hoveredPanel, setHoveredPanel] = useState<
    "emotion" | "attention" | null
  >(null);
  const { shouldRunAnalytics } = useJitsyAnalyticsControl({
    modelType,
    participantCount,
    consultationData: consultation.value,
    webinarData: webinar,
  });

  const modelId = useMemo(() => {
    if (modelType === "webinar") return webinar?.id;
    return consultationModalContext?.consultationData?.consultationId;
  }, [modelType, webinar, consultationModalContext]);

  const unixTimestamp = useMemo(() => {
    const rawDate =
      modelType === "webinar"
        ? webinar?.active_to
        : consultationModalContext?.consultationData?.term;

    return rawDate ? Math.floor(new Date(rawDate).getTime() / 1000) : undefined;
  }, [modelType, webinar, consultationModalContext]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const { socketData } = useMeetingSockets(
    isTutor && shouldRunAnalytics ? modelId : undefined,
    isTutor && shouldRunAnalytics ? unixTimestamp : undefined,
    isTutor && shouldRunAnalytics ? token : undefined,
    modelType
  );

  const [attentionData, setAttentionData] = useState<DataPoint[]>([]);
  const [emotionHistory, setEmotionHistory] = useState<EmotionHistory[]>([]);
  const [shouldBreak, setShouldBreak] = useState(false);

  const getRelativeTime = useCallback(
    (isoString: string) => {
      const diff = Math.floor(
        (new Date(isoString).getTime() - new Date().getTime()) / 1000
      );
      if (diff >= -15) return t("MeetingAnalyticsOverlay.Chart.Now");
      const abs = Math.abs(diff);
      const m = Math.floor(abs / 60);
      const s = abs % 60;
      return `-${m}:${s.toString().padStart(2, "0")}`;
    },
    [t]
  );

  const displayTitle = useMemo(() => {
    if (modelType === "webinar") {
      return webinar?.name || "";
    }
    return (
      consultation?.value?.name ??
      consultationModalContext?.consultationData?.name ??
      ""
    );
  }, [
    modelType,
    consultation?.value?.name,
    consultationModalContext?.consultationData?.name,
    webinar?.name,
  ]);

  useEffect(() => {
    if (
      consultationModalContext?.consultationData?.consultationId &&
      modelType === "consultation"
    ) {
      fetchConsultation(
        Number(consultationModalContext?.consultationData?.consultationId)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consultationModalContext?.consultationData?.consultationId, modelType]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  }, [attentionData.length, emotionHistory.length, hoveredPanel]);

  useEffect(() => {
    if (isTutor && socketData) {
      const {
        attention,
        emotion,
        emotion_percentage,
        window_end,
        should_break,
      } = socketData;
      setShouldBreak(should_break);
      const parseVal = (v: string | number): number => {
        const value = typeof v === "string" ? parseFloat(v) : v;
        return Math.round((value ?? 0) * 100);
      };

      setAttentionData((prev) => {
        if (prev.some((p) => p.fullDate === window_end)) return prev;
        return [
          ...prev,
          {
            time: new Date(window_end).toLocaleTimeString(),
            value: parseVal(attention),
            fullDate: window_end,
            displayTime: getRelativeTime(window_end),
          },
        ].sort(
          (a, b) =>
            new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime()
        );
      });

      const mappedEmotion =
        EMOTION_POOL.find(
          (e) => e.key === (emotion || "neutral").toLowerCase()
        ) || EMOTION_POOL[1];

      setEmotionHistory((prev) => {
        if (prev.some((e) => e.fullDate === window_end)) return prev;
        const updatedPrev = prev.map((e) => ({ ...e, isCurrent: false }));
        return [
          ...updatedPrev,
          {
            ...mappedEmotion,
            time: new Date(window_end).toLocaleTimeString(),
            label: t(mappedEmotion.label),
            isCurrent: true,
            val: parseVal(emotion_percentage),
            fullDate: window_end,
            displayTime: getRelativeTime(window_end),
          },
        ].sort(
          (a, b) =>
            new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime()
        );
      });
    }
  }, [socketData, isTutor, getRelativeTime, t]);

  const formattedChartData = useMemo(() => {
    if (attentionData.length === 0) return [];
    return attentionData.map((d, idx) => ({
      ...d,
      displayTime:
        idx === attentionData.length - 1
          ? t("MeetingAnalyticsOverlay.Chart.Now")
          : getRelativeTime(d.fullDate),
    }));
  }, [attentionData, getRelativeTime, t]);

  const renderDynamicGradient = (
    data: DataPoint[],
    id: string,
    isArea: boolean
  ) => {
    if (data.length === 0) return null;
    return (
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
        {data.map((point, index) => (
          <stop
            key={`${id}-${index}`}
            offset={`${(index / (data.length - 1)) * 100}%`}
            stopColor={getColorByValue(point.value)}
            stopOpacity={isArea ? 0.4 : 1}
          />
        ))}
      </linearGradient>
    );
  };

  const latestAtt = attentionData[attentionData.length - 1]?.value ?? 0;
  const currentEmot = emotionHistory[emotionHistory.length - 1] || {
    ...EMOTION_POOL[1],
    val: 0,
  };

  return (
    <OverlayRoot>
      <Header>
        <LeftGroup>
          <BackButton onClick={onClose}>
            <Chevron>‹</Chevron>
          </BackButton>
          <HeaderTitle>{displayTitle}</HeaderTitle>
        </LeftGroup>

        {shouldRunAnalytics && isTutor && (
          <StatsWrapper>
            <StatCard
              active={hoveredPanel === "emotion"}
              onMouseEnter={() => setHoveredPanel("emotion")}
              onMouseLeave={() => setHoveredPanel(null)}
              onClick={() =>
                hoveredPanel === null || hoveredPanel === "attention"
                  ? setHoveredPanel("emotion")
                  : setHoveredPanel(null)
              }
            >
              <BigEmoji>{currentEmot.icon}</BigEmoji>
              <Value>{currentEmot.val}%</Value>
            </StatCard>
            <StatCard
              active={hoveredPanel === "attention"}
              glowColor={getColorByValue(latestAtt)}
              onMouseEnter={() => setHoveredPanel("attention")}
              onMouseLeave={() => setHoveredPanel(null)}
              onClick={() =>
                hoveredPanel === null || hoveredPanel === "emotion"
                  ? setHoveredPanel("attention")
                  : setHoveredPanel(null)
              }
            >
              <MiniChartBox>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={attentionData.slice(-10)}>
                    <defs>
                      {renderDynamicGradient(
                        attentionData.slice(-10),
                        "miniGradient",
                        true
                      )}
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="url(#miniGradient)"
                      strokeWidth={2}
                      fill="url(#miniGradient)"
                      activeDot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </MiniChartBox>
              <Value style={{ color: getColorByValue(latestAtt) }}>
                {latestAtt}%
              </Value>
            </StatCard>
          </StatsWrapper>
        )}

        <RightGroup>
          {isTutor && recordingUrl && (
            <DownloadButton onClick={() => window.open(recordingUrl, "_blank")}>
              <svg viewBox="0 0 24 24">
                <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
              </svg>
              {t("ConsultationPage.DownloadRecording")}
            </DownloadButton>
          )}
        </RightGroup>

        {isTutor && (
          <HoverPanel visible={hoveredPanel !== null}>
            <ContentHalf ref={scrollRef}>
              {hoveredPanel === "emotion" ? (
                <EmotionTimelineWrapper>
                  <EmotionTimeline>
                    {emotionHistory.map((item, idx) => (
                      <TimelineItem key={item.fullDate} active={item.isCurrent}>
                        {item.isCurrent && item.label && (
                          <LabelBubble>{item.label}</LabelBubble>
                        )}
                        <EmojiBox active={item.isCurrent}>{item.icon}</EmojiBox>
                        <TimeLabel>
                          {idx === emotionHistory.length - 1
                            ? t("MeetingAnalyticsOverlay.Chart.Now")
                            : getRelativeTime(item.fullDate)}
                        </TimeLabel>
                      </TimelineItem>
                    ))}
                    <TimelineBaseLine />
                  </EmotionTimeline>
                </EmotionTimelineWrapper>
              ) : (
                <AttentionChartWrapper dataCount={attentionData.length}>
                  <ChartBox>
                    <ResponsiveContainer width="100%" height={160}>
                      <AreaChart
                        data={formattedChartData}
                        margin={{ top: 40, right: 30, left: 60, bottom: 0 }}
                      >
                        <defs>
                          {renderDynamicGradient(
                            formattedChartData,
                            "dynamicAttentionFill",
                            true
                          )}
                          {renderDynamicGradient(
                            formattedChartData,
                            "dynamicAttentionStroke",
                            false
                          )}
                        </defs>
                        <CartesianGrid
                          horizontal
                          vertical={false}
                          stroke="rgba(255,255,255,0.1)"
                          strokeDasharray="3 3"
                        />
                        <XAxis
                          dataKey="displayTime"
                          stroke="#666"
                          fontSize={11}
                          tickLine={false}
                          axisLine={false}
                          interval={0}
                          dy={10}
                        />
                        <YAxis
                          domain={[0, 100]}
                          stroke="#666"
                          fontSize={10}
                          tickCount={5}
                          axisLine={false}
                          tickLine={false}
                          tickFormatter={(v) => `${v}%`}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="url(#dynamicAttentionStroke)"
                          strokeWidth={3}
                          fill="url(#dynamicAttentionFill)"
                          activeDot={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartBox>
                </AttentionChartWrapper>
              )}
            </ContentHalf>
          </HoverPanel>
        )}
      </Header>
      {isTutor && shouldBreak && shouldRunAnalytics && (
        <AlertBar>
          <AlertContent>
            <AlertText>
              <strong>
                {t(
                  "MeetingAnalyticsOverlay.Alert.AttentionDropping",
                  "Atencja spada!"
                )}
              </strong>
            </AlertText>
            <AlertIcon>😴</AlertIcon>
            <AlertText>
              {t(
                "MeetingAnalyticsOverlay.Alert.BreakRecommendation",
                "Zalecamy zrobienie przerwy, aby rozmówcy na nowo odbudowali skupienie."
              )}
            </AlertText>
          </AlertContent>
        </AlertBar>
      )}
    </OverlayRoot>
  );
}

const OverlayRoot = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  color: white;
  pointer-events: none;
  background: transparent;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 0 24px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #000;
  font-family: ${({ theme }) => theme.font};
  pointer-events: auto;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    padding: 12px 16px;
    gap: 12px;
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const RightGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  pointer-events: auto;

  @media (max-width: 1024px) {
    flex: 0;
  }
`;

const StatsWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
  pointer-events: auto;

  @media (max-width: 1024px) {
    position: static;
    transform: none;
    order: 3;
    width: 100%;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 8px;
  }
`;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 38px;
  padding: 0 16px;
  background: transparent;
  color: white;
  border: 1px solid #666;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
    font-size: 0;
    gap: 0;
    svg {
      margin: 0;
    }
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid #999;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Chevron = styled.span`
  color: white;
  font-size: 22px;
  line-height: 1;
`;

const HeaderTitle = styled.h1`
  font-size: 18px;
  margin: 0;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 15px;
    max-width: 160px;
  }
`;

const StatCard = styled.div<{ active: boolean; glowColor?: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? "#1A1A1A" : "#0D0D0D")};
  border: 1px solid ${({ active }) => (active ? "transparent" : "#222")};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 12px;
    padding: 1.5px;
    background: ${({ active, glowColor }) =>
      active
        ? `linear-gradient(to bottom, ${glowColor}, transparent 65%)`
        : "transparent"};

    mask: linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff, #fff) content-box,
      linear-gradient(#fff, #fff);
    -webkit-mask-composite: destination-out;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${({ active, glowColor }) =>
      active
        ? `radial-gradient(circle at 50% 0%, ${glowColor}25 0%, transparent 60%)`
        : "transparent"};
    opacity: ${({ active }) => (active ? 1 : 0)};
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: ${({ active }) => (active ? "#1A1A1A" : "#141414")};
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const HoverPanel = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: ${({ visible }) => (visible ? "220px" : "0")};
  background: #0d0d0d;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  pointer-events: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const ContentHalf = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  padding-left: 50%;
  box-sizing: border-box;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmotionTimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  min-width: 100%;
  padding-right: 50vw;
`;

const EmotionTimeline = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  width: 100%;
  min-height: 160px;
  gap: 60px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const TimelineItem = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 60px;
  min-width: 60px;
  height: 100%;
  justify-content: flex-end;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;

const EmojiBox = styled.div<{ active?: boolean }>`
  font-size: 32px;
  margin-bottom: 25px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const LabelBubble = styled.div`
  position: absolute;
  top: -30px;
  background: #2a2a2a;
  color: #aaa;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
`;

const TimeLabel = styled.div`
  font-size: 11px;
  color: #fff;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  white-space: nowrap;
`;

const TimelineBaseLine = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  height: 1px;
  background: #666;
  width: 100%;
`;

const AttentionChartWrapper = styled.div<{ dataCount: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ dataCount }) => Math.max(dataCount * 100, 800)}px;
  min-width: 100%;
  padding-right: 50vw;
`;

const ChartBox = styled.div`
  width: 100%;
  height: 160px;
`;

const MiniChartBox = styled.div`
  width: 50px;
  height: 24px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Value = styled.span`
  font-weight: bold;
  font-size: 16px;
  font-variant-numeric: tabular-nums;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const BigEmoji = styled.span`
  font-size: 20px;
`;

const AlertBar = styled.div`
  width: 100%;
  background: #e5a524;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const AlertContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #000;
  max-width: 1200px;
  font-family: ${({ theme }) => theme.font};

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const AlertIcon = styled.span`
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const AlertText = styled.div`
  margin: 0;
  font-size: 14px;
  line-height: 1.3;

  strong {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    strong {
      display: block;
    }
  }
`;
