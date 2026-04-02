export {};

export interface Screenshot {
  dataURL: Blob;
  timestamp: number;
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
      if (i === retries - 1) throw new Error(`HTTP ${response.status}`);
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw new Error("Fetch failed");
};

function getFormattedFilename(screenshot: Screenshot, modelId: number): string {
  const date = new Date(screenshot.timestamp);
  const pad = (n: number) => n.toString().padStart(2, "0");
  const ts = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
    date.getDate()
  )}_${pad(date.getHours())}_${pad(date.getMinutes())}_${pad(
    date.getSeconds()
  )}`;
  return `${screenshot.userID}_${modelId}_${ts}.webp`;
}

const formatToSQL = (timestamp: number) => {
  const date = new Date(timestamp);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
};

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
        formData.append(`files[${index}][timestamp]`, formatToSQL(s.timestamp));
      });

      await fetch(`${API_URL}/api/recommender/meet-recordings/screens`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      self.postMessage({ success: true, type: "recommender" });
    } catch (error) {
      console.error("Worker Recommender Error:", error);
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await signRes.json();

    for (const item of responseData.data) {
      const screenshot = screenshots.find(
        (s) => getFormattedFilename(s, modelId) === item.filename
      );
      if (screenshot) {
        const blob = new Blob([screenshot.dataURL]);

        try {
          await fetch(item.url, {
            method: "PUT",
            body: blob,
          });
          console.log(`Uploaded: ${item.filename}`);
        } catch (s3Error) {
          console.error(`S3 Error for ${item.filename}:`, s3Error);
        }
      }
    }
    self.postMessage({ success: true, type: "analytics" });
  } catch (error) {
    console.error("Worker Analytics Error:", error);
  }
};
