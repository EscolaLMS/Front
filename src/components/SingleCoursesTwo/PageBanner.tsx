import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-grid-system";

const PageBanner: React.FC<{
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  innerPageUrl: string;
  innerPageText: string;
  activePageText: string;
  subtitle?: string;
}> = ({
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
      <Container>
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
      </Container>

      <div className="shape9">
        <img src={`/images/shape8.svg`} alt="Main Banner " />
      </div>
    </div>
  );
};

export default PageBanner;
