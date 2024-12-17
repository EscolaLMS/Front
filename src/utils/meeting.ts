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
  screenshots: { dataURL: string; timestamp: number }[],
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
        const base64Data = screenshot.dataURL.split(",")[1];
        const binaryData = atob(base64Data);
        const arrayBuffer = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          arrayBuffer[i] = binaryData.charCodeAt(i);
        }

        const blob = new Blob([arrayBuffer]);
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

  // try {
  //   // Process all screenshots asynchronously
  //   const pairedFiles = await Promise.all(
  //     screenshots.map(async (screenshot, index) => {
  //       const response = await fetch(screenshot.dataURL);
  //       const blob = await response.blob();
  //       return {
  //         file: new File([blob], `${name}_${index + 1}.png`, {
  //           type: "image/png",
  //         }),
  //         timestamp: screenshot.timestamp,
  //       };
  //     })
  //   );

  //   // Append paired files and timestamps to FormData
  //   pairedFiles.forEach((pair, index) => {
  //     const objectKey = `files[${index}]`;
  //     data.append(`${objectKey}[file]`, pair.file);
  //     data.append(
  //       `${objectKey}[timestamp]`,
  //       formatDate(new Date(pair.timestamp))
  //     );
  //   });

  //   // Add metadata
  //   data.append("consultation_id", consultationId.toString());
  //   data.append("user_termin_id", consultationTermId.toString());
  //   data.append("user_id", userId.toString());
  //   data.append("user_email", userEmail);
  //   data.append("executed_at", term);

  //   // Send the request
  //   const response = await fetch(`${API_URL}/api/consultations/save-screen`, {
  //     method: "POST",
  //     body: data,
  //   });

  //   if (!response.ok) {
  //     throw new Error(`Failed to save images: ${response.statusText}`);
  //   }

  //   console.log("Screenshots and timestamps saved successfully.");
  // } catch (error) {
  //   console.error("Error saving screenshots and timestamps:", error);
  // }
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
