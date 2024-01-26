import { API } from "@escolalms/sdk/lib";

export type PackagesParams = API.PaginationParams & {
  type?: "single" | "bundle";
};
