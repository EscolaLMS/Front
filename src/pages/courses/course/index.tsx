import { useContext, useEffect, useState } from "react";
import CoursesDetailsSidebar from "@/components/SingleCoursesTwo/CoursesDetailsSidebar/index";
import { useParams } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Loader from "@/components/Preloader";
import MarkdownReader from "@/escolalms/sdk/components/Markdown/MarkdownReader";
import Image from "@escolalms/sdk/lib/react/components/Image";
import { useTranslation } from "react-i18next";
import Layout from "@/components/_App/Layout";
import { resetIdCounter } from "react-tabs";
import Paypal from "../../../images/paypal.png";
import Netflix from "../../../images/netflix.png";
import Apple from "../../../images/apple.png";
import McDonald from "../../../images/mcdonald.png";
import CertificateExample from "../../../images/certificate-example.png";
import { format } from "date-fns";
import { isMobile } from "react-device-detect";
import {
  LabelListItem,
  Text,
  Title,
  Button,
  Tutor,
  Certificate,
  Ratings,
  Slider,
  CourseCard,
} from "@escolalms/components";

import styled from "styled-components";
import { Medal, StarOrange, ThumbUp } from "../../../icons";
import { Tag } from "@escolalms/sdk/lib/types/api";

resetIdCounter();

const ratingsMock = {
  sumRates: 40,
  // count_answers: 16,
  avgRate: 4.5,
  rates: {
    1: 6,
    2: 5,
    3: 4,
    4: 15,
    5: 10,
  },
  header: "Opinie studentów",
};

const StyledCoursePage = styled.div`
  padding-top: 150px;
  section {
    margin-bottom: 45px;
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid ${(props) => props.theme.gray2};
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
    .labels-row {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      column-gap: 20px;
      margin: 35px 0;
      &--bottom {
        column-gap: 45px;
        margin-top: 120px;
        margin-bottom: 0;
        flex-wrap: wrap;
        @media (max-width: 991px) {
          column-gap: 0;
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
    background-color: #eee;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  .course-related-courses {
    background-color: #f8f8f8;
    padding: 60px 0 90px;
    .slick-dots {
      top: -65px;
      right: 80px;
    }
    .content-container {
      position: relative;
      overflow: hidden;
      &:first-of-type {
        margin-bottom: 60px;
      }
      .slider-wrapper {
        @media (max-width: 575px) {
          margin-left: -50px;
        }
      }
    }
  }
  .sidebar-wrapper {
    width: 100%;
    left: 0;
    position: ${isMobile ? "fixed" : "sticky"};
    top: ${isMobile ? "unset" : "50px"};
    bottom: ${isMobile ? "0" : "unset"};
    z-index: 100;
  }
`;

const CoursePage = () => {
  const [dots, setDots] = useState(true);
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { course, fetchCourse, fetchCourses, courses, fetchCart, user } =
    useContext(EscolaLMSContext);
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
                          Poleca szkolenia Jana Kaminskiego
                        </LabelListItem>
                      </div>
                      <div className="single-label">
                        <LabelListItem title="Gwarancja" icon={<Medal />}>
                          zadowolenia lub zwrot pieniędzy*
                        </LabelListItem>
                      </div>
                      <div className="single-label">
                        <LabelListItem title="5.0" icon={<StarOrange />}>
                          Średnia ocena szkoleń Jana Kamińskiego
                        </LabelListItem>
                      </div>
                    </div>
                    <Button mode="outline">Zobacz więcej</Button>
                  </div>
                  <div className="col-lg-4">
                    <Image
                      path={course.value.image_path}
                      srcSizes={[790 * 0.5, 790, 2 * 790]}
                    />
                  </div>
                </div>
                <div className="labels-row labels-row--bottom">
                  <div className="single-label">
                    <LabelListItem
                      title="Kategoria szkolenia"
                      variant={"label"}
                    >
                      {course.value?.categories &&
                      course.value?.categories.length > 0
                        ? course.value.categories[0].name
                        : ""}
                    </LabelListItem>
                  </div>
                  <div className="single-label">
                    <LabelListItem title="Poziom trudności" variant={"label"}>
                      {course.value.level || "---"}
                    </LabelListItem>
                  </div>
                  <div className="single-label">
                    <LabelListItem title="Termin rozpoczęcia" variant={"label"}>
                      {course.value.active_from
                        ? format(
                            new Date(String(course.value.active_from)),
                            "dd/MM/yyyy"
                          )
                        : "---"}
                    </LabelListItem>
                  </div>
                  <div className="single-label">
                    <LabelListItem title="Czas trwania" variant={"label"}>
                      {course.value.duration}
                    </LabelListItem>
                  </div>
                </div>
              </section>
              <section className="course-companies">
                <Text>
                  <strong>
                    Firmy które oferują ten kurs swoim pracownikom
                  </strong>
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
                <Title level={4}>Opis szkolenia</Title>
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
                  <Title level={4}>Powiązane szkolenia</Title>
                  <div className="slider-wrapper">
                    <Slider
                      settings={{ ...sliderSettings, dots }}
                      dotsPosition="top right"
                    >
                      {courses.list?.data.map((item) => (
                        <div key={item.id} className="single-slide">
                          <CourseCard
                            id={item.id}
                            title={item.title}
                            categories={{
                              categoryElements: item.categories || [],
                              onCategoryClick: () => console.log("clicked"),
                            }}
                            lessonCount={5}
                            hideImage={false}
                            subtitle="100% Online"
                            image={{
                              url: item.image_url,
                              alt: "",
                            }}
                            tags={item.tags as Tag[]}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="content-container">
                  <Title level={4}>Może Cię zainteresuje</Title>
                  <Slider
                    settings={{ ...sliderSettings, dots }}
                    dotsPosition="top right"
                  >
                    {courses.list?.data.map((item) => (
                      <div key={item.id} className="single-slide">
                        <CourseCard
                          id={item.id}
                          title={item.title}
                          categories={{
                            categoryElements: item.categories || [],
                            onCategoryClick: () => console.log("clicked"),
                          }}
                          lessonCount={5}
                          hideImage={false}
                          subtitle="100% Online"
                          image={{
                            url: item.image_url,
                            alt: "",
                          }}
                          tags={item.tags as Tag[]}
                        />
                      </div>
                    ))}
                  </Slider>
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
