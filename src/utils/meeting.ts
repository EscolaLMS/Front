import { API_URL } from "@/config/index";
import { IJitsiMeetExternalApi } from "@jitsi/react-sdk/lib/types";

type Room = {
  isMainRoom: boolean;
  participants: { email: string; displayName: string; id: string }[];
  roomName: string;
};

// const formatDate = (date: Date) => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");

//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// };

export const saveImages = async (
  consultationId: number,
  consultationTermId: number,
  userEmail: string,
  userId: number,
  screenshots: { dataURL: Blob; timestamp: number }[],
  term: string
) => {
  const filenames = screenshots.map((screenshot) => ({
    filename: `${screenshot.timestamp}.webp`,
  }));

  try {
    const signUrls = await fetch(
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

        if (response.ok) {
          console.log(`File ${filename} uploaded successfully.`);
        } else {
          console.error(`Failed to upload ${filename}: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error uploading ${filename}:`, error);
      }
    }
  } catch (error) {
    console.error("Error saving screenshots and timestamps:", error);
  }
};

export const getCurrentUser = async (api: IJitsiMeetExternalApi) => {
  //@ts-ignore
  const rooms: { rooms: Room[] } = await api.getRoomsInfo();

  const mainRoom = rooms.rooms.find((room) => room.isMainRoom);

  return mainRoom?.participants.find(
    //@ts-ignore
    (participant) => participant.id === api._myUserID
  );
};
