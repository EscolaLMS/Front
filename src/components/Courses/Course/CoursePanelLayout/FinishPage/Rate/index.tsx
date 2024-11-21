import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import RateCourse from "@/components/Courses/RateCourse";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useQuestionnaires } from "@/hooks/questionnaires";
import { API } from "@escolalms/sdk/lib";
import { useRoles } from "@/hooks/useRoles";
import { metaDataKeys } from "@/utils/meta";

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
    questionnaires: questionnairesList,
    loading,
    // error,
    getQuestionnaires,
  } = useQuestionnaires({
    entityId: entityId || 0,
    entityModel: entityModel,
  });
  const { settings } = useContext(EscolaLMSContext);
  const questionnaireFirstime =
    settings?.value?.config[metaDataKeys.questionnaireFirstTimeMetaKey];

  interface StateType {
    show: boolean;
    step: number;
    loading: boolean;
    firstVisit: boolean;
    firstTimeQuestionnaires: API.Questionnaire[];
    reShowableQuestionnaires: API.Questionnaire[];
  }

  const [state, setState] = useState<StateType>({
    show: false,
    step: 0,
    loading: true,
    firstVisit: true,
    firstTimeQuestionnaires: [],
    reShowableQuestionnaires: [],
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
          firstTimeQuestionnaires: API.Questionnaire[];
          reShowableQuestionnaires: API.Questionnaire[];
        },
        questionnaire
      ) => {
        const questionnaireFrequency = questionnaire.models.find(
          (model) => model.model_type_title === entityModel
          // @ts-ignore add to sdk
        )?.display_frequency_minutes;

        if (questionnaireFrequency === 0 || !questionnaireFrequency) {
          acc.firstTimeQuestionnaires.push(questionnaire);
        } else {
          acc.reShowableQuestionnaires.push(questionnaire);
        }
        return acc;
      },
      { firstTimeQuestionnaires: [], reShowableQuestionnaires: [] }
    );

    setState((prevState) => ({
      ...prevState,
      ...categorized,
    }));
  }, [questionnaires, entityModel]);

  const getQuestionnaireFrequency = useCallback(
    (questionnaire: API.Questionnaire) => {
      return questionnaire.models.find(
        (model) => model.model_type_title === entityModel
        // @ts-ignore add to sdk
      )?.display_frequency_minutes;
    },
    [entityModel]
  );

  const updateDisplayTime = useCallback(
    (questionnaire: API.Questionnaire) => {
      const questionareFrequency = getQuestionnaireFrequency(questionnaire);

      if (questionareFrequency) {
        localStorage.setItem(
          `questionnaire_${questionnaire.id}_last_display_time`,
          Date.now().toString()
        );
      }
    },
    [getQuestionnaireFrequency]
  );

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
    updateDisplayTime(questionnaires[state.step]);

    setState((prevState) => ({
      ...prevState,
      show: false,
    }));

    if (state.step < questionnaires.length - 1) {
      if (state.firstVisit) {
        moveToNextQuestionnaire();
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        show: false,
        firstVisit: false,
      }));
    }
  }, [
    questionnaires,
    state.step,
    state.firstVisit,
    updateDisplayTime,
    moveToNextQuestionnaire,
  ]);

  const getDisplayFrequencyInMs = useCallback(
    (questionnaire: API.Questionnaire) => {
      const frequencyMinutes = getQuestionnaireFrequency(questionnaire);
      return (frequencyMinutes ?? 0) * 60 * 1000;
    },
    [getQuestionnaireFrequency]
  );

  const shouldDisplayQuestionnaire = useCallback(
    (questionnaire: API.Questionnaire) => {
      const lastDisplayTime = localStorage.getItem(
        `questionnaire_${questionnaire.id}_last_display_time`
      );
      if (!lastDisplayTime) return;
      const displayFrequency = getDisplayFrequencyInMs(questionnaire);

      const timeSinceLastDisplay = Date.now() - Number(lastDisplayTime);
      return !lastDisplayTime || timeSinceLastDisplay >= displayFrequency;
    },
    [getDisplayFrequencyInMs]
  );

  const displayQuestionnaire = useCallback(
    (questionnaire: API.Questionnaire) => {
      setState((prevState) => ({
        ...prevState,
        show: true,
        step: questionnaires.findIndex((q) => q.id === questionnaire.id),
      }));
    },
    [questionnaires]
  );

  const runDisplayInterval = useCallback(() => {
    return setInterval(() => {
      state.reShowableQuestionnaires.forEach((questionnaire) => {
        if (shouldDisplayQuestionnaire(questionnaire)) {
          displayQuestionnaire(questionnaire);
        }
      });
    }, 1000);
  }, [shouldDisplayQuestionnaire, displayQuestionnaire, state]);

  useEffect(() => {
    getQuestionnaires();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityId]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (questionnaires.length && state.firstVisit) {
      if (questionnaireFirstime) {
        timer = setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            show: true,
          }));
        }, questionnaireFirstime * 60 * 1000);
      } else {
        setState((prevState) => ({
          ...prevState,
          show: true,
        }));
      }
    }
    if (!!questionnaires.length) {
      onSuccesGetQuestionnaires && onSuccesGetQuestionnaires(true);
    }
    categorizedQuestionnaires();
    return () => {
      clearTimeout(timer);
    };
  }, [
    questionnaireFirstime,
    questionnaires,
    onSuccesGetQuestionnaires,
    state.firstVisit,
    categorizedQuestionnaires,
  ]);

  useEffect(() => {
    const intervalId = runDisplayInterval();

    return () => clearInterval(intervalId);
  }, [state.reShowableQuestionnaires, entityModel, runDisplayInterval]);

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
