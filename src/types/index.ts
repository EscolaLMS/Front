import {
  PURCHASES_ERROR_CODE,
  PurchasesError,
} from "@revenuecat/purchases-capacitor";

export enum StateTypes {
  INIT = "INIT",
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

export type CapacitorPaymentError = {
  code: PURCHASES_ERROR_CODE;
  data: PurchasesError;
};
