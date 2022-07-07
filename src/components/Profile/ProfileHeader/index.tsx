import React from "react";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";

type Props = {
  title: string;
  withTabs?: boolean;
};

const StyledHeader = styled.div<{ withTabs?: boolean }>`
  position: relative;
  z-index: 0;
  padding: ${(props) =>
    props.withTabs ? "105px 40px 90px 40px" : "165px 40px 30px 40px"};
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.cardBackgroundColorLight
      : theme.cardBackgroundColorDark};
  border-radius: ${({ theme }) => theme.cardRadius};
  @media (max-width: 991px) {
    padding: 60px 20px 20px 20px;
    margin-bottom: 20px;
  }
`;

const ProfileHeader: React.FC<Props> = ({ title, withTabs }) => {
  return (
    <StyledHeader withTabs={withTabs}>
      <Title level={1}>{title}</Title>
    </StyledHeader>
  );
};

export default ProfileHeader;
