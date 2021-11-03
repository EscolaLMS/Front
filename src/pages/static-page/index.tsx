import React, { useContext, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';
import routes from '@/components/Routes/routes';
import Sidebar from '@/components/TermsOfService/Sidebar';
import PageBanner from '@/components/Common/PageBanner';
import MarkdownReader from '@/escolalms/sdk/components/Markdown/MarkdownReader';
import usePrevious from '../../hooks/usePrevious';
import Preloader from '../../components/Preloader';
import Layout from '@/components/_App/Layout';
import { useTranslation } from 'react-i18next';
import './index.scss';

const StaticPage = () => {
  let { slug } = useParams<{ slug: string }>();

  const { fetchPage, page } = useContext(EscolaLMSContext);

  const prevSlug = usePrevious(slug);

  const { t } = useTranslation();

  useEffect(() => {
    if (
      slug &&
      !page.loading &&
      ((!page.value && !page.error) ||
        (page.value && page.value?.slug !== slug) ||
        (page.error && !prevSlug))
    ) {
      fetchPage(String(slug)).then(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, page]);

  // !page.value && !page.error - when very first load (empty state)
  // page.value && page.value?.slug !== slug - when prev static page was different
  // page.error && !prevSlug - when we return to static-page after error on static page (ex. when prev static page not exist)

  if (
    page.loading ||
    (!page.value && !page.error) ||
    (page.value && page.value?.slug !== slug) ||
    (page.error && !prevSlug)
  ) {
    return (
      <Layout>
        <Preloader />
      </Layout>
    );
  }

  if (!page.loading && page.error && !page.error.success) {
    return <Redirect to={routes.notFound} />;
  }

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={`${t(`StaticPages.${page?.value?.title}`)}` || ''}
          homePageUrl="/"
          homePageText="Home"
          activePageText={`${t(`StaticPages.${page?.value?.title}`)}` || ''}
        />

        <div className="privacy-policy-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="privacy-policy-content">
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
