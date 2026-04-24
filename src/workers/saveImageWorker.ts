import { getDateParts } from "../utils/index";

export {};

export interface Screenshot {
  dataURL: Blob;
  timestamp: string;
  userID: number;
}

export interface SaveImagesMessage {
  action?: "recommender-screens";
  modelId: number;
  modelType: "consultation" | "webinar";
  screenshots: Screenshot[];
  term: string;
  userId: number;
  consultationTermId?: number;
  userEmail?: string;
  token?: string;
  apiUrl?: string;
}

let API_URL: string;

const retryFetch = async (
  url: string,
  options: RequestInit,
  retries = 3,
  delay = 2000
): Promise<Response> => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      throw new Error(`HTTP ${response.status}`);
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw new Error("Fetch failed after retries");
};

function getFormattedFilename(screenshot: Screenshot, modelId: number): string {
  const p = getDateParts(screenshot.timestamp);
  const ts = `${p.yy}${p.mm}${p.dd}_${p.hh}_${p.mi}_${p.ss}`;
  return `${screenshot.userID}_${modelId}_${ts}.webp`;
}

self.onmessage = async (event: MessageEvent<SaveImagesMessage>) => {
  if (event.data.apiUrl) {
    API_URL = event.data.apiUrl;
    return;
  }

  const {
    action,
    modelId,
    modelType,
    screenshots,
    term,
    userId,
    userEmail,
    consultationTermId,
    token,
  } = event.data;

  if (action === "recommender-screens") {
    try {
      const formData = new FormData();
      formData.append("model_id", modelId.toString());
      formData.append("model_type", modelType);
      formData.append("term", term);

      screenshots.forEach((s, index) => {
        const filename = getFormattedFilename(s, modelId);
        const file = new File([s.dataURL], filename, { type: "image/webp" });
        formData.append(`files[${index}][file]`, file, filename);
        formData.append(`files[${index}][timestamp]`, s.timestamp);
      });

      const response = await fetch(
        `${API_URL}/api/recommender/meet-recordings/screens`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(
          `Recommender API error: ${response.status} ${response.statusText}`
        );
      }

      self.postMessage({ success: true, type: "recommender" });
    } catch (error) {
      console.error("Worker Recommender Error:", error);
      self.postMessage({ success: false, type: "recommender", error });
    }
    return;
  }

  try {
    const filenames = screenshots.map((s) => ({
      filename: getFormattedFilename(s, modelId),
    }));
    const endpoint =
      modelType === "webinar"
        ? `${API_URL}/api/webinars/signed-screen-urls`
        : `${API_URL}/api/consultations/signed-screen-urls`;

    const payload =
      modelType === "webinar"
        ? {
            webinar_id: modelId,
            user_id: userId,
            executed_at: term,
            files: filenames,
          }
        : {
            consultation_id: modelId,
            user_termin_id: consultationTermId,
            user_id: userId,
            user_email: userEmail,
            files: filenames,
            executed_at: term,
          };

    const signRes = await retryFetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseData = await signRes.json();

    await Promise.all(
      responseData.data.map(async (item: { filename: string; url: string }) => {
        const screenshot = screenshots.find(
          (s) => getFormattedFilename(s, modelId) === item.filename
        );
        if (!screenshot) return;
        const blobToUpload = new Blob([screenshot.dataURL]);

        const uploadRes = await fetch(item.url, {
          method: "PUT",
          body: blobToUpload,
        });

        if (!uploadRes.ok) {
          console.error("S3 Upload Failed", uploadRes.status);
          throw new Error(`S3 Status: ${uploadRes.status}`);
        }
      })
    );

    self.postMessage({ success: true, type: "analytics" });
  } catch (error) {
    console.error("Worker Analytics Error:", error);
    self.postMessage({ success: false, type: "analytics", error });
  }
};
