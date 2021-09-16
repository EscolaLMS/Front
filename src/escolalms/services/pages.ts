import request from "umi-request";

/**  GET /api/pages */
export async function pages(options?: { [key: string]: any }) {
  return request<API.PageList>(`/api/pages`, {
    method: "GET",
    ...(options || {}),
  });
}

/**  GET /api/pages/:slug */
export async function page(slug: string, options?: { [key: string]: any }) {
  return request<API.DefaultResponse<API.PageListItem>>(`/api/pages/${slug}`, {
    method: "GET",
    ...(options || {}),
  });
}
