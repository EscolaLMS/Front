import { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import {
  Consultation,
  CourseParams,
  PaginatedMetaList,
} from "@escolalms/sdk/lib/types/api";

const useFetchConsultations = (params?: CourseParams, noAutoFech?: boolean) => {
  const [consultations, setConsultations] =
    useState<PaginatedMetaList<Consultation>>();
  const [loading, setLoading] = useState(true);
  const { fetchConsultations } = useContext(EscolaLMSContext);

  const fetchConsultationsData = async (params: CourseParams) => {
    setLoading(true);
    try {
      const request = await fetchConsultations(params);

      if (request) {
        setConsultations(request as PaginatedMetaList<Consultation>);
      }
    } catch (e) {
      console.error(e);
      setConsultations(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    params && !noAutoFech && fetchConsultationsData(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchConsultations]);

  return { consultations, loading, fetchConsultationsData };
};

export default useFetchConsultations;
