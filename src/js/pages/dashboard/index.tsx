import React, { ReactElement } from "react";

import { IRootState } from "../../interfaces/redux";
import { ICoursesState } from "../../redux/courses/reducer";

import SliderSection from "../../components/DashboardComponenets/SliderSection";
import ImageBox from "../../components/DashboardComponenets/ImageBox";

import routes from "../../components/Routes/routes";
import UserLayout from "../../layouts/UserLayout";

import "./index.scss";

const Dashboard: React.FC = (): ReactElement => {
  const { courses } = routes;

  return (
    <UserLayout title="Dasboard">
      <div className="row">
        <div className="col-lg-6 section-margin">
          <ImageBox />
        </div>
        <div className="col-lg-24 section-margin"></div>
      </div>
    </UserLayout>
  );
};

export default Dashboard;
