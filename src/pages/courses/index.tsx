import React from "react";

import Layout from "@/components/_App/Layout";
import CoursesCollection from "@/components/Courses/CoursesCollection";
import CoursesProvider from "@/components/Courses/CoursesProvider";
import { t } from "i18next";

const CoursesPage = () => {
  return (
    <Layout metaTitle={t("CoursesPage.Courses")}>
      <CoursesProvider onlyFree={false}>
        <section className="courses-page">
          <div className="container">
            <CoursesCollection />
          </div>
        </section>
      </CoursesProvider>
    </Layout>
  );
};

export default CoursesPage;
