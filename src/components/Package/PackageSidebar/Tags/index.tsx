import { useContext, useMemo } from "react";
import { Row } from "react-grid-system";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { groupProductablesByType, ProductableEnum } from "@/utils/productables";
import { PackageSidebarTag } from "./Tag";

const RowStyled = styled(Row)`
  width: 100%;
  margin: 0 auto !important;
`;

export const PackageSidebarTags = () => {
  const { product } = useContext(EscolaLMSContext);
  const grouped = useMemo(
    () => groupProductablesByType(product?.value?.productables || []),
    [product?.value?.productables]
  );

  return (
    <RowStyled>
      {grouped[ProductableEnum.Consultation] && (
        <PackageSidebarTag
          linkTo="/consultations"
          products={grouped[ProductableEnum.Consultation]}
        />
      )}
      {grouped[ProductableEnum.Webinar] && (
        <PackageSidebarTag
          linkTo="/webinar"
          products={grouped[ProductableEnum.Webinar]}
        />
      )}
      {grouped[ProductableEnum.StationaryEvent] && (
        <PackageSidebarTag
          linkTo="/event"
          products={grouped[ProductableEnum.StationaryEvent]}
        />
      )}
      {grouped[ProductableEnum.Course] && (
        <PackageSidebarTag
          linkTo="/courses"
          products={grouped[ProductableEnum.Course]}
        />
      )}
    </RowStyled>
  );
};
