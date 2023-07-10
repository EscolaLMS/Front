import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import DatePicker from "@/components/DatePicker";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ModalTitle from "@/components/StyledTitle/ModalTitle";
import SelectedTermContent from "../SelectedTermContent";
import { ProfileConsultationsContext } from "@/components/Profile/ProfileConsultations/ProfileConsultationsProvider";

interface Props {
  consultation: API.Consultation & {
    proposed_terms: string[];
  };
  onClose: () => void;
}

const UserSelectDatePicker = ({ consultation, onClose }: Props) => {
  const [selectedDate, setSelectedDay] = useState<Date | null>(null);
  const { bookConsultationTerm } = useContext(EscolaLMSContext);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { setShowBookTermSuccess } = useContext(ProfileConsultationsContext);
  const { t } = useTranslation();
  const inComing = consultation.in_coming;
  const isApproved = consultation.executed_status === "approved";

  const onChange = (date: Date) => {
    setSelectedDay(date);
  };

  const close = useCallback(() => {
    setShowBookTermSuccess(true);
    onClose();
    setSelectedDay(null);
  }, [onClose, setShowBookTermSuccess]);

  const onClick = useCallback(async () => {
    if (consultation.consultation_term_id && selectedDate) {
      setLoading(true);
      const response = await bookConsultationTerm(
        consultation.consultation_term_id,
        selectedDate.toISOString()
      );
      if (response.success) {
        close();
      }
      setLoading(false);
    }
  }, [
    consultation.consultation_term_id,
    selectedDate,
    bookConsultationTerm,
    close,
  ]);

  if (step === 2) {
    return (
      <SelectedTermContent
        selectedDate={selectedDate}
        consultation={consultation}
        loading={loading}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <ModalTitle>{t("ConsultationPage.SelectDateAndHour")}</ModalTitle>
      <DatePicker
        onChange={onChange}
        selectedDate={selectedDate}
        minDate={new Date()}
        showTimeInput
        timeInputLabel={`${t("Time")}: `}
      />
      <Button
        mode="secondary"
        onClick={() => setStep(2)}
        block
        disabled={!selectedDate}
        loading={loading}
      >
        {inComing && isApproved
          ? t("ConsultationPage.ChangeTerm")
          : t("ConsultationPage.Choose")}
      </Button>
    </>
  );
};

export default UserSelectDatePicker;
