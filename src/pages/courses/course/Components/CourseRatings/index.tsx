import { FC, useState } from "react";
import { Row, Col } from "react-grid-system";
import { API } from "@escolalms/sdk/lib";
import { CourseRatingsQuestionnaires } from "./Questionnaires";
import { CourseRatingsReviews } from "./Reviews";

interface CourseRatingsProps {
  questionnaires: API.Questionnaire[];
}

export const CourseRatings: FC<CourseRatingsProps> = ({ questionnaires }) => {
  const [questionnaireId, setQuestionnaireId] = useState<number | null>(null);
  return (
    <section className="course-ratings">
      <Row>
        <Col>
          <CourseRatingsQuestionnaires
            questionnaires={questionnaires}
            questionnaireId={questionnaireId}
            setQuestionnaireId={setQuestionnaireId}
          />
        </Col>
        <Col>
          <CourseRatingsReviews
            questionnaires={questionnaires}
            questionnaireId={questionnaireId}
          />
        </Col>
      </Row>
    </section>
  );
};
