import { takeLatest } from "redux-saga/effects";
import * as ACTION from "./actions";

import { createSaga } from "./../sagas";

// eslint-disable-next-line
function* mySaga() {
  yield takeLatest(
    ACTION.FETCH_SETTINGS_REQUEST,
    createSaga("FETCH_APP_SETTINGS", "/settings")
  );
}

export default mySaga;
