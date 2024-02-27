import { useCourseAnswers } from "@/hooks/useCourseAnswers";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import Pagination from "@/components/Pagination";
import { AnswerComponent } from "../../AnswerComponent";
import {
  StyledStack,
  PaginationContainerStyled,
  StyledTitle,
} from "../../styles";
import { useTranslation } from "react-i18next";

interface Props {
  courseId: number;
  questionId: number;
}

export const CourseRatingsReviewsContent = ({
  courseId,
  questionId,
}: Props) => {
  const { answersMeta, loading, onPageChange, questionnaireAnswers } =
    useCourseAnswers({
      questionId,
      courseId,
    });
  const { t } = useTranslation();

  return (
    <StyledStack>
      {loading ? (
        <Spin />
      ) : (questionnaireAnswers || [])?.length > 0 ? (
        <>
          <StyledTitle level={4}>
            {t("CoursePage.CourseRatingsTitle")}
          </StyledTitle>
          {(questionnaireAnswers || []).map((question) => (
            <AnswerComponent question={question} />
          ))}
          {answersMeta.total > answersMeta.per_page && (
            <PaginationContainerStyled>
              <Pagination
                total={answersMeta.total}
                perPage={answersMeta.per_page}
                currentPage={answersMeta.current_page}
                onPage={onPageChange}
              />
            </PaginationContainerStyled>
          )}
        </>
      ) : null}
    </StyledStack>
  );
};
