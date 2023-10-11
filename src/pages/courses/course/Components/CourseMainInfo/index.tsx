import { FC, useContext, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { isMobile } from "react-device-detect";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { LabelListItem } from "@escolalms/components/lib/components/molecules/LabelListItem/LabelListItem";
import { Medal, StarOrange, ThumbUp } from "../../../../../icons";
import { API } from "@escolalms/sdk/lib";
import { Col, Row } from "react-grid-system";
import { formatDate } from "@/utils/date";

import { getAverageRate } from "@/utils/questionnaires";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { QuestionType, QuestionnaireModelType } from "@/types/questionnaire";
import { useParams } from "react-router-dom";

interface CourseMainInfoProps {
  courseData: API.Course;
  questionnaires: API.Questionnaire[];
}

export const CourseMainInfo: FC<CourseMainInfoProps> = ({
  courseData,
  questionnaires,
}) => {
  const [reviewQuestions, setReviewQuestions] = useState<
    API.QuestionnaireStars[]
  >([]);
  const { fetchQuestionnaireStars } = useContext(EscolaLMSContext);
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const getReviewQuestionStar = async (reviewQuestionsId: number[]) => {
    const fetchedObjects = await Promise.all(
      reviewQuestionsId.map(async (questionId) => {
        const response = await fetchQuestionnaireStars(
          QuestionnaireModelType.COURSE,
          Number(id),
          questionId
        );
        if (response.success) {
          return response.data;
        }
        return null;
      })
    );
    setReviewQuestions(fetchedObjects as API.QuestionnaireStars[]);
  };

  const getReviewQuestions = () => {
    const rewievQuestions = (questionnaires || []).reduce(
      (result: number[], currentQuestion) => {
        const matchingReviewQuestion = currentQuestion.questions.find(
          (currentQuestion) =>
            currentQuestion.type === QuestionType.REVIEW &&
            currentQuestion.public_answers
        );
        matchingReviewQuestion && result.push(matchingReviewQuestion.id);
        return result;
      },
      []
    );
    getReviewQuestionStar(rewievQuestions);
  };
  useEffect(() => {
    questionnaires.length > 0 && getReviewQuestions();
  }, [questionnaires]);

  return (
    <section className="course-main-info with-border">
      <Row>
        <Col lg={7}>
          <Title mobile={isMobile} level={2}>
            {courseData.title}
          </Title>
          <div className="labels-row">
            <div className="single-label">
              <LabelListItem mobile={isMobile} title="90%" icon={<ThumbUp />}>
                {t("CoursePage.Recommends")}
              </LabelListItem>
            </div>
            <div className="single-label">
              <LabelListItem
                mobile={isMobile}
                title={t<string>("CoursePage.Guarantee")}
                icon={<Medal />}
              >
                {t("CoursePage.Satisfaction")}
              </LabelListItem>
            </div>
            <div className="single-label">
              <LabelListItem
                mobile={isMobile}
                title={
                  reviewQuestions.length > 0
                    ? String(getAverageRate(reviewQuestions))
                    : t("CoursePage.NoRatings")
                }
                icon={<StarOrange />}
              >
                {t("CoursePage.AvarageRating")}
              </LabelListItem>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          {courseData.image_path && (
            <div className="image-wrapper">
              <ResponsiveImage
                path={courseData.image_path}
                srcSizes={[790 * 0.5, 790, 2 * 790]}
              />
            </div>
          )}
        </Col>
      </Row>
      <div className="labels-row labels-row--bottom">
        {courseData.categories && courseData.categories.length > 0 && (
          <div className="single-label">
            <LabelListItem
              title={t("CoursePage.CourseCategory")}
              variant={"label"}
            >
              {courseData.categories[0].name}
            </LabelListItem>
          </div>
        )}
        {courseData.level && (
          <div className="single-label">
            <LabelListItem title={t("CoursePage.Level")} variant={"label"}>
              {courseData.level}
            </LabelListItem>
          </div>
        )}
        {courseData.active_from && (
          <div className="single-label">
            <LabelListItem title={t("CoursePage.StartDate")} variant={"label"}>
              {courseData.active_from
                ? formatDate(courseData.active_from)
                : "---"}
            </LabelListItem>
          </div>
        )}
        {courseData.duration && (
          <div className="single-label">
            <LabelListItem title={t("CoursePage.Duration")} variant={"label"}>
              {courseData.duration}
            </LabelListItem>
          </div>
        )}
      </div>
    </section>
  );
};
