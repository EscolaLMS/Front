import { IDashboardStats } from "../../interfaces/dashboard";

import { IDefaultApiAction, IDefaultApiError } from "../../interfaces/redux";

export type DashboardApiAction =
  | (IDefaultApiAction & { type: "GET_DASHBOARD_STATS_REQUEST" })
  | (IDefaultApiAction & {
      type: "GET_DASHBOARD_STATS_SUCCESS";
      payload: { data: IDashboardStats };
    })
  | (IDefaultApiAction & {
      type: "GET_DASHBOARD_STATS_FAILURE";
      payload: IDefaultApiError;
    });
