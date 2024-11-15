import { API_URL } from "@/config/index";
import { IJitsiMeetExternalApi } from "@jitsi/react-sdk/lib/types";

type Room = {
  isMainRoom: boolean;
  participants: { email: string; displayName: string; id: string }[];
  roomName: string;
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const saveImage = (
  consultationId: number,
  consultationTermId: number,
  userEmail: string,
  dataURL: string,
  term: string,
  name: string = "aaa.png"
) => {
  fetch(dataURL)
    .then((res) => res.blob())
    .then((blob) => {
      const data = new FormData();

      data.append("name", name);
      data.append("file", new File([blob], name, { type: "image/png" }));
      data.append("consultation_id", consultationId.toString());
      data.append("user_termin_id", consultationTermId.toString());
      data.append("user_email", userEmail);
      data.append("timestamp", formatDate(new Date()));

      fetch(`${API_URL}/api/consultations/save-screen?executed_at=${term}`, {
        method: "POST",
        body: data,
      })
        .then(() => {})
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
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
