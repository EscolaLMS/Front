import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { useHistory } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import RateCourse from "@/components/RateCourse";
import { toast } from "react-toastify";

interface FinishModalProps {
  program: API.CourseProgram;
  courseId?: number;
}

const CourseFinishModal = ({ program, courseId }: FinishModalProps) => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const [state, setState] = useState({
    show: false,
    step: 0,
  });
  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);
  const { fetchQuestionnaires } = useContext(EscolaLMSContext);

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
      <div className="course-program-finish-modal">
        <p className="course-program-finish-modal__title">
          {t("CourseProgram.FinishTitle")}
        </p>
        <p className="course-program-finish-modal__paragraph">
          {t("CourseProgram.FinishSubtitle")}
        </p>

        <div className="course-program-finish-modal__buttons">
          {!!questionnaires?.length && (
            <Button
              mode="primary"
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  show: true,
                }))
              }
            >
              {t("MyProfilePage.RateCourse")}
            </Button>
          )}
          <Button mode="primary" onClick={() => push("/user/my-profile")}>
            {t("Menu.Profile")}
          </Button>
          <Button mode="primary" onClick={() => push("/courses")}>
            {t("Menu.Courses")}
          </Button>
        </div>
      </div>

      {state.show && courseId && (
        <RateCourse
          course={"course"}
          courseId={courseId}
          visible={state.show}
          onClose={() => handleClose()}
          questionnaire={questionnaires[state.step]}
        />
      )}
    </>
  );
};

export default CourseFinishModal;
