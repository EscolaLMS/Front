import React from 'react';

import CoursesSidebar from '@/components/Courses/CoursesSidebar';
import Layout from '@/components/_App/Layout';
import { useTranslation } from 'react-i18next';
import CoursesCollection from '@/components/Courses/CoursesCollection';
import CoursesProvider from '@/components/Courses/CoursesProvider';
import { CoursesContext } from '@/components/Courses/CoursesContext';
import PageBanner from '@/components/Common/PageBanner';
import { API } from '@escolalms/sdk/lib';

const CoursesPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('Courses')}
          homePageUrl="/"
          homePageText={t('Home')}
          activePageText={t('Courses')}
        />
        <CoursesProvider onlyFree={false}>
          <div className="courses-area">
            <div className="container">
              <div className="row">
                <CoursesCollection className="col-lg-8 col-md-12" />

                <div className="col-lg-4 col-md-12">
                  <div>
                    <CoursesContext.Consumer>
                      {({ params, setParams }) => (
                        <CoursesSidebar
                          params={params}
                          onTag={(tag: API.Tag | API.Tag[]) => {
                            setParams &&
                              setParams({
                                ...params,
                                page: 1,
                                per_page: 6,
                                tag: tag
                                  ? Array.isArray(tag)
                                    ? tag[0].title
                                    : tag.title
                                  : undefined,
                              });
                          }}
                          onSearch={(term) =>
                            setParams &&
                            setParams({
                              ...params,
                              page: 1,
                              per_page: 6,
                              title: term ? term : undefined,
                            })
                          }
                          onCategory={(category_id) => {
                            setParams &&
                              setParams({
                                ...params,
                                page: 1,
                                per_page: 6,
                                category_id: category_id ? Number(category_id) : undefined,
                              });
                          }}
                          onTutor={(tutor_id) => {
                            setParams &&
                              setParams({
                                ...params,
                                page: 1,
                                per_page: 6,
                                author_id: tutor_id ? Number(tutor_id) : undefined,
                              });
                          }}
                        />
                      )}
                    </CoursesContext.Consumer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CoursesProvider>
      </React.Fragment>
    </Layout>
  );
};

export default CoursesPage;
