import React, { useContext, useEffect, useMemo } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import { useTranslation } from "react-i18next";
import Preloader from "@/components/Preloader";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Tag } from "@escolalms/sdk/lib/types/api";
import styled from "styled-components";

const StyledList = styled.div`
  .course-wrapper {
    margin-bottom: 24px;
  }
`;

const ProfileCourses = ({
  filter = "all",
}: {
  filter: "all" | "inProgress" | "planned" | "finished";
}) => {
  const { progress, fetchProgress } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
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

  if (progress.loading) {
    return <Preloader />;
  }

  return (
    <StyledList>
      <div className="row">
        {filter === "all" ? (
          (progress.value || []).map((item: API.CourseProgressItem) => (
            <div className="col-md-4" key={item.course.id}>
              <div className="course-wrapper">
                <CourseCard
                  id={item.course.id}
                  title={item.course.title}
                  categories={{
                    categoryElements: item.course.categories || [],
                    onCategoryClick: () => console.log("clicked"),
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
                  onButtonClick={() => console.log("clicked")}
                />
              </div>
            </div>
          ))
        ) : filter === "inProgress" ? (
          !!startedCourses.length &&
          startedCourses.map((item: API.CourseProgressItem) => (
            <div className="col-md-4" key={item.course.id}>
              <div className="course-wrapper">
                <CourseCard
                  id={item.course.id}
                  title={item.course.title}
                  categories={{
                    categoryElements: item.course.categories || [],
                    onCategoryClick: () => console.log("clicked"),
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
                    url: item.course.image_url,
                    alt: "",
                  }}
                  tags={item.course.tags as Tag[]}
                  onButtonClick={() => console.log("clicked")}
                />
              </div>
            </div>
          ))
        ) : filter === "finished" ? (
          !!finishedCourses.length &&
          finishedCourses.map((item: API.CourseProgressItem) => (
            <div className="col-md-4" key={item.course.id}>
              <div className="course-wrapper">
                <CourseCard
                  id={item.course.id}
                  title={item.course.title}
                  categories={{
                    categoryElements: item.course.categories || [],
                    onCategoryClick: () => console.log("clicked"),
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
                    url: item.course.image_url,
                    alt: "",
                  }}
                  tags={item.course.tags as Tag[]}
                  onButtonClick={() => console.log("clicked")}
                />
              </div>
            </div>
          ))
        ) : filter === "planned" ? (
          !!plannedCourses.length &&
          plannedCourses.map((item: API.CourseProgressItem) => (
            <div className="col-md-4" key={item.course.id}>
              <div className="course-wrapper">
                <CourseCard
                  id={item.course.id}
                  title={item.course.title}
                  categories={{
                    categoryElements: item.course.categories || [],
                    onCategoryClick: () => console.log("clicked"),
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
                    url: item.course.image_url,
                    alt: "",
                  }}
                  tags={item.course.tags as Tag[]}
                  onButtonClick={() => console.log("clicked")}
                />
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </StyledList>
  );
};

export default ProfileCourses;
