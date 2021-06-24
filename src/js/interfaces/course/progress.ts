export interface IProgressElement {
  lecture_id: number;
  status: number;
}

export interface ICourseProgress {
  progress: IProgressElement[];
  course: API.Course;
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
