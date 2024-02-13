import { Link } from "@escolalms/components/lib/components/atoms/Link/Link";
import React from "react";
import styled from "styled-components";

type BaseLinkProps = React.ComponentProps<typeof Link>;

const NewLink = styled(Link)<BaseLinkProps>`
  opacity: 1;
`;

export default NewLink;
