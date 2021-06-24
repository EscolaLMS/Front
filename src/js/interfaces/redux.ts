import { ITagsState } from "./../redux/tags/reducer";
import { ICategoriesState } from "./../redux/categories/reducer";
import { IAuthState } from "../redux/auth/reducer";
import { ICoursesState } from "../redux/courses/reducer";
import { IProgramState } from "../redux/courseProgram/reducer";
import { IProgressState } from "../redux/courseProgress/reducer";
import { IFileState } from "../redux/file/reducer";
import { ISettingsState } from "../redux/settings/reducer";
import { IDashboardState } from "../redux/dashboard/reducer";

export interface IDefaultApiAction {
  id?: string | number;
  type: string;
  error?: unknown;
  payload: unknown;
  data?: IDefaultApiAction;
}

export interface IDefaultApiError {
  id?: string | number;
  type?: string;
  payload?: unknown | IError;
  data?: unknown;
  errorCode?: number;
  message?: string;
  error?: Record<string, string> | unknown;
}

export interface IRootState {
  Tags: ITagsState;
  Categories: ICategoriesState;
  Auth: IAuthState;
  Courses: ICoursesState;
  Program: IProgramState;
  Progress: IProgressState;
  File: IFileState;
  Settings: ISettingsState;
  Dashboard: IDashboardState;
}

export interface IError {
  message?: string;
  errors?: IErrors;
}

interface IErrors {
  [key: string]: string[];
}
