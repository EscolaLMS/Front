import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import routes from "./routes";

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { login } = routes;
  const { user } = useContext(EscolaLMSContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.value && user.value.id ? (
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

export default PrivateRoute;
