import React, { useContext, useEffect, useState } from "react";

import PageBanner from "../../components/Common/PageBanner";
import CoursesSidebar from "../../components/Courses/CoursesSidebar";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "../../escolalms/context";
import Preloader from "../../components/Preloader";
import CourseCard from "../../components/CourseCard";
import Pagination from "../../components/Pagination";
import Layout from "../../components/_App/Layout";

const CoursesRightSidebar = ({ pageProps }) => {
  const { fetchCourses, courses } = useContext(EscolaLMSContext);
  const location = useLocation();

  const [params, setParams] = useState<API.CourseParams>(
    location.search !== ""
      ? location.search
      : {
          page: 1,
          per_page: 6,
        }
  );

  useEffect(() => {
    const urlParams = Object.entries(params)
      .filter((param) => param[1])
      .map((param) => `${param[0]}=${param[1]}`)
      .join("&");

    window.location.hash = urlParams;
    //router.push(`/courses?${urlParams}`, undefined, { shallow: false });
    fetchCourses(params);
  }, [params]);

  const { t } = useTranslation();

  console.log(courses);

  return (
    <Layout {...pageProps}>
      <React.Fragment>
        {/* <Navbar /> */}
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
                              order,
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
                  onTag={(tag) => {
                    setParams((prevParams) => ({
                      ...prevParams,
                      page: 1,
                      tag: tag ? tag.title : undefined,
                    }));
                  }}
                  onSearch={(term) =>
                    setParams((prevParams) => ({
                      ...prevParams,
                      page: 1,
                      title: term ? term : undefined,
                    }))
                  }
                  onCategory={(category_id) => {
                    setParams((prevParams) => ({
                      ...prevParams,
                      page: 1,
                      category_id: category_id ? category_id : undefined,
                    }));
                  }}
                  onTutor={(tutor_id) => {
                    setParams((prevParams) => ({
                      ...prevParams,
                      page: 1,
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
