import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Dropdown } from "@escolalms/components";
import { useCourseRatingContext } from "../../Provider";
import { API } from "@escolalms/sdk/lib";
import { QuestionType } from "@/types/questionnaire";
import { StyledStack } from "../../styles";

interface Props {
  questionnaires: API.Questionnaire[];
}

export const CourseRatingsQuestionnairesDropdowns = ({
  questionnaires,
}: Props) => {
  const { questionnaireId, setQuestionnaireId, questionId, setQuestionId } =
    useCourseRatingContext();
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
        })) || [],
    [questionnaireId, questionnaires]
  );

  return (
    <StyledStack>
      {questionnairesFilter.length > 1 && (
        <Dropdown
          onChange={(e) => setQuestionnaireId(Number(e.value))}
          options={questionnairesFilter}
          placeholder={t("CoursePage.SelectQuestionnaire")}
          backgroundColor={theme.white}
          value={questionnairesFilter?.find(
            ({ value }) => value === String(questionnaireId)
          )}
        />
      )}
      <Dropdown
        onChange={(e) => setQuestionId(Number(e.value))}
        options={questionnaireQuestionFilter}
        placeholder={t("CoursePage.SelectQuestion")}
        backgroundColor={theme.white}
        value={questionnaireQuestionFilter?.find(
          ({ value }) => value === String(questionId)
        )}
      />
    </StyledStack>
  );
};
