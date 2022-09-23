import { API } from "@escolalms/sdk/lib";
import React from "react";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { ImageBubble } from "@escolalms/components/lib/components/molecules/ImageBubble/ImageBubble";
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";
import CourseImgPlaceholder from "../CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { BreadCrumbs } from "@escolalms/components/lib/components/atoms/BreadCrumbs/BreadCrumbs";
import CourseCardWrapper from "../CourseCardWrapper";
import { Container, Row, Col } from "react-grid-system";
import Placeholder from "../../images/placeholder-course.jpeg";

type Props = {
  courses: API.Course[];
};

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
  .small-padding {
    padding-left: 10px;
    padding-right: 10px;

    @media (max-width: 991px) {
      padding-left: 15px;
      padding-right: 15px;
    }

    &-wrapper {
      padding-left: 10px;
      padding-right: 10px;
      @media (max-width: 991px) {
        padding-left: 5px;
        padding-right: 5px;
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
  .main-col-1 {
    @media (max-width: 1200px) {
      order: 2;
    }
  }
  .main-col-2 {
    @media (max-width: 1200px) {
      order: 1;
    }
  }
  .main-col-3 {
    @media (max-width: 1200px) {
      order: 3;
    }
  }
  .mobile-hide {
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .show-more-btn {
    display: none;
    @media (max-width: 1200px) {
      display: block;
    }
  }
  .course-wrapper {
    background-color: ${({ theme }) =>
      theme.theme === "orangeTheme" && theme.mode === "dark"
        ? theme.backgroundDark
        : theme.theme === "orangeTheme" && theme.mode === "light"
        ? theme.backgroundLight
        : "transparent"};
    padding: ${({ theme }) =>
      theme.theme === "orangeTheme" ? "12px 10px 1px 10px" : 0};
    margin-bottom: 20px;
    &--small {
      .course-section {
        margin-top: 0;
      }
    }
    &--hidden-section {
      .course-section {
        display: none;
      }
    }
    &--big {
      padding: 0;
    }
    .lesson-container {
      display: none;
    }
  }
`;

const PromotedCoursesSection: React.FC<Props> = ({ courses }) => {
  const history = useHistory();
  const theme = useTheme();
  const { t } = useTranslation();
  const subtitleColor = theme.mode === "dark" ? theme.white : theme.black;
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
        <Row>
          <Col xl={4} className="small-padding main-col-1">
            <Row justify={"end"}>
              <Col xs={6} className={"small-padding-wrapper"}>
                <div className="course-wrapper course-wrapper--small">
                  <CourseCardWrapper>
                    <CourseCard
                      id={Number(courses[0].id)}
                      tags={
                        <>
                          {courses[0].tags?.map((item, index) => (
                            <Badge key={index} color={theme.primaryColor}>
                              <Link
                                style={{ color: theme.white }}
                                //@ts-ignore
                                to={`/courses/?tag=${item.title}`}
                              >
                                {
                                  //@ts-ignore
                                  item.title
                                }
                              </Link>
                            </Badge>
                          ))}
                        </>
                      }
                      image={
                        <Link to={`/courses/${courses[0].id}`}>
                          {courses[0].image_path ? (
                            <ResponsiveImage
                              path={courses[0].image_path}
                              alt={courses[0].title}
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
                            to={`/courses/${courses[0].id}`}
                          >
                            <strong>{courses[0].title}</strong>
                          </Link>
                        </Text>
                      }
                    />
                  </CourseCardWrapper>
                </div>
              </Col>
              <Col xs={6} className={"small-padding-wrapper"}>
                <div className="course-wrapper course-wrapper--small">
                  <CourseCardWrapper>
                    <CourseCard
                      id={Number(courses[1].id)}
                      tags={
                        <>
                          {courses[1].tags?.map((item, index) => (
                            <Badge key={index} color={theme.primaryColor}>
                              <Link
                                style={{ color: theme.white }}
                                //@ts-ignore
                                to={`/courses/?tag=${item.title}`}
                              >
                                {
                                  //@ts-ignore
                                  item.title
                                }
                              </Link>
                            </Badge>
                          ))}
                        </>
                      }
                      image={
                        <Link to={`/courses/${courses[1].id}`}>
                          {courses[1].image_path ? (
                            <ResponsiveImage
                              path={courses[1].image_path}
                              alt={courses[1].title}
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
                            to={`/courses/${courses[1].id}`}
                          >
                            <strong>{courses[1].title}</strong>
                          </Link>
                        </Text>
                      }
                    />
                  </CourseCardWrapper>
                </div>
              </Col>
              <Col lg={9} className={"small-padding-wrapper mobile-hide"}>
                <div className="course-wrapper course-wrapper--small">
                  <CourseCardWrapper>
                    <CourseCard
                      id={Number(courses[2].id)}
                      tags={
                        <>
                          {courses[2].tags?.map((item, index) => (
                            <Badge key={index} color={theme.primaryColor}>
                              <Link
                                style={{ color: theme.white }}
                                //@ts-ignore
                                to={`/courses/?tag=${item.title}`}
                              >
                                {
                                  //@ts-ignore
                                  item.title
                                }
                              </Link>
                            </Badge>
                          ))}
                        </>
                      }
                      image={
                        <Link to={`/courses/${courses[2].id}`}>
                          {courses[2].image_path ? (
                            <ResponsiveImage
                              path={courses[2].image_path}
                              alt={courses[2].title}
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
                            to={`/courses/${courses[2].id}`}
                          >
                            <strong>{courses[2].title}</strong>
                          </Link>
                        </Text>
                      }
                    />
                  </CourseCardWrapper>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={5} className={"small-padding main-col-2"}>
            <div className="course-wrapper course-wrapper--big">
              <ImageBubble
                image={{
                  src: courses[5].image_url || Placeholder,
                  alt: courses[5].title || "",
                }}
                header={
                  <div style={{ textAlign: "right" }}>
                    {courses[5].tags?.map(
                      (
                        item: any //TODO: Fix types of tags in sdk
                      ) => (
                        <Link
                          key={item.title}
                          to={`/courses/tag=${item.title}`}
                        >
                          <Badge>{item.title}</Badge>
                        </Link>
                      )
                    )}
                  </div>
                }
              >
                <CourseCardWrapper>
                  <CourseCard
                    id={Number(courses[5].id)}
                    title={
                      <Link to={`/courses/${courses[5].id}`} className="title">
                        <Title level={4} as="h2">
                          {courses[5].title}
                        </Title>
                      </Link>
                    }
                    hideImage
                    buttonText={t<string>("HowItWorks")}
                    onButtonClick={() =>
                      history.push(`/courses/${courses[5].id}`)
                    }
                    subtitle={
                      <Text>
                        <strong
                          style={{
                            fontSize: 14,
                            display: "inline-block",
                            lineHeight: 1.2,
                          }}
                        >
                          {courses[5].title}
                        </strong>
                      </Text>
                    }
                    categories={
                      <BreadCrumbs
                        hyphen="/"
                        items={
                          courses[5].categories?.map((category) => (
                            <Link
                              style={{
                                color: subtitleColor,
                              }}
                              key={category.id}
                              to={`/courses/?category_id[]=${category.id}`}
                            >
                              {category.name}
                            </Link>
                          )) || []
                        }
                      />
                    }
                    onSecondaryButtonClick={() =>
                      history.push(`/courses/${courses[5].id}`)
                    }
                  />
                </CourseCardWrapper>
              </ImageBubble>
            </div>
          </Col>
          <Col xl={3} className={"small-padding main-col-3"}>
            <Row>
              <Col xs={6} xl={12} className={"small-padding-wrapper"}>
                <div className="course-wrapper course-wrapper--small course-wrapper--hidden-section">
                  <CourseCardWrapper>
                    <CourseCard
                      id={Number(courses[5].id)}
                      tags={
                        <>
                          {courses[5].tags?.map((item, index) => (
                            <Badge key={index} color={theme.primaryColor}>
                              <Link
                                style={{ color: theme.white }}
                                //@ts-ignore
                                to={`/courses/?tag=${item.title}`}
                              >
                                {
                                  //@ts-ignore
                                  item.title
                                }
                              </Link>
                            </Badge>
                          ))}
                        </>
                      }
                      image={
                        <Link to={`/courses/${courses[5].id}`}>
                          {courses[5].image_path ? (
                            <ResponsiveImage
                              path={courses[5].image_path}
                              alt={courses[5].title}
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
                            to={`/courses/${courses[5].id}`}
                          >
                            <strong>{courses[5].title}</strong>
                          </Link>
                        </Text>
                      }
                    />
                  </CourseCardWrapper>
                </div>
              </Col>
              <Col xs={6} xl={9} className={"small-padding-wrapper"}>
                <div className="course-wrapper course-wrapper--small course-wrapper--hidden-section">
                  <CourseCardWrapper>
                    <CourseCard
                      id={Number(courses[4].id)}
                      tags={
                        <>
                          {courses[4].tags?.map((item, index) => (
                            <Badge key={index} color={theme.primaryColor}>
                              <Link
                                style={{ color: theme.white }}
                                //@ts-ignore
                                to={`/courses/?tag=${item.title}`}
                              >
                                {
                                  //@ts-ignore
                                  item.title
                                }
                              </Link>
                            </Badge>
                          ))}
                        </>
                      }
                      image={
                        <Link to={`/courses/${courses[4].id}`}>
                          {courses[4].image_path ? (
                            <ResponsiveImage
                              path={courses[4].image_path}
                              alt={courses[4].title}
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
                            to={`/courses/${courses[4].id}`}
                          >
                            <strong>{courses[4].title}</strong>
                          </Link>
                        </Text>
                      }
                    />
                  </CourseCardWrapper>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
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
