import { takeLatest } from "redux-saga/effects";
import * as ACTION from "./actions";

import { createSaga } from "./../sagas";

// eslint-disable-next-line
function* mySaga() {
  yield takeLatest(
    ACTION.FETCH_REQUEST,
    createSaga("FETCH_CURRICULUM", "/courses/{id}/curriculum")
  );
}

export default mySaga;
