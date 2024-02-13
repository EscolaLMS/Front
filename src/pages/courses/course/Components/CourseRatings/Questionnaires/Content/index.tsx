import { useCourseAnswers } from "@/hooks/useCourseAnswers";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import Pagination from "../../../../../../../components/Pagination";
import { AnswerComponent } from "../../AnswerComponent";
import { StyledStack, PaginationContainerStyled } from "../../styles";

interface Props {
  courseId: number;
  questionId: number;
}

export const CourseRatingsQuestionnairesContent = ({
  courseId,
  questionId,
}: Props) => {
  const { answersMeta, loading, onPageChange, questionnaireAnswers } =
    useCourseAnswers({
      questionId,
      courseId,
    });

  return (
    <StyledStack>
      {loading ? (
        <Spin />
      ) : (
        <>
          {questionnaireAnswers &&
            questionnaireAnswers.map((question) => (
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
      )}
    </StyledStack>
  );
};
