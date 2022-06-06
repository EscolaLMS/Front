import React, { useContext, useEffect, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import qs from "query-string";
import { CoursesContext } from "./CoursesContext";

const parseParams = (params: API.CourseParams = {}) => {
  return qs.stringify(params, { arrayFormat: "bracket" });
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
    const apiParams = { ...params };

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
      //@ts-ignore
      setParams(qs.parse(location.search), { arrayFormat: "bracket" });
      fetchCourses(getApiParams(qs.parse(location.search)));
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
