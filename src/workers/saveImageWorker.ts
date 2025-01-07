export {};

export interface SaveImagesMessage {
  consultationId: number;
  consultationTermId: number;
  userEmail: string;
  userId: number;
  screenshots: { dataURL: Blob; timestamp: number }[];
  term: string;
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

  try {
    const filenames = screenshots.map((screenshot) => ({
      filename: `${screenshot.timestamp}.webp`,
    }));

    const signUrls = await fetch(
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
