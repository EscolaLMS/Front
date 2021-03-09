import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useSelector } from "react-redux";

import { IAuthState } from "../../redux/auth/reducer";
import { IRootState } from "../../interfaces/redux";

import routes from "./routes";

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { login } = routes;
  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state) => state.Auth
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.token ? (
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
