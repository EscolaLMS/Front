import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const WebinarSidebarStyles = styled.div`
  width: 100%;
  left: 0;
  position: ${isMobile ? "fixed" : "sticky"};
  top: ${isMobile ? "unset" : "130px"};
  bottom: ${isMobile ? "0" : "unset"};
  z-index: 100;
  padding-bottom: ${isMobile ? "" : "45px"};
`;
