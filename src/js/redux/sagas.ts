import { all } from "redux-saga/effects";
import { call, put } from "redux-saga/effects";
import API from "./../services/api";

import tagsSaga from "./tags/sagas";
import categoriesSaga from "./categories/sagas";
import authSaga from "./auth/sagas";
import coursesSaga from "./courses/sagas";
import programSaga from "./courseProgram/sagas";
import progressSaga from "./courseProgress/sagas";
import fileSaga from "./file/sagas";

import settings from "./settings/sagas";
import dashboard from "./dashboard/sagas";

export interface IDefaultApiAction {
  id?: string | number;
  type: string;
  error?: unknown;
  payload: {
    id?: unknown;
    data?: unknown;
  };
  data?: IDefaultApiAction;
  formData?: FormData;
}

export function createSaga(prefix: string, endpoint: string, method = "GET") {
  return function* (action: IDefaultApiAction): unknown {
    const data: IDefaultApiAction = Object.assign({}, action);

    const nEndpoint =
      action.id && endpoint.indexOf("{id}") !== -1
        ? endpoint.split("{id}").join(action.id.toString())
        : endpoint;

    try {
      const response = yield call(
        API.call,
        nEndpoint,
        method,
        action.data,
        action.formData
      );
      const responseBody = yield call([response, "json"]);

      if (response.status >= 400) {
        yield put({
          type: `${prefix}_FAILURE`,
          data,
          errorCode: response.status,
          payload: responseBody,
        });
      } else {
        yield put(
          action?.id
            ? {
                type: `${prefix}_SUCCESS`,
                payload: responseBody,
                id: action?.id,
              }
            : {
                type: `${prefix}_SUCCESS`,
                payload: responseBody,
              }
        );
      }
    } catch (e) {
      yield put({ type: `${prefix}_FAILURE`, message: e.message });
    }
  };
}

// eslint-disable-next-line
export default function* rootSaga(getState: any) {
  yield all([
    tagsSaga(),
    categoriesSaga(),
    authSaga(),
    coursesSaga(),
    programSaga(),
    progressSaga(),
    fileSaga(),
    settings(),
    dashboard(),
  ]);
}
