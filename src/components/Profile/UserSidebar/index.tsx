import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

type Props = {
  title: string;
  children: ReactNode;
  icon: ReactNode;
};

const StyledSidebar = styled.aside`
  padding: 40px;
  background: ${({ theme }) =>
    theme.mode === "dark" ? theme.gray1 : theme.gray5};
  border-radius: ${({ theme }) => theme.cardRadius};
  margin-bottom: 22px;
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
