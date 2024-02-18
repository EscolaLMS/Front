import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import {
  Course,
  CourseParams,
  PaginatedMetaList,
} from "@escolalms/sdk/lib/types/api";

const useFetchCourses = (params: CourseParams) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { fetchCourses } = useContext(EscolaLMSContext);

  useEffect(() => {
    setLoading(true);
    fetchCourses(params)
      .then((res) => {
        setCourses((res as PaginatedMetaList<Course>).data || []);
      })
      .catch(() => setCourses([]))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCourses]);

  return { courses, loading };
};

export default useFetchCourses;
