import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CoursePanelFinishPageCongrats } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Congrats";
import { CongratsWrapper } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/styles";
import { QuestionnairesModal } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Rate";
import { CoursePanelFinishPageCertificate } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/Certificate";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useCoursePanel } from "@/components/Courses/Course/Context";
import routeRoutes from "@/components/Routes/routes";
import {
  Certificate,
  CertificateAssignableTypes,
} from "@escolalms/sdk/lib/types";

import { QuestionnaireModelType } from "@/types/questionnaire";

type State = {
  showModal: boolean;
  showCertificate: boolean;
  isAnyQuestionnaire: boolean | null;
  certificates: Certificate[] | null;
};

export const CoursePanelFinishPage = () => {
  const [state, setState] = useState<State>({
    showModal: false,
    isAnyQuestionnaire: null,
    showCertificate: false,
    certificates: null,
  });

  const { courseId } = useCoursePanel();
  const { fetchCertificates } = useContext(EscolaLMSContext);
  const history = useHistory();

  const getCertificate = useCallback(async () => {
    try {
      const res = await fetchCertificates({
        assignable_type: CertificateAssignableTypes.Course,
        assignable_id: Number(courseId),
      });
      if (res && res.success) {
        setState((prev) => ({
          ...prev,
          certificates: res.data as Certificate[],
        }));
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [courseId, fetchCertificates]);

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

  const onNextClick = useCallback(() => {
    if (state.isAnyQuestionnaire) {
      onFinish();
      return;
    }
    if (state.certificates && state.certificates.length > 0) {
      onFinish();
      return;
    }
    history.push(routeRoutes.myProfile);
  }, [history, onFinish, state.certificates, state.isAnyQuestionnaire]);

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
      {state.showCertificate && state.certificates && (
        <CoursePanelFinishPageCertificate certificates={state.certificates} />
      )}
      <QuestionnairesModal
        entityId={Number(courseId)}
        entityModel={QuestionnaireModelType.COURSE}
        showModal={state.showModal}
        onSuccesGetQuestionnaires={onSuccesGetQuestionnaires}
      />
    </CongratsWrapper>
  );
};
