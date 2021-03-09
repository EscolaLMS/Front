export const FETCH_SETTINGS_REQUEST = "FETCH_SETTINGS_REQUEST";
export const FETCH_SETTINGS_SUCCESS = "FETCH_SETTINGS_SUCCESS";
export const FETCH_SETTINGS_FAILURE = "FETCH_SETTINGS_FAILURE";

export const UPDATE_SETTINGS_REQUEST = "UPDATE_SETTINGS_REQUEST";
export const UPDATE_SETTINGS_SUCCESS = "UPDATE_SETTINGS_SUCCESS";
export const UPDATE_SETTINGS_FAILURE = "UPDATE_SETTINGS_FAILURE";

export interface ISettings {
  notifications_enabled: string;
}
interface IAction {
  type: string;
  data?: ISettings;
}

export const fetchSettings = (): IAction => {
  return {
    type: FETCH_SETTINGS_REQUEST,
  };
};

export const changeSettings = (data: ISettings): IAction => {
  return {
    type: UPDATE_SETTINGS_REQUEST,
    data,
  };
};
