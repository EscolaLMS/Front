import { FC, memo } from "react";
import { Row, Col } from "react-grid-system";
import { API } from "@escolalms/sdk/lib";
import { CourseRatingsQuestionnaires } from "./Questionnaires";
import { CourseRatingsReviews } from "./Reviews";
import { CourseRatingProvider } from "./Provider";

interface CourseRatingsProps {
  questionnaires: API.Questionnaire[];
}

export const CourseRatings: FC<CourseRatingsProps> = memo(
  ({ questionnaires }) => {
    return (
      <CourseRatingProvider questionnaires={questionnaires}>
        <section className="course-ratings">
          <Row>
            <Col>
              <CourseRatingsQuestionnaires />
            </Col>
            <Col>
              <CourseRatingsReviews />
            </Col>
          </Row>
        </section>
      </CourseRatingProvider>
    );
  }
);
