import { memo } from "react";
import { CourseRatingsReviewsContent } from "./Content";
import { useCourseRatingContext } from "../Provider";

export const CourseRatingsReviews = memo(() => {
  const { courseId, reviewId } = useCourseRatingContext();

  return (
    <>
      {courseId && reviewId && (
        <CourseRatingsReviewsContent
          courseId={courseId}
          questionId={reviewId}
        />
      )}
    </>
  );
});
