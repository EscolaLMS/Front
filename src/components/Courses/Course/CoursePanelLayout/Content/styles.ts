import { mediaQueriesMixin } from "src/style/mixins";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LeftColumn = styled.div`
  width: 100%;

  ${mediaQueriesMixin(
    "lg",
    css`
      width: calc(100% - 280px);
    `
  )}
`;

export const RightColumn = styled.div<{ $isOpen?: boolean }>`
  width: 100%;
  background-color: #ffffff;
  box-shadow: -3px 0px 6px #0000000b;
  position: absolute;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100vw")};
  transition: right 0.3s;

  ${mediaQueriesMixin(
    "lg",
    css`
      width: 280px;
      position: unset;
    `
  )}
`;
