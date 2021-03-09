export const FETCH_REQUEST = "FETCH_TAGS_REQUEST";
export const FETCH_SUCCESS = "FETCH_TAGS_SUCCESS";
export const FETCH_FAILURE = "FETCH_TAGS_FAILURE";

export const FETCH_UNIQUE_REQUEST = "FETCH_TAGS_UNIQUE_REQUEST";
export const FETCH_UNIQUE_SUCCESS = "FETCH_TAGS_UNIQUE_SUCCESS";
export const FETCH_UNIQUE_FAILURE = "FETCH_TAGS_UNIQUE_FAILURE";

interface IAction {
  type: string;
}

export const fetchTags = (): IAction => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchTag = (): IAction => {
  return {
    type: FETCH_UNIQUE_REQUEST,
  };
};
