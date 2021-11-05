import Layout from '../../components/_App/Layout';
import React from 'react';

import PageBanner from '../../components/Common/PageBanner';

import ProfileCourses from '../../components/Profile/ProfileCourses';
import { useTranslation } from 'react-i18next';

const MyCourses = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('Navbar.MyCourses')}
          homePageUrl="/"
          homePageText={t('Home')}
          activePageText={t('Navbar.MyCourses')}
        />

        <div className="profile-area">
          <div className="container">
            <ProfileCourses />
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default MyCourses;
