import React, { useContext } from 'react';
import { Alert, Spinner } from 'reactstrap';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import { API } from '@escolalms/sdk/lib';
import TempEmail from '../TempEmail';
import { useTranslation } from 'react-i18next';

const INITIAL_USER = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const RegisterForm = () => {
  const { register } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<API.DefaultResponseError>();
  const [success, setSuccess] = React.useState<boolean>(false);

  const onDismiss = () => setError(undefined);

  React.useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(undefined);

      register({ ...user })
        .then(() => setSuccess(true))
        .catch((error) => {
          setError(error.data);
        });
    } catch (error: any) {
      setError(error.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form">
      <h2>{t('Register')}</h2>
      <TempEmail />
      {success && (
        <Alert color="success">
          Account registered successfully. Please check your <code>{user.email}</code> for
          validation link.
        </Alert>
      )}
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
            <label htmlFor="register-name">{t('RegisterPage.FullName')}</label>
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
            <label htmlFor="register-">{t('RegisterPage.LastName')}</label>
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
            <label htmlFor="register-">Email</label>
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
            <label htmlFor="register-">{t('Password')}</label>
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
              {t('Confirm')} {t('Password')}
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

          <p className="description">
            The password should be at least eight characters long. To make it stronger, use upper
            and lower case letters, numbers, and symbols like ! " ? $ % ^ & )
          </p>

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
