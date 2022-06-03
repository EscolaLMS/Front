import React from "react";
import "./index.scss";
const MetaTag: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`meta-tag ${className}`}>
      <span>{children}</span>
    </div>
  );
};

export default MetaTag;
