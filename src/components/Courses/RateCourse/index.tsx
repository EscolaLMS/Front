import React, { useCallback, useContext, useMemo, useState } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import { QuestionBox } from "../../QuestionBox";
import { QuestionnaireModelType, QuestionType } from "@/types/questionnaire";
import { StyledModal } from "@/components/Courses/RateCourse/styles";
import { toast } from "@/utils/toast";
import { useRoles } from "@/hooks/useRoles";

type Props = {
  entityModel: QuestionnaireModelType;
  entityId: number;
  visible: boolean;
  questionnaire: API.Questionnaire;
  onClose: () => void;
  onFinish?: () => void;
};

const initialState = {
  loading: false,
  step: 0,
};

const RateCourse: React.FC<Props> = ({
  entityModel,
  entityId,
  visible,
  questionnaire,
  onClose,
  onFinish,
}) => {
  const { isStudent, isTutor } = useRoles();
  const { sendQuestionnaireAnswer } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const [state, setState] = useState(initialState);

  const handleSendAnswer = useCallback(
    async (rate: number, note?: string) => {
      if (questionnaire.questions) {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));
        try {
          const request = await sendQuestionnaireAnswer(
            entityModel,
            entityId,
            questionnaire.id,
            {
              question_id: questionnaire.questions[state.step].id,
              rate,
              note,
              visible_on_front:
                questionnaire.questions[state.step].public_answers,
            }
          );
          if (request.success) {
            toast(`${t("RateCourse.ThankYouMessage")}`, "success");
          }
        } catch (error) {
          toast("Error", "error");
          console.error(error);
        } finally {
          setState((prevState) => ({
            ...prevState,
            loading: false,
            step: prevState.step + 1,
            note: "",
            rating: null,
          }));
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entityModel, entityId, questionnaire.id, state]
  );

  const handleSave = useCallback(
    (rate: number, note?: string) => {
      handleSendAnswer(rate, note);
      if (
        questionnaire.questions &&
        state.step === questionnaire.questions.length - 1
      ) {
        onClose();
      }
    },
    [handleSendAnswer, questionnaire, state.step, onClose]
  );

  const questionareEntityModel = useMemo(() => {
    return questionnaire.models.find(
      (model) => model.model_type_title === entityModel
    );
  }, [questionnaire, entityModel]);

  const isShowable = useMemo(() => {
    // @ts-ignore add to sdk
    if (!questionareEntityModel?.target_group) return false;

    return (
      // @ts-ignore add to sdk
      (isStudent && questionareEntityModel.target_group === "user") ||
      // @ts-ignore add to sdk
      (isTutor && questionareEntityModel.target_group === "author")
    );
  }, [isStudent, isTutor, questionareEntityModel]);

  console.log(state);

  return (
    <StyledModal
      onClose={onClose}
      visible={visible && isShowable}
      animation="zoom"
      maskAnimation="fade"
      destroyOnClose={true}
      width={468}
      closable={false}
    >
      {JSON.stringify(questionnaire.questions[state.step])}
      {questionnaire.questions && (
        <QuestionBox
          questionnaireTitle={questionnaire.title}
          entityModel={entityModel}
          data={questionnaire.questions[state.step]}
          handleSubmit={(rate, note) => handleSave(rate, note)}
          withStarsRating={
            questionnaire.questions[state.step]?.type === QuestionType.REVIEW
          }
          onClose={onClose}
        />
      )}
    </StyledModal>
  );
};

export default RateCourse;
