import { useContext } from "react";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";

import { useTranslation } from "react-i18next";

import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";

import CoursesSlider from "@/components/CoursesSlider";

import { Col, Row } from "react-grid-system";
import Container from "@/components/Container";

export const CourseRelated = () => {
  const { t } = useTranslation();

  const { courses } = useContext(EscolaLMSContext);

  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    draggable: false,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="course-related-courses">
      <Container>
        <Row>
          <Col lg={9}>
            <div className="content-container">
              <Title level={4} as="h2">
                {t("CoursePage.RelatedCoursesTitle")}
              </Title>
              {courses && courses.list && (
                <CoursesSlider
                  courses={courses.list.data}
                  sliderSettings={sliderSettings}
                />
              )}
            </div>
            <div className="content-container">
              <Title level={4} as="h2">
                {t("CoursePage.InterestTitle")}
              </Title>
              {courses && courses.list && (
                <CoursesSlider
                  courses={courses.list.data}
                  sliderSettings={sliderSettings}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
