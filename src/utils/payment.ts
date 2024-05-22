import { API } from "@escolalms/sdk/lib";
import {
  PURCHASES_ERROR_CODE,
  PurchasesPackage,
  PurchasesStoreProduct,
} from "@revenuecat/purchases-capacitor";
import { Capacitor } from "@capacitor/core";
import { toast } from "@/utils/toast";
import { CapacitorPaymentError } from "@/types/index";
import { t } from "i18next";

// helper function to retrieve product details from revenuecat
export const findProductByIdentifier = (
  packages: PurchasesPackage[],
  targetIdentifier: string
): PurchasesStoreProduct | null => {
  for (const pkg of packages) {
    if (pkg.product.identifier === targetIdentifier) {
      return pkg.product;
    }
  }
  return null;
};

export const getRevenuecatId = (course: API.Course) => {
  let id = "";
  if (Capacitor.getPlatform() === "ios") {
    id =
      course.product?.fields?.in_app_purchase_ids?.revenuecat?.app_store || "";
  }
  if (Capacitor.getPlatform() === "android") {
    id =
      course.product?.fields?.in_app_purchase_ids?.revenuecat?.play_store || "";
  }
  return id;
};

export const getRevenuecatIdForSubscription = (subscription: API.Product) => {
  let id = "";
  if (Capacitor.getPlatform() === "ios") {
    id = subscription?.fields?.in_app_purchase_ids?.revenuecat?.app_store || "";
  }
  if (Capacitor.getPlatform() === "android") {
    id =
      subscription?.fields?.in_app_purchase_ids?.revenuecat?.play_store || "";
  }
  return id;
};

export const revenuecatErrorHandler = (error: CapacitorPaymentError) => {
  if (!error.code) {
    return toast(`${t("UnexpectedError")}`, "error");
  }
  if (error.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
    return null;
  }
  return toast(
    t(
      `RevenuecatErrors.${Object.keys(PURCHASES_ERROR_CODE).find(
        // @ts-ignore
        (key) => error.code === PURCHASES_ERROR_CODE[key]
      )}`
    ) as string,
    "error"
  );
};
