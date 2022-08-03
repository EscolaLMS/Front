import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Preloader from "@/components/Preloader";
import Layout from "@/components/_App/Layout";

import CourseProgramLessonsPreview from "@/components/Course/CourseProgramLessonsPreview";
import { Container } from "react-grid-system";

// TODO: 99% same as: src/pages/course/index.tsx

const CourseProgramScorm: React.FC<{ program: API.CourseProgram }> = ({
  program,
}) => {
  const sco = program?.scorm?.scos?.find((sco) => sco.entry_url !== undefined);
  const uuid = sco?.uuid;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);
  const headerAndFooterHeight = 610;
  const { apiUrl } = useContext(EscolaLMSContext);

  useEffect(() => {
    if (iframeRef.current) {
      setHeight(
        iframeRef.current?.contentWindow?.document?.body?.scrollHeight || 0
      );
    }
  }, [iframeRef]);

  if (!sco && !uuid) {
    return <React.Fragment />;
  }

  return (
    <React.Fragment>
      <div className="container-fluid course-program">
        <div
          className="course-program-player scorm"
          style={{
            height: `${headerAndFooterHeight + height}px`,
          }}
        >
          <iframe
            title={"scorm-player"}
            ref={iframeRef}
            src={`${apiUrl}/api/scorm/play/${uuid}`}
            scrolling="no"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const CourseProgram = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();
  const { program, fetchProgram } = useContext(EscolaLMSContext);

  useEffect(() => {
    if (id) {
      fetchProgram(Number(id));
    }
  }, [id, fetchProgram]);

  if (program.loading) {
    return <Preloader />;
  }

  if (program.error) {
    return (
      <Container>
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">{t("Error")}</h4>
          <p> {program.error.message || program.error.error}</p>
          <hr />
          <p className="mb-0">
            {t("CoursePage.Preview.SeeOther")}
            <Link to="/courses">{t("Courses")}</Link>.
          </p>
        </div>
      </Container>
    );
  }

  if (program.value && program?.value?.scorm?.id) {
    return (
      <Layout>
        <CourseProgramScorm program={program.value} />
      </Layout>
    );
  }
  if (program.value && program.value.lessons && program.value.lessons.length) {
    return (
      <Layout>
        <CourseProgramLessonsPreview program={program.value} />;
      </Layout>
    );
  }

  return <Preloader />;
};

export default CourseProgram;
