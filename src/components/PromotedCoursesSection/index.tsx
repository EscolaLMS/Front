import { API } from "@escolalms/sdk/lib";
import React from "react";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { ImageBubble } from "@escolalms/components/lib/components/molecules/ImageBubble/ImageBubble";
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";
import { t } from "i18next";
import { Link, useHistory } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";
import CourseImgPlaceholder from "../CourseImgPlaceholder";

type Props = {
  courses: API.Course[];
};

const StyledSection = styled.section`
  margin: 60px 0;
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
  a {
    text-decoration: none !important;
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
  return (
    <StyledSection>
      <div className="container">
        <div className="header-wrapper">
          <Title level={3}>{t<string>("Homepage.AwardedCoursesTitle")}</Title>
          <Button mode="outline" onClick={() => history.push("/courses")}>
            {t<string>("Homepage.AwardedCoursesBtnText")}
          </Button>
        </div>
        <div className="row">
          <div className="col-xl-4 small-padding main-col-1">
            <div className="row justify-content-end">
              <div className="col-6 small-padding-wrapper">
                <div className="course-wrapper course-wrapper--small">
                  <CourseCard
                    id={Number(courses[0].id)}
                    title=""
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
                        {courses[0].image_url ? (
                          <img
                            src={courses[0].image_url}
                            alt={courses[0].title}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      <Text size="12" style={{ lineHeight: 1.2 }}>
                        <Link
                          style={{ color: theme.black }}
                          to={`/courses/${courses[0].id}`}
                        >
                          <strong>{courses[0].title}</strong>
                        </Link>
                      </Text>
                    }
                  />
                </div>
              </div>
              <div className="col-6 small-padding-wrapper">
                <div className="course-wrapper course-wrapper--small">
                  <CourseCard
                    id={Number(courses[1].id)}
                    title=""
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
                        {courses[1].image_url ? (
                          <img
                            src={courses[1].image_url}
                            alt={courses[1].title}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      <Text size="12" style={{ lineHeight: 1.2 }}>
                        <Link
                          style={{ color: theme.black }}
                          to={`/courses/${courses[1].id}`}
                        >
                          <strong>{courses[1].title}</strong>
                        </Link>
                      </Text>
                    }
                  />
                </div>
              </div>
              <div className="col-lg-9 small-padding-wrapper mobile-hide">
                <div className="course-wrapper course-wrapper--small">
                  <CourseCard
                    id={Number(courses[2].id)}
                    title=""
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
                        {courses[2].image_url ? (
                          <img
                            src={courses[2].image_url}
                            alt={courses[2].title}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      <Text size="12" style={{ lineHeight: 1.2 }}>
                        <Link
                          style={{ color: theme.black }}
                          to={`/courses/${courses[2].id}`}
                        >
                          <strong>{courses[2].title}</strong>
                        </Link>
                      </Text>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 small-padding main-col-2">
            <div className="course-wrapper course-wrapper--big">
              <ImageBubble
                image={{
                  src: courses[5].image_url || "",
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
                <CourseCard
                  id={Number(courses[5].id)}
                  title={
                    <Link to={`/courses/${courses[5].id}`}>
                      {courses[5].title}
                    </Link>
                  }
                  hideImage
                  buttonText="Jak to działa"
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
                  categories={{
                    categoryElements: courses[5].categories || [],
                    onCategoryClick: (id) =>
                      history.push(`/courses/?ids[]=${id}`),
                  }}
                  onSecondaryButtonClick={() =>
                    history.push(`/courses/${courses[5].id}`)
                  }
                  secondaryButtonText="Jak to działa"
                />
              </ImageBubble>
            </div>
          </div>
          <div className="col-xl-3 small-padding main-col-3">
            <div className="row">
              <div className="col-xl-12 col-6 small-padding-wrapper">
                <div className="course-wrapper course-wrapper--small course-wrapper--hidden-section">
                  <CourseCard
                    id={Number(courses[5].id)}
                    title=""
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
                        {courses[5].image_url ? (
                          <img
                            src={courses[5].image_url}
                            alt={courses[5].title}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      <Text size="12" style={{ lineHeight: 1.2 }}>
                        <Link
                          style={{ color: theme.black }}
                          to={`/courses/${courses[5].id}`}
                        >
                          <strong>{courses[5].title}</strong>
                        </Link>
                      </Text>
                    }
                  />
                </div>
              </div>
              <div className="col-xl-9 col-6 small-padding-wrapper">
                <div className="course-wrapper course-wrapper--small course-wrapper--hidden-section">
                  <CourseCard
                    id={Number(courses[4].id)}
                    title=""
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
                        {courses[4].image_url ? (
                          <img
                            src={courses[4].image_url}
                            alt={courses[4].title}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      <Text size="12" style={{ lineHeight: 1.2 }}>
                        <Link
                          style={{ color: theme.black }}
                          to={`/courses/${courses[4].id}`}
                        >
                          <strong>{courses[4].title}</strong>
                        </Link>
                      </Text>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="show-more-btn"
          onClick={() => history.push("/courses")}
          block
          mode="outline"
        >
          {t<string>("Homepage.AwardedCoursesBtnText")}
        </Button>
      </div>
    </StyledSection>
  );
};

export default PromotedCoursesSection;
