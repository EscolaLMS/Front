import { IUser } from "../../interfaces";
import { IDefaultApiAction, IDefaultApiError } from "../../interfaces/redux";
import { IAuthState } from "./reducer";

export type AuthApiAction =
  | (IDefaultApiAction & { type: "CREATE_USER_REQUEST" })
  | (IDefaultApiAction & { type: "LOGIN_USER_REQUEST" })
  | (IDefaultApiAction & { type: "GET_MY_PROFILE_REQUEST" })
  | (IDefaultApiAction & { type: "FORGOT_PASSWORD_REQUEST" })
  | (IDefaultApiAction & { type: "SET_NEW_PASSWORD_REQUEST" })
  | (IDefaultApiAction & { type: "UPDATE_PROFILE_REQUEST" })
  | (IDefaultApiAction & { type: "UPLOAD_AVATAR_REQUEST" })
  | (IDefaultApiAction & { type: "REMOVE_AVATAR_REQUEST" })
  | (IDefaultApiAction & { type: "CHANGE_EMAIL_REQUEST" })
  | (IDefaultApiAction & { type: "CHANGE_PASSWORD_REQUEST" })
  | (IDefaultApiAction & {
      type: "persist/REHYDRATE";
      payload: { Auth: IAuthState };
    })
  | (IDefaultApiAction & {
      type: "CREATE_USER_SUCCESS";
      payload: { success: boolean; token: string };
    })
  | (IDefaultApiAction & {
      type: "SOCIAL_LOGIN";
      token: string;
    })
  | (IDefaultApiAction & {
      type: "LOGIN_USER_SUCCESS";
      payload: { success: boolean; token: string };
    })
  | (IDefaultApiAction & {
      type: "UPLOAD_AVATAR_SUCCESS";
      payload: { success: boolean };
    })
  | (IDefaultApiAction & {
      type: "GET_MY_PROFILE_SUCCESS";
      payload: { success: boolean; data: IUser };
    })
  | (IDefaultApiAction & {
      type: "UPDATE_PROFILE_SUCCESS";
      payload: { success: boolean };
    })
  | (IDefaultApiAction & {
      type: "CHANGE_EMAIL_SUCCESS";
      payload: { success: boolean };
    })
  | (IDefaultApiAction & {
      type: "CHANGE_PASSWORD_SUCCESS";
      payload: { success: boolean };
    })
  | (IDefaultApiAction & {
      type: "REMOVE_AVATAR_SUCCESS";
      payload: { success: boolean };
    })
  | (IDefaultApiAction & { type: "FORGOT_PASSWORD_SUCCESS" })
  | (IDefaultApiAction & { type: "SET_NEW_PASSWORD_SUCCESS" })
  | (IDefaultApiAction & {
      type: "CREATE_USER_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "LOGIN_USER_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "GET_MY_PROFILE_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "UPDATE_INTERESTS_REQUEST" })
  | (IDefaultApiAction & {
      type: "UPDATE_INTERESTS_SUCCESS";
      payload: { success: boolean; data: IUser };
    })
  | (IDefaultApiAction & {
      type: "UPDATE_INTERESTS_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "FORGOT_PASSWORD_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "UPDATE_PROFILE_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "CHANGE_EMAIL_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "CHANGE_PASSWORD_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "SET_NEW_PASSWORD_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "UPLOAD_AVATAR_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & {
      type: "REMOVE_AVATAR_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    })
  | (IDefaultApiAction & { type: "USER_LOGOUT" });
