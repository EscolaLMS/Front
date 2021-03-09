export const FETCH_REQUEST = "FETCH_CURRICULUM_REQUEST";
export const FETCH_SUCCESS = "FETCH_CURRICULUM_SUCCESS";
export const FETCH_FAILURE = "FETCH_CURRICULUM_FAILURE";

interface IAction {
  type: string;
  id: string;
}

export const fetchCurriculum = (id: string): IAction => {
  return {
    type: FETCH_REQUEST,
    id,
  };
};
