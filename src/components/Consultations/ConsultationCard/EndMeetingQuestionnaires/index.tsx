import { useCallback, useEffect, useMemo, useState } from "react";
import RateCourse from "@/components/Courses/RateCourse";
import { QuestionnaireModelType } from "@/types/questionnaire";

import { useQuestionnaires } from "@/hooks/questionnaires";
import { API } from "@escolalms/sdk/lib";
import { useRoles } from "@/hooks/useRoles";

interface Props {
  entityModel: QuestionnaireModelType;
  entityId: number;
  showModal?: boolean;
  onClose?: () => void;
  onFinish?: () => void;
  onSuccesGetQuestionnaires?: (isAnyQuestionnaires: boolean) => void;
  setIsEnded?: (isEnded: boolean) => void;
}

export const EndMeetingQuestionnairesModal = ({
  entityId,
  entityModel,
  onSuccesGetQuestionnaires,
  setIsEnded,
}: Props) => {
  const {
    questionnaires: questionnairesList,
    loading,
    // error,
    getQuestionnaires,
  } = useQuestionnaires({
    entityId: entityId || 0,
    entityModel: entityModel,
  });

  interface StateType {
    show: boolean;
    step: number;
    loading: boolean;

    endMeetingQuestionnaires: API.Questionnaire[];
  }

  const [state, setState] = useState<StateType>({
    show: false,
    step: 0,
    loading: true,
    endMeetingQuestionnaires: [],
  });

  const { isStudent, isTutor } = useRoles();

  const questionnaires = useMemo(() => {
    return questionnairesList.filter((questionnaire) =>
      questionnaire.models.some((model) => {
        if (model.model_type_title === entityModel) {
          if (model.model_type_title === QuestionnaireModelType.CONSULTATION) {
            // Additional filters for "consultation"
            return (
              // @ts-ignore add to sdk
              (isStudent && model.target_group === "user") || // @ts-ignore add to sdk
              (isTutor && model.target_group === "author")
            );
          }

          return true;
        }
        return false;
      })
    );
  }, [questionnairesList, isStudent, isTutor, entityModel]);

  const categorizedQuestionnaires = useCallback(() => {
    if (!questionnaires) return;

    const categorized = questionnaires.reduce(
      (
        acc: {
          endMeetingQuestionnaires: API.Questionnaire[];
        },
        questionnaire
      ) => {
        const questionnaireFrequency = questionnaire.models.find(
          (model) => model.model_type_title === entityModel
          // @ts-ignore add to sdk
        )?.display_frequency_minutes;

        if (
          questionnaireFrequency !== null &&
          questionnaireFrequency !== undefined &&
          questionnaireFrequency === 0
        ) {
          acc.endMeetingQuestionnaires.push(questionnaire);
        }
        return acc;
      },
      { endMeetingQuestionnaires: [] }
    );

    setState((prevState) => ({
      ...prevState,
      ...categorized,
    }));
  }, [questionnaires, entityModel]);

  const moveToNextQuestionnaire = useCallback(() => {
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
  }, []);

  const handleClose = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      show: false,
    }));

    if (state.step < state.endMeetingQuestionnaires.length - 1) {
      moveToNextQuestionnaire();
    } else {
      setState((prevState) => ({
        ...prevState,
        show: false,
      }));
      setIsEnded && setIsEnded(false);
    }
  }, [state, moveToNextQuestionnaire, setIsEnded]);

  useEffect(() => {
    getQuestionnaires();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityId]);

  useEffect(() => {
    categorizedQuestionnaires();
  }, [questionnaires, categorizedQuestionnaires, onSuccesGetQuestionnaires]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state.endMeetingQuestionnaires.length) {
      setState((prevState) => ({
        ...prevState,
        show: true,
      }));
    }

    return () => {
      clearTimeout(timer);
    };
  }, [questionnaires, state.endMeetingQuestionnaires]);

  return (
    <>
      {state.show && entityId && !!questionnaires.length && !loading && (
        <RateCourse
          entityModel={entityModel}
          entityId={Number(entityId)}
          visible={state.show}
          onClose={handleClose}
          questionnaire={state.endMeetingQuestionnaires[state.step]}
        />
      )}
    </>
  );
};
