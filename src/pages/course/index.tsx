import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API } from '@escolalms/sdk/lib';
import { EscolaLMSContext } from '@escolalms/sdk/lib/context';
import Loader from '@/components/Preloader';

import CourseProgramLessons from '@/escolalms/sdk/components/Course/CourseProgramLessons';
import Layout from '@/components/_App/Layout';

const CourseProgramScorm: React.FC<{ program: API.CourseProgram }> = ({ program }) => {
  const sco = program?.scorm?.scos?.find((sco) => sco?.entry_url !== undefined);
  const uuid = sco?.uuid;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);
  const headerAndFooterHeight = 610;
  const { apiUrl } = useContext(EscolaLMSContext);

  useEffect(() => {
    if (iframeRef.current) {
      setHeight(iframeRef.current?.contentWindow?.document?.body?.scrollHeight || 0);
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
            title={'scorm-player'}
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
  }, [id, fetchProgram]);

  useEffect(() => {
    fetchProgress();
  }, []);

  if (program.loading) {
    return <Loader />;
  }

  if (program.error) {
    return (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error</h4>
          <p> {program.error.message || program.error.error}</p>
          <hr />
          <p className="mb-0">
            See other <Link to="/courses">courses</Link>.
          </p>
        </div>
      </div>
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
        <CourseProgramLessons program={program.value} />
      </Layout>
    );
  }

  return <Loader />;
};

export default CourseProgram;
