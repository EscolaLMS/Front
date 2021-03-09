import React, { ReactElement } from "react";
import Image from "../../Image";
import "./index.scss";
import { ICourseHeader } from "../../../interfaces/course";
import CourseTags from "../CourseTags";

const CourseHeader: React.FC<ICourseHeader> = ({
  image,
  title,
  tags,
}): ReactElement => {
  return (
    <section className="course-header">
      <Image src={image} alt={title} effect="opacity" />
      <div className="container">
        <div className="row">
          <div className="col-lg-16">
            <h1>{title}</h1>
            {tags && <CourseTags tags={tags} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeader;
