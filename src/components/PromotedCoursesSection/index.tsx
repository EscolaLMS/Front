import React, { useContext, useEffect, useState } from "react";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";
import CourseImgPlaceholder from "../CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseCardWrapper from "../CourseCardWrapper";
import { Row, Col } from "react-grid-system";
import Container from "../Container";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Course, PaginatedMetaList, Tag } from "@escolalms/sdk/lib/types/api";
import ContentLoader from "@/components/ContentLoader";
import CoursesSlider from "../CoursesSlider";
import Tags from "@/components/Tags";

const StyledSection = styled.section`
  margin: 40px 0;
  @media (max-width: 768px) {
    margin: 30px 0;
  }
  .container {
    position: relative;
    padding-top: 55px;
    padding-bottom: 35px;
    z-index: 1;
    &:after {
      position: absolute;
      content: "";
      width: ${isMobile ? "100%" : "calc(100% + 100px)"};
      height: 100%;
      background: ${({ theme }) =>
        theme.theme === "orangeTheme" && theme.mode === "light"
          ? theme.gray4
          : "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"};
      left: 50%;
      transform: translate(-50%, 0);
      top: 0;
      z-index: -1;
      opacity: ${({ theme }) => (theme.mode === "dark" ? 0.1 : 1)};
      border-radius: ${({ theme }) => theme.radius};

      @media (max-width: 1200px) {
        background: ${({ theme }) =>
          theme.theme === "orangeTheme"
            ? "linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 100%)"
            : "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"};
      }
    }
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;

    button {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
  .show-more-btn {
    display: none;
    @media (max-width: 1200px) {
      display: block;
      margin-top: 60px;
    }
  }
  .course-section {
    display: none;
  }
`;

const PromotedCoursesSection: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { fetchCourses } = useContext(EscolaLMSContext);
  const history = useHistory();
  const theme = useTheme();
  const { t } = useTranslation();
  const subtitleColor = theme.mode === "dark" ? theme.white : theme.black;

  useEffect(() => {
    fetchCourses({
      per_page: 8,
    })
      .then((res) => {
        setCourses((res as PaginatedMetaList<Course>).data || []);
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, [fetchCourses]);

  return (
    <StyledSection>
      <Container className={"container"}>
        <div className="header-wrapper">
          <Title level={3} as="h1">
            {t<string>("Homepage.AwardedCoursesTitle")}
          </Title>
          <Button mode="outline" onClick={() => history.push("/courses")}>
            {t<string>("Homepage.AwardedCoursesBtnText")}
          </Button>
        </div>
        {loading && <ContentLoader />}
        {!loading && isMobile && <CoursesSlider courses={courses} />}
        {!loading && !isMobile && (
          <Row
            style={{
              rowGap: "60px",
            }}
          >
            {courses.map((course) => (
              <Col md={6} lg={3} key={course.id}>
                <CourseCardWrapper>
                  <CourseCard
                    mobile={isMobile}
                    id={Number(course.id)}
                    tags={
                      <Tags
                        tags={course.tags as Tag[]}
                        onTagClick={(tagName) =>
                          history.push(`/courses/?tag=${tagName}`)
                        }
                      />
                    }
                    image={
                      <Link to={`/courses/${course.id}`}>
                        {course.image_path ? (
                          <ResponsiveImage
                            path={course.image_path}
                            alt={course.title}
                            srcSizes={[300, 600, 900]}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      <Text size="12" style={{ lineHeight: 1.2 }}>
                        <Link
                          style={{ color: subtitleColor }}
                          to={`/courses/${course.id}`}
                        >
                          <strong>{course.title}</strong>
                        </Link>
                      </Text>
                    }
                  />
                </CourseCardWrapper>
              </Col>
            ))}
          </Row>
        )}
        <Button
          className="show-more-btn"
          onClick={() => history.push("/courses")}
          block
          mode="outline"
        >
          {t<string>("Homepage.AwardedCoursesBtnText")}
        </Button>
      </Container>
    </StyledSection>
  );
};

export default PromotedCoursesSection;
