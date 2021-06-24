import { ReactNode } from "react";

import { IUser } from "../../interfaces";

export interface ICourseHeader {
  title: string;
  image: string;
  tags?: API.Tag[] | string[];
}

export interface IShortCourseDesc {
  image: string;
  title: string;
  description: string;
}

export interface IAccordion {
  title: string;
  duration?: string;
  time?: string;
  description?: string;
  children?: ReactNode[] | ReactNode;
  defaultActive?: boolean;
}

export interface ILesson extends IAccordion {
  created_at: string;
  id: number;
  image?: string;
  publish: number;
  sort_order: number;
  updated_at: string;
  section_id?: number;
}

export interface ICourseContent {
  title: string;
  authorImage?: string;
  authorName?: string;
  authorDescription?: string;
  //lessons: IAccordion[];
  lessons: API.Lesson[];
}

export interface ICourseGridItem {
  id: number;
  image: string;
  title: string;
  tags?: API.Tag[] | string[];
  overview?: string;
  price?: string;
  type?: "dark" | "white" | "round";
  withRemoveBtn?: boolean;
  strikePrice?: string;
}

export interface IShortDesc {
  title: string;
  description: string;
  image: string;
  thumb: string;
}

export interface IAuthor {
  name: string;
  image: string;
  description: string;
}

export interface IRelated {
  data: API.Course[];
  message: string;
  success: boolean;
}

export interface ICourseFinishedBox {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  time: number;
  date: string | undefined;
}

export type ICourseState =
  | "FINISHED"
  | "EMPTY"
  | "NOTFOUND"
  | "COMPLETE"
  | "NORMAL";

export interface ICourseCart {
  id: number;
  totalTime: string;
  lastUpdate: string;
  lessonsLength: number;
  quizesLength: number;
  gamesLength: number;
  mobileAccess: boolean;
  price: string;
  owned?: boolean;
}
