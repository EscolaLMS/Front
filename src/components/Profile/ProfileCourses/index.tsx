import React, { useContext, useEffect, useMemo, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import Preloader from "@/components/Preloader";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Tag } from "@escolalms/sdk/lib/types/api";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { t } from "i18next";

const StyledList = styled.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;
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
  const { progress, fetchProgress } = useContext(EscolaLMSContext);
  const [showMore, setShowMore] = useState(false);
  const [coursesToMap, setCoursesToMap] = useState<
    API.CourseProgressItem[] | []
  >([]);
  const history = useHistory();

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div className="row">
          {progress.value?.length === 0 && (
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
              <div className="col-md-4" key={item.course.id}>
                <div className="course-wrapper">
                  <CourseCard
                    id={item.course.id}
                    title={item.course.title}
                    categories={{
                      categoryElements: item.course.categories || [],
                      onCategoryClick: (id) =>
                        history.push(`/courses/?category_id=${id}`),
                    }}
                    lessonCount={5}
                    hideImage={false}
                    subtitle={
                      <Text>
                        <strong style={{ fontSize: 14 }}>
                          {item.course.subtitle}
                        </strong>
                      </Text>
                    }
                    image={{
                      url:
                        `${
                          process &&
                          process.env &&
                          process.env.REACT_APP_PUBLIC_API_URL
                        }/api/images/img?path=${item.course.image_path}` || "",
                      alt: "",
                    }}
                    onButtonClick={() => console.log("ocen")}
                    buttonText={
                      progressMap[item.course.id] !== 100
                        ? t("MyProfilePage.RateCourse")
                        : undefined
                    }
                    tags={item.course.tags as Tag[]}
                    progress={
                      progressMap[item.course.id] !== 100
                        ? {
                            currentProgress: progressMap[item.course.id],
                            maxProgress: 100,
                          }
                        : undefined
                    }
                  />
                </div>
              </div>
            ))}
          {coursesToMap && coursesToMap.length > 6 && !showMore && (
            <div
              className="col-12"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <Button onClick={() => setShowMore(true)} mode="outline">
                {t<string>("MyProfilePage.ShowMore")}
              </Button>
            </div>
          )}
          {coursesToMap &&
            coursesToMap.length > 5 &&
            showMore &&
            coursesToMap.slice(6, coursesToMap.length).map((item) => (
              <div className="col-md-4" key={item.course.id}>
                <div className="course-wrapper">
                  <CourseCard
                    id={item.course.id}
                    title={item.course.title}
                    categories={{
                      categoryElements: item.course.categories || [],
                      onCategoryClick: (id) =>
                        history.push(`/courses/?category_id=${id}`),
                    }}
                    lessonCount={5}
                    hideImage={false}
                    subtitle={
                      <Text>
                        <strong style={{ fontSize: 14 }}>
                          {item.course.subtitle}
                        </strong>
                      </Text>
                    }
                    image={{
                      url:
                        `${
                          process &&
                          process.env &&
                          process.env.REACT_APP_PUBLIC_API_URL
                        }/api/images/img?path=${item.course.image_path}` || "",
                      alt: "",
                    }}
                    tags={item.course.tags as Tag[]}
                    onButtonClick={() => console.log("ocen")}
                    buttonText={
                      progressMap[item.course.id] !== 100
                        ? t("MyProfilePage.RateCourse")
                        : undefined
                    }
                    progress={
                      progressMap[item.course.id] !== 100
                        ? {
                            currentProgress: progressMap[item.course.id],
                            maxProgress: 100,
                          }
                        : undefined
                    }
                  />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="slider-wrapper">
          {coursesToMap &&
            coursesToMap.map((item) => (
              <div key={item.course.id} className="single-slide">
                <CourseCard
                  id={item.course.id}
                  title={item.course.title}
                  categories={{
                    categoryElements: item.course.categories || [],
                    onCategoryClick: (id) =>
                      history.push(`/courses/?category_id=${id}`),
                  }}
                  lessonCount={5}
                  hideImage={false}
                  subtitle={
                    <Text>
                      <strong style={{ fontSize: 14 }}>
                        {item.course.subtitle}
                      </strong>
                    </Text>
                  }
                  image={{
                    url:
                      `${
                        process &&
                        process.env &&
                        process.env.REACT_APP_PUBLIC_API_URL
                      }/api/images/img?path=${item.course.image_path}` || "",
                    alt: "",
                  }}
                  tags={item.course.tags as Tag[]}
                  onButtonClick={() => console.log("ocen")}
                  buttonText={
                    progressMap[item.course.id] !== 100
                      ? t("MyProfilePage.RateCourse")
                      : undefined
                  }
                  progress={
                    progressMap[item.course.id] !== 100
                      ? {
                          currentProgress: progressMap[item.course.id],
                          maxProgress: 100,
                        }
                      : undefined
                  }
                />
              </div>
            ))}
        </div>
      )}
      {progress.loading && <Preloader />}
    </StyledList>
  );
};

export default ProfileCourses;
