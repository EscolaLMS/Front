import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory, useLocation } from "react-router-dom";
import { useSearchParams } from "@/hooks/useSearchParams";
import { CourseStatus } from "@/pages/user/MyProfile";
import routeRoutes from "@/components/Routes/routes";
import { API } from "@escolalms/sdk/lib";

type CoursesState = Array<
  API.Course & { progress?: number; courseData?: API.CourseProgressItem }
>;

const useProfileCourses = (filter = CourseStatus.ALL) => {
  const {
    fetchMyAuthoredCourses,
    myAuthoredCourses,
    fetchPaginatedProgress,
    paginatedProgress,
  } = useContext(EscolaLMSContext);

  const [coursesToMap, setCoursesToMap] = useState<CoursesState>([]);
  const history = useHistory();
  const { setQueryParam } = useSearchParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const page = searchParams.get("page");
  const status = searchParams.get("status");

  const paginationMeta = useMemo(
    () =>
      filter === CourseStatus.AUTHORED
        ? myAuthoredCourses.list?.meta
        : paginatedProgress.list?.meta,
    [filter, myAuthoredCourses.list?.meta, paginatedProgress.list?.meta]
  );

  const getStatusName = useCallback((key: number) => {
    let tabName = "";
    switch (key) {
      case 1:
      case 5:
        break;
      case 2:
        tabName = "started";
        break;
      case 3:
        tabName = "planned";
        break;
      case 4:
        tabName = "finished";
        break;
    }
    return tabName;
  }, []);

  useEffect(() => {
    fetchPaginatedProgress({
      page: page ? parseInt(page) : 1,
      per_page: 18,
      status: getStatusName(Number(status)),
    });

    if (filter === CourseStatus.ALL || filter === CourseStatus.AUTHORED) {
      fetchMyAuthoredCourses();
    }
  }, [
    fetchPaginatedProgress,
    filter,
    fetchMyAuthoredCourses,
    page,
    status,
    getStatusName,
  ]);

  const progressMap = useMemo(() => {
    return (paginatedProgress.list?.data || []).reduce((acc, curr) => {
      return {
        ...acc,
        [curr.course.id ? curr.course.id : -1]: Math.round(
          ((curr.progress || []).reduce(
            (pAcc, pCurr) => (pCurr.status === 1 ? pAcc + 1 : pAcc),
            0
          ) /
            curr.progress.length) *
            100
        ),
      };
    }, {});
  }, [paginatedProgress]);

  const remapNormalCourses = useCallback(
    (courses: API.CourseProgressItem[]) => {
      return courses.map((course: API.CourseProgressItem) => {
        return {
          ...course.course,
          courseData: course,
          progress:
            progressMap[
              (course.course.id
                ? course.course.id
                : -1) as keyof typeof progressMap
            ],
        };
      });
    },
    [progressMap]
  );

  useEffect(() => {
    filter !== CourseStatus.AUTHORED
      ? setCoursesToMap(remapNormalCourses(paginatedProgress.list?.data || []))
      : filter === CourseStatus.AUTHORED
      ? setCoursesToMap(myAuthoredCourses.list?.data || [])
      : setCoursesToMap([
          ...remapNormalCourses(paginatedProgress.list?.data || []),
          ...(myAuthoredCourses.list?.data || []),
        ]);
  }, [filter, paginatedProgress, myAuthoredCourses, remapNormalCourses]);

  return {
    coursesToMap,
    paginationMeta,
    loading: paginatedProgress.loading || myAuthoredCourses.loading,
    handlePagination: (i: number) => {
      setQueryParam("page", `${i}`);
      window?.scrollTo(0, 0);
    },
    redirectToCourses: () => history.push(routeRoutes.courses),
  };
};

export default useProfileCourses;
