import { PropsWithChildren, useContext, useEffect, useState } from "react";
import qs from "query-string";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { ConsultationsContext } from "./ConsultationsContext";
import { useLocation, useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";

const parseParams = (params: API.ConsultationParams = {}) => {
  return qs.stringify(params);
};

const ConsultationsProvider: React.FC<PropsWithChildren> = (props) => {
  const { fetchConsultations, consultations, fetchCategories } =
    useContext(EscolaLMSContext);
  const { children } = props;
  const location = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    // Fetch categories when we start from events page
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [params, setParams] = useState<API.ConsultationParams | undefined>();

  const getApiParams = (
    params: API.ConsultationParams = {}
  ): API.ConsultationParams => {
    const apiParams = {
      page: 1,
      per_page: 8,
      ...params,
    };
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
      const parsedParams = qs.parse(location.search);
      setParams(parsedParams);
      fetchConsultations(parsedParams || {});
    } else {
      fetchConsultations(getApiParams(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <ConsultationsContext.Provider value={{ consultations, params, setParams }}>
      {children}
    </ConsultationsContext.Provider>
  );
};

export default ConsultationsProvider;
