import request from "umi-request";

/**  GET /api/courses */
export async function categoryTree() {
  return request<API.DataResponseSuccess<API.Category[]>>(
    `/api/categories/tree`,
    {
      method: "GET",
    }
  );
}
