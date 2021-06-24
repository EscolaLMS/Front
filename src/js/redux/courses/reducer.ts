import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";

export type CoursesApiAction =
  | (IDefaultApiAction & { type: "FETCH_COURSES_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_SUCCESS";
      payload: API.DataResponseSuccess<API.PaginatedList<Required<API.Course>>>;
    })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_FAILURE";
      payload: IDefaultApiError;
    })
  | (IDefaultApiAction & { type: "FETCH_COURSES_UNIQUE_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_UNIQUE_SUCCESS";
      payload: API.DataResponseSuccess<Required<API.Course>>;
    })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_UNIQUE_FAILURE";
      payload: IDefaultApiError;
    });

export interface ICoursesState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  list: Required<API.Course>[];
  unique: Required<API.Course> | undefined;
  recomended: Required<API.Course>[];
  isRated: boolean;
}

export const INIT_STATE = {
  loading: false,
  error: false,
  list: [],
  unique: undefined,
  recomended: [],
  isRated: false,
};

export default function reducer(
  state: ICoursesState = INIT_STATE,
  action: CoursesApiAction
): ICoursesState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    case ACTION.FETCH_UNIQUE_REQUEST:
    case ACTION.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        isRated: false,
      };

    case ACTION.FETCH_UNIQUE_FAILURE:
    case ACTION.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION.FETCH_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        list: action.payload.data.data,
      };

    case ACTION.FETCH_UNIQUE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        unique: action.payload.data,
      };

    default:
      return state;
  }
}
