import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import {
  Course,
  CourseParams,
  PaginatedMetaList,
} from "@escolalms/sdk/lib/types";

const useFetchCourses = (params?: CourseParams, noAutoFech?: boolean) => {
  const [courses, setCourses] = useState<PaginatedMetaList<Course>>();
  const [loading, setLoading] = useState(true);
  const { fetchCourses } = useContext(EscolaLMSContext);

  const fetchCoursesData = async (params: CourseParams) => {
    setLoading(true);
    try {
      const request = await fetchCourses(params);
      if (request) {
        setCourses(request as PaginatedMetaList<Course>);
      }
    } catch (e) {
      console.error(e);
      setCourses(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    params && !noAutoFech && fetchCoursesData(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCourses]);

  return { courses, loading, fetchCoursesData };
};

export default useFetchCourses;
