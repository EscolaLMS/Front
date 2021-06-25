import { ICourseState } from "../../interfaces/course";

export interface IProgramMenu {
  courseId: string;
  data: API.Lesson[];
  selectedLesson?: number;
  selectedTopic?: number;
  allCompleted: number[];
}

export interface IProgramButton {
  active: boolean;
  topic?: number;
  lesson?: number;
  courseId: string;
  loading: boolean;
  state: ICourseState;
}

export interface IProgramHeader {
  lesson?: string;
  topic?: string;
  title?: string;
  loading: boolean;
}
