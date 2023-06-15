import React, { useContext, useEffect, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import qs from "query-string";
import { WebinarsContext } from "./WebinarsContext";

export type WebinarsParams = API.WebinarParams;

const parseParams = (params: WebinarsParams = {}) => {
  return qs.stringify(params);
};

const WebinarsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { fetchWebinars, webinars } = useContext(EscolaLMSContext);
  const location = useLocation();
  const { push } = useHistory();

  const [params, setParams] = useState<WebinarsParams | undefined>();

  const getApiParams = (params: WebinarsParams = {}): WebinarsParams => {
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
      fetchWebinars(parsedParams || {});
    } else {
      fetchWebinars(getApiParams(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <WebinarsContext.Provider value={{ params, setParams, webinars: webinars }}>
      {children}
    </WebinarsContext.Provider>
  );
};

export default WebinarsProvider;
