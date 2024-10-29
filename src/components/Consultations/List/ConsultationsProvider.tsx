import { PropsWithChildren, useEffect, useMemo, useState } from "react";

import { ConsultationsContext } from "./ConsultationsContext";
import { useLocation, useHistory } from "react-router-dom";
import { COURSES_ON_PAGE } from "@/config/courses";
import useFetchConsultations from "@/hooks/consultations/useFetchConsultations";
import { API } from "@escolalms/sdk/lib";
import qs from "query-string";

const parseParams = (params: API.CourseParams = {}) => {
  return qs.stringify(params);
};

const ConsultationsProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [params, setParams] = useState<API.CourseParams>({
    page: 1,
    per_page: COURSES_ON_PAGE,
    order_by: "created_at",
  });
  const { consultations, loading, fetchConsultationsData } =
    useFetchConsultations(params, true);

  const location = useLocation();
  const { push } = useHistory();
  const searchParams = qs.parse(location.search);
  const parsedParams = useMemo(() => {
    return (
      searchParams && {
        ...searchParams,
        order_by: "created_at",
      }
    );
  }, [searchParams]);

  const newParams = parsedParams ? parsedParams : params;

  useEffect(() => {
    push(`${location.pathname}?${parseParams(newParams)}`);
    fetchConsultationsData(newParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <ConsultationsContext.Provider
      value={{ params, setParams, consultations, loading }}
    >
      {children}
    </ConsultationsContext.Provider>
  );
};

export default ConsultationsProvider;
