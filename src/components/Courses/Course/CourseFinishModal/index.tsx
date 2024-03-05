// import { useTranslation } from "react-i18next";
// import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
// import { useHistory } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import RateCourse from "@/components/Courses/RateCourse";
import { QuestionnaireModelType } from "@/types/questionnaire";
import { Spin } from "@escolalms/components/lib/components/atoms/Spin/Spin";
import { getQuestionnaires } from "@/utils/questionnaires";
// import routeRoutes from "@/components/Routes/routes";
import { CourseFinishModalWrapper } from "@/components/Courses/Course/CourseFinishModal/styles";

interface FinishModalProps {
  courseId?: number;
}

const CourseFinishModal = ({ courseId }: FinishModalProps) => {
  // const { t } = useTranslation();
  // const { push } = useHistory();
  const [state, setState] = useState({
    show: false,
    step: 0,
    loading: false,
  });
  const [questionnaires, setQuestionnaires] = useState<API.Questionnaire[]>([]);
  const { fetchQuestionnaires, fetchQuestionnaire } =
    useContext(EscolaLMSContext);
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

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
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
    <CourseFinishModalWrapper>
      <div className="course-program-finish-modal">
        {state.loading ? (
          <Spin />
        ) : (
          courseId &&
          !!questionnaires.length && (
            <RateCourse
              course={QuestionnaireModelType.COURSE}
              courseId={courseId}
              visible={true}
              onClose={() => handleClose()}
              questionnaire={questionnaires[state.step]}
            />
          )
        )}
      </div>
    </CourseFinishModalWrapper>
  );
};

export default CourseFinishModal;
