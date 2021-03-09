interface IAction {
  type: string;
  formData?: FormData;
}

export type FileActionTypes = IAction;

export const UPLOAD_FILE_REQUEST = "UPLOAD_FILE_REQUEST";
export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
export const UPLOAD_FILE_FAILURE = "UPLOAD_FILE_FAILURE";

export const uploadFile = (formData: FormData): FileActionTypes => {
  return {
    type: UPLOAD_FILE_REQUEST,
    formData,
  };
};

export const CLEAR_FILE = "CLEAR_FILE";

export const clearFile = (): FileActionTypes => {
  return {
    type: CLEAR_FILE,
  };
};
