import React, { useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useParams } from "react-router-dom";
import Preloader from "@/components/Preloader";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import Layout from "../../../components/_App/Layout";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { fixContentForMarkdown } from "../../../escolalms/sdk/utils/markdown";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CoursesSlider from "@/components/CoursesSlider";

const StyledTutor = styled.section`
  .tutor-courses {
    margin-top: 120px;
    @media (max-width: 991px) {
      margin-top: 60px;
    }
    .slick-dots {
      @media (max-width: 991px) {
        display: none !important;
      }
    }
  }
  .content {
    @media (max-width: 991px) {
      margin-top: 50px;
    }
  }
`;

const TutorPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { tutor, fetchTutor, courses, fetchCourses } =
    useContext(EscolaLMSContext);

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

  useEffect(() => {
    fetchTutor(Number(id));
    //@ts-ignore
    fetchCourses({ "authors[]": [Number(id)] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Layout>
      <StyledTutor>
        <div className="container">
          {tutor.value && (
            <div className="profile-box">
              <div className="row align-items-start">
                <div className="col-lg-3">
                  {tutor.value.path_avatar && (
                    <div className="image">
                      <ResponsiveImage
                        path={tutor.value.path_avatar}
                        srcSizes={[355, 355 * 2]}
                      />
                    </div>
                  )}
                </div>
                <div className="col-lg-8 offset-lg-1">
                  <div className="content">
                    <Title level={3}>
                      {tutor.value.first_name} {tutor.value.last_name}
                    </Title>
                    <Text>{t("Tutor")}</Text>
                    <div>
                      <MarkdownRenderer>
                        {fixContentForMarkdown(tutor.value.bio || "")}
                      </MarkdownRenderer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="tutor-courses">
            <Title level={3}>{t("TutorPage.Courses")}</Title>
            <CoursesSlider
              sliderSettings={sliderSettings}
              courses={courses.list?.data || []}
            />
          </div>
        </div>
      </StyledTutor>
      {tutor.loading && <Preloader />}
    </Layout>
  );
};

export default TutorPage;
