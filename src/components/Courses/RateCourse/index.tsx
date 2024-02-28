import React, { useCallback, useContext, useState } from "react";
import { Modal } from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { toast } from "react-toastify";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import { QuestionBox } from "../../QuestionBox";
import { QuestionType } from "@/types/questionnaire";

type Props = {
  course: string;
  courseId: number;
  visible: boolean;
  questionnaire: API.Questionnaire;
  onClose: () => void;
};

const RateCourse: React.FC<Props> = ({
  course,
  courseId,
  visible,
  questionnaire,
  onClose,
}) => {
  const { sendQuestionnaireAnswer } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const [state, setState] = useState({
    loading: false,
    step: 0,
    showLastScreen: false,
  });

  const handleSendAnswer = useCallback(
    async (rate: number, note?: string) => {
      if (questionnaire.questions) {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));
        try {
          const request = await sendQuestionnaireAnswer(
            course,
            courseId,
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
            toast.success(`${t("RateCourse.ThankYouMessage")}`);
          }
        } catch (error) {
          toast.error("Error");
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
    [course, courseId, questionnaire.id, state]
  );

  const handleSave = useCallback(
    (rate: number, note?: string) => {
      handleSendAnswer(rate, note);
      if (
        questionnaire.questions &&
        state.step === questionnaire.questions.length - 1
      ) {
        setState((prevState) => ({
          ...prevState,
          showLastScreen: true,
        }));
      }
    },
    [questionnaire, state.step, handleSendAnswer]
  );

  return (
    <Modal
      onClose={onClose}
      visible={visible}
      animation="zoom"
      maskAnimation="fade"
      destroyOnClose={true}
      width={468}
    >
      {!state.showLastScreen ? (
        questionnaire.questions && (
          <QuestionBox
            textareaPlaceholder={t("RateCourse.OptionalComment")}
            data={questionnaire.questions[state.step]}
            handleSubmit={(rate, note) => handleSave(rate, note)}
            withStarsRating={
              questionnaire.questions[state.step]?.type === QuestionType.REVIEW
            }
          />
        )
      ) : (
        <React.Fragment>
          <Title
            level={4}
            className="modal-title"
            style={{
              paddingTop: "50px",
            }}
          >
            {t("RateCourse.ThankYou")}
          </Title>
          <Text
            style={{
              paddingBottom: "50px",
              textAlign: "center",
            }}
          >
            {t("RateCourse.ThankYouMessage")}
          </Text>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default RateCourse;
