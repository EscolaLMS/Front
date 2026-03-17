import React, { useState, useEffect, useContext, useMemo, useRef } from "react";
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

const getColorByValue = (val: number) => {
  if (val < 35) return "#FF4D4D";
  if (val < 70) return "#FFC107";
  return "#7CFF6B";
};

export default function MeetingAnalyticsOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const { isTutor } = useRoles();
  const { consultation, token } = useContext(EscolaLMSContext);
  const consultationModalContext = useContext(ConsultationModalContext);

  const [sessionTime, setSessionTime] = useState(0);
  const [hoveredPanel, setHoveredPanel] = useState<
    "emotion" | "attention" | null
  >(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const unixTimestamp = consultationModalContext?.consultationData?.term
    ? Math.floor(
        new Date(consultationModalContext?.consultationData?.term).getTime() /
          1000
      )
    : undefined;

  const { socketData } = useMeetingSockets(
    isTutor
      ? consultationModalContext?.consultationData?.consultationId
      : undefined,
    isTutor ? unixTimestamp : undefined,
    isTutor ? token : undefined
  );

  const [attentionData, setAttentionData] = useState<DataPoint[]>([]);
  const [emotionHistory, setEmotionHistory] = useState<EmotionHistory[]>([]);

  const getRelativeTime = (isoString: string) => {
    const diff = Math.floor(
      (new Date(isoString).getTime() - new Date().getTime()) / 1000
    );
    if (diff >= -15) return "Teraz";
    const abs = Math.abs(diff);
    const m = Math.floor(abs / 60);
    const s = abs % 60;
    return `-${m}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => setSessionTime((p) => p + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    }
  }, [attentionData.length, emotionHistory.length, hoveredPanel]);

  useEffect(() => {
    if (isTutor && socketData) {
      const { attention, emotion, emotion_percentage, window_end } = socketData;
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
  }, [socketData, isTutor]);

  const formattedChartData = useMemo(() => {
    if (attentionData.length === 0) return [];
    return attentionData.map((d, idx) => ({
      ...d,
      displayTime:
        idx === attentionData.length - 1
          ? "Teraz"
          : getRelativeTime(d.fullDate),
    }));
  }, [attentionData]);

  const renderDynamicGradient = (
    data: DataPoint[],
    id: string,
    isArea: boolean
  ) => {
    if (data.length === 0) return null;
    return (
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
        {data.map((point, index) => {
          const offset = (index / (data.length - 1)) * 100;
          return (
            <stop
              key={`${id}-${index}`}
              offset={`${offset}%`}
              stopColor={getColorByValue(point.value)}
              stopOpacity={isArea ? 0.4 : 1}
            />
          );
        })}
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
          <HeaderTitle>
            {consultation?.value?.name ??
              consultationModalContext?.consultationData?.name ??
              ""}
          </HeaderTitle>
          <TimerBadge>
            {Math.floor(sessionTime / 60)}:
            {(sessionTime % 60).toString().padStart(2, "0")}
          </TimerBadge>
        </LeftGroup>

        {isTutor && (
          <>
            <StatsWrapper>
              <StatCard
                active={hoveredPanel === "emotion"}
                onMouseEnter={() => setHoveredPanel("emotion")}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                <BigEmoji>{currentEmot.icon}</BigEmoji>
                <Value>{currentEmot.val}%</Value>
              </StatCard>

              <StatCard
                active={hoveredPanel === "attention"}
                glowColor={getColorByValue(latestAtt)}
                onMouseEnter={() => setHoveredPanel("attention")}
                onMouseLeave={() => setHoveredPanel(null)}
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

            <HoverPanel visible={hoveredPanel !== null}>
              <ContentHalf ref={scrollRef}>
                {hoveredPanel === "emotion" ? (
                  <SectionWrapper
                    style={{
                      width: "max-content",
                      minWidth: "100%",
                      paddingRight: "50vw",
                    }}
                  >
                    <EmotionTimeline style={{ gap: "60px", marginTop: "10px" }}>
                      {emotionHistory.map((item, idx) => (
                        <TimelineItem
                          key={item.fullDate}
                          active={item.isCurrent}
                        >
                          {item.isCurrent && item.label && (
                            <LabelBubble>{item.label}</LabelBubble>
                          )}
                          <EmojiBox active={item.isCurrent}>
                            {item.icon}
                          </EmojiBox>
                          <TimeLabel>
                            {idx === emotionHistory.length - 1
                              ? "Teraz"
                              : getRelativeTime(item.fullDate)}
                          </TimeLabel>
                        </TimelineItem>
                      ))}
                      <TimelineBaseLine style={{ width: "100%" }} />
                    </EmotionTimeline>
                  </SectionWrapper>
                ) : (
                  <SectionWrapper
                    style={{
                      width: Math.max(attentionData.length * 100, 800),
                      minWidth: "100%",
                      paddingRight: "50vw",
                    }}
                  >
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
                            horizontal={true}
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
                            orientation="left"
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
                  </SectionWrapper>
                )}
              </ContentHalf>
            </HoverPanel>
          </>
        )}
        <RightGroup />
      </Header>
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
  height: 72px;
  padding: 0 24px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #000;
  font-family: ${({ theme }) => theme.font};
  pointer-events: auto;
`;
const HoverPanel = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 72px;
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
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: transparent;
  border: 1px solid #999;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
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
`;
const TimerBadge = styled.div`
  background: #111;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #999;
`;
const StatsWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`;
const StatCard = styled.div<{ active: boolean; glowColor?: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  transition: all 0.2s ease;
  background: ${({ active, glowColor }) =>
    active
      ? `linear-gradient(#1A1A1A, #1A1A1A) padding-box, linear-gradient(to bottom, ${glowColor} 0%, transparent 60%) border-box`
      : `linear-gradient(#0D0D0D, #0D0D0D) padding-box, linear-gradient(to bottom, #333, #333) border-box`};
  border: 1px solid transparent;
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 10%;
    right: 10%;
    height: 1px;
    background: ${({ active, glowColor }) =>
      active ? glowColor : "transparent"};
    box-shadow: ${({ active, glowColor }) =>
      active ? `0 0 10px ${glowColor}` : "none"};
    opacity: ${({ active }) => (active ? 0.8 : 0)};
    transition: opacity 0.2s ease;
    pointer-events: none;
  }
  &:hover {
    background: ${({ active, glowColor }) =>
      active
        ? `linear-gradient(#222, #222) padding-box, linear-gradient(to bottom, ${glowColor} 0%, transparent 60%) border-box`
        : `linear-gradient(#141414, #141414) padding-box, linear-gradient(to bottom, #444, #444) border-box`};
  }
`;
const MiniChartBox = styled.div`
  width: 50px;
  height: 24px;
`;
const Value = styled.span`
  font-weight: bold;
  font-size: 16px;
  font-variant-numeric: tabular-nums;
`;
const BigEmoji = styled.span`
  font-size: 20px;
`;
const RightGroup = styled.div`
  width: 200px;
`;
const ContentHalf = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  padding-left: 50%;
  box-sizing: border-box;
  overflow-x: auto;
  display: block;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmotionTimeline = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  width: 100%;
  padding-bottom: 0px;
  min-height: 160px;
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
  ${({ active }) =>
    active &&
    `&::after { content: ''; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 40px; height: 20px; background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%); }`}
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
  width: 80px;
`;
const TimelineBaseLine = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  height: 1px;
  background: #666;
`;
const ChartBox = styled.div`
  width: 100%;
  height: 160px;
`;
