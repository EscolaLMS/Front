import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { API } from "@escolalms/sdk/lib";
import ConsultationCardJoinButton from "./JoinButton";
import ConsultationCardBookButton from "./BookButton";
import ConsultationCardChangeButton from "./ChangeButton";

interface Props {
  consultation: API.Consultation;
  showBookTerm: (value: boolean) => void;
}

const ConsultationCardButtons = ({ consultation, showBookTerm }: Props) => {
  const history = useHistory();
  const { t } = useTranslation();
  const isStarted = consultation.is_started;
  const inComing = consultation.in_coming;
  const isReported = consultation.executed_status === "reported";
  const isNotReported = consultation.executed_status === "not_reported";
  const isApproved = consultation.executed_status === "approved";

  if (isReported) {
    return null;
  }
  if (consultation.product?.owned && isNotReported) {
    return (
      <ConsultationCardBookButton
        showBookTerm={(value) => showBookTerm(value)}
      />
    );
  }
  if (isStarted && consultation.consultation_term_id) {
    return (
      <ConsultationCardJoinButton
        consultationTermId={consultation.consultation_term_id}
        consultationId={consultation.id}
        term={String(consultation.executed_at)}
      />
    );
  }
  if (inComing) {
    return (
      <ConsultationCardChangeButton
        inComing={inComing}
        isApproved={isApproved}
        showBookTerm={(value) => showBookTerm(value)}
      />
    );
  }
  return (
    <Button
      mode="secondary"
      onClick={() => history.push(`/consultations/${consultation.id}`)}
    >
      {t("ConsultationPage.Show")}
    </Button>
  );
};

export default ConsultationCardButtons;
