import { memo } from "react";
import { useTranslation } from "react-i18next";

import { StyledTitle } from "../styles";
import { CourseRatingsReviewsContent } from "./Content";
import { useCourseRatingContext } from "../Provider";

export const CourseRatingsReviews = memo(() => {
  const { courseId, reviewId } = useCourseRatingContext();
  const { t } = useTranslation();

  return (
    <>
      <StyledTitle level={4}>{t("CoursePage.CourseRatingsTitle")}</StyledTitle>
      {courseId && reviewId && (
        <CourseRatingsReviewsContent
          courseId={courseId}
          questionId={reviewId}
        />
      )}
    </>
  );
});
