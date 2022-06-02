import React, { useContext, useEffect, useState } from "react";
import CoursesDetailsSidebar from "@/components/SingleCoursesTwo/CoursesDetailsSidebar/index";
import { useHistory, useParams } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Loader from "@/components/Preloader";
import MarkdownReader from "../../../escolalms/sdk/components/Markdown/MarkdownReader";
import Image from "@escolalms/sdk/lib/react/components/Image";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import { resetIdCounter } from "react-tabs";
import Paypal from "../../../images/paypal.png";
import Netflix from "../../../images/netflix.png";
import Apple from "../../../images/apple.png";
import McDonald from "../../../images/mcdonald.png";
import { Link } from "react-router-dom";
import CertificateExample from "../../../images/certificate-example.png";
import { format } from "date-fns";
import { isMobile } from "react-device-detect";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { LabelListItem } from "@escolalms/components/lib/components/molecules/LabelListItem/LabelListItem";
import { Ratings } from "@escolalms/components/lib/components/molecules/Ratings/Ratings";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Certificate } from "@escolalms/components/lib/components/molecules/Certificate/Certificate";
import { Tutor } from "@escolalms/components/lib/components/molecules/Tutor/Tutor";
import { Link as TextLink } from "@escolalms/components/lib/components/atoms/Link/Link";
import styled from "styled-components";
import { Medal, StarOrange, ThumbUp } from "../../../icons";
import { Tag } from "@escolalms/sdk/lib/types/api";

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
  .sidebar-wrapper {
    width: 100%;
    left: 0;
    position: ${isMobile ? "fixed" : "sticky"};
    top: ${isMobile ? "unset" : "130px"};
    bottom: ${isMobile ? "0" : "unset"};
    z-index: 100;
  }
`;

const CoursePage = () => {
  const [dots] = useState(true);
  const { t } = useTranslation();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { course, fetchCourse, fetchCourses, courses, fetchCart, user } =
    useContext(EscolaLMSContext);
  const ratingsMock = {
    sumRates: 40,
    avgRate: 4.5,
    rates: {
      1: 6,
      2: 5,
      3: 4,
      4: 15,
      5: 10,
    },
    header: t("CoursePage.CourseRatingsTitle"),
  };

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    user.value && fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (course.loading || !course.value) {
    return <Loader />;
  }

  if (course.error) {
    return <pre>{course.error.message}</pre>;
  }
  return (
    <Layout>
      <StyledCoursePage>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <section className="course-main-info with-border">
                <div className="row flex-lg-row flex-column-reverse">
                  <div className="col-lg-7">
                    <Title mobile={isMobile} level={2}>
                      {course.value.title}
                    </Title>
                    <div className="labels-row">
                      <div className="single-label">
                        <LabelListItem title="90%" icon={<ThumbUp />}>
                          {t("CoursePage.Recommends")}
                        </LabelListItem>
                      </div>
                      <div className="single-label">
                        <LabelListItem title="Gwarancja" icon={<Medal />}>
                          {t("CoursePage.Satisfaction")}
                        </LabelListItem>
                      </div>
                      <div className="single-label">
                        <LabelListItem title="5.0" icon={<StarOrange />}>
                          {t("CoursePage.AvarageRating")}
                        </LabelListItem>
                      </div>
                    </div>
                    {isMobile ? (
                      <TextLink>{t("CoursePage.HeroBtnText")}</TextLink>
                    ) : (
                      <Button mode="outline">
                        {t("CoursePage.HeroBtnText")}
                      </Button>
                    )}
                  </div>
                  <div className="col-lg-4">
                    <div className="image-wrapper">
                      <Image
                        path={course.value.image_path}
                        srcSizes={[790 * 0.5, 790, 2 * 790]}
                      />
                    </div>
                  </div>
                </div>
                <div className="labels-row labels-row--bottom">
                  <div className="single-label">
                    <LabelListItem
                      title={t("CoursePage.CourseCategory")}
                      variant={"label"}
                    >
                      {course.value?.categories &&
                      course.value?.categories.length > 0
                        ? course.value.categories[0].name
                        : ""}
                    </LabelListItem>
                  </div>
                  <div className="single-label">
                    <LabelListItem
                      title={t("CoursePage.Level")}
                      variant={"label"}
                    >
                      {course.value.level || "---"}
                    </LabelListItem>
                  </div>
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
                  <div className="single-label">
                    <LabelListItem
                      title={t("CoursePage.Duration")}
                      variant={"label"}
                    >
                      {course.value.duration}
                    </LabelListItem>
                  </div>
                </div>
              </section>
              <section className="course-companies">
                <Text>
                  <strong>{t("CoursePage.CompaniesTitle")}</strong>
                </Text>
                <div className="companies-row">
                  <div className="single-company">
                    <img src={Paypal} alt="PayPal" />
                  </div>
                  <div className="single-company">
                    <img src={Netflix} alt="Netflix" />
                  </div>
                  <div className="single-company">
                    <img src={Apple} alt="Apple" />
                  </div>
                  <div className="single-company">
                    <img src={McDonald} alt="McDonald" />
                  </div>
                </div>
              </section>
              <section className="course-description">
                <MarkdownReader>{course.value.summary}</MarkdownReader>
              </section>
              <section className="course-tutor with-border padding-right">
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
                  title={"Teacher"}
                  fullName={`${course.value.author.first_name} ${course.value.author.last_name}`}
                  // coursesInfo={"8 Curses"}
                  description={course.value.author.bio}
                />
              </section>
              <section className="course-certificates with-border padding-right">
                <Certificate
                  mobile={isMobile}
                  img={{
                    src: CertificateExample,
                    alt: "",
                  }}
                  title="Made in EU"
                  description="Wyróżnij się na tle innych, dzięki certyfikatowi potwierdzającemu wiedzę uzyskaną na szkoleniu."
                  handleDownload={() => console.log("clicked")}
                  handleShare={() => console.log("clicked")}
                />
              </section>
              <section className="course-description-short with-border padding-right">
                <Title level={4}>
                  {t("CoursePage.CourseDescriptionTitle")}
                </Title>
                <MarkdownReader>{course.value.description}</MarkdownReader>
              </section>
              <section className="course-ratings padding-right">
                <Ratings mobile={isMobile} {...ratingsMock} />
              </section>
            </div>
            <div className="col-lg-3 col-md-12 sidebar-col">
              <div className="sidebar-wrapper">
                <CoursesDetailsSidebar course={course.value} />
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
                  <div className="slider-wrapper">
                    <Slider
                      settings={{ ...sliderSettings, dots }}
                      dotsPosition="top right"
                    >
                      {courses.list?.data.map((item) => (
                        <div key={item.id} className="single-slide">
                          <Link to={`/courses/${item.id}`}>
                            <CourseCard
                              id={item.id}
                              title={item.title}
                              categories={{
                                categoryElements: item.categories || [],
                                onCategoryClick: () => console.log("clicked"),
                              }}
                              lessonCount={5}
                              hideImage={false}
                              subtitle={item.subtitle}
                              image={{
                                url: item.image_url,
                                alt: "",
                              }}
                              tags={item.tags as Tag[]}
                            />
                          </Link>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="content-container">
                  <Title level={4}>{t("CoursePage.InterestTitle")}</Title>
                  <div className="slider-wrapper">
                    <Slider
                      settings={{ ...sliderSettings, dots }}
                      dotsPosition="top right"
                    >
                      {courses.list?.data.map((item) => (
                        <div key={item.id} className="single-slide">
                          <Link to={`/courses/${item.id}`}>
                            <CourseCard
                              mobile={isMobile}
                              id={item.id}
                              title={item.title}
                              categories={{
                                categoryElements: item.categories || [],
                                onCategoryClick: (id) =>
                                  history.push(`/courses/?category_id=${id}`),
                              }}
                              lessonCount={
                                item.users_count !== 0
                                  ? item.users_count
                                  : undefined
                              }
                              onButtonClick={() =>
                                history.push(`/courses/${item.id}`)
                              }
                              buttonText="Zacznij teraz"
                              hideImage={false}
                              subtitle={
                                item.subtitle ? (
                                  <Text>
                                    <strong style={{ fontSize: 14 }}>
                                      {item.subtitle?.substring(0, 30)}
                                    </strong>
                                  </Text>
                                ) : null
                              }
                              image={{
                                url: item.image_url,
                                alt: "",
                              }}
                              tags={item.tags as Tag[]}
                            />
                          </Link>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StyledCoursePage>
    </Layout>
  );
};

export default CoursePage;
