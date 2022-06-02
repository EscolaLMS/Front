import React, { useContext } from "react";
import Routes from "./components/Routes";
import { loadStripe } from "@stripe/stripe-js";
import "./style/css/bootstrap.min.css";
import "./style/css/boxicons.min.css";
import "./style/css/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css"; // TODO: move to component
import "react-image-lightbox/style.css"; // TODO: move to component?
import "./style/scss/index.scss";
import { ThemeCustomizer } from "@escolalms/components/lib/styleguide/ThemeCustomizer";
import { useLocalTheme } from "@escolalms/components/lib/styleguide/useLocalTheme";
import { Elements } from "@stripe/react-stripe-js";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.backgroundDark : theme.backgroundLight};
  padding-top: 167px;
`;
const App = () => {
  const [, setTheme] = useLocalTheme();
  const { config } = useContext(EscolaLMSContext);
  const stripePromise = (publishable_key: string) =>
    loadStripe(publishable_key);
  const stripeConfigs: any = config?.escolalms_payments?.drivers;
  const stripeKey = stripeConfigs.stripe.publishable_key;
  return (
    <StyledMain>
      <Elements stripe={stripePromise(stripeKey)}>
        <ThemeCustomizer
          onUpdate={(theme) => {
            setTheme(theme);
          }}
        />
        <Routes />
      </Elements>
    </StyledMain>
  );
};

export default App;
