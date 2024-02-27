import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Layout from "@/components/_App/Layout";
import { Banner } from "@escolalms/components/lib/components/molecules/Banner/Banner";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import CategoriesSection from "@/components/CategoriesSection";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { useHistory } from "react-router-dom";
import Container from "@/components/Container";
import DisplayCourses from "@/components/DisplayCourses";
import routeRoutes from "@/components/Routes/routes";

const HomePageStyled = styled.div`
  @media (max-width: 1200px) {
    margin-top: 0;
  }
  @media (max-width: 575px) {
    margin-top: -30px;
  }
  .home-hero {
    margin-bottom: 45px;
    padding-top: 42px;

    h1 {
      margin-top: 0 !important;
    }
    @media (max-width: 768px) {
      margin-bottom: 40px;
      padding-top: 100px;
      h1 {
        font-size: 26px;
      }
    }
    button {
      @media (max-width: 991px) {
      }
    }
  }

  .home-best-courses {
    @media (max-width: 768px) {
    }
  }

  .home-newest-courses {
    @media (max-width: 768px) {
    }
  }

  .promoted-courses-wrapper {
  }

  .categories-section-wrapper {
  }
`;

const Wrapper = styled(Container)`
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    button {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
`;

const Index = () => {
  const { categoryTree, settings } = useContext(EscolaLMSContext);

  const history = useHistory();
  const { t, i18n } = useTranslation();

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
          <Wrapper>
            <DisplayCourses
              titleText={t("Homepage.CoursesSlider2Title")}
              params={{
                per_page: 8,
                order_by: "created_at",
                order: "DESC",
              }}
            />
          </Wrapper>
        </section>

        <section className="home-best-courses">
          <Wrapper>
            <DisplayCourses
              titleText={t("Homepage.CoursesSlider1Title")}
              params={{
                per_page: 8,
              }}
            />
          </Wrapper>
        </section>

        <div className="promoted-courses-wrapper">
          <Wrapper>
            <DisplayCourses
              titleText={t<string>("Homepage.AwardedCoursesTitle")}
              params={{
                per_page: 8,
              }}
              isSlider={false || isMobile ? true : false}
              ctaButton
            />
          </Wrapper>
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
