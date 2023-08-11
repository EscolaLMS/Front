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

import { toast } from "react-toastify";
import { ResetProgressModal } from "../ResetProgressModal";
import { QuestionnaireModelType } from "@/types/questionnaire";

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
    setState((prevState) => ({
      ...prevState,
      show: false,
      loading: false,
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

  const getQuestionnaire = useCallback(
    async (questionnaireId: number) => {
      try {
        const response =
          courseId &&
          (await fetchQuestionnaire(
            QuestionnaireModelType.COURSE,
            courseId,
            questionnaireId
          ));
        if (response && response.success) {
          return response.data.questions;
        }
      } catch (error) {
        toast.error(t<string>("UnexpectedError"));
        console.log(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [courseId, fetchQuestionnaire]
  );

  const getQuestionnaires = useCallback(async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    try {
      const response =
        courseData.course.id &&
        (await fetchQuestionnaires(
          QuestionnaireModelType.COURSE,
          courseData.course.id
        ));
      if (response && response.success) {
        const questionnairesWithCombinedQuestions = await Promise.all(
          response.data.map(async (data) => {
            const res = await getQuestionnaire(data.id);

            const combinedQuestions = data.questions.reduce(
              (result, element) => {
                const matchingElement = res?.find(
                  (item) => item.id === element.id
                );

                const updatedElement = {
                  ...element,
                  rate: matchingElement?.rate,
                  note: matchingElement?.note,
                };
                updatedElement.public_answers === false &&
                  updatedElement.rate === null &&
                  updatedElement.note === null &&
                  result.push(updatedElement);
                return result;
              },
              [] as API.QuestionnaireQuestion[]
            );

            return {
              ...data,
              questions: combinedQuestions,
            };
          })
        );
        setQuestionnaires(
          questionnairesWithCombinedQuestions.filter(
            (item) => !!item.questions.length
          )
        );
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    } catch (error) {
      toast.error(t<string>("UnexpectedError"));
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, fetchQuestionnaires]);

  useEffect(() => {
    getQuestionnaires();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  return (
    <>
      {courseProgress === 100 && (
        <>
          <Button
            mode="secondary"
            onClick={() => {
              setCourseId(courseData.course.id);
              setState((prevState) => ({
                ...prevState,
                show: true,
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
        (!!questionnaires.length ? (
          <>
            <RateCourse
              course={QuestionnaireModelType.COURSE}
              courseId={courseId}
              visible={state.show}
              onClose={() => handleClose()}
              questionnaire={questionnaires[state.step]}
            />
          </>
        ) : (
          <Modal
            onClose={() => handleClose()}
            visible={state.show}
            animation="zoom"
            maskAnimation="fade"
            destroyOnClose={true}
            width={468}
          >
            <Title>{t<string>("CourseProgram.CourseRated")}</Title>
          </Modal>
        ))}
    </>
  );
};
