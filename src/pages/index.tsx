import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
import CoursesProvider from "@/components/Courses/CoursesProvider";
import CoursesCollection from "@/components/Courses/CoursesCollection";
import "./index.scss";

const Index = () => {
  const { fetchConfig, config, user } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  React.useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const platformVisibility =
    config?.escolalms_courses?.platform_visibility === "public" || false;

  const fullVisibility =
    config?.escolalms_courses?.course_visibility === "show_all" || false;

  return (
    <Layout>
      <React.Fragment>
        <div className="hero-banner-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="hero-banner-content">
                  <h1>{t("Homepage.headingText2")}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link className="default-btn" to="/authentication">
                    <i className="flaticon-user"></i> {t("Homepage.joinFree")}{" "}
                    <span></span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hero-banner-image">
                  <img src={`/images/main-banner3.png`} alt="main-banner" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner-shape19">
            <img src={`/images/banner-shape20.png`} alt="main-banner" />
          </div>
        </div>

        {(platformVisibility && !(user.value && user.value.id)) ||
          (user.value && user.value.id && fullVisibility && (
            <div className="courses-area">
              <div className="container">
                <div className="row">
                  <CoursesProvider onlyFree={false}>
                    <CoursesCollection className="full-width" itemCol={4} />
                  </CoursesProvider>
                </div>
              </div>
            </div>
          ))}
      </React.Fragment>
    </Layout>
  );
};

export default Index;
