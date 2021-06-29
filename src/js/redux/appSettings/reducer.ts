import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";

import { IAppSettings } from "./actions";

export type SettingsAppApiAction =
  | (IDefaultApiAction & { type: "FETCH_APP_SETTINGS_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_APP_SETTINGS_SUCCESS";
      payload: IAppSettings;
    })
  | (IDefaultApiAction & {
      type: "FETCH_APP_SETTINGS_FAILURE";
      payload: IDefaultApiError;
    });

export interface IAppSettingsState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  data: IAppSettings;
}

export const INIT_STATE = {
  loading: false,
  error: false,
  data: {},
};

export default function reducer(
  state: IAppSettingsState = INIT_STATE,
  action: SettingsAppApiAction
): IAppSettingsState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    case ACTION.FETCH_SETTINGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ACTION.FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: action.payload,
      };

    case ACTION.FETCH_SETTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
