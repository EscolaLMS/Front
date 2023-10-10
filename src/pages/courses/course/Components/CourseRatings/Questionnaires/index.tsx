import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { StyledTitle } from "../styles";
import { useCourseRatingContext } from "../Provider";
import { CourseRatingsQuestionnairesContent } from "./Content";
import { CourseRatingsQuestionnairesDropdowns } from "./Dropdowns";

export const CourseRatingsQuestionnaires = memo(() => {
  const { questionnaires, courseId, questionId } = useCourseRatingContext();
  const { t } = useTranslation();

  return (
    <>
      <StyledTitle level={4}>{t("CoursePage.Questionnaires")}</StyledTitle>
      {questionnaires.length > 0 ? (
        <>
          <CourseRatingsQuestionnairesDropdowns
            questionnaires={questionnaires}
          />
          {courseId && questionId && (
            <CourseRatingsQuestionnairesContent
              courseId={courseId}
              questionId={questionId}
            />
          )}
        </>
      ) : (
        <Text>{t<string>("CoursePage.CourseRatingsEmpty")}</Text>
      )}
    </>
  );
});
