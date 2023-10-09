import {
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
  memo,
} from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import { Dropdown, Spin } from "@escolalms/components";
import { AnswerComponent } from "../AnswerComponent";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { QuestionType, QuestionnaireModelType } from "@/types/questionnaire";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { StyledTitle, StyledStack, PaginationContainerStyled } from "../styles";
import Pagination from "@/components/Pagination";

interface Props {
  questionnaires: API.Questionnaire[];
  questionnaireId: number | null;
  setQuestionnaireId: Dispatch<SetStateAction<number | null>>;
}

export const CourseRatingsQuestionnaires = memo(
  ({ questionnaires, questionnaireId, setQuestionnaireId }: Props) => {
    const [questionnaireAnswers, setQuestionnaireAnswers] = useState<
      API.QuestionAnswer[]
    >([]);
    const [answersMeta, setAnswersMeta] = useState({
      total: 0,
      per_page: 3,
      page: 1,
      current_page: 1,
    });
    const [questionId, setQuestionId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const { fetchQuestionnairesAnswers } = useContext(EscolaLMSContext);
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const theme = useTheme();

    const questionnairesFilter = useMemo(
      () =>
        questionnaires.map((item) => ({
          label: item.title,
          value: String(item.id),
        })),
      [questionnaires]
    );

    const questionnaireQuestionFilter = useMemo(
      () =>
        questionnaires
          ?.find((element) => element.id === questionnaireId)
          ?.questions.filter((item) => item.public_answers)
          .filter((item) => item.type !== QuestionType.REVIEW)
          .map((item) => ({
            label: item.title,
            value: String(item.id),
          })),
      [questionnaireId, questionnaires]
    );

    const handleFetchQuestionnairesAnswers = useCallback(
      (questionId: number, page?: number) =>
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
      [answersMeta, fetchQuestionnairesAnswers, id, t]
    );

    const changeOnPage = useCallback(
      (page: number) => {
        setAnswersMeta({
          ...answersMeta,
          current_page: page,
        });
        if (questionId) {
          setLoading(true);
          handleFetchQuestionnairesAnswers(questionId, page);
        }
      },
      [answersMeta, handleFetchQuestionnairesAnswers, questionId]
    );

    useEffect(() => {
      const firstQuestionnaire = questionnaires.at(0);
      if (firstQuestionnaire?.id && !questionnaireId) {
        setQuestionnaireId(firstQuestionnaire.id);
        const firstQuestion = firstQuestionnaire.questions.at(0);
        if (firstQuestion) {
          setQuestionId(firstQuestion.id);
          setLoading(true);
          handleFetchQuestionnairesAnswers(firstQuestion.id);
        }
      }
    }, [
      questionnaires,
      questionnaireId,
      handleFetchQuestionnairesAnswers,
      setQuestionnaireId,
    ]);

    return (
      <>
        <StyledTitle level={4}>{t("CoursePage.Questionnaires")}</StyledTitle>
        {questionnaires.length > 0 ? (
          <>
            <StyledStack>
              <Dropdown
                onChange={(e) => setQuestionnaireId(Number(e.value))}
                options={[...questionnairesFilter]}
                placeholder={t("CoursePage.SelectQuestionnaire")}
                backgroundColor={theme.white}
                value={questionnairesFilter?.find(
                  ({ value }) => value === String(questionnaireId)
                )}
              />
              <Dropdown
                onChange={(e) => {
                  setLoading(true);
                  setQuestionId(Number(e.value));
                  handleFetchQuestionnairesAnswers(Number(e.value));
                }}
                options={
                  questionnaireId
                    ? [...(questionnaireQuestionFilter as [])]
                    : []
                }
                placeholder={t("CoursePage.SelectQuestion")}
                backgroundColor={theme.white}
                value={questionnaireQuestionFilter?.find(
                  ({ value }) => value === String(questionId)
                )}
              />
            </StyledStack>
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
        ) : (
          <Text style={{ marginTop: 20 }}>
            {t<string>("CoursePage.CourseRatingsEmpty")}
          </Text>
        )}
      </>
    );
  }
);
