import React, { useContext, useEffect } from 'react';

import PageBanner from '../../components/Common/PageBanner';

import { Link } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Image from '@escolalms/sdk/lib/react/components/Image';
import Layout from '../../components/_App/Layout';
import { API } from '@escolalms/sdk/lib';
import './index.scss';
import { useTranslation } from 'react-i18next';

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
          homePageText="Home"
          activePageText={t('Tutors')}
        />

        <div className="advisor-area">
          <div className="container">
            <div className="row">
              {tutors.list?.map((tutor: API.UserItem) => (
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="single-advisor-item">
                    {tutor.path_avatar && (
                      <Link to={`/tutors/${tutor.id}`}>
                        <div className="advisor-image">
                          <Image path={tutor.path_avatar} srcSizes={[380, 380 * 2]} />
                        </div>
                      </Link>
                    )}

                    <div className="advisor-content">
                      <h3>
                        <Link to={`/tutors/${tutor.id}`}>
                          {tutor.first_name} {tutor.last_name}
                        </Link>
                      </h3>
                      <span>{t('Tutor')}</span>
                    </div>
                  </div>
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
