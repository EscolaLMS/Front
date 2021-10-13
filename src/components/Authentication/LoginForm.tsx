import React, { useContext } from 'react';
import { Alert, Spinner } from 'reactstrap';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import TempLogin from '../TempLogin';
import { FormState } from './types';
import { useTranslation } from 'react-i18next';
import { API } from '@escolalms/sdk/lib';

const INITIAL_USER = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const { login, forgot } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [user, setUser] = React.useState(INITIAL_USER);
  const [state, setState] = React.useState<FormState>({ state: 'input' });
  const [isForgoten, setIsForgoten] = React.useState(false);

  React.useEffect(() => {
    const isUser = isForgoten ? user.email !== '' : Object.values(user).every((el) => Boolean(el));
    setState({ state: isUser ? 'input' : 'disabled' });
  }, [user, isForgoten]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const loginHandler = React.useCallback(() => {
    login({ ...user })
      .then(() => {
        setState({ state: 'input' });
      })

      .catch((error) => {
        setState({ state: 'error', error: error.data.message });
      });
  }, [user, login]);

  const forgotHandler = React.useCallback(() => {
    forgot({
      email: user.email,
      return_url: `${window.location.origin}/reset-password`,
    })
      .then(() => {
        return setState({
          state: 'success',
          // TODO: translate,
          message: 'We send a email for password reset',
        });
      })
      .catch((error) => {
        setState({ state: 'error', error: error.data.message });
      });
  }, [user, forgot]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ state: 'loading' });
    isForgoten ? forgotHandler() : loginHandler();
  };
  return (
    <div className="login-form">
      <h2>{isForgoten ? 'Reset your password' : t('Login')}</h2>
      {!isForgoten && <TempLogin />}

      <Alert
        color={
          state.state === 'error' ? 'danger' : state.state === 'success' ? 'success' : 'danger'
        }
        isOpen={state.state === 'error' || state.state === 'success'}
        toggle={() => setState({ state: 'input' })}
      >
        {state.state === 'error' && state.error}
        {state.state === 'success' && state.message}
      </Alert>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {!isForgoten && (
          <div className="form-group">
            <label htmlFor="login-password">{t('Password')}</label>
            <input
              id="login-password"
              className="form-control"
              placeholder={t('Password')}
              name="password"
              type="password"
              value={user?.password}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
            {!isForgoten && (
              <p>
                <input type="checkbox" id="test2" />
                <label htmlFor="test2">Remember me</label>
              </p>
            )}
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
            <span
              tabIndex={-1}
              role="button"
              className="lost-your-password"
              onClick={() => [setIsForgoten(!isForgoten)]}
              onKeyDown={() => [setIsForgoten(!isForgoten)]}
            >
              {isForgoten ? 'Back' : 'Lost your password?'}
            </span>
          </div>
        </div>

        <button type="submit" disabled={state.state === 'disabled'}>
          {isForgoten ? 'Send' : t('LogIn')}
          {state.state === 'loading' ? <Spinner color="success" /> : ''}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
