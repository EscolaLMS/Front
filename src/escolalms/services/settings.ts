import request from "umi-request";

export enum Currency {
  USD = "USD",
  EUR = "EUR",
}

/**  GET /api/courses */
export async function settings() {
  return request<API.DataResponseSuccess<API.AppSettings>>(`/api/settings`, {
    method: "GET",
  });
}
