import { useTranslation } from "react-i18next";

import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useTheme } from "styled-components";
import { Dropdown, Row, Spin } from "@escolalms/components";
import { API } from "@escolalms/sdk/lib";
import { FC, useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { useParams } from "react-router-dom";
import { AnswerComponent } from "./AnswerComponent";
import { StyledStack, StyledTitle } from "./styles";

interface CourseRatingsProps {
  questionnaires: API.Questionnaire[];
}

export const CourseRatings: FC<CourseRatingsProps> = ({ questionnaires }) => {
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<
    API.QuestionAnswer[]
  >([]);
  const [questionnaireId, setQuestionnaireId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const { fetchQuestionnairesAnswers } = useContext(EscolaLMSContext);
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const theme = useTheme();

  const questionnairesFilter = questionnaires.map((item) => ({
    label: item.title,
    value: String(item.id),
  }));

  const questionnaireQuestionFilter = questionnaires
    ?.find((element) => element.id === questionnaireId)
    ?.questions.filter((item) => item.public_answers)
    .map((item) => ({
      label: item.title,
      value: String(item.id),
    }));

  const sortAnswers = () =>
    questionnaireAnswers.sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

  const handleFetchQuestionnairesAnswers = (questionId: number) =>
    fetchQuestionnairesAnswers(
      QuestionnaireModelType.COURSE,
      Number(id),
      questionId
    )
      .then((res) => {
        res.success && setQuestionnaireAnswers(res.data);
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));

  return (
    <section className="course-ratings">
      <StyledTitle level={4}>{t("CoursePage.CourseRatingsTitle")}</StyledTitle>
      {questionnaires.length > 0 ? (
        <>
          <Row $gap={16}>
            <Dropdown
              onChange={(e) => setQuestionnaireId(Number(e.value))}
              options={[...questionnairesFilter]}
              placeholder={t("CoursePage.SelectQuestionnaire")}
              backgroundColor={theme.white}
            />
            <Dropdown
              onChange={(e) => {
                setLoading(true);
                handleFetchQuestionnairesAnswers(Number(e.value));
              }}
              options={
                questionnaireId ? [...(questionnaireQuestionFilter as [])] : []
              }
              placeholder={t("CoursePage.SelectQuestion")}
              backgroundColor={theme.white}
            />
          </Row>
          <StyledStack>
            {loading ? (
              <Spin />
            ) : (
              questionnaireAnswers &&
              sortAnswers().map((question) => (
                <AnswerComponent question={question} />
              ))
            )}
          </StyledStack>
        </>
      ) : (
        <Text style={{ marginTop: 20 }}>
          {t<string>("CoursePage.CourseRatingsEmpty")}
        </Text>
      )}
    </section>
  );
};
