import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
};

const StyledSidebar = styled.div`
  padding: 11px 6px;
  background: ${({ theme }) =>
    theme.mode === "dark" ? theme.dm__cardBackgroundColor : theme.white};
  border-radius: ${({ theme }) => theme.cardRadius}px;
`;

const UserSidebar: React.FC<Props> = ({ children }) => {
  return <StyledSidebar>{children}</StyledSidebar>;
};

export default UserSidebar;
