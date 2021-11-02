import React, { useContext, useEffect } from 'react';

import PageBanner from '../components/Common/PageBanner';

import { useTranslation } from 'react-i18next';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Preloader from '@/components/Preloader';
import PageCard from '../components/PageCard';
import Layout from '../components/_App/Layout';
import { API } from '@escolalms/sdk/lib';

const PagesPage = () => {
  const { fetchPages, pages } = useContext(EscolaLMSContext);

  const { t } = useTranslation();

  useEffect(() => {
    fetchPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('Pages')}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t('Pages')}
        />

        <div className="courses-area">
          <div className="container">
            <div className="row">
              {pages.loading && <Preloader />}
              {pages.list ? (
                <div className="col-lg-8 col-md-12">
                  <div className="row">
                    {pages.list.data.map((page: API.PageListItem) => (
                      <div className="col-lg-6 col-md-6" key={page.id}>
                        <PageCard page={page} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="col-lg-8 col-md-12"></div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default PagesPage;
