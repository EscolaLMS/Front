import React, { ReactElement } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";

const MainLayout: React.FC = ({ children }): ReactElement => {
  return (
    <div>
      <Header />
      <div className="main-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
