import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LeftColumn = styled.div`
  width: calc(100% - 280px);
`;

export const RightColumn = styled.div`
  width: 280px;
  background-color: #ffffff;
  box-shadow: -3px 0px 6px #0000000b;
`;
