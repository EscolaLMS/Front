export interface IMeetRecording {
  id: number;
  model_type: string;
  action: "start-recording" | "end-recording";
  model_id: number;
  term: string | number;
  start_at?: string;
  end_at?: string;
  url?: string;
  url_expiration_time_millis?: number;
}

export interface IScreenshot {
  dataURL: Blob;
  timestamp: number;
  userID: number;
}
