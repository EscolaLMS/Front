import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EscolaLMSContext } from '@escolalms/connector/lib/context';
import Loader from '../components/Preloader';
import Sidebar from '../components/TermsOfService/Sidebar';
import PageBanner from '../components/Common/PageBanner';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/_App/Layout';

const StaticPage = () => {
    const { pathname } = useLocation();

    const id = pathname.split('/page')[1].split('/')[1];

    const { fetchPage, page } = useContext(EscolaLMSContext);

    useEffect(() => {
        if (id) {
            fetchPage(String(id));
        }
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

                <div className="privacy-policy-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="privacy-policy-content">
                                    <img src="/images/courses/courses1.jpg" alt="image" />
                                    <ReactMarkdown>{page?.value?.content || ''}</ReactMarkdown>
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
