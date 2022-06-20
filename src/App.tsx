import React, { useCallback, useContext, useEffect, lazy } from "react";

import Routes from "./components/Routes";
import "./style/css/bootstrap.min.css";
import "./style/css/boxicons.min.css";
import "./style/css/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-image-lightbox/style.css";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

const Customizer = lazy(
  () => import("./components/ThemeCustomizer/ThemeCustomizer")
);

const StyledMain = styled.main`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.backgroundDark : theme.backgroundLight};
  padding-top: ${isMobile ? "92px" : "167px"};
`;
const App = () => {
  const { getRefreshedToken, user, tokenExpireDate } =
    useContext(EscolaLMSContext);
  const getToken = useCallback(
    () => getRefreshedToken(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (user.value?.id) {
      interval = setInterval(() => getToken(), 1000 * 60 * 4);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getToken, user, tokenExpireDate]);

  useEffect(() => {
    user.value && getRefreshedToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMain>
      <Customizer />
      <Routes />
    </StyledMain>
  );
};

export default App;
