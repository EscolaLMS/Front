import React, { useState, ReactElement } from "react";

import "./index.scss";

export const Tab = ({
  children,
  title,
}: {
  children: ReactElement;
  title: string;
}): ReactElement => (
  <div key={title} className={"single-tab"}>
    {children}
  </div>
);

export const Tabs = ({
  children,
}: {
  children: ReactElement[];
}): ReactElement => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = children && children?.map((item) => item.props);

  return (
    <div className="tabs-component">
      <div className="tabs-header">
        {tabsData?.length > 0 &&
          tabsData?.map((item, index) => (
            <React.Fragment key={index}>
              <React.Fragment>
                <button
                  className={`transparent${
                    activeTab === index ? " active" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              </React.Fragment>
            </React.Fragment>
          ))}
      </div>
      <div className="tabs-content">{children && children[activeTab]}</div>
    </div>
  );
};
