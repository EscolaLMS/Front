import React from "react";

import CoursesSidebar from "../../components/Courses/CoursesSidebar";
import Layout from "../../components/_App/Layout";

import CoursesCollection from "../../components/Courses/CoursesCollection";
import CoursesProvider from "../../components/Courses/CoursesProvider";
import { CoursesContext } from "../../components/Courses/CoursesContext";

const CoursesRightSidebar = () => {
  return (
    <Layout>
      <React.Fragment>
        <CoursesProvider onlyFree={true}>
          <div className="courses-area escolalms-nav">
            <div className="course-container">
              <div className="course-wrapper">
                <div className="row">
                  <div
                    className="col-lg-9 col-md-12 order-1 order-md-0"
                    suppressHydrationWarning={true}
                  >
                    <CoursesCollection />
                  </div>

                  <div className="col-lg-3 col-md-12 col-xs-3 order-0 order-md-1">
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
                                free: true,
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
                                category_id: category_id
                                  ? Number(category_id)
                                  : undefined,
                              }));
                            }}
                            onTutor={(tutor_id) => {
                              // @ts-ignore TODO
                              setParams((prevParams) => ({
                                ...prevParams,
                                page: 1,
                                per_page: 6,
                                author_id: tutor_id
                                  ? Number(tutor_id)
                                  : undefined,
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
          </div>
        </CoursesProvider>
      </React.Fragment>
    </Layout>
  );
};

export default CoursesRightSidebar;
