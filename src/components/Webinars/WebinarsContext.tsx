import React from "react";
import { API } from "@escolalms/sdk/lib";
import { WebinarsParams } from "./WebinarsProvider";

interface ReactWebinarsList {
  loading: boolean;
  list?: API.PaginatedMetaList<API.Webinar>;
  error?: API.DefaultResponseError;
}

export const WebinarsContext: React.Context<{
  webinars?: ReactWebinarsList;
  params?: WebinarsParams;
  setParams?: (params: WebinarsParams) => void;
  onlyFree?: boolean;
}> = React.createContext({});
