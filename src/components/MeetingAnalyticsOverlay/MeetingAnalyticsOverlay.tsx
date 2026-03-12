import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

type DataPoint = { time: string; value: number };
type EmotionHistory = {
  time: string;
  icon: string;
  label?: string;
  isCurrent?: boolean;
  val: number;
};

const getColorByValue = (val: number) => {
  if (val < 35) return "#FF4D4D";
  if (val < 70) return "#FFC107";
  return "#7CFF6B";
};

const EMOTION_POOL = [
  { icon: "😆", label: "Rozbawiony", val: 100 },
  { icon: "😐", label: "Neutralny", val: 50 },
  { icon: "😡", label: "Zły", val: 10 },
  { icon: "😳", label: "Zaskoczony", val: 60 },
  { icon: "🤢", label: "Zniesmaczony", val: 20 },
  { icon: "😨", label: "Przestraszony", val: 30 },
  { icon: "🙁", label: "Smutny", val: 40 },
];

// TWOJA SEKWENCJA SKOKÓW:
const ATTENTION_SEQUENCE = [
  100, 90, 80, 50, 40, 30, 70, 80, 20, 30, 40, 80, 90, 99,
];

export default function MeetingAnalyticsOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const [sessionTime, setSessionTime] = useState(0);
  const [hoveredPanel, setHoveredPanel] = useState<
    "emotion" | "attention" | null
  >(null);
  const { consultation } = useContext(EscolaLMSContext);

  // Ref do trzymania aktualnego indeksu sekwencji
  const seqIndex = useRef(0);

  const [atentionData, setAtentionData] = useState<DataPoint[]>([
    { time: "0:00", value: 100 },
  ]);

  const [emotionHistory, setEmotionHistory] = useState<EmotionHistory[]>([
    {
      time: "0:00",
      icon: "😆",
      label: "Rozbawiony",
      isCurrent: true,
      val: 100,
    },
  ]);

  const formatSessionTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => setSessionTime((p) => p + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Używamy funkcyjnego update sessionTime, żeby mieć pewność co do wartości
      setSessionTime((prevTime) => {
        const timeStr = formatSessionTime(prevTime);

        // --- ATENCJA ---
        setAtentionData((prev) => {
          const nextVal =
            ATTENTION_SEQUENCE[seqIndex.current % ATTENTION_SEQUENCE.length];
          seqIndex.current += 1;
          const newPoint = { time: timeStr, value: nextVal };
          // Zachowaj tylko ostatnie 6 punktów
          const newHistory = [...prev, newPoint];
          return newHistory.slice(-6);
        });

        // --- EMOCJE ---
        setEmotionHistory((prev) => {
          const nextEmot =
            EMOTION_POOL[Math.floor(Math.random() * EMOTION_POOL.length)];
          // Wszystkie poprzednie przestają być 'current'
          const updatedPrev = prev.map((e) => ({ ...e, isCurrent: false }));
          const newEmot = { ...nextEmot, time: timeStr, isCurrent: true };
          // Zachowaj tylko ostatnie 5 emocji
          const newHistory = [...updatedPrev, newEmot];
          return newHistory.slice(-5);
        });

        return prevTime;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const latestAtt = atentionData[atentionData.length - 1].value;
  const currentEmot = emotionHistory[emotionHistory.length - 1];

  const displayAtentionData = atentionData.map((d, idx) => ({
    ...d,
    displayTime: idx === atentionData.length - 1 ? "Teraz" : d.time,
  }));

  const displayEmotionHistory = emotionHistory.map((e, idx) => ({
    ...e,
    displayTime: idx === emotionHistory.length - 1 ? "Teraz" : e.time,
  }));

  return (
    <OverlayRoot>
      <Header>
        <LeftGroup>
          <BackButton onClick={onClose}>
            <Chevron>‹</Chevron>
          </BackButton>
          <HeaderTitle>{consultation.value?.name ?? ""}</HeaderTitle>
          <TimerBadge>
            {Math.floor(sessionTime / 60)}:
            {(sessionTime % 60).toString().padStart(2, "0")}
          </TimerBadge>
        </LeftGroup>

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
                <AreaChart data={atentionData}>
                  <defs>
                    <linearGradient
                      id="miniLineGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      {atentionData.map((p, i) => (
                        <stop
                          key={`stop-${i}`}
                          offset={`${
                            (i / (atentionData.length - 1 || 1)) * 100
                          }%`}
                          stopColor={getColorByValue(p.value)}
                        />
                      ))}
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="url(#miniLineGradient)"
                    strokeWidth={2}
                    fill="transparent"
                    isAnimationActive={true}
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </MiniChartBox>
            <Value style={{ color: getColorByValue(latestAtt) }}>
              {latestAtt}%
            </Value>
          </StatCard>
        </StatsWrapper>
        <RightGroup />
      </Header>

      <HoverPanel visible={hoveredPanel !== null}>
        <ContentHalf>
          {hoveredPanel === "emotion" ? (
            <SectionWrapper>
              <EmotionTimeline>
                {displayEmotionHistory.map((item, idx) => (
                  <TimelineItem key={idx} active={item.isCurrent}>
                    {item.label && <LabelBubble>{item.label}</LabelBubble>}
                    <EmojiBox active={item.isCurrent}>{item.icon}</EmojiBox>
                    <TimeLabel>{item.displayTime}</TimeLabel>
                  </TimelineItem>
                ))}
                <TimelineBaseLine />
              </EmotionTimeline>
            </SectionWrapper>
          ) : (
            <SectionWrapper>
              <ChartBox>
                <ResponsiveContainer width="100%" height={140}>
                  <AreaChart
                    data={atentionData}
                    margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="mainLineGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        {atentionData.map((p, i) => (
                          <stop
                            key={`main-stop-${i}`}
                            offset={`${
                              (i / (atentionData.length - 1 || 1)) * 100
                            }%`}
                            stopColor={getColorByValue(p.value)}
                          />
                        ))}
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="time"
                      axisLine={{ stroke: "#444" }}
                      tickLine={false}
                      tick={{ fill: "#777", fontSize: 11 }}
                      interval={0}
                      dy={10}
                    />
                    <YAxis
                      domain={[0, 100]}
                      ticks={[0, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#333", fontSize: 10 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="url(#mainLineGradient)"
                      strokeWidth={3}
                      fillOpacity={0.1}
                      fill="url(#mainLineGradient)"
                      isAnimationActive={true}
                      animationDuration={1000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartBox>
            </SectionWrapper>
          )}
        </ContentHalf>
      </HoverPanel>
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
  background: #000; // Header musi mieć czarne tło, żeby nie było widać Jitsi pod tekstem
  font-family: ${({ theme }) => theme.font};
  pointer-events: auto; // Przywracamy interakcje dla przycisków i kart w belce
`;

const HoverPanel = styled.div<{ visible: boolean }>`
  position: absolute; // Panel też musi być absolute
  top: 72px; // Startuje dokładnie pod headerem
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

  /* Magia: Podwójne tło.
     Pierwsze to kolor przycisku (ciemny),
     Drugie to gradient (ramka). */
  background: ${({ active, glowColor }) =>
    active
      ? `linear-gradient(#1A1A1A, #1A1A1A) padding-box,
         linear-gradient(to bottom, ${glowColor} 0%, transparent 60%) border-box`
      : `linear-gradient(#0D0D0D, #0D0D0D) padding-box,
         linear-gradient(to bottom, #333, #333) border-box`};

  /* Musimy ustawić przezroczysty border, żeby tło border-box miało gdzie się wyświetlić */
  border: 1px solid transparent;

  /* Dodatkowa poświata (glow) tylko na samej górze dla efektu 'neon' */
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
    /* Delikatne rozjaśnienie tła na hover (tylko gdy nie jest aktywny) */
    background: ${({ active, glowColor }) =>
      active
        ? `linear-gradient(#222, #222) padding-box,
           linear-gradient(to bottom, ${glowColor} 0%, transparent 60%) border-box`
        : `linear-gradient(#141414, #141414) padding-box,
           linear-gradient(to bottom, #444, #444) border-box`};
  }
`;
const ButtonGlow = styled.div<{ color: string }>`
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ color }) => color};
  box-shadow: 0 0 10px ${({ color }) => color};
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
  width: 50%;
  padding-left: 60px;
  box-sizing: border-box;
`;
const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const PanelTitle = styled.div`
  font-size: 14px;
  color: #fff;
  margin-bottom: 25px;
  font-weight: 500;
`;
const EmotionTimeline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 100%;
  padding-bottom: 10px;
  min-height: 80px;
`;
const TimelineItem = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;
const EmojiBox = styled.div<{ active?: boolean }>`
  font-size: 32px;
  margin-bottom: 12px;
  position: relative;
  ${({ active }) =>
    active &&
    `&::after { content: ''; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 40px; height: 20px; background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%); }`}
`;
const LabelBubble = styled.div`
  position: absolute;
  top: -35px;
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
  color: #999;
  margin-top: 15px;
  font-weight: 500;
`;
const TimelineBaseLine = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  height: 1px;
  background: #333;
`;
const ChartBox = styled.div`
  width: 100%;
  margin-top: 10px;
`;
