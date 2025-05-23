import { formatPrice } from "@/utils/index";
import React from "react";
import {
  Text,
  TextSize,
} from "@escolalms/components/lib/components/atoms/Typography/Text";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

type Sizes = {
  old: TextSize;
  new: TextSize;
};

type Props = {
  price?: number;
  taxRate?: number;
  oldPrice?: number | null;
  textSizes?: Sizes;
  isFree?: boolean;
};

const Prices = styled.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`;

const ProductPrices: React.FC<Props> = ({
  price,
  taxRate,
  oldPrice,
  textSizes,
  isFree,
}) => {
  const { t } = useTranslation();
  if (isMobile) {
    return (
      <Prices>
        {oldPrice && (
          <div className="pricing-card-discount">
            <Text size={textSizes?.old || "18"}>
              {formatPrice(oldPrice, taxRate)} zł
            </Text>
          </div>
        )}
        <Text size={textSizes?.new || "16"}>
          {formatPrice(price, taxRate)} zł
        </Text>
      </Prices>
    );
  }
  if (isFree) {
    return (
      <Prices>
        <Text size={textSizes?.new || "16"}>{t("CoursesPage.Free")}</Text>
      </Prices>
    );
  }
  return (
    <Prices>
      <Text size={textSizes?.new || "16"}>
        {formatPrice(price, taxRate)} zł
      </Text>
      {oldPrice && (
        <div className="pricing-card-discount">
          <Text size={textSizes?.old || "18"}>
            {formatPrice(oldPrice, taxRate)} zł
          </Text>
        </div>
      )}
    </Prices>
  );
};

export default ProductPrices;
