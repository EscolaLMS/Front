import * as ACTION from "./actions";
import { IDefaultApiError } from "../../interfaces/redux";

import { FileApiAction } from "./type";
import { IFile } from "../../interfaces/file";

export interface IFileState {
  loading: boolean;
  error: boolean | IDefaultApiError;
  file: IFile | undefined;
}

export const INIT_STATE = {
  loading: false,
  error: false,
  file: undefined,
};

export default function reducer(
  state: IFileState = INIT_STATE,
  action: FileApiAction
): IFileState {
  if (state === undefined) {
    return INIT_STATE;
  }
  switch (action.type) {
    case ACTION.UPLOAD_FILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ACTION.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        file: action.payload,
      };

    case ACTION.UPLOAD_FILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION.CLEAR_FILE:
      return INIT_STATE;

    default:
      return state;
  }
}
