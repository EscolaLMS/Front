import React from "react";

import Layout from "@/components/_App/Layout";
import CoursesCollection from "@/components/Courses/CoursesCollection";
import CoursesProvider from "@/components/Courses/CoursesProvider";

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
