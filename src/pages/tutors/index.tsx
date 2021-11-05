import React, { useContext, useEffect } from 'react';
import PageBanner from '../../components/Common/PageBanner';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Layout from '../../components/_App/Layout';
import { API } from '@escolalms/sdk/lib';
import './index.scss';
import { useTranslation } from 'react-i18next';
import TutorCard from '@/components/TutorCard';

const TutorsPage = () => {
  const { tutors, fetchTutors } = useContext(EscolaLMSContext);

  const { t } = useTranslation();

  useEffect(() => {
    fetchTutors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <React.Fragment>
        {/* <Navbar /> */}
        <PageBanner
          pageTitle={t('Tutors')}
          homePageUrl="/"
          homePageText={t('Home')}
          activePageText={t('Tutors')}
        />

        <div className="advisor-area">
          <div className="container">
            <div className="row">
              {(tutors.list || []).map((tutor: API.UserItem) => (
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <TutorCard tutor={tutor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default TutorsPage;
