import {
  IMyProfileForm,
  ILoginData,
  IChangePass,
} from "../../interfaces/dashboard";
import { IAuthForm } from "../../interfaces/auth";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

interface IAction {
  type: string;
  data?: IAuthForm | IMyProfileForm | ILoginData | IChangePass;
  formData?: FormData;
}

interface IInterestAction {
  type: string;
  data?: { interests: number[] };
  id: number;
}

interface ISocialAction {
  type: string;
  token: string;
}

export type AuthActionTypes = IAction | IInterestAction | ISocialAction;

export const createNewUser = (data: IAuthForm): AuthActionTypes => {
  return {
    type: CREATE_USER_REQUEST,
    data,
  };
};

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const loginUser = (data: IAuthForm): AuthActionTypes => {
  return {
    type: LOGIN_USER_REQUEST,
    data,
  };
};

export const GET_MY_PROFILE_REQUEST = "GET_MY_PROFILE_REQUEST";
export const GET_MY_PROFILE_SUCCESS = "GET_MY_PROFILE_SUCCESS";
export const GET_MY_PROFILE_FAILURE = "GET_MY_PROFILE_FAILURE";

export const getMe = (): AuthActionTypes => {
  return {
    type: GET_MY_PROFILE_REQUEST,
  };
};

export const UPDATE_INTERESTS_REQUEST = "UPDATE_INTERESTS_REQUEST";
export const UPDATE_INTERESTS_SUCCESS = "UPDATE_INTERESTS_SUCCESS";
export const UPDATE_INTERESTS_FAILURE = "UPDATE_INTERESTS_FAILURE";

export const updateInterests = (
  id: number,
  data: { interests: number[] }
): AuthActionTypes => {
  return {
    type: UPDATE_INTERESTS_REQUEST,
    id,
    data,
  };
};

export const SOCIAL_LOGIN = "SOCIAL_LOGIN";

export const socialLogin = (token: string): AuthActionTypes => {
  return {
    type: SOCIAL_LOGIN,
    token,
  };
};

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";

export const forgotPassword = (data: IAuthForm): AuthActionTypes => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    data,
  };
};

export const SET_NEW_PASSWORD_REQUEST = "SET_NEW_PASSWORD_REQUEST";
export const SET_NEW_PASSWORD_SUCCESS = "SET_NEW_PASSWORD_SUCCESS";
export const SET_NEW_PASSWORD_FAILURE = "SET_NEW_PASSWORD_FAILURE";

export const setNewPassword = (data: IAuthForm): AuthActionTypes => {
  return {
    type: SET_NEW_PASSWORD_REQUEST,
    data,
  };
};

export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const updateProfile = (data: IMyProfileForm): AuthActionTypes => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    data,
  };
};

export const UPLOAD_AVATAR_REQUEST = "UPLOAD_AVATAR_REQUEST";
export const UPLOAD_AVATAR_SUCCESS = "UPLOAD_AVATAR_SUCCESS";
export const UPLOAD_AVATAR_FAILURE = "UPLOAD_AVATAR_FAILURE";

export const uploadAvatar = (formData: FormData): AuthActionTypes => {
  return {
    type: UPLOAD_AVATAR_REQUEST,
    formData,
  };
};

export const REMOVE_AVATAR_REQUEST = "REMOVE_AVATAR_REQUEST";
export const REMOVE_AVATAR_SUCCESS = "REMOVE_AVATAR_SUCCESS";
export const REMOVE_AVATAR_FAILURE = "REMOVE_AVATAR_FAILURE";

export const removeAvatar = (): AuthActionTypes => {
  return {
    type: REMOVE_AVATAR_REQUEST,
  };
};

export const USER_LOGOUT = "USER_LOGOUT";

export const logout = (): IAction => {
  return {
    type: USER_LOGOUT,
  };
};

export const CHANGE_EMAIL_REQUEST = "CHANGE_EMAIL_REQUEST";
export const CHANGE_EMAIL_SUCCESS = "CHANGE_EMAIL_SUCCESS";
export const CHANGE_EMAIL_FAILURE = "CHANGE_EMAIL_FAILURE";

export const changeEmail = (data: ILoginData): AuthActionTypes => {
  return {
    type: CHANGE_EMAIL_REQUEST,
    data,
  };
};

export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

export const changePassword = (data: IChangePass): AuthActionTypes => {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    data,
  };
};
