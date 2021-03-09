import { store } from "../redux/store";

import {
  updateCourseProgressLocally,
  updateCourseProgress,
} from "../redux/courseProgress/actions";

export const completeLecture = (courseId: string, lectureId: number): void => {
  if (courseId && lectureId) {
    if (navigator.onLine) {
      store.dispatch(
        updateCourseProgress(courseId, {
          progress: [
            {
              lecture_id: lectureId,
              status: 1,
            },
          ],
        })
      );
    } else {
      store.dispatch(
        updateCourseProgressLocally(courseId, {
          lecture_id: lectureId,
          status: 1,
        })
      );
    }
  }
  return;
};
