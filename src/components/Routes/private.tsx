import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/context';
import routes from './routes';

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { authentication } = routes;
  const { user } = useContext(EscolaLMSContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: authentication,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
