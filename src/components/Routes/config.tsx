import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import routes from "./routes";

const ConfigRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { login } = routes;
  const { user, fetchConfig, config } = useContext(EscolaLMSContext);

  React.useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const platformVisibility =
    config?.value?.escolalms_courses?.platform_visibility === "public" || false;

  return (
    <Route
      {...rest}
      render={(props) =>
        platformVisibility || (user.value && user.value.id) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: login,
            }}
          />
        )
      }
    />
  );
};

export default ConfigRoute;
