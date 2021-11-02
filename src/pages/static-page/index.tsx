import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import Loader from '@/components/Preloader';
import Sidebar from '@/components/TermsOfService/Sidebar';
import PageBanner from '@/components/Common/PageBanner';
import MarkdownReader from '@/escolalms/sdk/components/Markdown/MarkdownReader';
import Layout from '@/components/_App/Layout';
import './index.scss';

const StaticPage = () => {
  const { pathname } = useLocation();

  const id = pathname.split('/page')[1].split('/')[1];

  const { fetchPage, page } = useContext(EscolaLMSContext);

  useEffect(() => {
    if (id) {
      fetchPage(String(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (page.loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={page?.value?.title || ''}
          homePageUrl="/"
          homePageText="Home"
          activePageText={page?.value?.title || ''}
        />

        <div className="privacy-policy-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="privacy-policy-content">
                  <img src="/images/courses/courses1.jpg" alt="Course" />
                  <MarkdownReader>{page?.value?.content || ''}</MarkdownReader>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default StaticPage;
