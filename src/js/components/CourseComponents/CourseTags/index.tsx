import React, { ReactElement } from "react";
import "./index.scss";

const CourseTags: React.FC<{ tags: API.Tag[] | string[] }> = ({
  tags,
}): ReactElement => {
  return (
    <div className="course-tags">
      {tags?.map((item) =>
        typeof item === "string" ? (
          <span key={item}>{item}</span>
        ) : (
          <span key={item.id}>{item.title}</span>
        )
      )}
    </div>
  );
};

export default CourseTags;
