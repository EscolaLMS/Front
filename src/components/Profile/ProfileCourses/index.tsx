import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import RateCourse from "@/components/RateCourse";
import ContentLoader from "@/components/ContentLoader";
import { Col, Row } from "react-grid-system";

import CourseCardItem from "./components/CourseCardItem";
import { CourseStatus } from "@/pages/user/MyProfile";
import { toast } from "react-toastify";

type CoursesState = Array<API.Course & { progress?: number }>;

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
  filter = CourseStatus.ALL,
}: {
  filter: CourseStatus;
}) => {
  const [fetched, setFetched] = useState(false);
  const [courseId, setCourseId] = useState<number | undefined>(undefined);
  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);
  const {
    progress,
    fetchProgress,
    fetchQuestionnaires,
    fetchMyAuthoredCourses,
    myAuthoredCourses,
  } = useContext(EscolaLMSContext);
  const [showMore, setShowMore] = useState(false);
  const [coursesToMap, setCoursesToMap] = useState<CoursesState>([]);
  const history = useHistory();
  const { t } = useTranslation();

  const [state, setState] = useState({
    show: false,
    step: 0,
  });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, fetchQuestionnaires]);

  useEffect(() => {
    const fetchData = async () => {
      if (filter === CourseStatus.ALL) {
        await Promise.all([fetchProgress(), fetchMyAuthoredCourses()]);
      } else if (filter !== CourseStatus.AUTHORED) {
        await fetchProgress();
      } else {
        await fetchMyAuthoredCourses();
      }
    };

    fetchData();
  }, [fetchProgress, filter, fetchMyAuthoredCourses]);

  useEffect(() => {
    getQuestionnaires();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const remapNormalCourses = useCallback(
    (courses: API.CourseProgressItem[]) => {
      return courses.map((course: API.CourseProgressItem) => {
        return {
          ...course.course,
          progress: progressMap[course.course.id ? course.course.id : -1],
        };
      });
    },
    [progressMap]
  );

  const onRateClick = useCallback(
    (courseId: number) => {
      setCourseId(courseId);
      setState((prevState) => ({
        ...prevState,
        show: true,
      }));
    },

    []
  );

  useEffect(() => {
    filter === CourseStatus.FINISHED
      ? setCoursesToMap(remapNormalCourses(finishedCourses))
      : filter === CourseStatus.PLANNED
      ? setCoursesToMap(remapNormalCourses(plannedCourses))
      : filter === CourseStatus.IN_PROGRESS
      ? setCoursesToMap(remapNormalCourses(startedCourses))
      : filter === CourseStatus.AUTHORED
      ? setCoursesToMap(myAuthoredCourses.value || [])
      : setCoursesToMap([
          ...remapNormalCourses(progress.value || []),
          ...(myAuthoredCourses.value || []),
        ]);
  }, [
    filter,
    progress,
    myAuthoredCourses,
    startedCourses,
    plannedCourses,
    finishedCourses,
    remapNormalCourses,
  ]);

  return (
    <StyledList>
      {!isMobile ? (
        <Row
          style={{
            gap: "28px 0",
          }}
        >
          {coursesToMap.length === 0 &&
            !progress.loading &&
            !myAuthoredCourses.loading && (
              <StyledEmptyInfo>
                <Title level={3}>
                  {t<string>("MyProfilePage.EmptyCoursesTitle")}
                </Title>
                <Text className="small-text">
                  {t<string>("MyProfilePage.EmptyCoursesText")}
                </Text>
                <Button
                  onClick={() => history.push("/courses")}
                  mode="secondary"
                >
                  {t<string>("MyProfilePage.EmptyCoursesBtnText")}
                </Button>
              </StyledEmptyInfo>
            )}
          {coursesToMap.slice(0, 6).map((item) => (
            <Col md={4} key={item.id}>
              <CourseCardItem
                course={item}
                onRateClick={(id) => onRateClick(id)}
              />
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
              <Col md={4} key={item.id}>
                <CourseCardItem
                  course={item}
                  onRateClick={(id) => onRateClick(id)}
                />
              </Col>
            ))}
        </Row>
      ) : (
        <div className="slider-wrapper">
          {coursesToMap &&
            coursesToMap.map((item) => (
              <div key={item.id} className="single-slide">
                <CourseCardItem
                  course={item}
                  onRateClick={(id) => onRateClick(id)}
                />
              </div>
            ))}
        </div>
      )}
      {(progress.loading || myAuthoredCourses.loading) && <ContentLoader />}
      {state.show && courseId && fetched && questionnaires[state.step] && (
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
