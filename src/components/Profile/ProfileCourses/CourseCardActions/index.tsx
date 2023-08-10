import RateCourse from "@/components/RateCourse";
import {
  getFormattedDifferenceRelativeToNow,
  relativeTimeFormatter,
} from "@/utils/index";
import { Button, Text } from "@escolalms/components";
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
  const [fetched, setFetched] = useState(false);
  const { fetchQuestionnaires } = useContext(EscolaLMSContext);

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

  const [state, setState] = useState({
    show: false,
    step: 0,
  });

  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);

  const getQuestionnaires = useCallback(async () => {
    try {
      const request =
        courseId && (await fetchQuestionnaires("course", courseId));
      if (request && request.success) {
        const filteredResponse = request.data.map((data) => ({
          ...data,
          questions: data.questions.filter(
            (question) => !question.public_answers
          ),
        }));
        setQuestionnaires(filteredResponse);

        setFetched(true);
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

  const handleClose = useCallback(() => {
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
            {t<string>("MyProfilePage.RateCourse")}
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
      {state.show && courseId && fetched && questionnaires[state.step] && (
        <>
          <RateCourse
            course={"course"}
            courseId={courseId}
            visible={state.show}
            onClose={() => handleClose()}
            questionnaire={questionnaires[state.step]}
          />
        </>
      )}
    </>
  );
};
