import React from "react";

import MainBanner from "../components/VendorCertificationTraining/MainBanner";
import Partner from "../components/VendorCertificationTraining/Partner";
import SloganArea from "../components/VendorCertificationTraining/SloganArea";
import PopularCourses from "../components/VendorCertificationTraining/PopularCourses";
import AboutArea from "../components/VendorCertificationTraining/AboutArea";
import FunFacts from "../components/Common/FunFacts";

import CourseAdvisor from "../components/VendorCertificationTraining/CourseAdvisor";

import Testimonials from "../components/Common/Testimonials";
import ViewAllCourses from "../components/VendorCertificationTraining/ViewAllCourses";
import Layout from "../components/_App/Layout";

const Index2 = () => {
  return (
    <Layout>
      <React.Fragment>
        {/* <Navbar /> */}
        <MainBanner />
        <Partner />
        <SloganArea />
        <PopularCourses />
        <AboutArea />
        <FunFacts />

        <CourseAdvisor />

        <Testimonials />
        <ViewAllCourses />
      </React.Fragment>
    </Layout>
  );
};

export default Index2;
