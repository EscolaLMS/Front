import styled from "styled-components";

export const LayoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.gray4};
  z-index: 2000;
`;
