import { Link, useLocation, Redirect } from 'react-router-dom';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import PageBanner from '../components/Common/PageBanner';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/_App/Layout';
import qs from 'query-string';
import routes from '@/components/Routes/routes';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react';
import { Alert, Spinner } from 'reactstrap';

const EmailVerified = () => {
  const [state, setState] = useState({
    loading: false,
    state: 'init',
    isVerified: false,
    message: '',
  });
  const { emailVerify } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const location = useLocation();
  const { id, hash } = qs.parse(location.search);

  const verifyEmail = useCallback(async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    try {
      const request = id && hash && (await emailVerify(String(id), String(hash)));

      if (request) {
        setState((prevState) => ({
          ...prevState,
          state: 'success',
          message: request.message,
          isVerified: true,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  }, [id, hash, emailVerify]);

  useEffect(() => {
    verifyEmail();
  }, [id, hash, verifyEmail]);

  if (!id && !hash) {
    return <Redirect to={routes.notFound} />;
  }

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={
            state.isVerified ? t('EmailVerifiedPage.Verified') : t('EmailVerifiedPage.Verify')
          }
          homePageUrl="/"
          homePageText={t('Home')}
          activePageText={
            state.isVerified ? t('EmailVerifiedPage.Verified') : t('EmailVerifiedPage.Verify')
          }
        />

        <div className="privacy-policy-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                {state.loading && <Spinner color="success" />}
                {state.isVerified && (
                  <React.Fragment>
                    <Alert color={'success'} isOpen={state.state === 'success'}>
                      {state.state === 'success' && state.message}{' '}
                      {t('EmailVerifiedPage.EmailText')}{' '}
                      <Link to="/authentication">{t('EmailVerifiedPage.LoginPage')}</Link>.
                    </Alert>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default EmailVerified;
