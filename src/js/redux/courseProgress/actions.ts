import { IProgressElement } from "../../interfaces/course/progress";

export const FETCH_COURSE_PROGRESS_REQUEST = "FETCH_COURSE_PROGRESS_REQUEST";
export const FETCH_COURSE_PROGRESS_SUCCESS = "FETCH_COURSE_PROGRESS_SUCCESS";
export const FETCH_COURSE_PROGRESS_FAILURE = "FETCH_COURSE_PROGRESS_FAILURE";

export const FETCH_COURSES_PROGRESS_REQUEST = "FETCH_COURSES_PROGRESS_REQUEST";
export const FETCH_COURSES_PROGRESS_SUCCESS = "FETCH_COURSES_PROGRESS_SUCCESS";
export const FETCH_COURSES_PROGRESS_FAILURE = "FETCH_COURSES_PROGRESS_FAILURE";

export const UPDATE_COURSES_PROGRESS_REQUEST =
  "UPDATE_COURSES_PROGRESS_REQUEST";
export const UPDATE_COURSES_PROGRESS_SUCCESS =
  "UPDATE_COURSES_PROGRESS_SUCCESS";
export const UPDATE_COURSES_PROGRESS_FAILURE =
  "UPDATE_COURSES_PROGRESS_FAILURE";

export const UPDATE_COURSES_PROGRESS_LOCAL = "UPDATE_COURSES_PROGRESS_LOCAL";

interface IAction {
  type: string;
  data?: { progress: IProgressElement[] };
  id?: string;
}

interface ILocalAction {
  type: string;
  data?: IProgressElement;
  id?: string;
}

export const fetchCourseProgress = (id: string): IAction => {
  return {
    type: FETCH_COURSE_PROGRESS_REQUEST,
    id,
  };
};

export const fetchCoursesProgress = (): IAction => {
  return {
    type: FETCH_COURSES_PROGRESS_REQUEST,
  };
};

export const updateCourseProgress = (
  id: string,
  data: { progress: IProgressElement[] }
): IAction => {
  return {
    type: UPDATE_COURSES_PROGRESS_REQUEST,
    id,
    data,
  };
};

export const updateCourseProgressLocally = (
  id: string,
  data: IProgressElement
): ILocalAction => {
  return {
    type: UPDATE_COURSES_PROGRESS_LOCAL,
    id,
    data,
  };
};
