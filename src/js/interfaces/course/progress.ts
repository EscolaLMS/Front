import { ICourse } from ".";

export interface IProgressElement {
  lecture_id: number;
  status: number;
}

export interface ICourseProgress {
  progress: IProgressElement[];
  course: ICourse;
  spent_time: number;
  finish_date: string;
}

export interface ICourseProgressBox {
  id: number;
  image: string;
  name: string;
  total: number;
  completed: number;
}
