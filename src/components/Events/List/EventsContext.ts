import React from "react";
import { API } from "@escolalms/sdk/lib";
import { EventsParams } from "./EventsProvider";

interface ReactEventsList {
  loading: boolean;
  list?: API.PaginatedMetaList<API.StationaryEvent>;
  error?: API.DefaultResponseError;
}

export const EventsContext: React.Context<{
  events?: ReactEventsList;
  params?: EventsParams;
  setParams?: (params: EventsParams) => void;
  onlyFree?: boolean;
}> = React.createContext({});
