import React, { lazy } from "react";

import Routes from "./components/Routes";

import styled, { createGlobalStyle } from "styled-components";
import { isMobile } from "react-device-detect";

const Customizer = lazy(
  () => import("./components/ThemeCustomizer/ThemeCustomizer")
);

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #__ybug-launcher {
    right: 135px!important;
  }
  .table-responsive {
    td,
    tr,
    th {
      border: 1px solid
        ${({ theme }) => (theme.mode === "dark" ? theme.gray1 : theme.gray3)};
      padding: 5px;
    }
    table {
      border: 1px solid
        ${({ theme }) => (theme.mode === "dark" ? theme.gray1 : theme.gray3)};
      border-collapse: collapse;
    }
  }
`;

const StyledMain = styled.main`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.dm__background : theme.background};
  padding-top: ${isMobile ? "92px" : "167px"};
`;
const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledMain>
        <Customizer />
        <Routes />
      </StyledMain>
    </React.Fragment>
  );
};

export default App;
