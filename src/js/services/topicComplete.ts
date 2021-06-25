import { store } from "../redux/store";

import {
  updateCourseProgressLocally,
  updateCourseProgress,
} from "../redux/courseProgress/actions";

export const completeTopic = (courseId: string, topicId: number): void => {
  if (courseId && topicId) {
    if (navigator.onLine) {
      store.dispatch(
        updateCourseProgress(courseId, {
          progress: [
            {
              topic_id: topicId,
              status: 1,
            },
          ],
        })
      );
    } else {
      store.dispatch(
        updateCourseProgressLocally(courseId, {
          topic_id: topicId,
          status: 1,
        })
      );
    }
  }
  return;
};
