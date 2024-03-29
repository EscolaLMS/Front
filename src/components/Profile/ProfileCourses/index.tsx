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
import { Col, Row } from "react-grid-system";

import CourseCardItem from "./components/CourseCardItem";
import { CourseStatus } from "@/pages/user/MyProfile";
import Pagination from "@/components/Common/Pagination";
import { useSearchParams } from "@/hooks/useSearchParams";
import routeRoutes from "@/components/Routes/routes";
import SwiperSlider from "@/components/Courses/CoursesSlider/swiper";
import { SwiperSlide } from "swiper/react";
import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";

type CoursesState = Array<
  API.Course & { progress?: number; courseData?: API.CourseProgressItem }
>;

enum TabName {
  STARTED = "started",
  PLANNED = "planned",
  FINISHED = "finished",
}

const StyledList = styled.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;

    a {
      text-decoration: none;
    }
  }
`;

const StyledEmptyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: ${({ theme }) =>
    theme.mode === "dark" ? theme.gray1 : theme.gray5}; */
  padding: ${isMobile ? "80px 20px" : "192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;
  text-align: center;
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

  const { setQueryParam } = useSearchParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const page = searchParams.get("page");
  const status = searchParams.get("status");
  const paginationMeta = useMemo(
    () =>
      filter === CourseStatus.AUTHORED
        ? myAuthoredCourses.list?.meta
        : paginatedProgress.list?.meta,
    [filter, myAuthoredCourses.list?.meta, paginatedProgress.list?.meta]
  );

  const getStatusName = useCallback((key: number) => {
    let tabName = "";
    switch (key) {
      case 1:
      case 5:
        break;
      case 2:
        tabName = TabName.STARTED;
        break;

        break;
      case 4:
        tabName = TabName.FINISHED;
        break;
    }
    return tabName;
  }, []);

  useEffect(() => {
    fetchPaginatedProgress({
      page: page ? parseInt(page) : 1,
      per_page: 8,
      status: getStatusName(Number(status)),
    });

    if (filter === CourseStatus.ALL || filter === CourseStatus.AUTHORED) {
      fetchMyAuthoredCourses();
    }
  }, [
    fetchPaginatedProgress,
    filter,
    fetchMyAuthoredCourses,
    page,
    status,
    getStatusName,
  ]);

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

  const remapNormalCourses = useCallback(
    (courses: API.CourseProgressItem[]) => {
      return courses.map((course: API.CourseProgressItem) => {
        return {
          ...course.course,
          courseData: course,
          progress:
            progressMap[
              (course.course.id
                ? course.course.id
                : -1) as keyof typeof progressMap
            ],
        };
      });
    },
    [progressMap]
  );

  useEffect(() => {
    filter !== CourseStatus.AUTHORED
      ? setCoursesToMap(remapNormalCourses(paginatedProgress.list?.data || []))
      : filter === CourseStatus.AUTHORED
      ? setCoursesToMap(myAuthoredCourses.list?.data || [])
      : setCoursesToMap([
          ...remapNormalCourses(paginatedProgress.list?.data || []),
          ...(myAuthoredCourses.list?.data || []),
        ]);
  }, [filter, paginatedProgress, myAuthoredCourses, remapNormalCourses]);

  return (
    <StyledList>
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
              onClick={() => history.push(routeRoutes.courses)}
              mode="secondary"
            >
              {t<string>("MyProfilePage.EmptyCoursesBtnText")}
            </Button>
          </StyledEmptyInfo>
        )}
      {!isMobile ? (
        <>
          <Row>
            {paginatedProgress.loading || myAuthoredCourses.loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Col md={3} key={`skeleton-card-${index}`}>
                    <CourseCardSkeleton />
                  </Col>
                ))
              : coursesToMap.map((item) => (
                  <Col md={3} key={item.id}>
                    <CourseCardItem course={item} />
                  </Col>
                ))}
          </Row>
          <PaginationWrapper>
            <Pagination
              total={paginationMeta?.total || 0}
              perPage={Number(paginationMeta?.per_page || 0)}
              currentPage={Number(paginationMeta?.current_page || 1)}
              onPage={(i) => {
                setQueryParam("page", `${i}`);
                window?.scrollTo(0, 0);
              }}
            />
          </PaginationWrapper>
        </>
      ) : (
        <SwiperSlider>
          {paginatedProgress.loading &&
            myAuthoredCourses.loading &&
            Array.from({ length: 8 }).map((_, index) => (
              <SwiperSlide
                className="single-slide"
                key={`skeleton-card-${index}`}
              >
                <CourseCardSkeleton />
              </SwiperSlide>
            ))}
          {(!paginatedProgress.loading || !myAuthoredCourses.loading) &&
            coursesToMap &&
            coursesToMap.map((item) => (
              <SwiperSlide key={item.id} className="single-slide">
                <CourseCardItem course={item} />
              </SwiperSlide>
            ))}
        </SwiperSlider>
      )}
    </StyledList>
  );
};

export default ProfileCourses;
