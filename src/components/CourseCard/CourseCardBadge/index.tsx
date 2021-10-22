import React from 'react';
import "./index.scss";

export const CourseCardBadge: React.FC<{className?: string}> = ({children, className = ''}) => {
  return (
    <div className={`course-card-badge ${className}`}>{children}</div>
  );
};

export default CourseCardBadge;
