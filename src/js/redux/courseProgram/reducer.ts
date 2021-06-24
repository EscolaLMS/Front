import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";
import { IProgram } from "../../interfaces/course/program";

export type programApiAction =
  | (IDefaultApiAction & { type: "FETCH_PROGRAM_REQUEST"; id: string })
  | (IDefaultApiAction & {
      type: "FETCH_PROGRAM_SUCCESS";
      payload: { sections: IProgram[] };
    })
  | (IDefaultApiAction & {
      type: "FETCH_PROGRAM_FAILURE";
      payload: IDefaultApiError;
    });

export interface IProgramState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  list: IProgram[];
}

export const INIT_STATE = {
  loading: false,
  error: false,
  list: [],
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
        list: action.payload.sections,
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
