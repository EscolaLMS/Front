import React from "react";
import "./index.scss";

export const CourseCardBadge: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ className, children }) => {
  return <div className={`course-card-badge ${className}`}>{children}</div>;
};

export default CourseCardBadge;
