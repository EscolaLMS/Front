import API from "./api";

export const pingLecture = (lectureId: number): Promise<Response> | void => {
  if (lectureId) {
    return API.call(`/courses/progress/${lectureId}/ping`, "PUT");
  }
  return;
};
