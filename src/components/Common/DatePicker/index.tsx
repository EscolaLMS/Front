import { useTranslation } from "react-i18next";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { StyledDatePicker } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import en from "date-fns/locale/en-GB";
import pl from "date-fns/locale/pl";
registerLocale("pl", pl);
registerLocale("en", en);

interface Props {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  includeDates?: Date[];
  includeTimes?: Date[];
  minDate?: Date;
  showTimeInput?: boolean;
  timeInputLabel?: string;
  minTime?: Date;
  maxTime?: Date;
  maxDate?: Date;
}

const DatePicker = ({
  selectedDate,
  onChange,
  includeDates,
  includeTimes,
  minDate,
  showTimeInput,
  timeInputLabel,
  minTime,
  maxTime,
  maxDate,
}: Props) => {
  const { i18n } = useTranslation();

  return (
    <StyledDatePicker>
      <ReactDatePicker
        selected={selectedDate}
        onChange={onChange}
        includeDates={includeDates}
        includeTimes={includeTimes}
        inline
        locale={i18n.language}
        minDate={minDate}
        maxDate={maxDate}
        timeIntervals={5}
        minTime={minTime}
        maxTime={maxTime}
        showTimeSelect={showTimeInput}
        timeInputLabel={timeInputLabel}
      />
    </StyledDatePicker>
  );
};

export default DatePicker;
