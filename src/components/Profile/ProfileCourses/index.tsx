import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

import ContentLoader from "@/components/ContentLoader";
import { Col, Row } from "react-grid-system";

import CourseCardItem from "./components/CourseCardItem";
import { CourseStatus } from "@/pages/user/MyProfile";
import Pagination from "@/components/Pagination";

type CoursesState = Array<
  API.Course & { progress?: number; courseData?: API.CourseProgressItem }
>;

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

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ProfileCourses = ({
  filter = CourseStatus.ALL,
}: {
  filter: CourseStatus;
}) => {
  const {
    fetchMyAuthoredCourses,
    myAuthoredCourses,
    fetchPaginatedProgress,
    paginatedProgress,
  } = useContext(EscolaLMSContext);
  const [coursesToMap, setCoursesToMap] = useState<CoursesState>([]);
  const history = useHistory();
  const { t } = useTranslation();

  //get query params from URL
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const page = useMemo(() => searchParams.get("page"), [searchParams]);
  console.log(page);
  console.log(paginatedProgress);
  useEffect(() => {
    const fetchData = async () => {
      if (filter === CourseStatus.ALL) {
        await Promise.all([
          fetchPaginatedProgress({
            page: page ? parseInt(page) : 1,
            per_page: 5,
          }),
          fetchMyAuthoredCourses(),
        ]);
      } else if (filter !== CourseStatus.AUTHORED) {
        await fetchPaginatedProgress({
          page: page ? parseInt(page) : 1,
          per_page: 5,
        });
      } else {
        await fetchMyAuthoredCourses();
      }
    };

    fetchData();
  }, [fetchPaginatedProgress, filter, fetchMyAuthoredCourses, page]);

  const progressMap = useMemo(() => {
    return (paginatedProgress.list?.data || []).reduce((acc: object, curr) => {
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
    }, {});
  }, [paginatedProgress]);

  const startedCourses = useMemo(() => {
    return (paginatedProgress.list?.data || []).filter(
      (item: API.CourseProgressItem) =>
        item.total_spent_time &&
        item.progress.length > 0 &&
        item.total_spent_time > 0 &&
        !item.finish_date
    );
  }, [paginatedProgress]);
  console.log(startedCourses);
  const plannedCourses = useMemo(() => {
    return (paginatedProgress.list?.data || []).filter(
      (item: API.CourseProgressItem) =>
        item.total_spent_time === 0 && !item.finish_date
    );
  }, [paginatedProgress]);

  const finishedCourses = useMemo(() => {
    return (paginatedProgress.list?.data || []).filter(
      (course: API.CourseProgressItem) => course.finish_date
    );
  }, [paginatedProgress]);

  const remapNormalCourses = useCallback(
    (courses: API.CourseProgressItem[]) => {
      return courses.map((course: API.CourseProgressItem) => {
        return {
          ...course.course,
          courseData: course,
          //@ts-ignore TODO
          progress: progressMap[course.course.id ? course.course.id : -1],
        };
      });
    },
    [progressMap]
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
          ...remapNormalCourses(paginatedProgress.list?.data || []),
          ...(myAuthoredCourses.value || []),
        ]);
  }, [
    filter,
    paginatedProgress,
    myAuthoredCourses,
    startedCourses,
    plannedCourses,
    finishedCourses,
    remapNormalCourses,
  ]);

  return (
    <StyledList>
      {!isMobile ? (
        <>
          <Row
            style={{
              gap: "28px 0",
            }}
          >
            {coursesToMap.length === 0 &&
              !paginatedProgress.loading &&
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
            {paginatedProgress.loading || myAuthoredCourses.loading ? (
              <ContentLoader />
            ) : (
              coursesToMap.map((item) => (
                <Col md={4} key={item.id}>
                  <CourseCardItem course={item} />
                </Col>
              ))
            )}
          </Row>
          <PaginationWrapper>
            <Pagination
              total={paginatedProgress.list?.meta?.total || 0}
              perPage={Number(paginatedProgress.list?.meta?.per_page || 0)}
              currentPage={Number(
                paginatedProgress.list?.meta?.current_page || 1
              )}
              onPage={(i) => {
                history.push({
                  search: `?page=${i}`,
                });
                window?.scrollTo(0, 0);
              }}
            />
          </PaginationWrapper>
        </>
      ) : (
        <div className="slider-wrapper">
          {coursesToMap &&
            coursesToMap.map((item) => (
              <div key={item.id} className="single-slide">
                <CourseCardItem course={item} />
              </div>
            ))}
        </div>
      )}
    </StyledList>
  );
};

export default ProfileCourses;
