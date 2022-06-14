import React, { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Banner } from "@escolalms/components/lib/components/molecules/Banner/Banner";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { t } from "i18next";
import CoursesSlider from "@/components/CoursesSlider";
import PromotedCoursesSection from "@/components/PromotedCoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";

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
    h1 {
      margin-top: 0 !important;
    }
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

  .promoted-courses-wrapper {
    order: ${({ theme }) =>
      theme.theme === "orangeTheme"
        ? 4
        : theme.theme === "velvetTheme"
        ? 2
        : 3};
  }

  .categories-section-wrapper {
    order: 5;
  }
`;

const Index = () => {
  const { fetchConfig, categoryTree, courses, fetchCourses, settings } =
    useContext(EscolaLMSContext);
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
        breakpoint: 1201,
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

  return (
    <Layout metaTitle={t("Home")}>
      <HomePageStyled>
        <section className="home-hero">
          <div className="container">
            <Banner
              mobile={isMobile}
              title={
                <MarkdownRenderer>
                  {settings?.homepage?.heroBannerText || ""}
                </MarkdownRenderer>
              }
              btnText={t("Homepage.HeroBtnText")}
              asset={
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
          <div className="promoted-courses-wrapper">
            <PromotedCoursesSection courses={courses.list.data} />
          </div>
        )}

        {categoryTree && (
          <div className="categories-section-wrapper">
            <CategoriesSection
              categories={
                categoryTree.list?.filter((category) => !!category.icon) || []
              }
            />
          </div>
        )}
      </HomePageStyled>
    </Layout>
  );
};

export default Index;
