import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { isMobile } from "react-device-detect";

type Props = {
  title: string;
  children: ReactNode;
  icon: ReactNode;
};

const StyledSidebar = styled.div`
  padding: ${isMobile ? "20px" : "40px"};
  background: ${({ theme }) =>
    theme.mode === "dark" && !isMobile
      ? theme.gray1
      : theme.mode === "light" && !isMobile
      ? theme.gray5
      : theme.mode === "dark" && isMobile
      ? theme.backgroundDark
      : theme.backgroundLight};
  border-radius: ${({ theme }) => theme.cardRadius};
  .title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 11px;
    margin-bottom: 30px;
  }
`;

const UserSidebar: React.FC<Props> = ({ title, icon, children }) => {
  return (
    <StyledSidebar>
      <div className="title-wrapper">
        {icon}
        <Text>
          <strong>{title}</strong>
        </Text>
      </div>
      {children}
    </StyledSidebar>
  );
};

export default UserSidebar;
