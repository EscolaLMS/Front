import React from "react";
import { Link } from "react-router-dom";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  innerPageUrl,
  innerPageText,
  activePageText,
  subtitle = null,
}) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <ul>
            <li>
              <Link to={homePageUrl}>{homePageText}</Link>
            </li>
            <li>
              <Link to={innerPageUrl}>{innerPageText}</Link>
            </li>
            <li className="active">{activePageText}</li>
          </ul>

          <h2>{pageTitle}</h2>
          {subtitle && <h3>{subtitle}</h3>}
        </div>
      </div>

      <div className="shape9">
        <img src={`${process.env.PUBLIC_URL}/images/shape8.svg`} alt="image" />
      </div>
    </div>
  );
};

export default PageBanner;
