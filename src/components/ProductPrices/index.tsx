import { formatPrice } from "@/utils/index";
import React from "react";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

type Props = {
  price?: number;
  taxRate?: number;
  oldPrice?: number | null;
};

const Prices = styled.div`
  display: flex;
  flex-direction: column;

  .pricing-card-discount {
    margin: 0;
  }
`;

const ProductPrices: React.FC<Props> = ({ price, taxRate, oldPrice }) => {
  if (isMobile) {
    return (
      <Prices>
        {oldPrice && (
          <div className="pricing-card-discount">
            <Title level={5} as={"h5"}>
              {formatPrice(oldPrice, taxRate)} zł
            </Title>
          </div>
        )}
        <Title level={4} as={"h4"}>
          {formatPrice(price, taxRate)} zł
        </Title>
      </Prices>
    );
  }
  return (
    <Prices>
      <Title level={3} as={"h3"}>
        {formatPrice(price, taxRate)} zł
      </Title>
      {oldPrice && (
        <div className="pricing-card-discount">
          <Title level={5} as={"h5"}>
            {formatPrice(oldPrice, taxRate)} zł
          </Title>
        </div>
      )}
    </Prices>
  );
};

export default ProductPrices;
