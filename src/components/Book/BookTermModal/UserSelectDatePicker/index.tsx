import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import DatePicker from "@/components/Common/DatePicker";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ModalTitle from "@/components/Common/StyledTitle/ModalTitle";
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
  const { bookConsultationTerm, changeConsultationTerm } =
    useContext(EscolaLMSContext);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { fetchUserConsultations, user } = useContext(EscolaLMSContext);
  const { setShowBookTermSuccess } = useContext(ProfileConsultationsContext);
  const { t } = useTranslation();

  const inComing = consultation.in_coming;
  const isApproved = consultation.executed_status === "approved";
  const isRejected = consultation.executed_status === "reject";
  console.log("user", user.value?.id);

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

      try {
        if ((inComing && isApproved) || isRejected) {
          await changeConsultationTerm(
            consultation.consultation_term_id,
            selectedDate.toISOString(),
            consultation.executed_at || "",
            user.value?.id
          );
        } else {
          await bookConsultationTerm(
            consultation.consultation_term_id,
            selectedDate.toISOString()
          );
        }
      } catch (e) {
        console.log(e);
      } finally {
        fetchUserConsultations();
        close();
        setLoading(false);
      }
    }
  }, [
    selectedDate,
    bookConsultationTerm,
    changeConsultationTerm,
    inComing,
    isApproved,
    isRejected,
    close,
    consultation,
    fetchUserConsultations,
    user.value?.id,
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
