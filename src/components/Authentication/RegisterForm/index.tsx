import React, { useCallback, useContext } from 'react';
import { Alert, Spinner } from 'reactstrap';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { API } from '@escolalms/sdk/lib';
import { useTranslation } from 'react-i18next';
import './index.scss';

const INITIAL_USER = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const RegisterForm = () => {
  const { register, fetchConfig, config } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<API.DefaultResponseError>();
  const [success, setSuccess] = React.useState<boolean>(false);
  // const [additionalFields, setAdditionalFields] = React.useState<string[]>([]);
  const isAccountEnabledByAdmin = 'enabled';

  const isHashRouter = process.env.REACT_APP_ROUTING_TYPE === 'HashRouter';

  const onDismiss = () => setError(undefined);

  React.useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  React.useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        setError(undefined);
        register({
          ...user,
          return_url: `${window.location.origin}${isHashRouter ? '/#' : ''}/email-verified`,
        })
          .then(() => [setSuccess(true), setLoading(false)])

          .catch((error: any /* ResponseError */) => {
            setError(error.data);
            setLoading(false);
          });
      } catch (error: any /* ResponseError */) {
        setError(error.data);
        setLoading(false);
      }
    },
    [user, register, isHashRouter],
  );

  const registrationMessageSucces = useCallback(() => {
    if (config.escola_auth.account_must_be_enabled_by_admin === isAccountEnabledByAdmin) {
      return <Alert color="success">{t('RegisterPage.registrationSuccesAdminEnabled')}</Alert>;
    } else {
      return (
        <Alert color="success">
          {t('RegisterPage.registrationSuccess')} <code>{user.email}</code>{' '}
          {t('RegisterPage.registrationForLink')}
        </Alert>
      );
    }
  }, [config, t, user.email]);

  return (
    <div className="register-form">
      <h2>{t('Register')}</h2>
      {success && registrationMessageSucces()}
      {error && (
        <Alert color="danger" isOpen={error ? true : false} toggle={onDismiss}>
          {error.message}
          {error.errors && (
            <ul>
              {Object.entries(error.errors).map((err) => (
                <li key={err[0]}>
                  <strong>{err[0]}</strong> {err[1]}
                </li>
              ))}
            </ul>
          )}
        </Alert>
      )}

      {!success && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="register-name">{t('RegisterPage.FullName')}*</label>
            <input
              id="register-name"
              type="text"
              className="form-control"
              placeholder={t('RegisterPage.FullName')}
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-">{t('RegisterPage.LastName')}*</label>
            <input
              type="text"
              className="form-control"
              placeholder={t('RegisterPage.LastName')}
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-">Email*</label>
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-">{t('Password')}*</label>
            <input
              type="password"
              className="form-control"
              placeholder={t('Password')}
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-">
              {t('Confirm')} {t('Password')}*
            </label>
            <input
              type="password"
              className="form-control"
              placeholder={`${t('Confirm')} ${t('Password')}`}
              name="password_confirmation"
              value={user.password_confirmation}
              onChange={handleChange}
            />
          </div>

          <p className="description">{t('RegisterPage.PassInfo')}*</p>

          {/* {config &&
            additionalFields.map((item: string) => (
              <div className="form-group">
                <label htmlFor="register-">
                  {item}
                  {Array.isArray(config.escola_auth.additional_fields_required) &&
                    config.escola_auth.additional_fields_required.includes(item) &&
                    '*'}
                </label>
                <input
                  required={
                    Array.isArray(config.escola_auth.additional_fields_required) &&
                    config.escola_auth.additional_fields_required.includes(item)
                  }
                  type="text"
                  className="form-control"
                  placeholder={item}
                  name={item}
                  onChange={handleChange}
                />
              </div>
            ))} */}

          <button type="submit" disabled={disabled}>
            {t('Register')}

            {loading ? <Spinner color="success" /> : ''}
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
