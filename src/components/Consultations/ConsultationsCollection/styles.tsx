import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const StyledHeader = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  padding: ${isMobile ? "60px 20px 20px 20px" : "80px 40px 100px"};
  position: relative;

  h1 {
    color: ${({ theme }) => theme.white};
    transition: margin-bottom 0.5s ease-out;
  }
`;

export const StyledTabs = styled.div`
  margin-top: -70px;
  z-index: 1;

  .tabs-menu {
    margin-left: 40px;
  }
`;
