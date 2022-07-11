import React, { useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Link, useHistory, useParams } from "react-router-dom";
import Preloader from "@/components/Preloader";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import Layout from "../../../components/_App/Layout";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CoursesSlider from "@/components/CoursesSlider";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import {
  Badge,
  BreadCrumbs,
  Button,
  CourseCard,
  IconText,
} from "@escolalms/components";
import { LessonsIcon, UserIcon } from "../../../icons";
import { isMobile } from "react-device-detect";
import CourseCardWrapper from "@/components/CourseCardWrapper";

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
  const theme = useTheme();
  const history = useHistory();

  const sliderSettings = {
    arrows: false,
    infinite: true,
    draggable: false,
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
          draggable: true,
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
          <Breadcrumbs
            items={[
              <Link to="/">{t<string>("Home")}</Link>,
              <Link to="/tutors">{t<string>("Tutors")}</Link>,
              <Text size="12">{`${tutor.value?.first_name || ""} ${
                tutor.value?.last_name || ""
              }`}</Text>,
            ]}
          />
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
                        {tutor.value.bio || ""}
                      </MarkdownRenderer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="tutor-courses">
            <Title style={{ marginBottom: 20 }} level={3}>
              {t("TutorPage.Courses")}
            </Title>
            {courses.list && courses.list.data?.length === 0 ? (
              <Text>{t<string>("TutorCoursesEmpty")}</Text>
            ) : courses.list && courses.list.data?.length > 4 ? (
              <CoursesSlider
                sliderSettings={sliderSettings}
                courses={courses.list?.data || []}
              />
            ) : (
              <div className="row">
                {courses.list &&
                  courses.list.data.map((item) => (
                    <div className="col-lg-3 col-md-6">
                      <CourseCardWrapper>
                        <CourseCard
                          mobile={isMobile}
                          id={item.id}
                          image={
                            <Link to={`/courses/${item.id}`}>
                              {item.image_url ? (
                                <img src={item.image_url} alt={item.title} />
                              ) : (
                                <CourseImgPlaceholder />
                              )}
                            </Link>
                          }
                          tags={
                            <>
                              {item.tags?.map((item, index) => (
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
                          subtitle={
                            item.subtitle ? (
                              <Text size="12">
                                <Link
                                  style={{ color: theme.primaryColor }}
                                  to={`/courses/${item.id}`}
                                >
                                  <strong>{item.subtitle}</strong>
                                </Link>
                              </Text>
                            ) : undefined
                          }
                          title={
                            <Link to={`/courses/${item.id}`}>{item.title}</Link>
                          }
                          categories={
                            <BreadCrumbs
                              hyphen="/"
                              items={item.categories?.map((category) => (
                                <Link
                                  key={category.id}
                                  to={`/courses/?ids[]=${category.id}`}
                                >
                                  {category.name}
                                </Link>
                              ))}
                            />
                          }
                          actions={
                            <>
                              <Button
                                mode="secondary"
                                onClick={() =>
                                  history.push(`/courses/${item.id}`)
                                }
                              >
                                {t<string>("Start now")}
                              </Button>
                            </>
                          }
                          footer={
                            <>
                              {item.users_count && item.users_count > 0 ? (
                                <IconText
                                  icon={<UserIcon />}
                                  text={`${item.users_count} ${t<string>(
                                    "Students"
                                  )}`}
                                />
                              ) : (
                                ""
                              )}{" "}
                              {item.lessons_count && item.lessons_count > 0 ? (
                                <IconText
                                  icon={<LessonsIcon />}
                                  text={`${item.lessons_count} ${t<string>(
                                    "Lessons"
                                  )}`}
                                />
                              ) : (
                                ""
                              )}
                            </>
                          }
                        />
                      </CourseCardWrapper>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </StyledTutor>
      {tutor.loading && <Preloader />}
    </Layout>
  );
};

export default TutorPage;
