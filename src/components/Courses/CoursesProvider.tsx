import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import qs from "query-string";
import { CoursesContext } from "./CoursesContext";
import { COURSES_ON_PAGE } from "@/config/courses";
import useFetchCourses from "@/hooks/useFetchCourses";
import debounce from "lodash/debounce";

const parseParams = (params: API.CourseParams = {}) => {
  return qs.stringify(params);
};

const CoursesProvider: React.FC<{
  onlyFree?: boolean;
  children: React.ReactNode;
}> = ({ onlyFree = true, children }) => {
  const [params, setParams] = useState<API.CourseParams>({
    page: 1,
    per_page: COURSES_ON_PAGE,
    order_by: "created_at",
  });
  const { courses, loading, fetchCoursesData } = useFetchCourses(params);
  const location = useLocation();
  const { push } = useHistory();

  const debouncedFetchCoursesData = debounce(fetchCoursesData, 300);

  useEffect(() => {
    const searchParams = qs.parse(location.search);
    const parsedParams = searchParams && {
      ...searchParams,
      order_by: "created_at",
    };
    const newParams = parsedParams ? parsedParams : params;
    setParams(newParams);
    debouncedFetchCoursesData(newParams);
    push(`${location.pathname}?${parseParams(newParams)}`);
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
