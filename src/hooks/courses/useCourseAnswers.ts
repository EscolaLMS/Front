import { useCallback, useContext, useEffect, useState } from "react";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { toast } from "react-toastify";
import { QuestionnaireModelType } from "../../types/questionnaire";
import { useTranslation } from "react-i18next";

const initialState = {
  total: 0,
  per_page: 3,
  page: 1,
  current_page: 1,
};

interface Props {
  questionId: number | null;
  courseId: number | undefined;
}

export const useCourseAnswers = ({ questionId, courseId }: Props) => {
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<
    API.QuestionAnswer[] | undefined
  >(undefined);
  const [answersMeta, setAnswersMeta] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const { fetchQuestionnairesAnswers } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const handleFetchQuestionnairesAnswers = useCallback(
    (page: number) => {
      if (questionId && courseId) {
        setLoading(true);
        fetchQuestionnairesAnswers(
          QuestionnaireModelType.COURSE,
          Number(courseId),
          questionId,
          {
            per_page: answersMeta.per_page,
            page: page,
            order_by: "updated_at",
            order: "DESC",
          }
        )
          .then((res) => {
            if (res.success) {
              setQuestionnaireAnswers(res.data);
              setAnswersMeta((prev) => ({
                ...prev,
                total: res.meta.total,
                current_page: res.meta.current_page,
                page: res.meta.current_page,
              }));
            }
          })
          .catch((error) => {
            toast.error(t<string>("UnexpectedError"));
            console.log(error);
          })
          .finally(() => setLoading(false));
      }
    },
    [answersMeta, fetchQuestionnairesAnswers, courseId, questionId, t]
  );

  const onPageChange = useCallback((page: number) => {
    setAnswersMeta((prev) => ({
      ...prev,
      current_page: page,
    }));
  }, []);

  useEffect(() => {
    if (answersMeta.page !== answersMeta.current_page) {
      handleFetchQuestionnairesAnswers(answersMeta.current_page);
    }
  }, [
    answersMeta.current_page,
    answersMeta.page,
    handleFetchQuestionnairesAnswers,
  ]);

  useEffect(() => {
    setAnswersMeta(initialState);
    handleFetchQuestionnairesAnswers(initialState.page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId]);

  return {
    answersMeta,
    questionnaireAnswers,
    loading,
    onPageChange,
  };
};
