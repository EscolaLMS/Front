import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";

import { ITag } from "../../interfaces";

export type TagsApiAction =
  | (IDefaultApiAction & { type: "FETCH_TAGS_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_TAGS_SUCCESS";
      payload: { success: boolean; data: ITag[] };
    })
  | (IDefaultApiAction & {
      type: "FETCH_TAGS_FAILURE";
      payload: IDefaultApiError;
    })
  | (IDefaultApiAction & { type: "FETCH_TAGS_UNIQUE_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_TAGS_UNIQUE_SUCCESS";
      payload: { success: boolean; data: string[] };
    })
  | (IDefaultApiAction & {
      type: "FETCH_TAGS_UNIQUE_FAILURE";
      payload: IDefaultApiError;
    });

export interface ITagsState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  list: ITag[];
  unique: string[];
}

export const INIT_STATE = {
  loading: false,
  error: false,
  list: [],
  unique: [],
};

export default function reducer(
  state: ITagsState = INIT_STATE,
  action: TagsApiAction
): ITagsState {
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
        unique: action.payload.data.sort(),
      };

    default:
      return state;
  }
}
