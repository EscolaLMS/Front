import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { API } from "@escolalms/sdk/lib";

type PogressState = {
  data: API.CourseProgress | undefined;
  loaded: boolean;
  loading: boolean;
};

export const useProgress = () => {
  const [progress, setProgress] = useState<PogressState>({
    data: undefined,
    loaded: false,
    loading: false,
  });
  const { user, fetchProgress } = useContext(EscolaLMSContext);

  useEffect(() => {
    if (user?.value && !user.loading && !progress.loading && !progress.loaded) {
      setProgress({
        ...progress,
        loading: true,
      });
      fetchProgress()
        .then((res) => {
          const response =
            res as API.DefaultResponseSuccess<API.CourseProgress>;
          if (response.success) {
            setProgress({
              data: response.data,
              loaded: true,
              loading: false,
            });
          }
        })
        .catch(() =>
          setProgress({
            ...progress,
            loaded: true,
            loading: false,
          })
        );
    }
  }, [user, progress, fetchProgress]);

  return {
    progress,
  };
};
