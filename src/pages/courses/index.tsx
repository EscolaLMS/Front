import React, { useContext, useEffect, useState } from "react";

import PageBanner from "../../components/Common/PageBanner";
import CoursesSidebar from "../../components/Courses/CoursesSidebar";
import { useLocation, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/connector/lib/context";
import { API } from "@escolalms/connector/lib";
import Preloader from "../../components/Preloader";
import CourseCard from "../../components/CourseCard";
import Pagination from "../../components/Pagination";
import Layout from "../../components/_App/Layout";
import qs from "query-string";

const CoursesRightSidebar = ({ pageProps }) => {
  const { fetchCourses, courses } = useContext(EscolaLMSContext);
  const location = useLocation();
  const { push } = useHistory();

  const [params, setParams] = useState<API.CourseParams>();

  useEffect(() => {
    const urlParams = parseParams(params);
    push(`/courses?${urlParams}`);
  }, [params]);

  useEffect(() => {
    if (
      location.search &&
      location.search.split("?")[1] !== parseParams(params)
    ) {
      setParams(qs.parse(location.search));
      fetchCourses(qs.parse(location.search));
    } else {
      fetchCourses(params);
    }
  }, [location.search]);

  const { t } = useTranslation();

  const parseParams = (params: API.CourseParams) => {
    return qs.stringify(params);
  };

  enum Order {
    ASC = "ASC",
    DESC = "DESC",
  }

  return (
    <Layout {...pageProps}>
      <React.Fragment>
        <PageBanner
          pageTitle={t("Courses")}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t("Courses")}
        />

        <div className="courses-area ptb-100">
          <div className="container">
            <div className="row">
              {courses.loading && <Preloader />}
              {courses.list ? (
                <div
                  className="col-lg-8 col-md-12"
                  suppressHydrationWarning={true}
                >
                  <div className="escolalms-grid-sorting row align-items-center">
                    <div className="col-lg-8 col-md-6 result-count">
                      <p>
                        {t("Found")}{" "}
                        <span className="count">{courses.list.meta.total}</span>{" "}
                        {t("FoundCourses", { count: courses.list.meta.total })}
                      </p>
                    </div>

                    <div className="col-lg-4 col-md-6 ordering">
                      <div className="select-box">
                        <select
                          className="form-control"
                          onChange={(e) => {
                            const [order_by, order] = e.target.value.split("|");

                            setParams((prevParams) => ({
                              ...prevParams,
                              order_by,
                              order: order as Order,
                            }));
                          }}
                        >
                          <option disabled> {t("Sort By")} </option>
                          <option value="title|ASC">{t("Title")}</option>
                          <option value="base_price|ASC">
                            {t("Price: low to high")}
                          </option>
                          <option value="base_price|DESC">
                            {t("Price: high to low")}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {courses.list.data.map((course) => (
                      <div className="col-lg-6 col-md-6" key={course.id}>
                        <CourseCard course={course} />
                      </div>
                    ))}

                    {courses.list.meta.total > courses.list.meta.per_page && (
                      <Pagination
                        total={courses.list.meta.total}
                        perPage={courses.list.meta.per_page}
                        currentPage={courses.list.meta.current_page}
                        onPage={(i) =>
                          setParams((prevParams) => ({
                            ...prevParams,
                            page: i,
                            per_page: 6,
                          }))
                        }
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="col-lg-8 col-md-12"></div>
              )}

              <div className="col-lg-4 col-md-12">
                <CoursesSidebar
                  params={params}
                  onTag={(tag) => {
                    setParams((prevParams) => ({
                      ...prevParams,
                      page: 1,
                      per_page: 6,
                      tag: tag ? tag.title : undefined,
                    }));
                  }}
                  onSearch={(term) =>
                    setParams((prevParams) => ({
                      ...prevParams,
                      page: 1,
                      per_page: 6,
                      title: term ? term : undefined,
                    }))
                  }
                  onCategory={(category_id) => {
                    setParams((prevParams) => ({
                      ...prevParams,
                      page: 1,
                      per_page: 6,
                      category_id: category_id ? category_id : undefined,
                    }));
                  }}
                  onTutor={(tutor_id) => {
                    setParams((prevParams) => ({
                      ...prevParams,
                      page: 1,
                      per_page: 6,
                      author_id: tutor_id ? tutor_id : undefined,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default CoursesRightSidebar;
