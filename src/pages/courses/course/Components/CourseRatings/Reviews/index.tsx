import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { QuestionType, QuestionnaireModelType } from "@/types/questionnaire";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

import { PaginationContainerStyled, StyledStack, StyledTitle } from "../styles";
import { Spin } from "@escolalms/components";
import Pagination from "../../../../../../components/Pagination";
import { AnswerComponent } from "../AnswerComponent";

interface Props {
  questionnaires: API.Questionnaire[];
  questionnaireId: number | null;
}

export const CourseRatingsReviews = memo(
  ({ questionnaires, questionnaireId }: Props) => {
    const [questionnaireAnswers, setQuestionnaireAnswers] = useState<
      API.QuestionAnswer[] | undefined
    >(undefined);
    const [answersMeta, setAnswersMeta] = useState({
      total: 0,
      per_page: 3,
      page: 1,
      current_page: 1,
    });
    const [loading, setLoading] = useState(false);
    const { fetchQuestionnairesAnswers } = useContext(EscolaLMSContext);
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const questionId = useMemo(
      () =>
        questionnaires
          ?.find((element) => element.id === questionnaireId)
          ?.questions.filter((item) => item.public_answers)
          .find((item) => item.type === QuestionType.REVIEW)?.id,
      [questionnaireId, questionnaires]
    );

    const handleFetchQuestionnairesAnswers = useCallback(
      (page?: number) =>
        questionId &&
        fetchQuestionnairesAnswers(
          QuestionnaireModelType.COURSE,
          Number(id),
          questionId,
          {
            per_page: answersMeta.per_page,
            page: page || answersMeta.page,
            order_by: "updated_at",
            order: "DESC",
          }
        )
          .then((res) => {
            if (res.success) {
              setQuestionnaireAnswers(res.data);
              setAnswersMeta({
                ...answersMeta,
                total: res.meta.total,
                current_page: res.meta.current_page,
                page: res.meta.current_page,
              });
            }
          })
          .catch((error) => {
            toast.error(t<string>("UnexpectedError"));
            console.log(error);
          })
          .finally(() => setLoading(false)),
      [answersMeta, fetchQuestionnairesAnswers, id, questionId, t]
    );

    const changeOnPage = useCallback(
      (page: number) => {
        setAnswersMeta({
          ...answersMeta,
          current_page: page,
        });
        if (questionId) {
          setLoading(true);
          handleFetchQuestionnairesAnswers(page);
        }
      },
      [answersMeta, handleFetchQuestionnairesAnswers, questionId]
    );

    useEffect(() => {
      if (questionId && !questionnaireAnswers) {
        handleFetchQuestionnairesAnswers();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionId, questionnaireAnswers]);

    return (
      <>
        <StyledTitle level={4}>
          {t("CoursePage.CourseRatingsTitle")}
        </StyledTitle>
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
                    onPage={(i) => changeOnPage(i)}
                  />
                </PaginationContainerStyled>
              )}
            </>
          )}
        </StyledStack>
      </>
    );
  }
);
