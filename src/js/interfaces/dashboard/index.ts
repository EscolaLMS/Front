import { ReactNode } from "react";
export interface ISliderSection {
  slidesToShow: number;
  title: string;
  textLink?: string;
  linkTo?: string;
  theme?: "white" | "yellow" | "green";
  children: ReactNode[] | ReactNode;
  className?: string;
  image?: string;
}

export interface IAchievementItem {
  title: string | undefined;
  image: string;
  achiveDate?: string;
}

export interface IProjectGridItem {
  id: number;
  title: string;
  image: string;
  volunteers: number;
  volunteersCount: number;
  description: string;
  date: string;
  withRemoveBtn?: boolean;
}

export interface IMyProfileForm {
  first_name: string;
  last_name: string;
  age: number | undefined;
  gender: number | undefined;
  country: string;
  city: string;
  postcode: string;
  street: string;
}

export type ProfileFormKeys =
  | "first_name"
  | "last_name"
  | "age"
  | "gender"
  | "country"
  | "city"
  | "postcode"
  | "street";

export interface ILoginData {
  email: string;
}

export interface IChangePass {
  current_password: string;
  new_password: string;
  new_confirm_password: string;
}

export interface IDashboardLastDays {
  id: number;
  user_id: number;
  time: number;
  created_at: string;
}

export interface IDashboardStats {
  finished_courses: number;
  in_progress_courses: number;
}
