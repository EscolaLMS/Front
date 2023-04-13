import React from "react";
import { API } from "@escolalms/sdk/lib";

export const CoursesContext: React.Context<{
  courses?: API.PaginatedMetaList<API.Course>;
  loading?: boolean;
  params?: API.CourseParams;
  setParams?: (params: API.CourseParams) => void;
  onlyFree?: boolean;
}> = React.createContext({});
