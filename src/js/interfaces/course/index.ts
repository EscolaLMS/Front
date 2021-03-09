import { ReactNode } from "react";
import { ITag } from "../index";
import { IUser } from "../../interfaces";

export interface ICourseHeader {
  title: string;
  image: string;
  tags?: ITag[];
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
  authorImage: string;
  authorName: string;
  authorDescription: string;
  lessons: IAccordion[];
}

export interface ICourseGridItem {
  id: number;
  image: string;
  title: string;
  tags?: ITag[];
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
  data: ICourse[];
  message: string;
  success: boolean;
}

export interface ICourse {
  category_id: number;
  course_image: string;
  course_slug: string;
  course_title: string;
  course_video: null;
  created_at: string;
  duration: string;
  id: number;
  instruction_level_id: number;
  instructor_id: number;
  is_active: number;
  keywords: string;
  overview: string;
  price: string;
  author: IAuthor;
  lessons: ILesson[];
  strike_out_price: string;
  thumb_image: string;
  updated_at: string;
  tags: ITag[];
  summary?: string;
  shortDesc: IShortDesc;
  owned?: boolean;
  spent_time: number;
  finish_date: string;
  finished_at: string;
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
