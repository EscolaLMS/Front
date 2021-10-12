import React from 'react';
import { API } from '@escolalms/sdk/lib';

export const CoursesContext: React.Context<{
  params?: API.CourseParams & { free: boolean };
  // @ts-ignore TODO
  setParams?;
  // @ts-ignore TODO
  courses?; // TODO
  onlyFree?: boolean;
}> = React.createContext({});
