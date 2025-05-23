import { useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Link, useHistory, useParams } from "react-router-dom";
import Preloader from "@/components/_App/Preloader";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import Layout from "../../../components/_App/Layout";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CoursesSlider from "@/components/Courses/CoursesSlider";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import CourseImgPlaceholder from "@/components/Courses/CourseImgPlaceholder";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { LessonsIcon, UserIcon } from "../../../icons";
import { isMobile } from "react-device-detect";
import CourseCardWrapper from "@/components/Courses/CourseCardWrapper";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Common/Container";
import { Tag } from "@escolalms/sdk/lib/types";
import Tags from "@/components/Tags";
import CategoriesBreadCrumbs from "@/components/Categories/CategoriesBreadCrumbs";
import { APP_CONFIG } from "@/config/app";
import routeRoutes from "@/components/Routes/routes";

const StyledTutor = styled.section`
  .tutor-avatar {
    width: 100%;
    max-width: 100%;
  }
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

  useEffect(() => {
    fetchTutor(Number(id));
    // @ts-ignore
    fetchCourses({ "authors[]": [Number(id)] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Layout>
      <StyledTutor>
        <Container>
          <Breadcrumbs
            items={[
              <Link to={routeRoutes.home}>{t<string>("Home")}</Link>,
              <Link to={routeRoutes.tutors}>{t<string>("Tutors")}</Link>,
              <Text size="12">{`${tutor.value?.first_name || ""} ${
                tutor.value?.last_name || ""
              }`}</Text>,
            ]}
          />
          {tutor.value && (
            <div className="profile-box">
              <Row align={"start"}>
                <Col lg={3}>
                  <div className="image">
                    {tutor.value.path_avatar ? (
                      <ResponsiveImage
                        path={tutor.value.path_avatar}
                        srcSizes={[355, 355 * 2]}
                      />
                    ) : (
                      <img
                        className="tutor-avatar"
                        src={APP_CONFIG.tutorPlaceholderPath}
                        alt={"Tutor avatar"}
                      />
                    )}
                  </div>
                </Col>
                <Col lg={8}>
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
                </Col>
              </Row>
            </div>
          )}
          <div className="tutor-courses">
            <Title style={{ marginBottom: 20 }} level={3}>
              {t("TutorPage.Courses")}
            </Title>
            {courses.list && courses.list.data?.length === 0 ? (
              <Text>{t<string>("TutorCoursesEmpty")}</Text>
            ) : courses.list && courses.list.data?.length > 4 ? (
              <CoursesSlider courses={courses.list?.data || []} />
            ) : (
              <Row>
                {courses.list &&
                  courses.list.data.map((item) => (
                    <Col md={6} lg={3} key={item.id}>
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
                            <Tags
                              tags={item.tags as Tag[]}
                              onTagClick={(tagName) =>
                                history.push(`/courses/?tag=${tagName}`)
                              }
                            />
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
                            <Link to={`/courses/${item.id}`} className="title">
                              <Title level={4} as="h2">
                                {item.title}
                              </Title>
                            </Link>
                          }
                          categories={
                            <CategoriesBreadCrumbs
                              categories={
                                item.categories as EscolaLms.Categories.Models.Category[]
                              }
                              onCategoryClick={(id) => {
                                history.push(`/courses/?categories[]=${id}`);
                              }}
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
                                {t("StartNow")}
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
                    </Col>
                  ))}
              </Row>
            )}
          </div>
        </Container>
      </StyledTutor>
      {tutor.loading && <Preloader />}
    </Layout>
  );
};

export default TutorPage;
