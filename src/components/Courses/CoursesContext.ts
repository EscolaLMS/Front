import React from 'react';
import { API } from '@escolalms/sdk/lib';

interface ReactCoursesList {
  loading: boolean;
  list?: API.PaginatedMetaList<API.CourseListItem>;
  error?: API.DefaultResponseError;
}

export const CoursesContext: React.Context<{
  courses?: ReactCoursesList;
  params?: API.CourseParams;
  setParams?: (params: API.CourseParams) => void;
  onlyFree?: boolean;
}> = React.createContext({});
