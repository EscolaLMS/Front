import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";
import { ICurriculum } from "../../interfaces/course/curriculum";

export type CurriculumApiAction =
  | (IDefaultApiAction & { type: "FETCH_CURRICULUM_REQUEST"; id: string })
  | (IDefaultApiAction & {
      type: "FETCH_CURRICULUM_SUCCESS";
      payload: { sections: ICurriculum[] };
    })
  | (IDefaultApiAction & {
      type: "FETCH_CURRICULUM_FAILURE";
      payload: IDefaultApiError;
    });

export interface ICurriculumState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  list: ICurriculum[];
}

export const INIT_STATE = {
  loading: false,
  error: false,
  list: [],
};

export default function reducer(
  state: ICurriculumState = INIT_STATE,
  action: CurriculumApiAction
): ICurriculumState {
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
