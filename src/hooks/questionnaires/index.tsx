import { useCallback, useContext, useState } from "react";
import { QuestionType } from "@/types/questionnaire";
import { toast } from "@/utils/toast";
import { API } from "@escolalms/sdk/lib";
import { t } from "i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

type UseQuestionnairesProps = {
  entityId: number;
  entityModel: string;
};

export const useQuestionnaires = ({
  entityId,
  entityModel,
}: UseQuestionnairesProps) => {
  const { fetchQuestionnaires, fetchQuestionnaire } =
    useContext(EscolaLMSContext);
  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getQuestionnaire = useCallback(
    async (questionnaireId: number) => {
      try {
        const response = await fetchQuestionnaire(
          entityModel,
          entityId,
          questionnaireId
        );
        return response?.success ? response.data.questions : null;
      } catch (error) {
        toast(t<string>("UnexpectedError"), "error");
        console.error(error);
        return null;
      }
    },
    [entityId, entityModel, fetchQuestionnaire]
  );

  const getQuestionnaires = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchQuestionnaires(entityModel, entityId);

      if (response?.success) {
        const questionnairesWithCombinedQuestions = await Promise.all(
          response.data.map(async (data) => {
            const questions = await getQuestionnaire(data.id);

            const combinedQuestions = data.questions.reduce(
              (result, element) => {
                const matchingElement = questions?.find(
                  (item) => item.id === element.id
                );

                const updatedElement = {
                  ...element,
                  rate: matchingElement?.rate,
                  note: matchingElement?.note,
                };

                if (
                  updatedElement.rate === null &&
                  updatedElement.note === null
                ) {
                  result.push(updatedElement);
                }
                return result;
              },
              [] as API.QuestionnaireQuestion[]
            );

            return {
              ...data,
              questions: combinedQuestions.sort(
                (a, b) => a.position - b.position
              ),
            };
          })
        );

        setQuestionnaires(
          questionnairesWithCombinedQuestions.filter(
            (q) => q.questions.length > 0
          )
        );
      }
    } catch (error) {
      setError("Failed to fetch questionnaires");
      toast(t<string>("UnexpectedError"), "error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [entityId, entityModel, fetchQuestionnaires, getQuestionnaire]);

  const getReviewQuestion = useCallback(
    ({
      questionnaireId,
      questionType,
    }: {
      questionnaireId: number | null;
      questionType: QuestionType;
    }) => {
      return questionnaires
        ?.find((q) => q.id === questionnaireId)
        ?.questions.filter((item) => item.public_answers)
        .find((item) => item.type === questionType)?.id;
    },
    [questionnaires]
  );

  return {
    questionnaires,
    loading,
    error,
    getQuestionnaires,
    getReviewQuestion,
  };
};
