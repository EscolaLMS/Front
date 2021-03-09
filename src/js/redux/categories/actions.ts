export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export const FETCH_CATEGORY_REQUEST = "FETCH_CATEGORY_REQUEST";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAILURE = "FETCH_CATEGORY_FAILURE";

interface IAction {
  type: string;
  id?: number;
}

export const fetchCategories = (): IAction => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

export const fetchCategory = (id: number): IAction => {
  return {
    type: FETCH_CATEGORY_REQUEST,
    id,
  };
};
