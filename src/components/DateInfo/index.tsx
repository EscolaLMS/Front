import { useMemo } from "react";
import styled, { useTheme } from "styled-components";
import { formatDate } from "@/utils/date";
import { APP_CONFIG } from "@/config/app";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { IconCalendar } from "../../icons";

const DateInfoStyles = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid;
  border-radius: 2px;
  align-items: center;

  .icon-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  .date {
    padding: 0.5rem;
    margin: 0 auto;
  }
`;

export enum DateInfoTypes {
  "ACCEPTED",
  "WAITING",
  "ENDED",
  "DEFAULT",
}

interface DateInfoProps {
  type: DateInfoTypes;
  date?: Date | string | number;
}

const DateInfo = ({ type, date }: DateInfoProps) => {
  const theme = useTheme();
  const color = useMemo(() => {
    switch (type) {
      case DateInfoTypes.ACCEPTED:
        return "#198754";
      case DateInfoTypes.WAITING:
        return "#FFC300";
      case DateInfoTypes.ENDED:
        return "#D22B2B";
      default:
        return theme.primaryColor;
    }
  }, [theme.primaryColor, type]);

  return (
    <DateInfoStyles
      style={{
        borderColor: color,
      }}
    >
      <div
        className="icon-container"
        style={{
          backgroundColor: color,
        }}
      >
        <IconCalendar color="#ffffff" />
      </div>
      <Text className="date">
        {date
          ? formatDate(new Date(date), APP_CONFIG.defaultDateTimeFormat)
          : "--"}
      </Text>
    </DateInfoStyles>
  );
};

export default DateInfo;
