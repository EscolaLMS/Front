import API from "./api";

export const pingTopic = (topidId: number): Promise<Response> | void => {
  if (topidId) {
    return API.call(`/courses/progress/${topidId}/ping`, "PUT");
  }
  return;
};
