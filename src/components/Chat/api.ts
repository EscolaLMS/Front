import { API_URL } from "@/config/index";

const BASE_URL = API_URL;

type Message = {
  question: string;
  conversation_id?: string;
};

type ApiResponse<T> = {
  data: T | null;
  message: string;
};

type Answer = {
  answer: string;
  conversation_id: string;
};

async function fetchResource<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, options);
    const data: ApiResponse<T> = await response.json();
    return {
      data: data.data,
      message: data.message,
    };
  } catch (error) {
    return { data: null, message: (error as Error).message };
  }
}

export const sendChatMessage = async (
  lessonID: number,
  message: Message,
  token: string
): Promise<ApiResponse<Answer>> => {
  return fetchResource<Answer>(`${BASE_URL}/api/yepp-chat/${lessonID}`, {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
