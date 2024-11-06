import React from "react";
import { API } from "@escolalms/sdk/lib";

export const ConsultationsContext: React.Context<{
  consultations?: API.PaginatedMetaList<API.Consultation>;
  loading?: boolean;
  params?: API.ConsultationParams;
  setParams?: (params: API.ConsultationParams) => void;
}> = React.createContext({});
