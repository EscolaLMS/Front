import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";
import { ICourse } from "../../interfaces/course";

export type CoursesApiAction =
  | (IDefaultApiAction & { type: "FETCH_COURSES_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_SUCCESS";
      payload: { success: boolean; data: ICourse[] };
    })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_FAILURE";
      payload: IDefaultApiError;
    })
  | (IDefaultApiAction & { type: "FETCH_COURSES_UNIQUE_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_UNIQUE_SUCCESS";
      payload: ICourse;
    })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_UNIQUE_FAILURE";
      payload: IDefaultApiError;
    });

export interface ICoursesState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  list: ICourse[];
  unique: ICourse | undefined;
  recomended: ICourse[];
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
        list: action.payload.data,
      };

    case ACTION.FETCH_UNIQUE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        unique: action.payload,
      };

    default:
      return state;
  }
}
