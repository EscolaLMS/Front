import React, { ReactElement } from "react";
import { IPageHeader } from "../../interfaces/index";

import CoursesSearch from "../CourseComponents/CoursesSearch";

import "./index.scss";

const PageHeader: React.FC<IPageHeader> = ({
  title,
  search = false,
}): ReactElement => {
  return (
    <div className="page-header-wrapper">
      <section className="courses-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{title}</h1>
            </div>
            {search && (
              <div className="col-lg-12">
                <CoursesSearch />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageHeader;
