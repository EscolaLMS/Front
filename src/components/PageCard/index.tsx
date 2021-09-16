import React from "react";
import Link from "next/link";

export const PageCard: React.FC<{ page: API.Page }> = ({ page }) => {
  return (
    <div className="single-courses-box">
      <div className="courses-image">
        <a href="#" className="fav">
          <i className="flaticon-heart"></i>
        </a>
      </div>
      <div className="courses-content">
        <h3>
          <Link href={`/${page.slug}`}>
            <a>{page.title}</a>
          </Link>
        </h3>

        <ul className="courses-box-footer d-flex justify-content-between align-items-center"></ul>
      </div>
    </div>
  );
};

export default PageCard;
