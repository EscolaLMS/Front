export const FETCH_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_FAILURE = "FETCH_COURSES_FAILURE";

export const FETCH_UNIQUE_REQUEST = "FETCH_COURSES_UNIQUE_REQUEST";
export const FETCH_UNIQUE_SUCCESS = "FETCH_COURSES_UNIQUE_SUCCESS";
export const FETCH_UNIQUE_FAILURE = "FETCH_COURSES_UNIQUE_FAILURE";

interface IData {
  category_id?: string;
  course_title?: string;
  limit?: number;
}

interface IRateData {
  course_id: number;
  comments: string;
}
interface IAction {
  type: string;
  data?: IData | IRateData;
  id?: number;
}

export const fetchCourses = (data?: IData): IAction => {
  return {
    type: FETCH_REQUEST,
    data,
  };
};

export const fetchCourse = (id: number): IAction => {
  return {
    type: FETCH_UNIQUE_REQUEST,
    id,
  };
};
