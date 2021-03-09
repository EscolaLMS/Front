import React, { ReactElement } from "react";
import { IShortCourseDesc } from "../../../interfaces/course";
import SectionHeading from "../../SectionHeading";
import Image from "../../Image";
import "./index.scss";

const ShortCourseDesc: React.FC<IShortCourseDesc> = ({
  title,
  description,
  image,
}): ReactElement => {
  return (
    <section className="section-short-description">
      <div className="container">
        <div className="row">
          <div className="col-lg-16">
            <SectionHeading>
              <h3>{title}</h3>
            </SectionHeading>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <Image src={image} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortCourseDesc;
