import Layout from "../../components/_App/Layout";
import React from "react";

import PageBanner from "../../components/Common/PageBanner";

import ProfileCourses from "../../components/Profile/ProfileCourses";

const MyCourses = ({ pageProps }) => {
  return (
    <Layout {...pageProps}>
      <React.Fragment>
        <PageBanner
          pageTitle="My Courses"
          homePageUrl="/"
          homePageText="Home"
          activePageText="My Courses"
        />

        <div className="profile-area">
          <div className="container">
            <ProfileCourses />
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default MyCourses;
