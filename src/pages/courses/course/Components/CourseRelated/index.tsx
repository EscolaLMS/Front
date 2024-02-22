import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Container";
import DisplayCourses from "@/components/DisplayCourses";

export const CourseRelated = () => {
  const { t } = useTranslation();

  return (
    <section className="course-related-courses">
      <Container>
        <Row>
          <Col lg={9}>
            <div className="content-container">
              <DisplayCourses
                titleText={t("CoursePage.RelatedCoursesTitle")}
                params={{
                  per_page: 8,
                  order_by: "created_at",
                }}
                slidesPerView={3}
              />
            </div>
            <div className="content-container">
              <DisplayCourses
                titleText={t("CoursePage.RelatedCoursesTitle")}
                params={{
                  per_page: 8,
                  order_by: "created_at",
                }}
                slidesPerView={3}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
