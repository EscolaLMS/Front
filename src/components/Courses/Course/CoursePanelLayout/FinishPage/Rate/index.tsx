import React, { useCallback, useContext, useEffect, useState } from "react";
import { useCoursePanel } from "@/components/Courses/Course/Context";
import RateCourse from "@/components/Courses/RateCourse";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { getQuestionnaires } from "@/utils/questionnaires";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

interface Props {
  showModal: boolean;
  onClose: () => void;
  onFinish: () => void;
  onSuccesGetQuestionnaires: (isAnyQuestionnaires: boolean) => void;
}

export const CoursePanelFinishPageRate = ({
  showModal,
  onClose,
  onFinish,
  onSuccesGetQuestionnaires,
}: Props) => {
  const { fetchQuestionnaires, fetchQuestionnaire } =
    useContext(EscolaLMSContext);
  const [state, setState] = useState({
    show: false,
    step: 0,
    loading: true,
  });
  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);
  const { courseId } = useCoursePanel();

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      show: showModal,
    }));
  }, [showModal]);

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
    onClose();
  }, [onClose, questionnaires.length, state.step]);

  useEffect(() => {
    courseId &&
      getQuestionnaires({
        courseId: Number(courseId),
        fetchQuestionnaire,
        fetchQuestionnaires,
        onSucces: (items) => {
          onSuccesGetQuestionnaires(!!items.length);
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
    <>
      {showModal && courseId && !!questionnaires.length && !state.loading && (
        <RateCourse
          course={QuestionnaireModelType.COURSE}
          courseId={Number(courseId)}
          visible={state.show}
          onClose={handleClose}
          questionnaire={questionnaires[state.step]}
          onFinish={onFinish}
        />
      )}
    </>
  );
};
