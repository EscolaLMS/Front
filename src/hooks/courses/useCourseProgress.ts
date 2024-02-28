import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";

type PogressState = {
  data: API.CourseProgressDetails | undefined;
  loaded: boolean;
  loading: boolean;
};

export const useCourseProgress = (courseId: number) => {
  const [progress, setProgress] = useState<PogressState>({
    data: undefined,
    loaded: false,
    loading: false,
  });
  const { user, fetchCourseProgress, courseProgressDetails } =
    useContext(EscolaLMSContext);

  useEffect(() => {
    if (
      courseProgressDetails.byId &&
      courseProgressDetails.byId[Number(courseId)] &&
      courseProgressDetails.byId[Number(courseId)].value
    ) {
      setProgress({
        ...progress,
        data: courseProgressDetails.byId[Number(courseId)].value,
        loaded: true,
        loading: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, courseProgressDetails]);

  useEffect(() => {
    if (user?.value && !user.loading && !progress.loading && !progress.loaded) {
      setProgress({
        ...progress,
        loading: true,
      });
      fetchCourseProgress(courseId).catch(() =>
        setProgress({
          ...progress,
          loaded: true,
          loading: false,
        })
      );
    } else if (!progress.loaded) {
      setProgress({
        ...progress,
        loaded: true,
      });
    }
  }, [user, progress, fetchCourseProgress, courseId]);

  return {
    progress,
  };
};
