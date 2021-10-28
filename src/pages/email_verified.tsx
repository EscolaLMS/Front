import { Link } from 'react-router-dom';
import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/_App/Layout';

const EmailVerified = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('EmailVerifiedPage.Verified')}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t('EmailVerifiedPage.Verified')}
        />

        <div className="privacy-policy-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                {t('EmailVerifiedPage.EmailText')}{' '}
                <Link to="/authentication">{t('EmailVerifiedPage.LoginPage')}</Link>.
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default EmailVerified;
