import { QuestionnaireModelType } from "@/types/questionnaire";
import { API } from "@escolalms/sdk/lib";
import { t } from "i18next";
import { toast } from "react-toastify";

type getQuestionnaireProps = {
  questionnaireId: number;
  courseId: number;
  fetchQuestionnaire: (
    modelTypeTitle: string,
    modelID: number,
    id: number
  ) => Promise<API.DefaultResponse<API.QuestionnaireAnswerResponse>>;
};

type getQuestionnairesProps = {
  courseId: number;
  fetchQuestionnaire: (
    modelTypeTitle: string,
    modelID: number,
    id: number
  ) => Promise<API.DefaultResponse<API.QuestionnaireAnswerResponse>>;
  fetchQuestionnaires: (
    model: string,
    id: number
  ) => Promise<API.DefaultMetaResponse<API.Questionnaire>>;
  onSucces: (questionnairesArray: API.Questionnaire[]) => void;
};

const getQuestionnaire = async ({
  courseId,
  questionnaireId,
  fetchQuestionnaire,
}: getQuestionnaireProps) => {
  try {
    const response =
      courseId &&
      (await fetchQuestionnaire(
        QuestionnaireModelType.COURSE,
        courseId,
        questionnaireId
      ));
    if (response && response.success) {
      return response.data.questions;
    }
  } catch (error) {
    toast.error(t<string>("UnexpectedError"));
    console.log(error);
  }
};

export const getQuestionnaires = async ({
  courseId,
  fetchQuestionnaires,
  fetchQuestionnaire,
  onSucces,
}: getQuestionnairesProps) => {
  try {
    const response =
      courseId &&
      (await fetchQuestionnaires(QuestionnaireModelType.COURSE, courseId));
    if (response && response.success) {
      const questionnairesWithCombinedQuestions = await Promise.all(
        response.data.map(async (data) => {
          const res = await getQuestionnaire({
            courseId,
            questionnaireId: data.id,
            fetchQuestionnaire,
          });

          const combinedQuestions = data.questions.reduce((result, element) => {
            const matchingElement = res?.find((item) => item.id === element.id);

            const updatedElement = {
              ...element,
              rate: matchingElement?.rate,
              note: matchingElement?.note,
            };

            updatedElement.rate === null &&
              updatedElement.note === null &&
              result.push(updatedElement);
            return result;
          }, [] as API.QuestionnaireQuestion[]);

          return {
            ...data,
            questions: combinedQuestions,
          };
        })
      );

      onSucces(
        questionnairesWithCombinedQuestions.filter(
          (item) => !!item.questions.length
        )
      );
    }
  } catch (error) {
    toast.error(t<string>("UnexpectedError"));
    console.log(error);
  }
};

export const getAverageRate = (reviewQuestions: API.QuestionnaireStars[]) => {
  const avgRate =
    reviewQuestions.reduce((sum, item) => sum + item.avg_rate, 0) /
    reviewQuestions.length;
  return avgRate.toFixed(1);
};
