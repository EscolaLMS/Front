import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import routes from './routes';

const ConfigRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: // eslint-disable-next-line
any) => {
  const { authentication } = routes;
  const { user, fetchConfig, config } = useContext(EscolaLMSContext);

  React.useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const platformVisibility = config?.escolalms_courses?.platform_visibility === 'public' || false;

  return (
    <Route
      {...rest}
      render={(props) =>
        platformVisibility || (user.value && user.value.id) ? (
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

export default ConfigRoute;
