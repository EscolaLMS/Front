import { IDashboardStats } from "../../interfaces/dashboard";

interface IAction {
  type: string;
  id?: string;
  data?: IDashboardStats;
}

export const GET_DASHBOARD_STATS_REQUEST = "GET_DASHBOARD_STATS_REQUEST";
export const GET_DASHBOARD_STATS_SUCCESS = "GET_DASHBOARD_STATS_SUCCESS";
export const GET_DASHBOARD_STATS_FAILURE = "GET_DASHBOARD_STATS_FAILURE";

export const getDashboardStats = (): IAction => {
  return {
    type: GET_DASHBOARD_STATS_REQUEST,
  };
};
