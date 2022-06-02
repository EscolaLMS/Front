import React, { useContext } from "react";

import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import CoursesCollection from "@/components/Courses/CoursesCollection";
import CoursesProvider from "@/components/Courses/CoursesProvider";
import { CoursesContext } from "@/components/Courses/CoursesContext";

const CoursesPage = () => {
  return (
    <Layout>
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
