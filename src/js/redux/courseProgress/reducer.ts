import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";
import {
  ICourseProgress,
  IProgressElement,
} from "../../interfaces/course/progress";

export type CoursesApiAction =
  | (IDefaultApiAction & { type: "FETCH_COURSE_PROGRESS_REQUEST"; id: number })
  | (IDefaultApiAction & {
      type: "FETCH_COURSE_PROGRESS_SUCCESS";
      payload: IProgressElement[];
      id: number;
    })
  | (IDefaultApiAction & {
      type: "FETCH_COURSE_PROGRESS_FAILURE";
      payload: IDefaultApiError;
      id: number;
    })
  | (IDefaultApiAction & { type: "FETCH_COURSES_PROGRESS_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_PROGRESS_SUCCESS";
      payload: ICourseProgress[];
    })
  | (IDefaultApiAction & {
      type: "FETCH_COURSES_PROGRESS_FAILURE";
      payload: IDefaultApiError;
    })
  | (IDefaultApiAction & {
      type: "UPDATE_COURSES_PROGRESS_REQUEST";
      id: number;
    })
  | (IDefaultApiAction & {
      type: "UPDATE_COURSES_PROGRESS_SUCCESS";
      payload: IProgressElement[];
      id: number;
    })
  | (IDefaultApiAction & {
      type: "UPDATE_COURSES_PROGRESS_FAILURE";
      payload: IDefaultApiError;
      id: number;
    })
  | (IDefaultApiAction & {
      type: "UPDATE_COURSES_PROGRESS_LOCAL";
      data: IProgressElement;
      id: number;
    });

export interface IProgressElementState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  list: IProgressElement[];
  id: number;
}
export interface IProgressState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  list: ICourseProgress[];
  byId: {
    [key: string]: IProgressElementState;
  };
}

export const INIT_STATE = {
  loading: false,
  error: false,
  list: [],
  byId: {},
};

export default function reducer(
  state: IProgressState = INIT_STATE,
  action: CoursesApiAction
): IProgressState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    case ACTION.FETCH_COURSES_PROGRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ACTION.FETCH_COURSES_PROGRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        list: action.payload,
      };
    case ACTION.FETCH_COURSES_PROGRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION.FETCH_COURSE_PROGRESS_REQUEST:
    case ACTION.UPDATE_COURSES_PROGRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        byId: {
          ...state.byId,
          [action.id]: state?.byId[action.id]
            ? {
                ...state.byId[action.id],
                loading: true,
                error: false,
                list: [],
                id: action.id,
              }
            : { loading: true, error: false, list: [], id: action.id },
        },
      };

    case ACTION.FETCH_COURSE_PROGRESS_SUCCESS:
    case ACTION.UPDATE_COURSES_PROGRESS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        byId: {
          ...state.byId,
          [action.id]: {
            list: action.payload,
            loading: false,
            error: false,
            id: action.id,
          },
        },
      };

    case ACTION.UPDATE_COURSES_PROGRESS_LOCAL:
      return {
        ...state,
        error: false,
        loading: false,
        byId: {
          ...state.byId,
          [action.id]: {
            list: state.byId[action.id].list.map((el: IProgressElement) =>
              el.lecture_id === action.data.lecture_id ? action.data : el
            ),
            loading: false,
            error: false,
            id: action.id,
          },
        },
      };

    case ACTION.FETCH_COURSE_PROGRESS_FAILURE:
    case ACTION.UPDATE_COURSES_PROGRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            loading: false,
            error: true,
            id: action.id,
          },
        },
      };

    default:
      return state;
  }
}
