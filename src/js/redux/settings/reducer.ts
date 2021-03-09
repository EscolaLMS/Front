import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";

import { ISettings } from "./actions";

export type SettingsApiAction =
  | (IDefaultApiAction & { type: "FETCH_SETTINGS_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_SETTINGS_SUCCESS";
      payload: ISettings;
    })
  | (IDefaultApiAction & {
      type: "FETCH_SETTINGS_FAILURE";
      payload: IDefaultApiError;
    })
  | (IDefaultApiAction & { type: "UPDATE_SETTINGS_REQUEST" })
  | (IDefaultApiAction & {
      type: "UPDATE_SETTINGS_SUCCESS";
      payload: ISettings;
    })
  | (IDefaultApiAction & {
      type: "UPDATE_SETTINGS_FAILURE";
      payload: IDefaultApiError;
    });

export interface ISettingsState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  data: ISettings;
}

export const INIT_STATE = {
  loading: false,
  error: false,
  data: {
    notifications_enabled: "",
  },
};

export default function reducer(
  state: ISettingsState = INIT_STATE,
  action: SettingsApiAction
): ISettingsState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    case ACTION.FETCH_SETTINGS_REQUEST:
    case ACTION.UPDATE_SETTINGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ACTION.UPDATE_SETTINGS_SUCCESS:
    case ACTION.FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: action.payload,
      };

    case ACTION.FETCH_SETTINGS_FAILURE:
    case ACTION.UPDATE_SETTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
