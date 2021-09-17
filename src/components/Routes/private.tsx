import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import routes from "./routes";

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { login } = routes;
  return null;
  // return (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       auth.token ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: login,
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
};

export default PrivateRoute;
