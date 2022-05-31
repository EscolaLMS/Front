import React from "react";
import Routes from "./components/Routes";

import "./style/css/bootstrap.min.css";
import "./style/css/boxicons.min.css";
import "./style/css/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css"; // TODO: move to component
import "react-image-lightbox/style.css"; // TODO: move to component?
import "./style/scss/index.scss";
import { ThemeCustomizer } from "@escolalms/components/lib/styleguide/ThemeCustomizer";
import { useLocalTheme } from "@escolalms/components/lib/styleguide/useLocalTheme";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.backgroundDark : theme.backgroundLight};
  padding-top: 167px;
`;
const App = () => {
  const [, setTheme] = useLocalTheme();
  return (
    <StyledMain>
      <ThemeCustomizer
        onUpdate={(theme) => {
          setTheme(theme);
        }}
      />
      <Routes />
    </StyledMain>
  );
};

export default App;
