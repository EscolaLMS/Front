import { useTranslation } from "react-i18next";

import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

import { Row } from "react-grid-system";

import { Dropdown } from "@escolalms/components";
import { API } from "@escolalms/sdk/lib";
import { FC, useContext, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { useParams } from "react-router-dom";

interface CourseRatingsProps {
  questionnaires: API.Questionnaire[];
}

export const CourseRatings: FC<CourseRatingsProps> = ({ questionnaires }) => {
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<
    API.QuestionAnswer[]
  >([]);
  const [questionnaireId, setQuestionnaireId] = useState<number | null>(null);
  const { fetchQuestionnairesAnswers } = useContext(EscolaLMSContext);
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

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

  const handleFetchQuestionnairesAnswers = (questionId: number) =>
    fetchQuestionnairesAnswers(
      QuestionnaireModelType.COURSE,
      Number(id),
      questionId
    ).then((res) => res.success && setQuestionnaireAnswers(res.data));

  return (
    <section className="course-ratings padding-right">
      <Title level={4} as="h2">
        {t("CoursePage.CourseRatingsTitle")}
      </Title>
      {questionnaires.length > 0 ? (
        <>
          <Row>
            <Dropdown
              onChange={(e) => setQuestionnaireId(Number(e.value))}
              options={[...questionnairesFilter]}
            />
            <Dropdown
              onChange={(e) =>
                handleFetchQuestionnairesAnswers(Number(e.value))
              }
              options={
                questionnaireId ? [...(questionnaireQuestionFilter as [])] : []
              }
            />
          </Row>

          {questionnaireAnswers &&
            questionnaireAnswers.map((question) => {
              const { user, note } = question;
              return (
                <>
                  <Title>{note}</Title>
                  <Text>{user.name}</Text>
                </>
              );
            })}
        </>
      ) : (
        <Text style={{ marginTop: 20 }}>
          {t<string>("CoursePage.CourseRatingsEmpty")}
        </Text>
      )}
    </section>
  );
};
