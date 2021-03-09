import { takeLatest } from "redux-saga/effects";
import * as ACTION from "./actions";

import { createSaga } from "./../sagas";

// eslint-disable-next-line
function* mySaga() {
  yield takeLatest(
    ACTION.FETCH_CATEGORIES_REQUEST,
    createSaga("FETCH_CATEGORIES", "/categories")
  );
  yield takeLatest(
    ACTION.FETCH_CATEGORY_REQUEST,
    createSaga("FETCH_CATEGORY", "/categories/{id}")
  );
}

export default mySaga;
