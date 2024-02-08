import RateCourse from "@/components/RateCourse";
import {
  getFormattedDifferenceRelativeToNow,
  relativeTimeFormatter,
} from "@/utils/index";
import { Button, Modal, Spin, Text, Title } from "@escolalms/components";
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
      {courseProgress === 100 && (
        <>
          <Button
            mode="secondary"
            onClick={() => {
              setCourseId(courseData.course.id);
              setState((prevState) => ({
                ...prevState,
                show: true,
                loading: true,
              }));
            }}
          >
            {state.loading ? <Spin /> : t<string>("MyProfilePage.RateCourse")}
          </Button>

          {!isDeadlineMissed && status.isDone && (
            <Button
              mode="secondary"
              onClick={() => setShowResetProgressModal(true)}
            >
              {t<string>("MyProfilePage.ResetCourseProgress")}
            </Button>
          )}
        </>
      )}

      {!!isDeadlineMissed && timeDifference !== null && timeDifference[0] < 0 && (
        <Text>
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
        (questionnaires.length ? (
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
