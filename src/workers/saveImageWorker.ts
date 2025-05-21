export {};

export interface Screenshot {
  dataURL: Blob;
  timestamp: number;
  userID: number;
  consultationId: number | undefined;
}

export interface SaveImagesMessage {
  consultationId: number;
  consultationTermId: number;
  userEmail: string;
  userId: number;
  screenshots: Screenshot[];
  term: string;
  apiUrl?: string;
}

let API_URL: string;

const retryFetch = async (
  url: string,
  options: RequestInit,
  retries: number = 3,
  delay: number = 2000
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const attemptFetch = async (attempt: number) => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        resolve(response);
      } catch (error) {
        console.error(`Fetch attempt ${attempt + 1} failed:`, error);

        if (attempt < retries - 1) {
          setTimeout(() => attemptFetch(attempt + 1), delay);
        } else {
          reject(`Retries exhausted. Last error: ${error}`);
        }
      }
    };

    attemptFetch(0);
  });
};

function getFormattedFilename(screenshot: Screenshot): string {
  const date = new Date(screenshot.timestamp);
  const pad = (n: number) => n.toString().padStart(2, "0");

  const formattedTimestamp =
    `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}_` +
    `${pad(date.getHours())}_${pad(date.getMinutes())}_${pad(
      date.getSeconds()
    )}`;

  return `${screenshot.userID}_${screenshot.consultationId}_${formattedTimestamp}.webp`;
}

self.onmessage = async (event: MessageEvent<SaveImagesMessage>) => {
  const {
    consultationId,
    consultationTermId,
    userEmail,
    userId,
    screenshots,
    term,
  } = event.data;

  if (event.data.apiUrl) {
    API_URL = event.data.apiUrl; // Store the environment variable
    return; // Exit early if it's just setting the API URL
  }

  try {
    const filenames = screenshots.map((screenshot) => ({
      filename: getFormattedFilename(screenshot),
    }));

    const signUrls = await retryFetch(
      `${API_URL}/api/consultations/signed-screen-urls`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          consultation_id: consultationId,
          user_termin_id: consultationTermId,
          user_id: userId,
          user_email: userEmail,
          files: filenames,
          executed_at: term,
        }),
      }
    );

    if (!signUrls.ok) {
      throw new Error(`Failed to sign URLs: ${signUrls.statusText}`);
    }

    const responseData = await signUrls.json();

    for (let i = 0; i < responseData.data.length; i++) {
      const { url, filename } = responseData.data[i];
      const screenshot = screenshots.find(
        (s) => getFormattedFilename(s) === filename
      );

      if (!screenshot) {
        console.warn(`Screenshot not found for filename: ${filename}`);
        continue;
      }

      try {
        const blob = new Blob([screenshot.dataURL]);
        const response = await fetch(url, {
          method: "PUT",
          body: blob,
        });

        if (!response.ok) {
          console.error(`Failed to upload ${filename}: ${response.statusText}`);
        } else {
          console.log(`File ${filename} uploaded successfully.`);
        }
      } catch (error) {
        console.error(`Error uploading ${filename}:`, error);
      }
    }

    self.postMessage({ success: true });
  } catch (error) {
    self.postMessage({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
