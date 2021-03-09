import React, { ReactElement } from "react";
import { ITag } from "../../../interfaces/index";
import "./index.scss";

const CourseTags: React.FC<{ tags: ITag[] }> = ({ tags }): ReactElement => {
  return (
    <div className="course-tags">
      {tags?.map((item) => (
        <span key={item.id}>{item.title}</span>
      ))}
    </div>
  );
};

export default CourseTags;
