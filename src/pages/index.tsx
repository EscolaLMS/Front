import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
// import "./index.scss";
import {
  Banner,
  Button,
  CategoryCard,
  CourseCard,
  IconText,
  Slider,
  Title,
} from "@escolalms/components";
import { Tag } from "@escolalms/sdk/lib/types/api";
import styled from "styled-components";

const IconTag = () => {
  return (
    <svg
      width="62"
      height="61"
      viewBox="0 0 62 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.90625 57.8961V19.3961C0.906281 18.9996 0.992067 18.6077 1.15773 18.2475C1.32339 17.8872 1.565 17.567 1.866 17.3089L21.116 0.808863C21.6141 0.382807 22.248 0.148682 22.9035 0.148682C23.559 0.148682 24.1929 0.382807 24.691 0.808863L43.941 17.3089C44.243 17.5665 44.4857 17.8864 44.6523 18.2467C44.8189 18.607 44.9055 18.9992 44.9062 19.3961V38.6461C44.9062 39.3755 44.6165 40.0749 44.1008 40.5907C43.5851 41.1064 42.8856 41.3961 42.1562 41.3961C41.4269 41.3961 40.7274 41.1064 40.2117 40.5907C39.696 40.0749 39.4062 39.3755 39.4062 38.6461V20.6611L22.9062 6.51786L6.40625 20.6611V55.1461H39.4062C40.1356 55.1461 40.8351 55.4358 41.3508 55.9516C41.8665 56.4673 42.1562 57.1668 42.1562 57.8961C42.1562 58.6255 41.8665 59.3249 41.3508 59.8407C40.8351 60.3564 40.1356 60.6461 39.4062 60.6461H3.65625C2.9269 60.6461 2.22743 60.3564 1.71171 59.8407C1.19598 59.3249 0.90625 58.6255 0.90625 57.8961ZM17.4062 22.1461C17.4062 23.2339 17.7288 24.2973 18.3332 25.2017C18.9375 26.1062 19.7965 26.8112 20.8015 27.2274C21.8065 27.6437 22.9124 27.7526 23.9792 27.5404C25.0461 27.3282 26.0261 26.8044 26.7953 26.0352C27.5645 25.266 28.0884 24.286 28.3006 23.2191C28.5128 22.1522 28.4039 21.0463 27.9876 20.0414C27.5713 19.0364 26.8664 18.1774 25.9619 17.573C25.0574 16.9687 23.994 16.6461 22.9062 16.6461C21.4476 16.6461 20.0486 17.2256 19.0172 18.257C17.9857 19.2885 17.4062 20.6874 17.4062 22.1461ZM61.4062 49.6461C61.4062 48.9168 61.1165 48.2173 60.6008 47.7016C60.0851 47.1858 59.3856 46.8961 58.6562 46.8961H53.1562V41.3961C53.1562 40.6668 52.8665 39.9673 52.3508 39.4516C51.8351 38.9358 51.1356 38.6461 50.4062 38.6461C49.6769 38.6461 48.9774 38.9358 48.4617 39.4516C47.946 39.9673 47.6562 40.6668 47.6562 41.3961V46.8961H42.1562C41.4269 46.8961 40.7274 47.1858 40.2117 47.7016C39.696 48.2173 39.4062 48.9168 39.4062 49.6461C39.4062 50.3755 39.696 51.0749 40.2117 51.5907C40.7274 52.1064 41.4269 52.3961 42.1562 52.3961H47.6562V57.8961C47.6562 58.6255 47.946 59.3249 48.4617 59.8407C48.9774 60.3564 49.6769 60.6461 50.4062 60.6461C51.1356 60.6461 51.8351 60.3564 52.3508 59.8407C52.8665 59.3249 53.1562 58.6255 53.1562 57.8961V52.3961H58.6562C59.3856 52.3961 60.0851 52.1064 60.6008 51.5907C61.1165 51.0749 61.4062 50.3755 61.4062 49.6461Z"
        fill="#4A4A4A"
      />
    </svg>
  );
};

const IconBook = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 2.25H6C6.79565 2.25 7.55871 2.56607 8.12132 3.12868C8.68393 3.69129 9 4.45435 9 5.25V15.75C9 15.1533 8.76295 14.581 8.34099 14.159C7.91903 13.7371 7.34674 13.5 6.75 13.5H1.5V2.25Z"
        stroke="#4F4F4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 2.25H12C11.2044 2.25 10.4413 2.56607 9.87868 3.12868C9.31607 3.69129 9 4.45435 9 5.25V15.75C9 15.1533 9.23705 14.581 9.65901 14.159C10.081 13.7371 10.6533 13.5 11.25 13.5H16.5V2.25Z"
        stroke="#4F4F4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Index = () => {
  const [dots, setDots] = useState(true);
  const { fetchConfig, config, categoryTree, courses, fetchCourses } =
    useContext(EscolaLMSContext);

  React.useEffect(() => {
    fetchConfig();
    fetchCourses({ per_page: 6 });
  }, [fetchConfig]);

  // const platformVisibility =
  //   config?.escolalms_courses?.platform_visibility === "public" || false;

  // const fullVisibility =
  //   config?.escolalms_courses?.course_visibility === "show_all" || false;

  const sliderSettings = {
    arrows: false,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const HomePageStyled = styled.div`
    .home-hero {
      margin-bottom: 120px;
    }
    .home-newest-courses {
      margin: 137px 0;
    }
    .home-awarded-courses {
      .container {
        background-color: #f2f2f2;
      }
      .small-padding {
        padding-left: 10px;
        padding-right: 10px;
      }
      .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .course-wrapper {
        background-color: #fff;
        padding: 12px 10px 1px 10px;
        margin-bottom: 20px;

        .lesson-container {
          display: none;
        }
      }
    }
    .home-categories {
      h3 {
        text-align: center;
        margin-bottom: 30px;
      }
    }
  `;

  const SliderWrapper = styled.div`
    .single-slide {
      max-width: calc(100% - 20px);
    }
    .slick-dots {
      top: -65px;
    }
  `;

  return (
    <Layout>
      <HomePageStyled>
        <section className="home-hero">
          <div className="container">
            <Banner
              title="Witaj w platformie elearningowej Orange. Pomożemy Ci znaleźć najlepsze szkolenia"
              btnText="Jak to działa"
              img={{
                src: "/images/hero-img.png",
                alt: "",
              }}
              handleBtn={() => console.log("clicked")}
            />
          </div>
        </section>
        <section className="home-best-courses">
          <div className="container">
            <Title level={3}>
              <strong>Najlepsze szkolenia dla Ciebie</strong>
            </Title>
            <SliderWrapper>
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
            </SliderWrapper>
          </div>
        </section>
        <section className="home-newest-courses">
          <div className="container">
            <Title level={3}>
              <strong>Ostatnio dodane</strong>
            </Title>
            <SliderWrapper>
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
                      onButtonClick={() => console.log("clicked")}
                    />
                  </div>
                ))}
              </Slider>
            </SliderWrapper>
          </div>
        </section>

        <section className="home-awarded-courses">
          <div className="container">
            <div className="header-wrapper">
              <Title level={3}>Nauka podstaw miękkich</Title>
              <Button mode="outline">Zobacz więcej szkoleń</Button>
            </div>
            <div className="row">
              <div className="col-lg-4 small-padding">
                <div className="row justify-content-end">
                  <div className="col-lg-6 small-padding">
                    <div className="course-wrapper">
                      <CourseCard
                        id={Number(courses?.list?.data[0].id)}
                        title={courses?.list?.data[0].title}
                        tags={courses.list?.data[0].tags as Tag[]}
                        image={{
                          url: courses?.list?.data[0].image_url,
                          alt: "",
                        }}
                        lessonCount={0}
                        subtitle=""
                        categories={{
                          categoryElements: [],
                          onCategoryClick: () => console.log("clicked"),
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 small-padding">
                    <div className="course-wrapper">
                      <CourseCard
                        id={Number(courses?.list?.data[0].id)}
                        title={courses?.list?.data[0].title}
                        tags={courses.list?.data[0].tags as Tag[]}
                        image={{
                          url: courses?.list?.data[0].image_url,
                          alt: "",
                        }}
                        lessonCount={0}
                        subtitle=""
                        categories={{
                          categoryElements: [],
                          onCategoryClick: () => console.log("clicked"),
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-9 small-padding">
                    <div className="course-wrapper course-wrapper--3">
                      <CourseCard
                        id={Number(courses?.list?.data[0].id)}
                        title={courses?.list?.data[0].title}
                        tags={courses.list?.data[0].tags as Tag[]}
                        image={{
                          url: courses?.list?.data[0].image_url,
                          alt: "",
                        }}
                        lessonCount={0}
                        subtitle=""
                        categories={{
                          categoryElements: [],
                          onCategoryClick: () => console.log("clicked"),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 small-padding">
                <div className="course-wrapper">
                  <CourseCard
                    onButtonClick={() => console.log("clicked")}
                    id={Number(courses?.list?.data[0].id)}
                    title={courses?.list?.data[0].title}
                    tags={courses.list?.data[0].tags as Tag[]}
                    image={{
                      url: courses?.list?.data[0].image_url,
                      alt: "",
                    }}
                    lessonCount={0}
                    subtitle=""
                    categories={{
                      categoryElements: [
                        { id: 1, name: "Programming" },
                        { id: 2, name: "Front-end" },
                      ],
                      onCategoryClick: () => console.log("clicked"),
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-3 small-padding"></div>
            </div>
          </div>
        </section>
        <section className="home-categories">
          <div className="container">
            <Title level={3}>
              <strong>Zobacz kategorie szkoleń</strong>
            </Title>
            <div className="row">
              {categoryTree.list?.slice(-4).map((item) => (
                <div className="col-md-3">
                  <CategoryCard
                    icon={<IconTag />}
                    title={item.name}
                    buttonText="Zobacz"
                    subtitle={<IconText icon={<IconBook />} text="10 kursów" />}
                    onButtonClick={() => console.log("clicked")}
                    variant="gradient"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomePageStyled>
    </Layout>
  );
};

export default Index;
