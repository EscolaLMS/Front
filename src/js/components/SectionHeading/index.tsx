import React, { ReactElement, ReactNode } from "react";
import "./index.scss";

const SectionHeading: React.FC<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  return <div className="section-heading">{children}</div>;
};

export default SectionHeading;
