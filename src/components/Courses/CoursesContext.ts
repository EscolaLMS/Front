import React from 'react';
import { API } from '@escolalms/sdk/lib';

export const CoursesContext: React.Context<{
  courses?: API.ContextPaginatedMetaState<API.CourseListItem>;
  params?: API.CourseParams & { free: boolean };
  setParams?: (params: API.CourseParams) => void;
  onlyFree?: boolean;
}> = React.createContext({});
