import { FC, useCallback, useContext, useEffect, useState } from "react";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { isMobile } from "react-device-detect";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { API } from "@escolalms/sdk/lib";
import { Col, Row } from "react-grid-system";
import CategoriesBreadCrumbs from "@/components/Categories/CategoriesBreadCrumbs";
import { Rating, Text } from "@escolalms/components/lib/index";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { StateTypes } from "@/types/index";
import { QuestionnaireStarsModel } from "@escolalms/sdk/lib/types";
import ContentLoader from "@/components/_App/ContentLoader";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    margin: 0;
  }
`;

type State =
  | { type: StateTypes.INIT }
  | { type: StateTypes.LOADING }
  | { type: StateTypes.LOADED; rating: QuestionnaireStarsModel }
  | { type: StateTypes.ERROR; error: string };

interface CourseMainInfoProps {
  courseData: API.Course;
}

export const CourseMainInfo: FC<CourseMainInfoProps> = ({ courseData }) => {
  const { fetchQuestionnaireStarsByModel } = useContext(EscolaLMSContext);
  const [state, setState] = useState<State>({ type: StateTypes.INIT });
  const history = useHistory();

  const fetchRating = useCallback(async () => {
    if (courseData.id) {
      try {
        setState({ type: StateTypes.LOADING });
        const req = await fetchQuestionnaireStarsByModel(
          "course",
          Number(courseData.id)
        );
        if (req.success) {
          setState({ type: StateTypes.LOADED, rating: req.data });
        }
      } catch (error) {
        setState({
          type: StateTypes.ERROR,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }
  }, [courseData.id, fetchQuestionnaireStarsByModel]);

  useEffect(() => {
    fetchRating();
  }, [courseData.id, fetchRating]);

  return (
    <section className="course-main-info">
      <Row>
        <Col lg={12}>
          <CategoriesBreadCrumbs
            categories={courseData.categories}
            onCategoryClick={(id) => {
              history.push(`/courses/?categories[]=${id}`);
            }}
          />

          <Title mobile={isMobile} level={1}>
            {courseData.title}
          </Title>

          {state.type === StateTypes.LOADED ? (
            <RatingWrapper>
              <Rating
                ratingValue={state.rating.avg_rate}
                label={`${state.rating.avg_rate}`}
              />
              <Text size="13">Śr. ocena kursu</Text>・
              <div>
                <Text size="13">
                  Dodane opinie <strong>{state.rating.count_answers}</strong>
                </Text>
              </div>
            </RatingWrapper>
          ) : state.type === StateTypes.LOADING ? (
            <ContentLoader width={"20px"} height="20px" />
          ) : state.type === StateTypes.ERROR ? (
            state.error
          ) : null}
        </Col>
        <Col lg={12}>
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
    </section>
  );
};
