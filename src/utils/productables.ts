import { API } from "@escolalms/sdk/lib";

export enum ProductableEnum {
  Consultation = "App\\Models\\Consultation",
  StationaryEvent = "App\\Models\\StationaryEvent",
  Course = "App\\Models\\Course",
  Webinar = "App\\Models\\Webinar",
}

export const groupProductablesByType = (
  productables: API.ProductItems[]
): Record<string, API.ProductItems[]> =>
  productables.reduce((acc: Record<string, API.ProductItems[]>, product) => {
    const key = product.productable_type;
    const currentGroup = acc[key] ?? [];
    return {
      ...acc,
      [key]: [...currentGroup, product],
    };
  }, {});
