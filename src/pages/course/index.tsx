import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Preloader from "@/components/Preloader";
import Layout from "@/components/_App/Layout";

import CourseProgramLessons from "@/components/Course/CourseProgramLessons";
import ErrorBox from "@/components/Errorbox";

// TODO: 99% same as: src/pages/courses/preview/index.tsx

const CourseProgramScorm: React.FC<{ program: API.CourseProgram }> = ({
  program,
}) => {
  const sco = program?.scorm_sco;
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
  const { id } = useParams<{ id: string }>();
  const { program, fetchProgram, fetchProgress } = useContext(EscolaLMSContext);

  useEffect(() => {
    if (id) {
      fetchProgram(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (program.loading) {
    return <Preloader />;
  }

  if (program.error) {
    return <ErrorBox error={"No program"} />;
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
