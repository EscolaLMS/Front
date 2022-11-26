import React, { ReactNode } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { IconTitle } from "@escolalms/components/lib/components/atoms/IconTitle/IconTitle";

type Props = {
  title: string;
  children: ReactNode;
  icon: ReactNode;
};

const StyledSidebar = styled.div`
  padding: ${isMobile ? "20px" : "40px"};
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.dm__cardBackgroundColor
      : theme.cardBackgroundColor};
  border-radius: ${({ theme }) => theme.cardRadius}px;
`;

const UserSidebar: React.FC<Props> = ({ title, icon, children }) => {
  return (
    <StyledSidebar>
      <IconTitle title={title} icon={icon} as={"h2"} level={4} />
      {children}
    </StyledSidebar>
  );
};

export default UserSidebar;
