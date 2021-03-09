import { takeLatest } from "redux-saga/effects";
import * as ACTION from "./actions";
import { createSaga } from "./../sagas";

// eslint-disable-next-line
function* authSaga() {
  yield takeLatest(
    ACTION.CREATE_USER_REQUEST,
    createSaga("CREATE_USER", "/auth/register", "POST")
  );
  yield takeLatest(
    ACTION.LOGIN_USER_REQUEST,
    createSaga("LOGIN_USER", "/auth/login", "POST")
  );
  yield takeLatest(
    ACTION.GET_MY_PROFILE_REQUEST,
    createSaga("GET_MY_PROFILE", "/profile/me", "GET")
  );
  yield takeLatest(
    ACTION.UPDATE_INTERESTS_REQUEST,
    createSaga("UPDATE_INTERESTS", "/profile/{id}/interests", "PUT")
  );
  yield takeLatest(
    ACTION.FORGOT_PASSWORD_REQUEST,
    createSaga("FORGOT_PASSWORD", "/auth/password/forgot", "POST")
  );
  yield takeLatest(
    ACTION.SET_NEW_PASSWORD_REQUEST,
    createSaga("SET_NEW_PASSWORD", "/auth/password/reset", "POST")
  );
  yield takeLatest(
    ACTION.UPLOAD_AVATAR_REQUEST,
    createSaga("UPLOAD_AVATAR", "/profile/upload-avatar", "POST")
  );
  yield takeLatest(
    ACTION.REMOVE_AVATAR_REQUEST,
    createSaga("REMOVE_AVATAR", "/profile/delete-avatar", "DELETE")
  );
  yield takeLatest(
    ACTION.UPDATE_PROFILE_REQUEST,
    createSaga("UPDATE_PROFILE", "/profile/me", "PUT")
  );
  yield takeLatest(
    ACTION.CHANGE_EMAIL_REQUEST,
    createSaga("CHANGE_EMAIL", "/profile/me-auth", "PUT")
  );
  yield takeLatest(
    ACTION.CHANGE_PASSWORD_REQUEST,
    createSaga("CHANGE_PASSWORD", "/profile/password", "PUT")
  );
}

export default authSaga;
