import React from "react";
import { BreadCrumbs } from "@escolalms/components/lib/components/atoms/BreadCrumbs/BreadCrumbs";
import styled from "styled-components";

type Props = {
  items: React.ReactNode[];
};

const StyledBreadcrumbs = styled.div`
  margin-bottom: 15px;
  a {
    text-decoration: none;
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray5 : theme.gray2}!important;
  }
`;

const Breadcrumbs: React.FC<Props> = ({ items }) => {
  return (
    <StyledBreadcrumbs>
      <BreadCrumbs items={items} />
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
