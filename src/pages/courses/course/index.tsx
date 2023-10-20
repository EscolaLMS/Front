import { useCallback, useContext, useEffect, useState } from "react";
import CoursesDetailsSidebar from "@/components/SingleCoursesTwo/CoursesDetailsSidebar/index";
import { Link, useParams } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Loader from "@/components/Preloader";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

import { CourseProgram } from "@escolalms/components/lib/components/organisms/CourseProgram/CourseProgram";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import CourseProgramPreview from "@/components/Course/CourseProgramPreview";
import { API } from "@escolalms/sdk/lib";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { fixContentForMarkdown } from "@escolalms/components/lib/utils/components/markdown";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Container";
import { ModalCourseAccess } from "@escolalms/components/lib/components/organisms/ModalCourseAccess";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { ModalOverwriteGlobal, StyledCoursePage } from "./styles";
import {
  CourseMainInfo,
  CourseAuthor,
  CourseCompanies,
  CourseRatings,
  CourseRelated,
} from "./Components";
import routeRoutes from "@/components/Routes/routes";

const CoursePage = () => {
  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);
  const [courseAccessModalVisible, setCourseAccessModalVisible] =
    useState(false);
  const [previewTopic, setPreviewTopic] = useState<API.Topic>();
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const {
    course,
    fetchCourse,
    fetchCourses,
    fetchCourseAccess,
    fetchQuestionnaires,
  } = useContext(EscolaLMSContext);

  const closeCourseAccessModal = useCallback(
    () => setCourseAccessModalVisible(false),
    []
  );

  const openCourseAccessModal = useCallback(
    () => setCourseAccessModalVisible(true),
    []
  );

  const refreshCurrentCourseAccess = useCallback(
    () =>
      fetchCourseAccess({
        course_id: Number(id),
        current_page: 1,
        per_page: 1,
      }),
    [id, fetchCourseAccess]
  );

  useEffect(() => {
    fetchCourses({ per_page: 6 });
    if (id) {
      fetchCourse(Number(id));
      refreshCurrentCourseAccess();
      fetchQuestionnaires(QuestionnaireModelType.COURSE, Number(id)).then(
        (response) => response.success && setQuestionnaires(response.data)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (course.error) {
    return <pre>{course.error.message}</pre>;
  }

  return (
    <Layout metaTitle={course?.value?.title || "Loading"}>
      {course.loading && <Loader />}
      {!course.loading && course.value && (
        <>
          <StyledCoursePage>
            <Container>
              <Row>
                <Col md={12} lg={9}>
                  <Breadcrumbs
                    items={[
                      <Link to={routeRoutes.home}>{t("Home")}</Link>,
                      <Link to={routeRoutes.courses}>{t("Courses")}</Link>,
                      <Text size="12">{course.value.title}</Text>,
                    ]}
                  />
                  <CourseMainInfo
                    courseData={course.value}
                    questionnaires={questionnaires}
                  />
                  <CourseCompanies />
                  {course.value.summary &&
                    fixContentForMarkdown(course.value.summary) !== "" && (
                      <section className="course-description">
                        <MarkdownRenderer>
                          {course.value.summary}
                        </MarkdownRenderer>
                      </section>
                    )}
                  {course.value.author && (
                    <CourseAuthor courseData={course.value} />
                  )}
                  {course.value.description &&
                    fixContentForMarkdown(course.value.description) !== "" && (
                      <section className="course-description-short with-border padding-right">
                        <Title level={4}>
                          {t("CoursePage.CourseDescriptionTitle")}
                        </Title>
                        <MarkdownRenderer>
                          {course.value.description}
                        </MarkdownRenderer>
                      </section>
                    )}
                  {course.value.lessons && course.value.lessons.length > 0 && (
                    <CourseProgram
                      lessons={course.value.lessons}
                      onTopicClick={(topic) => setPreviewTopic(topic)}
                    />
                  )}
                  <CourseRatings questionnaires={questionnaires} />
                </Col>
                <Col md={12} lg={3} className="sidebar-col">
                  <div className="sidebar-wrapper">
                    {course.value && (
                      <CoursesDetailsSidebar
                        course={course.value}
                        onRequestAccess={openCourseAccessModal}
                      />
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
            <CourseRelated />
          </StyledCoursePage>
          <Modal
            onClose={() => setPreviewTopic(undefined)}
            visible={!!previewTopic}
            animation="zoom"
            maskAnimation="fade"
            destroyOnClose={true}
            width={600}
            bodyStyle={{
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            <ModalOverwriteGlobal />
            {previewTopic && <CourseProgramPreview topic={previewTopic} />}
          </Modal>
          <Modal
            onClose={closeCourseAccessModal}
            visible={courseAccessModalVisible}
            animation="zoom"
            maskAnimation="fade"
            destroyOnClose
            width={600}
          >
            <ModalOverwriteGlobal />
            <ModalCourseAccess
              course={course.value}
              onCancel={closeCourseAccessModal}
              onSuccess={() => {
                refreshCurrentCourseAccess();
                closeCourseAccessModal();
              }}
            />
          </Modal>
        </>
      )}
    </Layout>
  );
};

export default CoursePage;
