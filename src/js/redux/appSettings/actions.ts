export const FETCH_SETTINGS_REQUEST = "FETCH_APP_SETTINGS_REQUEST";
export const FETCH_SETTINGS_SUCCESS = "FETCH_APP_SETTINGS_SUCCESS";
export const FETCH_SETTINGS_FAILURE = "FETCH_APP_SETTINGS_FAILURE";

export interface IAppSettings {
  defaultCurrency?: string;
  currencies?: string[];
  env?: string;
  stripe?: {
    publishable_key: string;
  };
}
interface IAction {
  type: string;
  data?: IAppSettings;
}

export const fetchSettings = (): IAction => {
  return {
    type: FETCH_SETTINGS_REQUEST,
  };
};
