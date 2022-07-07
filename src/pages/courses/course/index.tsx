import React, { useContext, useEffect, useState } from "react";
import CoursesDetailsSidebar from "@/components/SingleCoursesTwo/CoursesDetailsSidebar/index";
import { Link, useParams } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Loader from "@/components/Preloader";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import { resetIdCounter } from "react-tabs";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { format } from "date-fns";
import { isMobile } from "react-device-detect";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { LabelListItem } from "@escolalms/components/lib/components/molecules/LabelListItem/LabelListItem";
import { Ratings } from "@escolalms/components/lib/components/molecules/Ratings/Ratings";
import { CourseProgram } from "@escolalms/components/lib/components/organisms/CourseProgram/CourseProgram";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { Tutor } from "@escolalms/components/lib/components/molecules/Tutor/Tutor";
import CourseProgramPreview from "@/components/Course/CourseProgramPreview";
import styled, { createGlobalStyle } from "styled-components";
import { Medal, StarOrange, ThumbUp } from "../../../icons";
import { questionnaireStars } from "@escolalms/sdk/lib/services/questionnaire";
import CoursesSlider from "@/components/CoursesSlider";
import { API } from "@escolalms/sdk/lib";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { fixContentForMarkdown } from "@escolalms/components/lib/utils/components/markdown";

resetIdCounter();

const StyledCoursePage = styled.div`
  section {
    margin-bottom: 45px;
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({ theme }) => (theme.mode === "dark" ? theme.gray1 : theme.gray5)};
    }
    &.padding-right {
      padding-right: 150px;
      @media (max-width: 991px) {
        padding-right: 70px;
      }
      @media (max-width: 768px) {
        padding-right: 0;
      }
    }
  }
  .sidebar-col {
    padding-bottom: 45px;
  }
  .course-main-info {
    .image-wrapper {
      @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 35px;

        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
    .labels-row {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      column-gap: 20px;
      margin: 35px 0;
      @media (max-width: 991px) {
        margin: 35px 0 0;
      }
      @media (max-width: 374px) {
        flex-direction: column;
        row-gap: 16px;
      }
      &--bottom {
        column-gap: 45px;
        margin-top: 120px;
        margin-bottom: 0;
        flex-wrap: wrap;
        @media (max-width: 991px) {
          column-gap: 0;
          margin-top: 55px;
        }
        @media (max-width: 374px) {
          flex-direction: row;
        }
        .single-label {
          @media (max-width: 991px) {
            flex: 0 0 50%;
            max-width: 50%;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  .course-tutor {
    .ranking-row {
      display: none !important;
    }
  }
  .course-companies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .companies-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 90px;
      .single-company {
        max-height: 55px;
        max-width: 45px;
      }
      @media (max-width: 768px) {
        column-gap: 0;
        justify-content: space-between;
        width: 100%;
      }
    }

    p {
      max-width: 220px;
      margin-right: 50px;
    }
  }
  .course-description {
    padding: 50px 45px;
    margin: 45px 0;
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray5};
    border-radius: ${({ theme }) => theme.cardRadius}px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  .course-related-courses {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray5};
    padding: 60px 0 90px;
    .slick-dots {
      top: -65px;
      right: 80px;
      @media (max-width: 575px) {
        right: 0;
      }
    }
    .content-container {
      position: relative;
      overflow: hidden;
      &:first-of-type {
        margin-bottom: 60px;
        @media (max-width: 768px) {
          margin-bottom: 40px;
        }
      }
      h4 {
        @media (max-width: 575px) {
          padding-right: 50%;
        }
      }
      .slider-wrapper {
        a {
          text-decoration: none !important;
        }
        @media (max-width: 575px) {
          margin-left: -50px;

          .image-section,
          img {
            max-height: 180px;
          }
        }
      }
    }
  }
  .course-tutor {
    a {
      text-decoration: none !important;
    }
  }
  .sidebar-wrapper {
    width: 100%;
    left: 0;
    position: ${isMobile ? "fixed" : "sticky"};
    top: ${isMobile ? "unset" : "130px"};
    bottom: ${isMobile ? "0" : "unset"};
    z-index: 100;
  }
`;

const ModalOverwriteGlobal = createGlobalStyle`
  .ReactModal__Overlay  {
    z-index: 1500 !important;
  }
`;

const CoursePage = () => {
  const [ratings, setRatings] = useState<undefined | API.QuestionnaireStars>(
    undefined
  );
  const [previewTopic, setPreviewTopic] = useState<API.Topic>();
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const {
    apiUrl,
    course,
    settings,
    fetchCourse,
    fetchCourses,
    courses,
    fetchCart,
    user,
  } = useContext(EscolaLMSContext);
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  useEffect(() => {
    fetchCourses({ per_page: 6 });
    if (id) {
      fetchCourse(Number(id));
      questionnaireStars(apiUrl, "Course", Number(id)).then((res) => {
        res.success && setRatings(res.data ? res.data : undefined);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    user.value && fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (!course.value) {
    return <Loader />;
  }

  if (Number(course.value.id) !== Number(id) && course.loading) {
    return <Loader />;
  }

  if (course.error) {
    return <pre>{course.error.message}</pre>;
  }
  return (
    <Layout metaTitle={course.value.title}>
      <StyledCoursePage>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <Breadcrumbs
                items={[
                  <Link to="/">{t("Home")}</Link>,
                  <Link to="/courses">{t("Courses")}</Link>,
                  <Text size="12">{course.value.title}</Text>,
                ]}
              />
              <section className="course-main-info with-border">
                <div className="row flex-lg-row flex-column-reverse">
                  <div className="col-lg-7">
                    <Title mobile={isMobile} level={2}>
                      {course.value.title}
                    </Title>
                    <div className="labels-row">
                      <div className="single-label">
                        <LabelListItem
                          mobile={isMobile}
                          title="90%"
                          icon={<ThumbUp />}
                        >
                          {t("CoursePage.Recommends")}
                        </LabelListItem>
                      </div>
                      <div className="single-label">
                        <LabelListItem
                          mobile={isMobile}
                          title={t<string>("CoursePage.Guarantee")}
                          icon={<Medal />}
                        >
                          {t("CoursePage.Satisfaction")}
                        </LabelListItem>
                      </div>
                      <div className="single-label">
                        <LabelListItem
                          mobile={isMobile}
                          title="5.0"
                          icon={<StarOrange />}
                        >
                          {t("CoursePage.AvarageRating")}
                        </LabelListItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {course.value.image_path && (
                      <div className="image-wrapper">
                        <ResponsiveImage
                          path={course.value.image_path}
                          srcSizes={[790 * 0.5, 790, 2 * 790]}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="labels-row labels-row--bottom">
                  {course.value.categories &&
                    course.value.categories.length > 0 && (
                      <div className="single-label">
                        <LabelListItem
                          title={t("CoursePage.CourseCategory")}
                          variant={"label"}
                        >
                          {course.value.categories[0].name}
                        </LabelListItem>
                      </div>
                    )}
                  {course.value.level && (
                    <div className="single-label">
                      <LabelListItem
                        title={t("CoursePage.Level")}
                        variant={"label"}
                      >
                        {course.value.level}
                      </LabelListItem>
                    </div>
                  )}
                  {course.value.active_from && (
                    <div className="single-label">
                      <LabelListItem
                        title={t("CoursePage.StartDate")}
                        variant={"label"}
                      >
                        {course.value.active_from
                          ? format(
                              new Date(String(course.value.active_from)),
                              "dd/MM/yyyy"
                            )
                          : "---"}
                      </LabelListItem>
                    </div>
                  )}
                  {course.value.duration && (
                    <div className="single-label">
                      <LabelListItem
                        title={t("CoursePage.Duration")}
                        variant={"label"}
                      >
                        {course.value.duration}
                      </LabelListItem>
                    </div>
                  )}
                </div>
              </section>
              <section className="course-companies">
                <Text>
                  <strong>{t("CoursePage.CompaniesTitle")}</strong>
                </Text>
                <div className="companies-row">
                  {settings &&
                    settings.value.courseLogos &&
                    Object.values(settings.value.courseLogos).map(
                      (_, index) => (
                        <div className="single-company" key={index}>
                          <ResponsiveImage
                            path={
                              settings?.value?.courseLogos[
                                `logo${index + 1}`
                              ] || ""
                            }
                            srcSizes={[100, 200, 300]}
                          />
                        </div>
                      )
                    )}
                </div>
              </section>
              {course.value.summary &&
                fixContentForMarkdown(course.value.summary) !== "" && (
                  <section className="course-description">
                    <MarkdownRenderer>{course.value.summary}</MarkdownRenderer>
                  </section>
                )}
              {course.value.author && (
                <section className="course-tutor with-border padding-right">
                  <Link to={`/tutors/${course.value.author_id}`}>
                    <Tutor
                      mobile={isMobile}
                      avatar={{
                        alt: `${course.value.author.first_name} ${course.value.author.last_name}`,
                        src:
                          `${
                            process &&
                            process.env &&
                            process.env.REACT_APP_PUBLIC_API_URL
                          }/api/images/img?path=${
                            course.value.author.path_avatar
                          }` || "",
                      }}
                      rating={{
                        ratingValue: 4.1,
                      }}
                      title={t<string>("CoursePage.Teacher")}
                      fullName={`${course.value.author.first_name} ${course.value.author.last_name}`}
                      coursesInfo={"8 Curses"}
                      description={course.value.author.bio}
                    />
                  </Link>
                </section>
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
              {
                <section className="course-ratings padding-right">
                  {ratings && ratings.count_answers > 0 ? (
                    <Ratings
                      mobile={isMobile}
                      sumRates={ratings.sum_rate}
                      avgRate={Number(ratings.avg_rate)}
                      //@ts-ignore TODO: Add rates to type QuestionnaireStars in SDK
                      rates={ratings.rates}
                      header={t("CoursePage.CourseRatingsTitle")}
                    />
                  ) : (
                    <>
                      <Title level={4}>
                        {t("CoursePage.CourseRatingsTitle")}
                      </Title>
                      <Text style={{ marginTop: 20 }}>
                        {t<string>("CoursePage.CourseRatingsEmpty")}
                      </Text>
                    </>
                  )}
                </section>
              }
            </div>
            <div className="col-lg-3 col-md-12 sidebar-col">
              <div className="sidebar-wrapper">
                {course.value && (
                  <CoursesDetailsSidebar course={course.value} />
                )}
              </div>
            </div>
          </div>
        </div>
        <section className="course-related-courses">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="content-container">
                  <Title level={4}>{t("CoursePage.RelatedCoursesTitle")}</Title>
                  {courses && courses.list && (
                    <CoursesSlider
                      courses={courses.list.data}
                      sliderSettings={sliderSettings}
                    />
                  )}
                </div>
                <div className="content-container">
                  <Title level={4}>{t("CoursePage.InterestTitle")}</Title>
                  {courses && courses.list && (
                    <CoursesSlider
                      courses={courses.list.data}
                      sliderSettings={sliderSettings}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </StyledCoursePage>

      <Modal
        onClose={() => setPreviewTopic(undefined)}
        visible={previewTopic ? true : false}
        animation="zoom"
        maskAnimation="fade"
        destroyOnClose={true}
        width={600}
      >
        <ModalOverwriteGlobal />
        {previewTopic && <CourseProgramPreview topic={previewTopic} />}
      </Modal>
    </Layout>
  );
};

export default CoursePage;
