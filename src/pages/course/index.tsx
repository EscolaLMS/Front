import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Preloader from "@/components/Preloader";
import Layout from "@/components/_App/Layout";

import CourseProgramLessons from "@/components/Course/CourseProgramLessons";
import ErrorBox from "@/components/Errorbox";
import { t } from "i18next";
import ScormPlayer from "@/components/Course/Players/ScormPlayer";

const CourseProgramScorm: React.FC<{ program: API.CourseProgram }> = ({
  program,
}) => {
  const sco = program?.scorm_sco;
  const uuid = sco?.uuid;

  if (!sco && !uuid) {
    return <React.Fragment />;
  }

  return (
    <ScormPlayer
      value={{
        title: sco.title,
        uuid: sco.uuid,
      }}
    />
  );
};

const CourseProgram = () => {
  const { id } = useParams<{ id: string }>();
  const { program, fetchProgram, fetchCourseProgress } =
    useContext(EscolaLMSContext);

  useEffect(() => {
    if (id) {
      fetchProgram(Number(id));
      fetchCourseProgress(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (program.loading) {
    return <Preloader />;
  }
  if (program.error) {
    return <ErrorBox error={t("CourseProgram.NoProgram")} />;
  }
  if (program.value && program?.value?.scorm_sco_id) {
    return (
      <Layout metaTitle={program.value.title}>
        <CourseProgramScorm program={program.value} />
      </Layout>
    );
  }
  if (program.value && program.value.lessons && program.value.lessons.length) {
    return (
      <Layout metaTitle={program.value.title}>
        <CourseProgramLessons program={program.value} courseId={Number(id)} />
      </Layout>
    );
  }

  return <Preloader />;
};

export default CourseProgram;
