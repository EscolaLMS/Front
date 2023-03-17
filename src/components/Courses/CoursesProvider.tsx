import React, { useContext, useEffect, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import qs from "query-string";
import { CoursesContext } from "./CoursesContext";
import { COURSES_ON_PAGE } from "@/config/courses";

const parseParams = (params: API.CourseParams = {}) => {
  return qs.stringify(params);
};

const CoursesProvider: React.FC<{
  onlyFree?: boolean;
  children: React.ReactNode;
}> = ({ onlyFree = true, children }) => {
  const { fetchCourses, courses } = useContext(EscolaLMSContext);
  const location = useLocation();
  const { push } = useHistory();

  const [params, setParams] = useState<API.CourseParams | undefined>();

  const getApiParams = (params: API.CourseParams = {}): API.CourseParams => {
    const apiParams = {
      page: 1,
      per_page: COURSES_ON_PAGE,
      ...params,
    };
    if (onlyFree) apiParams.free = true;
    return apiParams;
  };

  useEffect(() => {
    push(`${location.pathname}?${parseParams(params)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, location.pathname]);

  useEffect(() => {
    if (
      location.search &&
      location.search.split("?")[1] !== parseParams(params)
    ) {
      const parsedParams = qs.parse(location.search);
      setParams(parsedParams);
      fetchCourses(parsedParams || {});
    } else {
      fetchCourses(getApiParams(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <CoursesContext.Provider value={{ params, setParams, courses, onlyFree }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
