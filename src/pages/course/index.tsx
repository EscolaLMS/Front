import React, { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
import { CoursePanel } from "@/components/Courses/Course";

const CourseProgram = () => {
  const { program } = useContext(EscolaLMSContext);

  return (
    <Layout metaTitle={program.value?.title || "Course"}>
      <CoursePanel />
    </Layout>
  );
};

export default CourseProgram;
