import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  innerPageUrl,
  innerPageText,
  activePageText,
}) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <ul>
            <li>
              <Link href={homePageUrl}>
                <a>{homePageText}</a>
              </Link>
            </li>
            <li>
              <Link href={innerPageUrl}>
                <a>{innerPageText}</a>
              </Link>
            </li>
            <li className="active">{activePageText}</li>
          </ul>

          <h2>{pageTitle}</h2>

          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <div className="rating-count">
              <span>4.0 (1 rating)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="shape9">
        <img src="/images/shape8.svg" alt="image" />
      </div>
    </div>
  );
};

export default PageBanner;
