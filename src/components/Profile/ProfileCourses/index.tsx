import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { BreadCrumbs } from "@escolalms/components/lib/components/atoms/BreadCrumbs/BreadCrumbs";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import styled, { useTheme } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { LessonsIcon, UserIcon } from "../../../icons";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseCardWrapper from "@/components/CourseCardWrapper";
import RateCourse from "@/components/RateCourse";
import ContentLoader from "@/components/ContentLoader";
import { toast } from "react-toastify";
import { t } from "i18next";
import { Col, Row } from "react-grid-system";

const StyledList = styled.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;
    a {
      text-decoration: none;
    }
  }

  .slider-wrapper {
    width: 100%;
    display: flex;
    overflow: scroll;
    column-gap: 15px;

    @media (max-width: 575px) {
      width: calc(100% + 15px);
      margin-right: -15px;
    }

    .single-slide {
      width: 272px;
      max-width: 272px;
      flex-shrink: 0;
    }
  }
`;

const StyledEmptyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.mode === "dark" ? theme.gray1 : theme.gray5};
  padding: ${isMobile ? "80px 20px" : "192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;

  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`;

const ProfileCourses = ({
  filter = "all",
}: {
  filter: "all" | "inProgress" | "planned" | "finished";
}) => {
  const [rateModalVisible, setRateModalVisible] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [courseId, setCourseId] = useState<number | undefined>(undefined);
  const { progress, fetchProgress, fetchQuestionnaires } =
    useContext(EscolaLMSContext);
  const [showMore, setShowMore] = useState(false);
  const [coursesToMap, setCoursesToMap] = useState<
    API.CourseProgressItem[] | []
  >([]);
  const history = useHistory();
  const theme = useTheme();
  const { t } = useTranslation();

  const [state, setState] = useState({
    show: false,
    step: 0,
  });

  const [questionnaires, setQuestionnaires] = useState<
    EscolaLms.Questionnaire.Models.Questionnaire[]
  >([]);

  const getQuestionnaires = useCallback(async () => {
    try {
      const request =
        courseId && (await fetchQuestionnaires("Course", courseId));
      if (request && request.success) {
        setQuestionnaires(request.data);
        setFetched(true);
      }
    } catch (error) {
      toast.error(t<string>("UnexpectedError"));
      console.log(error);
    }
  }, [courseId, fetchQuestionnaires]);

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getQuestionnaires();
  }, [courseId]);

  const handleClose = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      show: false,
    }));

    if (state.step < questionnaires.length - 1) {
      setState((prevState) => ({
        ...prevState,
        step: prevState.step + 1,
      }));

      const timer = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          show: true,
        }));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [questionnaires, state.step]);

  const progressMap = useMemo(() => {
    return (progress.value || []).reduce(
      (acc: object, curr: API.CourseProgressItem) => {
        return {
          ...acc,
          [curr.course.id ? curr.course.id : -1]: Math.round(
            ((curr.progress || []).reduce(
              (pAcc, pCurr) => (pCurr.status === 1 ? pAcc + 1 : pAcc),
              0
            ) /
              curr.progress.length) *
              100
          ),
        };
      },
      {}
    );
  }, [progress]);

  const startedCourses = useMemo(() => {
    return (progress.value || []).filter(
      (item: API.CourseProgressItem) =>
        item.total_spent_time &&
        item.progress.length > 0 &&
        item.total_spent_time > 0 &&
        !item.finish_date
    );
  }, [progress]);

  const plannedCourses = useMemo(() => {
    return (progress.value || []).filter(
      (item: API.CourseProgressItem) =>
        item.total_spent_time === 0 && !item.finish_date
    );
  }, [progress]);

  const finishedCourses = useMemo(() => {
    return (progress.value || []).filter(
      (course: API.CourseProgressItem) => course.finish_date
    );
  }, [progress]);

  useEffect(() => {
    setCoursesToMap(progress.value || []);
  }, [progress]);

  useEffect(() => {
    filter === "all"
      ? setCoursesToMap(progress.value || [])
      : filter === "finished"
      ? setCoursesToMap(finishedCourses)
      : filter === "inProgress"
      ? setCoursesToMap(startedCourses)
      : setCoursesToMap(plannedCourses);
  }, [filter, finishedCourses, startedCourses, plannedCourses, progress]);
  return (
    <StyledList>
      {!isMobile ? (
        <Row
          style={{
            gap: "28px 0",
          }}
        >
          {progress.value?.length === 0 && !progress.loading && (
            <StyledEmptyInfo>
              <Title level={3}>
                {t<string>("MyProfilePage.EmptyCoursesTitle")}
              </Title>
              <Text className="small-text">
                {t<string>("MyProfilePage.EmptyCoursesText")}
              </Text>
              <Button onClick={() => history.push("/courses")} mode="secondary">
                {t<string>("MyProfilePage.EmptyCoursesBtnText")}
              </Button>
            </StyledEmptyInfo>
          )}
          {coursesToMap &&
            coursesToMap.slice(0, 6).map((item) => (
              <Col md={4} key={item.course.id}>
                <CourseCardWrapper>
                  <CourseCard
                    mobile={isMobile}
                    id={item.course.id}
                    image={
                      <Link to={`/course/${item.course.id}`}>
                        {item.course.image_path ? (
                          <ResponsiveImage
                            path={item.course.image_path}
                            alt={item.course.title}
                            srcSizes={[300, 600, 900]}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      item.course.subtitle ? (
                        <Text>
                          <Link
                            style={{ color: theme.primaryColor }}
                            to={`/course/${item.course.id}`}
                          >
                            {item.course.subtitle}
                          </Link>
                        </Text>
                      ) : undefined
                    }
                    title={
                      <Link to={`/course/${item.course.id}`}>
                        {item.course.title}
                      </Link>
                    }
                    categories={
                      <BreadCrumbs
                        hyphen="/"
                        items={item.categories?.map((category) => (
                          <Link to={`/courses/?category_id[]=${category.id}`}>
                            {category.name}
                          </Link>
                        ))}
                      />
                    }
                    actions={
                      <>
                        {progressMap[item.course.id] === 100 && (
                          <Button
                            mode="secondary"
                            onClick={() => {
                              setCourseId(item.course.id);
                              setState((prevState) => ({
                                ...prevState,
                                show: true,
                              }));
                            }}
                          >
                            {t<string>("MyProfilePage.RateCourse")}
                          </Button>
                        )}
                      </>
                    }
                    footer={
                      <>
                        {item.course.users_count &&
                          item.course.users_count > 0 && (
                            <IconText
                              icon={<UserIcon />}
                              text={`${item.course.users_count} ${t<string>(
                                "Students"
                              )}`}
                            />
                          )}{" "}
                        {item.course.lessons_count &&
                          item.course.lessons_count > 0 && (
                            <IconText
                              icon={<LessonsIcon />}
                              text={`${item.course.lessons_count} ${t<string>(
                                "Lessons"
                              )}`}
                            />
                          )}
                      </>
                    }
                    progress={
                      progressMap[item.course.id] !== 100 &&
                      !isNaN(progressMap[item.course.id])
                        ? {
                            currentProgress: progressMap[item.course.id],
                            maxProgress: 100,
                          }
                        : undefined
                    }
                  />
                </CourseCardWrapper>
              </Col>
            ))}
          {coursesToMap && coursesToMap.length > 6 && !showMore && (
            <Col
              sm={12}
              md={12}
              lg={12}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <Button onClick={() => setShowMore(true)} mode="outline">
                {t<string>("MyProfilePage.ShowMore")}
              </Button>
            </Col>
          )}
          {coursesToMap &&
            coursesToMap.length > 5 &&
            showMore &&
            coursesToMap.slice(6, coursesToMap.length).map((item) => (
              <Col md={4} key={item.course.id}>
                <CourseCardWrapper>
                  <CourseCard
                    mobile={isMobile}
                    id={item.course.id}
                    image={
                      <Link to={`/course/${item.course.id}`}>
                        {item.course.image_path ? (
                          <ResponsiveImage
                            path={item.course.image_path}
                            alt={item.course.title}
                            srcSizes={[300, 600, 900]}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      item.course.subtitle ? (
                        <Text>
                          <Link
                            style={{ color: theme.primaryColor }}
                            to={`/course/${item.course.id}`}
                          >
                            {item.course.subtitle}
                          </Link>
                        </Text>
                      ) : undefined
                    }
                    title={
                      <Link to={`/course/${item.course.id}`}>
                        {item.course.title}
                      </Link>
                    }
                    categories={
                      <BreadCrumbs
                        hyphen="/"
                        items={item.categories?.map((category) => (
                          <Link to={`/courses/?category_id[]=${category.id}`}>
                            {category.name}
                          </Link>
                        ))}
                      />
                    }
                    actions={
                      <>
                        {progressMap[item.course.id] === 100 && (
                          <Button
                            mode="secondary"
                            onClick={() => setRateModalVisible(true)}
                          >
                            {t<string>("MyProfilePage.RateCourse")}
                          </Button>
                        )}
                      </>
                    }
                    footer={
                      <>
                        {item.course.users_count &&
                          item.course.users_count > 0 && (
                            <IconText
                              icon={<UserIcon />}
                              text={`${item.course.users_count} ${t<string>(
                                "Students"
                              )}`}
                            />
                          )}{" "}
                        {item.course.lessons_count &&
                          item.course.lessons_count > 0 && (
                            <IconText
                              icon={<LessonsIcon />}
                              text={`${item.course.lessons_count} ${t<string>(
                                "Lessons"
                              )}`}
                            />
                          )}
                      </>
                    }
                    progress={
                      progressMap[item.course.id] !== 100 &&
                      !isNaN(progressMap[item.course.id])
                        ? {
                            currentProgress: progressMap[item.course.id],
                            maxProgress: 100,
                          }
                        : undefined
                    }
                  />
                </CourseCardWrapper>
              </Col>
            ))}
        </Row>
      ) : (
        <div className="slider-wrapper">
          {coursesToMap &&
            coursesToMap.map((item) => (
              <div key={item.course.id} className="single-slide">
                <CourseCardWrapper>
                  <CourseCard
                    mobile={isMobile}
                    id={item.course.id}
                    image={
                      <Link to={`/course/${item.course.id}`}>
                        {item.course.image_path ? (
                          <ResponsiveImage
                            path={item.course.image_path}
                            alt={item.course.title}
                            srcSizes={[300, 600, 900]}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    subtitle={
                      item.course.subtitle ? (
                        <Text>
                          <Link
                            style={{ color: theme.primaryColor }}
                            to={`/course/${item.course.id}`}
                          >
                            {item.course.subtitle}
                          </Link>
                        </Text>
                      ) : undefined
                    }
                    title={
                      <Link to={`/course/${item.course.id}`}>
                        {item.course.title}
                      </Link>
                    }
                    categories={
                      <BreadCrumbs
                        hyphen="/"
                        items={item.categories?.map((category) => (
                          <Link to={`/courses/?category_id[]=${category.id}`}>
                            {category.name}
                          </Link>
                        ))}
                      />
                    }
                    actions={
                      <>
                        {progressMap[item.course.id] === 100 && (
                          <Button
                            mode="secondary"
                            onClick={() => console.log("clicked")}
                          >
                            {t<string>("MyProfilePage.RateCourse")}
                          </Button>
                        )}
                      </>
                    }
                    footer={
                      <>
                        {item.course.users_count &&
                          item.course.users_count > 0 && (
                            <IconText
                              icon={<UserIcon />}
                              text={`${item.course.users_count} ${t<string>(
                                "Students"
                              )}`}
                            />
                          )}{" "}
                        {item.course.lessons_count &&
                          item.course.lessons_count > 0 && (
                            <IconText
                              icon={<LessonsIcon />}
                              text={`${item.course.lessons_count} ${t<string>(
                                "Lessons"
                              )}`}
                            />
                          )}
                      </>
                    }
                    progress={
                      progressMap[item.course.id] !== 100 &&
                      !isNaN(progressMap[item.course.id])
                        ? {
                            currentProgress: progressMap[item.course.id],
                            maxProgress: 100,
                          }
                        : undefined
                    }
                  />
                </CourseCardWrapper>
              </div>
            ))}
        </div>
      )}
      {progress.loading && <ContentLoader />}
      {state.show && courseId && fetched && (
        <RateCourse
          course={"Course"}
          courseId={courseId}
          visible={state.show}
          onClose={() => handleClose()}
          questionnaire={questionnaires[state.step]}
        />
      )}
    </StyledList>
  );
};

export default ProfileCourses;
