import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CoursePanelFinishPageCongrats } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Congrats";
import { CongratsWrapper } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/styles";
import { CoursePanelFinishPageRate } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Rate";
import { CoursePanelFinishPageCertificate } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Certificate";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useCoursePanel } from "@/components/Courses/Course/Context";
import routeRoutes from "@/components/Routes/routes";

type State = {
  showModal: boolean;
  showCertificate: boolean;
  isAnyQuestionnaire: boolean | null;
  certificateTitle: string | null;
};

export const CoursePanelFinishPage = () => {
  const [state, setState] = useState<State>({
    showModal: false,
    isAnyQuestionnaire: null,
    showCertificate: false,
    certificateTitle: null,
  });
  const { courseId } = useCoursePanel();
  const { fetchCertificate } = useContext(EscolaLMSContext);
  const history = useHistory();

  const getCertificate = useCallback(async () => {
    try {
      const res = await fetchCertificate(Number(courseId));
      if (res.success) {
        setState((prev) => ({
          ...prev,
          certificateTitle: res.data.title || "Certificate",
        }));
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [courseId, fetchCertificate]);

  useEffect(() => {
    getCertificate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showModal: false,
      showCertificate: true,
    }));
  }, []);

  const handleModalChange = useCallback((value: boolean) => {
    setState((prev) => ({ ...prev, showModal: value }));
  }, []);

  const onNextClick = useCallback(() => {
    if (state.isAnyQuestionnaire) {
      handleModalChange(true);
      return;
    }
    if (typeof state.certificateTitle === "string") {
      onFinish();
      return;
    }
    history.push(routeRoutes.myProfile);
  }, [
    handleModalChange,
    history,
    onFinish,
    state.certificateTitle,
    state.isAnyQuestionnaire,
  ]);

  const onSuccesGetQuestionnaires = useCallback(
    (isAnyQuestionnaire: boolean) => {
      setState((prev) => ({
        ...prev,
        isAnyQuestionnaire,
      }));
    },
    []
  );

  return (
    <CongratsWrapper>
      {!state.showCertificate && (
        <CoursePanelFinishPageCongrats onNextClick={onNextClick} />
      )}
      {state.showCertificate && (
        <CoursePanelFinishPageCertificate
          certificateTitle={String(state.certificateTitle)}
          courseId={Number(courseId)}
        />
      )}
      <CoursePanelFinishPageRate
        showModal={state.showModal}
        onClose={() => handleModalChange(false)}
        onFinish={onFinish}
        onSuccesGetQuestionnaires={onSuccesGetQuestionnaires}
      />
    </CongratsWrapper>
  );
};
