import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "@/components/Common/DatePicker";
import { API } from "@escolalms/sdk/lib";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import {
  sortDates,
  removePastDates,
  createArrayWithDateAndTimes,
  isTwoDatesEqual,
  formatDate,
} from "@/utils/date";
import { Tag } from "@escolalms/components/lib/components/atoms/Tag/Tag";
import SelectedTermContent from "../SelectedTermContent";
import { ProfileConsultationsContext } from "@/components/Profile/ProfileConsultations/ProfileConsultationsProvider";
import { StyledBookTermButtons } from "../styles";

interface Props {
  consultation: API.Consultation & {
    proposed_terms: string[];
  };
  onClose: () => void;
}

const ProposedTermsContent = ({ consultation, onClose }: Props) => {
  const [selectedDate, setSelectedDay] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { setShowBookTermSuccess } = useContext(ProfileConsultationsContext);
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
  const isAnyTerm = !!terms?.length;

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
    setShowBookTermSuccess(true);
    onClose();
    setSelectedDay(null);
    setSelectedTime(null);
  }, [onClose, setShowBookTermSuccess]);

  const onClick = useCallback(async () => {
    if (consultation.consultation_term_id && selectedTime) {
      setLoading(true);
      const response = await bookConsultationTerm(
        consultation.consultation_term_id,
        selectedTime.toISOString()
      );
      if (response.success) {
        close();
      }
      setLoading(false);
    }
  }, [
    consultation.consultation_term_id,
    selectedTime,
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
      {!isAnyTerm && <Tag>{t("ConsultationPage.NoTermsAvailable")}</Tag>}
      {isAnyTerm && (
        <Button
          mode="secondary"
          onClick={() => setStep(2)}
          block
          disabled={!selectedDate || !selectedTime}
          loading={loading}
        >
          {inComing && isApproved
            ? t("ConsultationPage.ChangeTerm")
            : t("ConsultationPage.Book")}
        </Button>
      )}
    </>
  );
};

export default ProposedTermsContent;
