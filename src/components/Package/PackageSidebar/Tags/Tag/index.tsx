import { Link } from "react-router-dom";
import styled from "styled-components";
import { Col } from "react-grid-system";
import { Tag, Text } from "@escolalms/components";
import { API } from "@escolalms/sdk/lib";

const ColStyled = styled(Col)`
  border: 1px solid ${({ theme }) => theme.primaryColor};
  margin: 4px auto;
  padding: 4px;
`;

interface Props {
  products: API.ProductItems[];
  linkTo: string;
}

export const PackageSidebarTag = ({ products, linkTo }: Props) => (
  <ColStyled lg={12}>
    {products.map((product) => (
      <Link to={`${linkTo}/${product.productable_id}`}>
        <Tag>
          <Text size={"12"}>{product.name}</Text>
        </Tag>
      </Link>
    ))}
  </ColStyled>
);
