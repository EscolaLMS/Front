import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const NoDataStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.mode === "dark" ? theme.gray1 : theme.gray5};
  padding: ${isMobile ? "80px 20px" : "192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;

  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`;
