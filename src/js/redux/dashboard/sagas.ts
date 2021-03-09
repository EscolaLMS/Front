import { takeLatest } from "redux-saga/effects";
import * as ACTION from "./actions";

import { createSaga } from "../sagas";

// eslint-disable-next-line
function* mySaga() {
  yield takeLatest(
    ACTION.GET_DASHBOARD_STATS_REQUEST,
    createSaga("GET_DASHBOARD_STATS", "/dashboard")
  );
}

export default mySaga;
