import RateCourse from "@/components/Courses/RateCourse";
import {
  getFormattedDifferenceRelativeToNow,
  relativeTimeFormatter,
} from "@/utils/index";

import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { CourseProgressItem } from "@escolalms/sdk/lib/types/api";
import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { ResetProgressModal } from "../ResetProgressModal";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { Wrapper } from "./styles";
import { getQuestionnaires } from "@/utils/questionnaires";
import GetCertificate from "@/components/Profile/ProfileCourses/CourseCardActions/certificate";
import styled from "styled-components";
import { IconRate } from "@/icons/index";
import ContentLoader from "@/components/_App/ContentLoader";

export const StyledActionButton = styled.button`
  all: unset;
  text-decoration: underline;
  font-size: 13px;
  font-family: ${({ theme }) => theme.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ResetCourseWrapper = styled.div`
  margin-top: 5px;
`;

interface Props {
  courseData: CourseProgressItem;
  courseProgress: number;
}

export const CourseCardActions: FC<Props> = ({
  courseData,
  courseProgress,
}) => {
  const [courseId, setCourseId] = useState<number | undefined>(undefined);
  const [showResetProgressModal, setShowResetProgressModal] = useState(false);
  const { fetchQuestionnaires, fetchQuestionnaire } =
    useContext(EscolaLMSContext);
  const [state, setState] = useState({
    show: false,
    step: 0,
    loading: false,
  });

  const { t } = useTranslation();

  const status = {
    isDone: courseData.finish_date,
    isActive: courseData.start_date && !courseData.finish_date,
    isNotStarted: !courseData.start_date && !courseData.finish_date,
  };

  const deadlineDate = useMemo(
    () => (courseData.deadline ? new Date(courseData.deadline) : null),
    [courseData.deadline]
  );

  const isDeadlineMissed = deadlineDate
    ? deadlineDate.getTime() < Date.now()
    : false;

  const timeDifference = useMemo(
    () =>
      deadlineDate ? getFormattedDifferenceRelativeToNow(deadlineDate) : null,
    [deadlineDate]
  );

  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);

  const handleClose = useCallback(() => {
    setCourseId(undefined);
    setState((prevState) => ({
      ...prevState,
      show: false,
    }));

    if (state.step < questionnaires.length - 1) {
      setState((prevState) => ({
        ...prevState,
        step: prevState.step + 1,
      }));

      const timer = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          show: true,
        }));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [questionnaires, state.step]);

  useEffect(() => {
    courseId &&
      getQuestionnaires({
        courseId,
        fetchQuestionnaire,
        fetchQuestionnaires,
        onSucces: (items) => {
          setQuestionnaires(items);
        },
        onFinish: () =>
          setState((prevState) => ({
            ...prevState,
            loading: false,
          })),
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  return (
    <Wrapper>
      {status.isDone && <GetCertificate courseId={courseData.course.id} />}
      {courseProgress === 100 && (
        <>
          <StyledActionButton
            onClick={() => {
              setCourseId(courseData.course.id);
              setState((prevState) => ({
                ...prevState,
                show: true,
                loading: true,
              }));
            }}
          >
            <IconRate /> {t<string>("MyProfilePage.RateCourse")}{" "}
            {state.loading && <ContentLoader width="10px" height="10px" />}
          </StyledActionButton>
          <ResetCourseWrapper>
            {!isDeadlineMissed && status.isDone && (
              <Button
                mode="secondary"
                onClick={() => setShowResetProgressModal(true)}
              >
                {t<string>("MyProfilePage.ResetCourseProgress")}
              </Button>
            )}
          </ResetCourseWrapper>
        </>
      )}
      {!!isDeadlineMissed && timeDifference !== null && timeDifference[0] < 0 && (
        <Text size="12">
          {t<string>("MyProfilePage.AccessCourseExpired")}{" "}
          {relativeTimeFormatter.format(timeDifference[0], timeDifference[1])}
        </Text>
      )}
      <ResetProgressModal
        courseData={courseData}
        visible={showResetProgressModal}
        onClose={() => setShowResetProgressModal(false)}
      />
      {state.show &&
        courseId &&
        !state.loading &&
        (!!questionnaires.length ? (
          <>
            <RateCourse
              course={QuestionnaireModelType.COURSE}
              courseId={courseId}
              visible={state.show}
              onClose={handleClose}
              questionnaire={questionnaires[state.step]}
            />
          </>
        ) : (
          <Modal
            onClose={handleClose}
            visible={state.show}
            animation="zoom"
            maskAnimation="fade"
            destroyOnClose={true}
            width={468}
          >
            <Title>{t<string>("CourseProgram.CourseRated")}</Title>
          </Modal>
        ))}
    </Wrapper>
  );
};
