import { takeLatest } from "redux-saga/effects";
import * as ACTION from "./actions";

import { createSaga } from "./../sagas";

// eslint-disable-next-line
function* mySaga() {
  yield takeLatest(
    ACTION.FETCH_SETTINGS_REQUEST,
    createSaga("FETCH_SETTINGS", "/profile/settings")
  );
  yield takeLatest(
    ACTION.UPDATE_SETTINGS_REQUEST,
    createSaga("UPDATE_SETTINGS", "/profile/settings", "PUT")
  );
}

export default mySaga;
