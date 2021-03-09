import * as ACTION from "./actions";
import { IDefaultApiError, IError } from "../../interfaces/redux";
import { AuthApiAction } from "./type";
import { IUser } from "../../interfaces";
import { toast } from "react-toastify";
import { REHYDRATE } from "redux-persist/lib/constants";
import { serverErrors } from "../../helpers/serverErrors";
export interface IAuthState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  token: string;
  user: IUser;
  resetPassword?: boolean;
  isAuthorized?: boolean;
  isAccountCreated?: boolean;
  uploadedAvatar?: boolean;
  passwordChanged?: boolean;
  profileUpdated?: boolean;
}

export const INIT_STATE = {
  loading: false,
  error: false,
  token: "",
  user: {
    name: "",
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    is_active: null,
    created_at: "",
    updated_at: "",
    interests: [],
    age: undefined,
    country: "",
    city: "",
    postcode: "",
    street: "",
    gender: undefined,
  },
  isAuthorized: false,
  isAccountCreated: false,
  uploadedAvatar: true,
  passwordChanged: false,
  profileUpdated: false,
};

export default function reducer(
  state: IAuthState = INIT_STATE,
  action: AuthApiAction
): IAuthState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        user: action.payload?.Auth?.user,
        token: action.payload?.Auth?.token,
      };

    case ACTION.GET_MY_PROFILE_REQUEST:
    case ACTION.CREATE_USER_REQUEST:
    case ACTION.LOGIN_USER_REQUEST:
    case ACTION.FORGOT_PASSWORD_REQUEST:
    case ACTION.SET_NEW_PASSWORD_REQUEST:
    case ACTION.UPDATE_PROFILE_REQUEST:
    case ACTION.UPDATE_INTERESTS_REQUEST:
    case ACTION.REMOVE_AVATAR_REQUEST:
    case ACTION.CHANGE_EMAIL_REQUEST:
    case ACTION.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        uploadedAvatar: false,
        passwordChanged: false,
        profileUpdated: false,
        error: false,
      };

    case ACTION.UPLOAD_AVATAR_REQUEST:
      return {
        ...state,
        loading: true,
        uploadedAvatar: false,
        passwordChanged: false,
        profileUpdated: false,
        error: false,
        user: { ...state.user, avatar: "" },
      };

    case ACTION.FORGOT_PASSWORD_SUCCESS:
      toast.success(
        "We will send you an email with a link to reset your password"
      );
      return {
        ...state,
        error: false,
        loading: false,
      };
    case ACTION.SET_NEW_PASSWORD_SUCCESS:
      toast.success("Your password has been reset");
      return {
        ...state,
        error: false,
        loading: false,
        resetPassword: true,
      };

    case ACTION.CREATE_USER_SUCCESS:
      toast.success(
        "User created successfully - We sent to your email activation link"
      );
      return {
        ...state,
        error: false,
        loading: false,
        isAccountCreated: true,
      };

    case ACTION.LOGIN_USER_SUCCESS:
      toast.success("Login success");
      return {
        ...state,
        error: false,
        loading: false,
        isAuthorized: true,
        token: action.payload.token,
      };
    case ACTION.SOCIAL_LOGIN:
      return {
        ...state,
        error: false,
        loading: false,
        token: action.token,
      };
    case ACTION.GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        user: action.payload.data,
        isAuthorized: true,
      };

    case ACTION.UPLOAD_AVATAR_SUCCESS:
    case ACTION.REMOVE_AVATAR_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadedAvatar: true,
        error: false,
      };

    case ACTION.UPDATE_INTERESTS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        user: action.payload.data,
      };

    case ACTION.UPDATE_PROFILE_SUCCESS:
      toast.success("Profile updated");
      return {
        ...state,
        error: false,
        loading: false,
        profileUpdated: true,
      };

    case ACTION.CHANGE_EMAIL_SUCCESS:
      toast.success("Email changed");
      return {
        ...state,
        error: false,
        loading: false,
      };

    case ACTION.CHANGE_PASSWORD_SUCCESS:
      toast.success("Password changed");
      return {
        ...state,
        error: false,
        loading: false,
        passwordChanged: true,
      };

    case ACTION.UPDATE_INTERESTS_FAILURE:
    case ACTION.SET_NEW_PASSWORD_FAILURE:
    case ACTION.CREATE_USER_FAILURE:
    case ACTION.LOGIN_USER_FAILURE:
    case ACTION.FORGOT_PASSWORD_FAILURE:
    case ACTION.UPDATE_PROFILE_FAILURE:
    case ACTION.UPLOAD_AVATAR_FAILURE:
    case ACTION.REMOVE_AVATAR_FAILURE:
    case ACTION.CHANGE_EMAIL_FAILURE:
    case ACTION.CHANGE_PASSWORD_FAILURE:
      toast.error(serverErrors(action.errorCode, action.payload as IError));
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION.GET_MY_PROFILE_FAILURE:
      toast.error(serverErrors(action.errorCode, action.payload as IError));
      localStorage.removeItem("persist:root");
      return INIT_STATE;

    case ACTION.USER_LOGOUT:
      toast.success("Logout success");
      localStorage.removeItem("persist:root");
      return INIT_STATE;

    default:
      return state;
  }
}
