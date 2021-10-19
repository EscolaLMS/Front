import React, { useContext } from 'react';
import { Alert, Spinner } from 'reactstrap';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { useHistory } from 'react-router-dom';
import { FormState } from './types';
import { useTranslation } from 'react-i18next';

const INITIAL_USER = {
  password: '',
};

const ResetForm: React.FC<{ token: string; email: string }> = ({ token, email }) => {
  const { reset } = useContext(EscolaLMSContext);

  const [user, setUser] = React.useState(INITIAL_USER);
  const [state, setState] = React.useState<FormState>({ state: 'input' });
  const { t } = useTranslation();
  const history = useHistory();

  React.useEffect(() => {
    const isPasswordSet = Object.values(user).every((el) => Boolean(el));

    setState({ state: isPasswordSet ? 'input' : 'disabled' });
  }, [user]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetHandler = React.useCallback(() => {
    reset({
      ...user,
      email,
      token,
    })
      .then(() => {
        // TODO:translate
        setState({ state: 'success', message: 'Password has been changed' });
        setTimeout(() => {
          history.push('/authentication');
        }, 1500);
      })

      .catch((error: any /* ResponseError */) => {
        setState({ state: 'error', error: error.data.message });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, email, reset, token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ state: 'loading' });
    resetHandler();
  };
  return (
    <div className="login-form">
      <h2>{t('ResetPage.Set')}</h2>

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
          <label htmlFor="reset-new-password">{t('ResetPage.NewPass')}</label>
          <input
            id="reset-new-password"
            className="form-control"
            placeholder={t('ResetPage.NewPass')}
            name="password"
            type="password"
            value={user?.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={state.state === 'disabled'}>
          {t('ResetPage.Reset')}
          {state.state === 'loading' ? <Spinner color="success" /> : ''}
        </button>
      </form>
    </div>
  );
};

export default ResetForm;
