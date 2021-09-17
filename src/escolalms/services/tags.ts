import request from "umi-request";

/**  GET /api/courses */
export async function uniqueTags() {
  return request<API.DataResponseSuccess<API.Tag[]>>(`/api/tags/unique`, {
    method: "GET",
  });
}
