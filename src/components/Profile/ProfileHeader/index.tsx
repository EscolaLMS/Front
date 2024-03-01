import React, { ReactNode } from "react";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";

type Props = {
  title: string;
  withTabs?: boolean;
  actions?: ReactNode;
};

const StyledHeader = styled.div<{ withTabs?: boolean }>`
  position: relative;
  z-index: 0;
  /* padding: ${(props) =>
    props.withTabs ? "105px 40px 90px 40px" : "165px 40px 30px 40px"}; */

  border-radius: ${({ theme }) => theme.cardRadius};
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

const ProfileHeader: React.FC<Props> = ({ title, withTabs, actions }) => {
  return (
    <StyledHeader withTabs={withTabs}>
      <Title level={2}>{title}</Title>
      {actions && <div className="actions">{actions}</div>}
    </StyledHeader>
  );
};

export default ProfileHeader;
