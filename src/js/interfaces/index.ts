declare global {
  interface Window {
    ybug_settings: { id: string };
  }
}

//"id":1,"name":"Development","slug":"development","icon_class":"fa-chart-line","is_active":1,"

export interface IPivot {
  user_id: number;
  category_id: number;
}

export interface IInterest {
  created_at: string;
  icon_class: string;
  id: number;
  is_active: number;
  name: string;
  parent_id: number | null;
  pivot: IPivot;
  slug: string;
  updated_at: string;
}

export interface IContentData {
  content: string;
  header: string;
}

export interface IUser {
  name: string;
  id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  is_active: number | null;
  created_at: string;
  updated_at: string;
  interests: IInterest[];
  avatar?: string;
  age?: number | undefined;
  country?: string | undefined;
  city?: string | undefined;
  postcode?: string | undefined;
  street?: string | undefined;
  gender?: number | undefined;
  posts?: number;
  phone?: string;
}

export interface IPageHeader {
  title: string;
  search?: boolean;
}
