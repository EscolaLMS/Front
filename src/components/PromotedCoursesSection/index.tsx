import React from "react";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import CourseImgPlaceholder from "../CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { Row, Col } from "react-grid-system";
import Container from "../Container";
import CoursesSlider from "../CoursesSlider";
import routeRoutes from "@/components/Routes/routes";
import CategoriesBreadCrumbs from "@/components/CategoriesBreadCrumbs";
import { NewCourseCard } from "@escolalms/components/lib/components/molecules/NewCourseCard/index";
import { CourseCardSkeleton } from "@escolalms/components/lib/index";
import useFetchCourses from "@/hooks/useFetchCourses";

const StyledSection = styled.section`
  @media (max-width: 768px) {
    margin: 30px 0;
  }
  .container {
    position: relative;

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
    margin-bottom: 20px;

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
  const { courses, loading } = useFetchCourses({
    per_page: 8,
  });

  const history = useHistory();
  const { t } = useTranslation();

  return (
    <StyledSection>
      <Container className={"container"}>
        <div className="header-wrapper">
          <Title level={1} as="h2">
            {t<string>("Homepage.AwardedCoursesTitle")}
          </Title>
          <Button
            mode="outline"
            onClick={() => history.push(routeRoutes.courses)}
          >
            {t<string>("Homepage.AwardedCoursesBtnText")}
          </Button>
        </div>

        {loading && (
          <Row>
            <CourseCardSkeleton
              count={8}
              colProps={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            />
          </Row>
        )}

        {!loading && isMobile && <CoursesSlider courses={courses || []} />}
        {!loading && !isMobile && (
          <Row
            style={{
              rowGap: "20px",
            }}
          >
            {courses.map((course) => (
              <Col md={6} lg={3} key={course.id}>
                <NewCourseCard
                  mobile={isMobile}
                  id={course.id}
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
                  title={course.title}
                  categories={
                    <CategoriesBreadCrumbs
                      categories={course.categories}
                      onCategoryClick={(id) => {
                        history.push(`/courses/?categories[]=${id}`);
                      }}
                    />
                  }
                />
              </Col>
            ))}
          </Row>
        )}
        <Button
          className="show-more-btn"
          onClick={() => history.push(routeRoutes.courses)}
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
