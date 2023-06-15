import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import DatePicker from "@/components/DatePicker";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { toast } from "react-toastify";

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
  const { t } = useTranslation();
  const inComing = consultation.in_coming;
  const isApproved = consultation.executed_status === "approved";

  const onChange = (date: Date) => {
    setSelectedDay(date);
  };

  const close = useCallback(() => {
    onClose();
    setSelectedDay(null);
  }, [onClose]);

  const onClick = useCallback(async () => {
    if (consultation.consultation_term_id && selectedDate) {
      setLoading(true);
      const response = await bookConsultationTerm(
        consultation.consultation_term_id,
        selectedDate.toISOString()
      );
      if (response.success) {
        close();
        toast.success(t("ConsultationPage.ReportTermSuccess"));
      }
      setLoading(false);
    }
  }, [
    consultation.consultation_term_id,
    selectedDate,
    bookConsultationTerm,
    close,
    t,
  ]);

  return (
    <>
      <DatePicker
        onChange={onChange}
        selectedDate={selectedDate}
        minDate={new Date()}
        showTimeInput
        timeInputLabel={`${t("Time")}: `}
      />
      {/* <StyledBookTermButtons>
        {currentTimes.map((date) => (
          <Button
            mode={
              isTwoDatesEqual(date, selectedTime, "HH:mm")
                ? "secondary"
                : "outline"
            }
            onClick={() => setSelectedTime(date)}
          >
            {formatDate(date, "HH:mm")}
          </Button>
        ))}
      </StyledBookTermButtons> */}
      <Button
        mode="secondary"
        onClick={onClick}
        block
        disabled={!selectedDate}
        loading={loading}
      >
        {inComing && isApproved
          ? t("ConsultationPage.ChangeTerm")
          : t("ConsultationPage.Book")}
      </Button>
    </>
  );
};

export default UserSelectDatePicker;
