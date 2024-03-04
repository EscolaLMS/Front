import React from "react";
import { API } from "@escolalms/sdk/lib";

interface ReactConsultationsList {
  loading: boolean;
  list?: API.PaginatedMetaList<API.Consultation>;
  error?: API.DefaultResponseError;
}

export const ConsultationsContext: React.Context<{
  consultations?: ReactConsultationsList;
  params?: API.ConsultationParams;
  setParams?: (params: API.ConsultationParams) => void;
}> = React.createContext({});
