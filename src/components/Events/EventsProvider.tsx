import React, { useContext, useEffect, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import qs from "query-string";
import { EventsContext } from "./EventsContext";

export type EventsParams = API.StationaryEventsParams & {
  category?: number;
};

const parseParams = (params: EventsParams = {}) => {
  return qs.stringify(params);
};

const EventsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { fetchStationaryEvents, stationaryEvents, fetchCategories } =
    useContext(EscolaLMSContext);
  const location = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    // Fetch categories when we start from events page
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [params, setParams] = useState<EventsParams | undefined>();

  const getApiParams = (params: EventsParams = {}): EventsParams => {
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
      fetchStationaryEvents(parsedParams || {});
    } else {
      fetchStationaryEvents(getApiParams(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <EventsContext.Provider
      value={{ params, setParams, events: stationaryEvents }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
