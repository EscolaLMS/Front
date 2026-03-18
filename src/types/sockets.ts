export const EMOTION_POOL = [
  {
    icon: "😆",
    label: "MeetingAnalyticsOverlay.Chart.Emotions.happy",
    val: 100,
    key: "happy",
  },
  {
    icon: "😐",
    label: "MeetingAnalyticsOverlay.Chart.Emotions.neutral",
    val: 50,
    key: "neutral",
  },
  {
    icon: "😡",
    label: "MeetingAnalyticsOverlay.Chart.Emotions.angry",
    val: 10,
    key: "angry",
  },
  {
    icon: "😳",
    label: "MeetingAnalyticsOverlay.Chart.Emotions.surprised",
    val: 60,
    key: "surprised",
  },
  {
    icon: "🤢",
    label: "MeetingAnalyticsOverlay.Chart.Emotions.disgusted",
    val: 20,
    key: "disgusted",
  },
  {
    icon: "😨",
    label: "MeetingAnalyticsOverlay.Chart.Emotions.fearful",
    val: 30,
    key: "fearful",
  },
  {
    icon: "🙁",
    label: "MeetingAnalyticsOverlay.Chart.Emotions.sad",
    val: 40,
    key: "sad",
  },
] as const;

export type EmotionKey = typeof EMOTION_POOL[number]["key"];

export type MeetingAnalyticsSocketData = {
  should_break: boolean;
  break_confidence: string;
  recommended_in_minutes: number | null;
  window_start: string;
  window_end: string;
  attention: string;
  emotion: EmotionKey;
  emotion_percentage: string;
};

export interface SocketDataState extends MeetingAnalyticsSocketData {
  _updatedAt: number;
}

export type DataPoint = {
  time: string;
  value: number;
  fullDate: string;
  displayTime: string;
};

export type EmotionHistory = {
  time: string;
  icon: string;
  label?: string;
  isCurrent?: boolean;
  val: number;
  fullDate: string;
  displayTime: string;
};
