import { takeEvery } from "redux-saga/effects";
import * as ACTION from "./actions";

import { createSaga } from "../sagas";

// eslint-disable-next-line
function* mySaga() {
  yield takeEvery(
    ACTION.UPLOAD_FILE_REQUEST,
    createSaga("UPLOAD_FILE", "/attachments", "POST")
  );
}

export default mySaga;
