import React from "react";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";

type BaseTextProps = React.ComponentProps<typeof Title>;

const ModalTitle = styled(Title)<BaseTextProps>`
  font-size: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? theme.gray1 : theme.gray3)};
  padding-bottom: 12px;
`;

export default ModalTitle;
