import React, { useContext, useEffect, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Banner } from "@escolalms/components/lib/components/molecules/Banner/Banner";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import CoursesSlider from "@/components/CoursesSlider";
import PromotedCoursesSection from "@/components/PromotedCoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { useHistory } from "react-router-dom";
import Container from "@/components/Container";
import NewestCourses from "@/components/NewestCourses";
import { Course, PaginatedMetaList } from "@escolalms/sdk/lib/types/api";
import ContentLoader from "@/components/ContentLoader";
import routeRoutes from "@/components/Routes/routes";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-top: 0;
  }
  @media (max-width: 575px) {
    margin-top: -30px;
  }
  .home-hero {
    margin-bottom: 45px;
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
    margin: 40px 0;
    order: 2;
    @media (max-width: 768px) {
      margin: 30px 0;
    }
  }

  .home-newest-courses {
    order: 1;
    margin: 40px 0;
    @media (max-width: 768px) {
      margin: 30px 0;
    }
  }

  .promoted-courses-wrapper {
    order: 3;
  }

  .categories-section-wrapper {
    order: 5;
  }
`;

const Index = () => {
  const [courses, setCourses] = useState<Course[]>();
  const [loading, setLoading] = useState(true);
  const { categoryTree, fetchCategories, fetchCourses, settings } =
    useContext(EscolaLMSContext);

  const history = useHistory();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    fetchCourses({
      per_page: 8,
    })
      .then((res) => {
        setCourses((res as PaginatedMetaList<Course>).data);
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout metaTitle={t("Home")}>
      <HomePageStyled>
        <section className="home-hero">
          {settings.value?.homepage &&
            settings.value.homepage?.heroBannerText &&
            settings.value.homepage?.heroBannerImg &&
            settings.value.homepage?.heroBannerImg !== "" && (
              <Container>
                <Banner
                  mobile={isMobile}
                  title={
                    <MarkdownRenderer>
                      {`<h1>${
                        settings.value.homepage?.heroBannerText[
                          i18n.language
                        ] || ""
                      }</h1>`}
                    </MarkdownRenderer>
                  }
                  btnText={t("Homepage.HeroBtnText")}
                  asset={
                    <ResponsiveImage
                      path={settings?.value?.homepage?.heroBannerImg || ""}
                      srcSizes={[500, 750, 1000]}
                    />
                  }
                  handleBtn={() => history.push(routeRoutes.courses)}
                />
              </Container>
            )}
        </section>

        <section className="home-newest-courses">
          <NewestCourses />
        </section>

        <section className="home-best-courses">
          <Container>
            <Title className="slider-title" level={1} as="h2">
              <strong>{t<string>("Homepage.CoursesSlider1Title")}</strong>
            </Title>
            {loading && <ContentLoader />}
            {!loading && courses && <CoursesSlider courses={courses} />}
          </Container>
        </section>

        <div className="promoted-courses-wrapper">
          <PromotedCoursesSection />
        </div>

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
