import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ResetForm from '../components/Authentication/ResetForm';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/_App/Layout';

const ResetPassword: React.FC = () => {
  //@ts-ignore //TODO fix this
  const { push, search } = useLocation();
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
          pageTitle="Reset your password"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Reset password"
        />
        <div className="profile-authentication-area ptb-100">
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
