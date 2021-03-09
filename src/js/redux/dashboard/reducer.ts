import * as ACTION from "./actions";
import { IDefaultApiError } from "../../interfaces/redux";
import { DashboardApiAction } from "./types";
import { IDashboardStats } from "../../interfaces/dashboard";

export interface IDashboardState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  data: IDashboardStats | undefined;
}

export const INIT_STATE = {
  loading: false,
  error: false,
  data: undefined,
};

export default function reducer(
  state: IDashboardState = INIT_STATE,
  action: DashboardApiAction
): IDashboardState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    //FETCH -- start
    case ACTION.GET_DASHBOARD_STATS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ACTION.GET_DASHBOARD_STATS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: action.payload.data,
      };

    case ACTION.GET_DASHBOARD_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //FETCH -- end

    default:
      return state;
  }
}
