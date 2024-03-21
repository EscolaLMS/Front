import React, { useContext, useMemo } from "react";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";

import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { CourseProgress } from "@escolalms/components/lib/components/atoms/CourseProgress/CourseProgress";
import { PricingCard } from "@escolalms/components/lib/components/atoms/PricingCard/PricingCard";
import { IconWin } from "../../../../icons";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";

import { useCourseProgress } from "../../../../hooks/courses/useCourseProgress";
import CourseDetailsSidebarButtons from "./Buttons";

import ContentLoader from "@/components/_App/ContentLoader";
import ProductPrices from "@/components/ProductPrices";
import styled from "styled-components";

const CourseDetailsSidebarWrapper = styled.div`
  width: 100%;
  left: 0;
  position: ${isMobile ? "static" : "sticky"};
  top: ${isMobile ? "unset" : "130px"};
  bottom: ${isMobile ? "0" : "unset"};
  z-index: 100;
  .course-sidebar-header {
    p {
      margin-bottom: 0;
    }
  }
  .price-wrapper {
    margin-bottom: 16px;
    * {
      font-weight: 700;
    }
  }
  button {
    width: 100%;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 13px;
    font-weight: 700;
    &:first-of-type {
      font-weight: 400;
    }
  }
`;

interface Props {
  course: API.Course;
  onRequestAccess: () => void;
}

const CoursesDetailsSidebar: React.FC<Props> = ({
  course,
  onRequestAccess,
}) => {
  const { user, courseAccess } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { progress } = useCourseProgress(Number(id));

  const userOwnThisCourse = useMemo(
    () => course?.product?.owned,
    [course?.product?.owned]
  );
  const userCourseAccess = useMemo(
    () =>
      !!courseAccess.list?.data?.find(
        (courseAccessItem) =>
          courseAccessItem?.course?.id === course.id &&
          courseAccessItem.status === "approved"
      ),
    [course.id, courseAccess.list?.data]
  );

  const currentCourse = useMemo(() => progress.data || [], [progress.data]);

  const progressMap = useMemo(() => {
    if (user.value && (userOwnThisCourse || userCourseAccess)) {
      const finishedLessons =
        currentCourse?.filter((item) => item.status === 1) || [];
      return finishedLessons.length;
    } else {
      return 0;
    }
  }, [currentCourse, user.value, userCourseAccess, userOwnThisCourse]);

  return (
    <CourseDetailsSidebarWrapper>
      <PricingCard>
        <div className="course-sidebar-header">
          <Text size="13">{t("PricePerAccess")}</Text>
          <div className="price-wrapper">
            <ProductPrices
              price={course.product?.price}
              taxRate={course.product?.tax_rate}
              oldPrice={course.product?.price_old}
              textSizes={{
                old: "18",
                new: "24",
              }}
            />
          </div>
        </div>

        {progress.loaded ? (
          <CourseDetailsSidebarButtons
            onRequestAccess={onRequestAccess}
            course={course}
            userOwnThisCourse={userOwnThisCourse}
          />
        ) : (
          <ContentLoader />
        )}

        <div className="pricing-card-features">
          {course.duration && (
            <IconText
              text={
                <IconTextWrapper>
                  <span>{t("CoursePage.Duration")}</span>
                  <span>{course.duration}</span>
                </IconTextWrapper>
              }
            />
          )}
          {course.lessons && (
            <IconText
              text={
                <IconTextWrapper>
                  <span>{t("CoursePage.Lessons")}</span>
                  <span>{course.lessons.length}</span>
                </IconTextWrapper>
              }
            />
          )}
          {course.language && (
            <IconText
              text={
                <IconTextWrapper>
                  <span>{t("CoursePage.Language")}</span>
                  <span>{course.language}</span>
                </IconTextWrapper>
              }
            />
          )}
          {course.level && (
            <IconText
              text={
                <IconTextWrapper>
                  <span>{t("CoursePage.Level")}</span>
                  <span>{course.level}</span>
                </IconTextWrapper>
              }
            />
          )}
          {course.users_count ? (
            <IconText
              text={
                <IconTextWrapper>
                  <span>{t("CoursePage.Students")}</span>
                  <span>{course.users_count}</span>
                </IconTextWrapper>
              }
            />
          ) : (
            ""
          )}
        </div>
        {!user.value ? (
          <></>
        ) : (
          // <Text size="12">
          //   <Link
          //     to={`/login?referrer=/courses/${course.id}`}
          //     style={{
          //       marginRight: "4px",
          //       color: theme.primaryColor,
          //     }}
          //   >
          //     {t<string>("CoursePage.Login")}
          //   </Link>
          //   {t("CoursePage.ToSeeProgress")}
          // </Text>
          <CourseProgress
            progress={
              currentCourse && currentCourse?.length > 0
                ? progressMap / currentCourse.length
                : 0
            }
            icon={
              progress.loaded ? (
                <IconWin />
              ) : (
                <ContentLoader width="22px" height="22px" />
              )
            }
            title={t("CoursePage.MyProgress")}
          >
            <strong style={{ fontSize: 14 }}>
              {t<string>("CoursePage.Finished")} {progressMap || 0}{" "}
              {t<string>("CoursePage.Of")}{" "}
              {currentCourse && currentCourse?.length > 0
                ? currentCourse.length
                : 0}{" "}
              {t<string>("CoursePage.Lessons")}
            </strong>
            <p style={{ marginTop: 9, marginBottom: 0 }}>
              {t<string>("CoursePage.FinishToGetCertificate")}
            </p>
          </CourseProgress>
        )}
      </PricingCard>
    </CourseDetailsSidebarWrapper>
  );
};

export default CoursesDetailsSidebar;
