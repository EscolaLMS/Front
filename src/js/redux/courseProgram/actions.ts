export const FETCH_REQUEST = "FETCH_PROGRAM_REQUEST";
export const FETCH_SUCCESS = "FETCH_PROGRAM_SUCCESS";
export const FETCH_FAILURE = "FETCH_PROGRAM_FAILURE";

interface IAction {
  type: string;
  id: string;
}

export const fetchProgram = (id: string): IAction => {
  return {
    type: FETCH_REQUEST,
    id,
  };
};
