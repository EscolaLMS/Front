import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MainBanner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="banner-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="banner-content">
              <h1>{t("Homepage.heading")}</h1>
              <p>{t("Homepage.headingText")} </p>

              <Link to="/authentication" className="default-btn">
                <i className="flaticon-user"></i> {t("Homepage.joinFree")}{" "}
                <span></span>
              </Link>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="banner-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/banner-img1-min.png`}
                alt="image"
              />

              <div className="banner-shape4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/banner-shape4.png`}
                  alt="image"
                />
              </div>
              <div className="banner-shape5">
                <img
                  src={`${process.env.PUBLIC_URL}/images/banner-shape5.png`}
                  alt="image"
                />
              </div>
              <div className="banner-shape6">
                <img
                  src={`${process.env.PUBLIC_URL}/images/banner-shape6.png`}
                  alt="image"
                />
              </div>
              <div className="banner-shape7">
                <img
                  src={`${process.env.PUBLIC_URL}/images/banner-shape7.png`}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
