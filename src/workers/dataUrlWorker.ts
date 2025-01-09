import { Blob } from "buffer";

export {};

interface WorkerMessage {
  canvasData: ImageBitmap;
  width: number;
  height: number;
}

export interface WorkerResponse {
  success: boolean;
  blob?: Blob;
  error?: string;
}

self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  const { canvasData, width, height } = event.data;

  try {
    const offscreenCanvas = new OffscreenCanvas(width, height);
    const ctx = offscreenCanvas.getContext("2d");

    if (!ctx) {
      throw new Error("Failed to get 2D context for OffscreenCanvas.");
    }

    ctx.drawImage(canvasData, 0, 0, width, height);

    const blob = await offscreenCanvas.convertToBlob({
      type: "image/webp",
      quality: 1.0,
    });

    self.postMessage({ success: true, blob } as WorkerResponse);
  } catch (error: unknown) {
    console.error("Worker error:", error);

    const response: WorkerResponse = {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
    self.postMessage(response);
  }
};
