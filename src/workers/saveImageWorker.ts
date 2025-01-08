export {};

export interface SaveImagesMessage {
  consultationId: number;
  consultationTermId: number;
  userEmail: string;
  userId: number;
  screenshots: { dataURL: Blob; timestamp: number }[];
  term: string;
}

const retryFetch = async (
  url: string,
  options: RequestInit,
  retries: number = 3,
  delay: number = 1000
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const attemptFetch = async (attempt: number) => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        resolve(response); // Fetch successful, resolve the promise
      } catch (error) {
        console.error(`Fetch attempt ${attempt + 1} failed:`, error);

        if (attempt < retries - 1) {
          // Schedule the next attempt using setTimeout
          setTimeout(() => attemptFetch(attempt + 1), delay);
        } else {
          reject(`Retries exhausted. Last error: ${error}`);
        }
      }
    };

    attemptFetch(0); // Start the first attempt
  });
};

self.onmessage = async (event: MessageEvent<SaveImagesMessage>) => {
  const {
    consultationId,
    consultationTermId,
    userEmail,
    userId,
    screenshots,
    term,
  } = event.data;

  try {
    const filenames = screenshots.map((screenshot) => ({
      filename: `${screenshot.timestamp}.webp`,
    }));

    const signUrls = await retryFetch(
      `${
        import.meta.env.VITE_APP_PUBLIC_API_URL
      }/api/consultations/signed-screen-urls`,
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
        (s) => `${s.timestamp}.webp` === filename
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
