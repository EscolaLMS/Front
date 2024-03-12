import { API_URL } from "@/config/index";

const BASE_URL = API_URL;

type Message = {
  question: string;
  conversation_id?: string;
};

type ApiResponse<T> = {
  data: T | null;
  status: number;
  message: string;
};

async function fetchResource<T>(
  url: string,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, headers);
    const data: T = await response.json();
    return { data, status: response.status, message: "success" };
  } catch (error) {
    return { data: null, status: 500, message: (error as Error).message };
  }
}

export const postMessage = async (
  lessonID: number,
  message: Message
): Promise<ApiResponse<Message>> => {
  return fetchResource<Message>(`${BASE_URL}/api/yepp-chat/${lessonID}`, {
    method: "POST",
    body: JSON.stringify(message),
  });
};
