import React from 'react';

import CoursesSidebar from '../../components/Courses/CoursesSidebar';
import Layout from '../../components/_App/Layout';
import { useTranslation } from 'react-i18next';
import CoursesCollection from '../../components/Courses/CoursesCollection';
import CoursesProvider from '../../components/Courses/CoursesProvider';
import { CoursesContext } from '../../components/Courses/CoursesContext';
import PageBanner from '../../components/Common/PageBanner';

const CoursesRightSidebar = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('Courses')}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t('Courses')}
        />
        <CoursesProvider onlyFree={false}>
          <div className="courses-area ptb-100">
            <div className="container">
              <div className="row">
                <CoursesCollection className="col-lg-8 col-md-12" />

                <div className="col-lg-4 col-md-12">
                  <div>
                    {/* @ts-ignore */}
                    <CoursesContext.Consumer>
                      {({ params, setParams }) => (
                        <CoursesSidebar
                          params={params}
                          onTag={(tag) => {
                            // @ts-ignore
                            setParams((prevParams) => ({
                              ...prevParams,
                              page: 1,
                              per_page: 6,
                              // FIXME, tag can be either string or string[]
                              // @ts-ignore
                              tag: tag ? tag.title : undefined,
                            }));
                          }}
                          onSearch={(term) =>
                            // @ts-ignore TODO
                            setParams((prevParams) => ({
                              ...prevParams,
                              page: 1,
                              per_page: 6,
                              title: term ? term : undefined,
                            }))
                          }
                          onCategory={(category_id) => {
                            // @ts-ignore TODO
                            setParams((prevParams) => ({
                              ...prevParams,
                              page: 1,
                              per_page: 6,
                              category_id: category_id ? Number(category_id) : undefined,
                            }));
                          }}
                          onTutor={(tutor_id) => {
                            // @ts-ignore TODO
                            setParams((prevParams) => ({
                              ...prevParams,
                              page: 1,
                              per_page: 6,
                              author_id: tutor_id ? Number(tutor_id) : undefined,
                            }));
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

export default CoursesRightSidebar;
