import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ResetForm from '../components/Authentication/ResetForm';
import { useLocation, useHistory } from 'react-router-dom';
import Layout from '@/components/_App/Layout';
import { useTranslation } from 'react-i18next';

const ResetPassword: React.FC = () => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { search } = useLocation();
  const email = search.split('&')[0].split('=')[1];
  const token = search.split('&')[1].split('=')[1];

  React.useEffect(() => {
    !token && push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('LoginPage.Reset')}
          homePageUrl="/"
          homePageText={t('Home')}
          activePageText="Reset password"
        />
        <div className="profile-authentication-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <ResetForm token={String(token)} email={String(email)} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default ResetPassword;
