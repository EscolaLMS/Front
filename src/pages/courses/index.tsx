import React, { useContext } from "react";

import CoursesSidebar from "@/components/Courses/CoursesSidebar";
import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import CoursesCollection from "@/components/Courses/CoursesCollection";
import CoursesProvider from "@/components/Courses/CoursesProvider";
import { CoursesContext } from "@/components/Courses/CoursesContext";
import PageBanner from "@/components/Common/PageBanner";
import { API } from "@escolalms/sdk/lib";

const CoursesPage = () => {
  const { t } = useTranslation();
  const { params, setParams, courses } = useContext(CoursesContext);
  console.log(courses);
  return (
    <Layout>
      <CoursesProvider onlyFree={false}>
        <section className="courses-page">
          <div className="container">
            <CoursesCollection className="col-lg-8 col-md-12" />
          </div>
        </section>
      </CoursesProvider>
    </Layout>
  );
};

export default CoursesPage;
