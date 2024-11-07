import React, { useCallback, useEffect, useState } from "react";
import RateCourse from "@/components/Courses/RateCourse";
import { QuestionnaireModelType } from "@/types/questionnaire";

import { useQuestionnaires } from "@/hooks/questionnaires";

interface Props {
  entityModel: QuestionnaireModelType;
  entityId: number;
  showModal?: boolean;
  onClose?: () => void;
  onFinish?: () => void;
  onSuccesGetQuestionnaires?: (isAnyQuestionnaires: boolean) => void;
}

export const QuestionnairesModal = ({
  entityId,
  entityModel,
  onFinish,
  onSuccesGetQuestionnaires,
}: Props) => {
  const {
    questionnaires,
    loading,
    // error,
    getQuestionnaires,
  } = useQuestionnaires({
    entityId: entityId || 0,
    entityModel: entityModel,
  });

  const [state, setState] = useState({
    show: false,
    step: 0,
    loading: true,
  });

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
  }, [questionnaires.length, state.step]);

  useEffect(() => {
    getQuestionnaires();
    // courseId &&
    //   getQuestionnaires({
    //     courseId: Number(courseId),
    //     fetchQuestionnaire,
    //     fetchQuestionnaires,
    //     onSucces: (items) => {
    //       onSuccesGetQuestionnaires(!!items.length);
    //       setQuestionnaires(items);
    //     },
    //     onFinish: () =>
    //       setState((prevState) => ({
    //         ...prevState,
    //         loading: false,
    //       })),
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityId]);

  useEffect(() => {
    if (questionnaires.length) {
      setState((prevState) => ({
        ...prevState,
        show: true,
      }));
    }
    if (!!questionnaires.length) {
      onSuccesGetQuestionnaires && onSuccesGetQuestionnaires(true);
    }
    return () => {};
  }, [questionnaires, onSuccesGetQuestionnaires]);

  return (
    <>
      {state.show && entityId && !!questionnaires.length && !loading && (
        <RateCourse
          entityModel={entityModel}
          entityId={Number(entityId)}
          visible={state.show}
          onClose={handleClose}
          questionnaire={questionnaires[state.step]}
          onFinish={onFinish}
        />
      )}
    </>
  );
};
