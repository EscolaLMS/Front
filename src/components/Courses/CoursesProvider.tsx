import React, { useCallback, useContext, useEffect, useState } from "react";

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
  const [courses, setCourses] = useState<API.PaginatedMetaList<API.Course>>();
  const [loading, setLoading] = useState(true);
  const { fetchCourses } = useContext(EscolaLMSContext);
  const location = useLocation();
  const { push } = useHistory();

  const [params, setParams] = useState<API.CourseParams | undefined>();

  const getApiParams = (params: API.CourseParams = {}): API.CourseParams => {
    const apiParams: API.CourseParams = {
      page: 1,
      per_page: COURSES_ON_PAGE,
      order_by: "created_at",
      order: "DESC",
      ...params,
    };
    if (onlyFree) apiParams.free = true;
    return apiParams;
  };

  useEffect(() => {
    push(`${location.pathname}?${parseParams(params)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, location.pathname]);

  const fetchCoursesData = useCallback(
    (params_: API.CourseParams) => {
      setLoading(true);
      fetchCourses(params_)
        .then((res) => {
          setCourses(res as API.PaginatedMetaList<API.Course>);
        })
        .catch(() => setLoading(false))
        .finally(() => setLoading(false));
    },
    [fetchCourses]
  );

  useEffect(() => {
    if (
      location.search &&
      location.search.split("?")[1] !== parseParams(params)
    ) {
      const parsedParams = qs.parse(location.search);
      setParams(parsedParams);
      fetchCoursesData(
        parsedParams
          ? {
              ...parsedParams,
              order_by: "created_at",
              order: "DESC",
            }
          : {}
      );
    } else {
      fetchCoursesData(getApiParams(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <CoursesContext.Provider
      value={{ params, setParams, courses, onlyFree, loading }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
