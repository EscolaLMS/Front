import React from "react";
import { API } from "@escolalms/sdk/lib";
import { ContextPaginatedMetaState } from "@escolalms/sdk/lib/react/context/types";
import { PackagesParams } from "@/types/params";

export const PackagesContext: React.Context<{
  packages?: ContextPaginatedMetaState<API.Product>;
  params?: PackagesParams;
  setParams?: (params: PackagesParams) => void;
  onlyFree?: boolean;
}> = React.createContext({});
