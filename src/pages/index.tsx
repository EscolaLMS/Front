import React, { useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Banner } from "@escolalms/components/lib/components/molecules/Banner/Banner";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { CategoryCard } from "@escolalms/components/lib/components/molecules/CategoryCard/CategoryCard";
import { ImageBubble } from "@escolalms/components/lib/components/molecules/ImageBubble/ImageBubble";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";
import { Tag } from "@escolalms/sdk/lib/types/api";
import styled from "styled-components";
import { IconBook, IconTag } from "../icons";
import { isMobile } from "react-device-detect";
import { t } from "i18next";
import { Link, useHistory } from "react-router-dom";
import CoursesSlider from "@/components/CoursesSlider";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -120px;
  @media (max-width: 1200px) {
    margin-top: 0;
  }
  @media (max-width: 575px) {
    margin-top: -30px;
  }
  .home-hero {
    margin-bottom: 60px;
    padding-top: 42px;
    order: 1;
    @media (max-width: 768px) {
      margin-bottom: 30px;
      padding-top: 0;
      h1 {
        font-size: 26px;
      }
    }
    button {
      @media (max-width: 991px) {
        width: 100%;
      }
    }
  }

  .home-best-courses {
    margin: 65px 0;
    order: ${({ theme }) => (theme.theme === "velvetTheme" ? 3 : 2)};
    @media (max-width: 768px) {
      margin: 30px 0;
    }
  }

  .home-newest-courses {
    order: ${({ theme }) => (theme.theme === "orangeTheme" ? 3 : 4)};
    margin: 65px 0;
    @media (max-width: 768px) {
      margin: 30px 0;
    }
  }

  .home-awarded-courses {
    margin: 60px 0;
    order: ${({ theme }) =>
      theme.theme === "orangeTheme"
        ? 4
        : theme.theme === "velvetTheme"
        ? 2
        : 3};
    overflow: hidden;
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
        width: calc(100% + 100px);
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
  }

  .home-categories {
    order: 5;
    overflow: hidden;
    margin: 60px 0;
    @media (max-width: 768px) {
      margin: 30px 0;
    }
    h3 {
      text-align: center;
      margin-bottom: 30px;
    }
    .slider-title {
      @media (max-width: 575px) {
        padding-right: 45%;
      }
    }
    .categories-slider {
      margin-left: -60px;
      .slick-dots {
        margin-left: 30px;
        bottom: 40px;
      }
    }
    .single-category-slide {
      max-width: 272px;
      margin: 0 8px;
    }
  }
`;

const Index = () => {
  const [dots] = useState(true);
  const { fetchConfig, categoryTree, courses, fetchCourses, settings } =
    useContext(EscolaLMSContext);
  const history = useHistory();
  React.useEffect(() => {
    fetchConfig();
    fetchCourses({ per_page: 6 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
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

  const categoriesSliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <Layout>
      <HomePageStyled>
        <section className="home-hero">
          <div className="container">
            <Banner
              mobile={isMobile}
              title={settings?.homepage?.heroBannerText || ""}
              btnText={t("Homepage.HeroBtnText")}
              img={
                <ResponsiveImage
                  path={settings?.homepage?.heroBannerImg || ""}
                  srcSizes={[500, 750, 1000]}
                />
              }
              handleBtn={() => console.log("clicked")}
            />
          </div>
        </section>
        <section className="home-best-courses">
          <div className="container">
            <Title className="slider-title" level={3}>
              <strong>{t<string>("Homepage.CoursesSlider1Title")}</strong>
            </Title>
            {courses && courses.list && (
              <CoursesSlider
                courses={courses.list.data}
                sliderSettings={sliderSettings}
              />
            )}
          </div>
        </section>
        <section className="home-newest-courses">
          <div className="container">
            <Title className="slider-title" level={3}>
              <strong>{t<string>("Homepage.CoursesSlider2Title")}</strong>
            </Title>
            {courses && courses.list && (
              <CoursesSlider
                courses={courses.list.data}
                sliderSettings={sliderSettings}
              />
            )}
          </div>
        </section>

        {courses && courses.list && courses.list.data.length >= 6 && (
          <section className="home-awarded-courses">
            <div className="container">
              <div className="header-wrapper">
                <Title level={3}>
                  {t<string>("Homepage.AwardedCoursesTitle")}
                </Title>
                <Button mode="outline" onClick={() => history.push("/courses")}>
                  {t<string>("Homepage.AwardedCoursesBtnText")}
                </Button>
              </div>
              <div className="row">
                <div className="col-xl-4 small-padding main-col-1">
                  <div className="row justify-content-end">
                    <div className="col-6 small-padding-wrapper">
                      <div className="course-wrapper course-wrapper--small">
                        <Link to={`/courses/${courses.list?.data[0].id}`}>
                          <CourseCard
                            id={Number(courses?.list?.data[0].id)}
                            title=""
                            tags={courses.list?.data[0].tags as Tag[]}
                            image={{
                              url: courses?.list?.data[0].image_url,
                              alt: "",
                            }}
                            subtitle={
                              <Text>
                                <strong
                                  style={{
                                    fontSize: 14,
                                    display: "inline-block",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {courses?.list?.data[0].title}
                                </strong>
                              </Text>
                            }
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-6 small-padding-wrapper">
                      <div className="course-wrapper course-wrapper--small">
                        <Link to={`/courses/${courses.list?.data[1].id}`}>
                          <CourseCard
                            id={Number(courses?.list?.data[1].id)}
                            title=""
                            tags={courses.list?.data[1].tags as Tag[]}
                            image={{
                              url: courses?.list?.data[1].image_url,
                              alt: "",
                            }}
                            subtitle={
                              <Text>
                                <strong
                                  style={{
                                    fontSize: 14,
                                    display: "inline-block",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {courses?.list?.data[1].title}
                                </strong>
                              </Text>
                            }
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-9 small-padding-wrapper mobile-hide">
                      <div className="course-wrapper course-wrapper--small">
                        <Link to={`/courses/${courses.list?.data[2].id}`}>
                          <CourseCard
                            id={Number(courses?.list?.data[2].id)}
                            title=""
                            tags={courses.list?.data[2].tags as Tag[]}
                            image={{
                              url: courses?.list?.data[2].image_url,
                              alt: "",
                            }}
                            subtitle={
                              <Text>
                                <strong
                                  style={{
                                    fontSize: 14,
                                    display: "inline-block",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {courses?.list?.data[2].title}
                                </strong>
                              </Text>
                            }
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 small-padding main-col-2">
                  <div className="course-wrapper course-wrapper--big">
                    <ImageBubble
                      image={{
                        src: courses.list?.data[4].image_url || "",
                        alt: courses.list?.data[4].title || "",
                      }}
                      header={
                        <div style={{ textAlign: "right" }}>
                          {courses.list.data[4].tags?.map(
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
                        id={Number(courses?.list?.data[4].id)}
                        title={courses?.list?.data[4].title}
                        hideImage
                        buttonText="Jak to działa"
                        onButtonClick={() =>
                          history.push(`/courses/${courses?.list?.data[4].id}`)
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
                              {courses?.list?.data[4].title}
                            </strong>
                          </Text>
                        }
                        categories={{
                          categoryElements:
                            courses.list?.data[4].categories || [],
                          onCategoryClick: (id) =>
                            history.push(`/courses/?category_id=${id}`),
                        }}
                        onSecondaryButtonClick={() =>
                          history.push(`/courses/${courses?.list?.data[4].id}`)
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
                        <Link to={`/courses/${courses.list?.data[3].id}`}>
                          <CourseCard
                            id={Number(courses?.list?.data[3].id)}
                            title=""
                            tags={courses.list?.data[3].tags as Tag[]}
                            image={{
                              url: courses?.list?.data[3].image_url,
                              alt: "",
                            }}
                            subtitle={
                              <Text>
                                <strong
                                  style={{
                                    fontSize: 14,
                                    display: "inline-block",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {courses?.list?.data[3].title}
                                </strong>
                              </Text>
                            }
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-9 col-6 small-padding-wrapper">
                      <div className="course-wrapper course-wrapper--small course-wrapper--hidden-section">
                        <Link to={`/courses/${courses.list?.data[4].id}`}>
                          <CourseCard
                            id={Number(courses?.list?.data[4].id)}
                            title=""
                            tags={courses.list?.data[4].tags as Tag[]}
                            image={{
                              url: courses?.list?.data[4].image_url,
                              alt: "",
                            }}
                            subtitle={
                              <Text>
                                <strong
                                  style={{
                                    fontSize: 14,
                                    display: "inline-block",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {courses?.list?.data[4].title}
                                </strong>
                              </Text>
                            }
                          />
                        </Link>
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
          </section>
        )}
        <section className="home-categories">
          <div className="container">
            <Title level={3}>
              <strong>{t<string>("Homepage.CategoriesTitle")}</strong>
            </Title>
            {isMobile ? (
              <div className="categories-slider">
                <Slider
                  settings={{ ...categoriesSliderSettings, dots }}
                  dotsPosition="bottom"
                >
                  {categoryTree.list?.slice(-4).map((item) => (
                    <div className="single-category-slide" key={item.id}>
                      <CategoryCard
                        icon={<IconTag />}
                        title={item.name}
                        buttonText={t("Homepage.CategoryBtnText")}
                        subtitle={
                          <IconText
                            icon={<IconBook />}
                            text={`${item.count} kursów`}
                          />
                        }
                        onButtonClick={() =>
                          history.push(`/courses/?category_id=${item.id}`)
                        }
                        variant="gradient"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="row">
                {categoryTree.list?.slice(-4).map((item) => (
                  <div className="col-md-3" key={item.id}>
                    <CategoryCard
                      icon={<IconTag />}
                      title={item.name}
                      buttonText={t("Homepage.CategoryBtnText")}
                      subtitle={
                        <IconText
                          icon={<IconBook />}
                          text={`${item.count} kursów`}
                        />
                      }
                      onButtonClick={() =>
                        history.push(`/courses/?category_id=${item.id}`)
                      }
                      variant="gradient"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </HomePageStyled>
    </Layout>
  );
};

export default Index;
