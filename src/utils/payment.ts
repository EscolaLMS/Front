import { API } from "@escolalms/sdk/lib";
import {
  PurchasesPackage,
  PurchasesStoreProduct,
} from "@revenuecat/purchases-capacitor";
import { Capacitor } from "@capacitor/core";

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
