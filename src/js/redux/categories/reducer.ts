import * as ACTION from "./actions";
import { IDefaultApiError, IDefaultApiAction } from "../../interfaces/redux";

export type CategoriesApiAction =
  | (IDefaultApiAction & { type: "FETCH_CATEGORIES_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_CATEGORIES_SUCCESS";
      payload: { success: boolean; data: API.Category[] };
    })
  | (IDefaultApiAction & {
      type: "FETCH_CATEGORIES_FAILURE";
      payload: IDefaultApiError;
    })
  | (IDefaultApiAction & { type: "FETCH_CATEGORY_REQUEST" })
  | (IDefaultApiAction & {
      type: "FETCH_CATEGORY_SUCCESS";
      payload: { success: boolean; data: API.Category };
    })
  | (IDefaultApiAction & {
      type: "FETCH_CATEGORY_FAILURE";
      payload: IDefaultApiError;
    });

export interface ICategoriesState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  list: API.Category[];
  unique: API.Category | undefined;
}

export const INIT_STATE = {
  loading: false,
  error: false,
  list: [],
  unique: undefined,
};

export default function reducer(
  state: ICategoriesState = INIT_STATE,
  action: CategoriesApiAction
): ICategoriesState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    //FETCH -- start
    case ACTION.FETCH_CATEGORIES_REQUEST:
    case ACTION.FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ACTION.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        list: action.payload.data,
      };
    case ACTION.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        unique: action.payload.data,
      };
    case ACTION.FETCH_CATEGORIES_FAILURE:
    case ACTION.FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //FETCH -- end

    default:
      return state;
  }
}
