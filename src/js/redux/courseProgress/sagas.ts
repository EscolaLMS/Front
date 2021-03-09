import { takeLatest } from "redux-saga/effects";
import * as ACTION from "./actions";

import { createSaga } from "./../sagas";

// eslint-disable-next-line
function* mySaga() {
  yield takeLatest(
    ACTION.FETCH_COURSE_PROGRESS_REQUEST,
    createSaga("FETCH_COURSE_PROGRESS", "/courses/progress/{id}")
  );
  yield takeLatest(
    ACTION.FETCH_COURSES_PROGRESS_REQUEST,
    createSaga("FETCH_COURSES_PROGRESS", "/courses/progress")
  );
  yield takeLatest(
    ACTION.UPDATE_COURSES_PROGRESS_REQUEST,
    createSaga("UPDATE_COURSES_PROGRESS", "/courses/progress/{id}", "PATCH")
  );
}

export default mySaga;
