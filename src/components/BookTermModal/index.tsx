import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Modal from "@escolalms/components/lib/components/atoms/Modal/Modal";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { API } from "@escolalms/sdk/lib";
import DatePicker from "@/components/DatePicker";
import { StyledBookTermButtons } from "./styles";
import {
  formatDate,
  isTwoDatesEqual,
  removePastDates,
  createArrayWithDateAndTimes,
  sortDates,
} from "@/utils/date";

interface Props {
  onClose: () => void;
  visible: boolean;
  consultation: API.Consultation & {
    proposed_terms: string[];
  };
}

const BookTermModal: React.FC<Props> = ({ onClose, visible, consultation }) => {
  const [selectedDate, setSelectedDay] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { bookConsultationTerm } = useContext(EscolaLMSContext);
  const terms = sortDates(
    removePastDates(
      consultation?.proposed_terms?.map(
        (dateString: string) => new Date(dateString)
      ) || []
    )
  );
  const sortedDates = createArrayWithDateAndTimes(terms);
  const currentTimes = selectedDate
    ? sortedDates.find((dateObj) => isTwoDatesEqual(dateObj.date, selectedDate))
        ?.times || []
    : [];
  const inComing = consultation.in_coming;
  const isApproved = consultation.executed_status === "approved";

  useEffect(() => {
    if (terms[0]) {
      setSelectedDay(terms[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (date: Date) => {
    setSelectedDay(date);
    setSelectedTime(null);
  };

  const close = useCallback(() => {
    onClose();
    setSelectedDay(null);
    setSelectedTime(null);
  }, [onClose]);

  const onClick = useCallback(async () => {
    if (consultation.consultation_term_id && selectedTime) {
      setLoading(true);
      const response = await bookConsultationTerm(
        consultation.consultation_term_id,
        selectedTime.toISOString()
      );
      if (response.success) {
        close();
        toast.success(t("ConsultationPage.ReportTermSuccess"));
      }
      setLoading(false);
    }
  }, [
    consultation.consultation_term_id,
    selectedTime,
    bookConsultationTerm,
    close,
    t,
  ]);

  return (
    <Modal
      onClose={close}
      visible={visible}
      animation="zoom"
      maskAnimation="fade"
      destroyOnClose={true}
      width={468}
    >
      <DatePicker
        onChange={onChange}
        selectedDate={selectedDate}
        includeDates={terms}
        includeTimes={currentTimes}
      />
      <StyledBookTermButtons>
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
      </StyledBookTermButtons>
      <Button
        mode="secondary"
        onClick={onClick}
        block
        disabled={!selectedDate || !selectedTime}
        loading={loading}
      >
        {inComing && isApproved
          ? t("ConsultationPage.ChangeTerm")
          : t("ConsultationPage.Book")}
      </Button>
    </Modal>
  );
};

export default BookTermModal;
