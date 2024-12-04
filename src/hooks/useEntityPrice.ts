import { useMemo } from "react";
import { API } from "@escolalms/sdk/lib";

export enum EntityRedirectBuyType {
  BUYABLE = "buyable",
  FREE = "free",
  OFFER = "offer",
  OWNED = "owned",
}

export const useEntityBuyableType = (
  entity?: API.Course | API.Consultation,
  userCourses?: number[]
): EntityRedirectBuyType => {
  return useMemo(() => {
    if (
      entity?.product?.owned ||
      (Array.isArray(userCourses) && entity && userCourses.includes(entity.id))
    ) {
      return EntityRedirectBuyType.OWNED;
    }

    if (!entity?.product?.purchasable) {
      return EntityRedirectBuyType.OFFER;
    }

    if (!entity?.product?.gross_price) {
      return EntityRedirectBuyType.FREE;
    }

    return EntityRedirectBuyType.BUYABLE;
  }, [entity, userCourses]);
};
