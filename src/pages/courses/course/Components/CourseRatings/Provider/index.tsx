import { API } from "@escolalms/sdk/lib";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { getCourseQuestionnaireReviewQuestion } from "@/utils/questionnaires";
import { QuestionType } from "@/types/questionnaire";

const initialFunction = () => console.warn("INITIAL STATE");

type CourseRatingsContextProps = {
  questionnaires: API.Questionnaire[];
  questionnaireId: number | null;
  setQuestionnaireId: (state: number | null) => void;
  questionId: number | null;
  setQuestionId: (state: number | null) => void;
  reviewId: number | undefined;
  courseId: number | undefined;
};

export const CourseRatingsContext = createContext<CourseRatingsContextProps>({
  questionnaires: [],
  questionnaireId: null,
  setQuestionnaireId: initialFunction,
  questionId: null,
  setQuestionId: initialFunction,
  reviewId: undefined,
  courseId: undefined,
});

type ProviderProps = PropsWithChildren & {
  questionnaires: API.Questionnaire[];
};

export const CourseRatingProvider = ({
  children,
  questionnaires,
}: ProviderProps) => {
  const [questionnaireId, setQuestionnaireId] =
    useState<CourseRatingsContextProps["questionnaireId"]>(null);
  const [questionId, setQuestionId] =
    useState<CourseRatingsContextProps["questionId"]>(null);
  const { id } = useParams<{ id: string }>();
  const firstQuestionnaire = questionnaires?.at(0);
  const firstQuestion = firstQuestionnaire?.questions?.find(
    ({ type }) => type === QuestionType.RATE
  );
  const reviewId = getCourseQuestionnaireReviewQuestion({
    questionnaires,
    questionnaireId,
    questionType: QuestionType.REVIEW,
  });

  // Set first questionnaire on init
  useEffect(() => {
    if (firstQuestionnaire?.id && !questionnaireId) {
      setQuestionnaireId(firstQuestionnaire.id);
    }
  }, [firstQuestionnaire?.id, questionnaireId]);
  // Set first question on init
  useEffect(() => {
    if (firstQuestion?.id && !questionId) {
      setQuestionId(firstQuestion.id);
    }
  }, [firstQuestion?.id, questionId]);

  return (
    <CourseRatingsContext.Provider
      value={{
        questionnaires,
        questionnaireId,
        setQuestionnaireId,
        questionId,
        setQuestionId,
        reviewId,
        courseId: Number(id),
      }}
    >
      {children}
    </CourseRatingsContext.Provider>
  );
};

export const useCourseRatingContext = () => {
  const context = useContext(CourseRatingsContext);

  if (!CourseRatingsContext) {
    throw new Error(
      "useCourseRatingContext must be used inside the CourseRatingProvider"
    );
  }

  return context;
};
