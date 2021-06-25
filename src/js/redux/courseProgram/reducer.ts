import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";

export type programApiAction =
  | (IDefaultApiAction & { type: "FETCH_PROGRAM_REQUEST"; id: string })
  | (IDefaultApiAction & {
      type: "FETCH_PROGRAM_SUCCESS";
      payload: API.DefaultResponse<API.CourseProgram>;
    })
  | (IDefaultApiAction & {
      type: "FETCH_PROGRAM_FAILURE";
      payload: IDefaultApiError;
    });

export interface IProgramState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  lessons: API.Lesson[];
}

export const INIT_STATE = {
  loading: false,
  error: false,
  lessons: [],
};

export default function reducer(
  state: IProgramState = INIT_STATE,
  action: programApiAction
): IProgramState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    case ACTION.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ACTION.FETCH_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        lessons: action.payload.success ? action.payload.data.lessons : [],
      };

    case ACTION.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
