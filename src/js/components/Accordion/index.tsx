import React, { ReactElement, useState, useEffect } from "react";
import { IAccordion } from "../../interfaces/course";

import "./index.scss";

const Accordion: React.FC<IAccordion> = ({
  title,
  duration,
  description,
  children,
  defaultActive,
}): ReactElement => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (defaultActive) {
      setActive(true);
    }
  }, [defaultActive]);

  return (
    <div className={["accordion", active && "active"].join(" ")}>
      <div
        className="accordion-header"
        onClick={(): void => setActive(!active)}
      >
        <div className="title">
          <p>{title}</p>
        </div>
        {duration && (
          <div className="time">
            {/* <Icon name="" />  */}
            {duration}
          </div>
        )}
      </div>
      {description && (
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="accordion-description"
        />
      )}
      {children && <div className="accordion-description">{children}</div>}
    </div>
  );
};

export default Accordion;
