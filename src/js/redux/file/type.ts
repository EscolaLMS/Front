import { IDefaultApiAction, IDefaultApiError } from "../../interfaces/redux";
import { IFile } from "../../interfaces/file";

export type FileApiAction =
  | (IDefaultApiAction & {
      type: "UPLOAD_FILE_REQUEST";
    })
  | (IDefaultApiAction & {
      type: "CLEAR_FILE";
    })
  | (IDefaultApiAction & {
      type: "UPLOAD_FILE_SUCCESS";
      payload: IFile;
    })
  | (IDefaultApiAction & {
      type: "UPLOAD_FILE_FAILURE";
      payload: IDefaultApiError;
      errorCode: number;
    });
