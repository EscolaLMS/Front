import { add, format, isAfter } from "date-fns";
import { APP_CONFIG } from "@/config/app";

export const formatDate = (
  date: string | number | Date | null | undefined,
  dateFormat: string = APP_CONFIG.defaultDateFormat
) => {
  if (!date) return "";
  return format(new Date(date), dateFormat);
};

export const isTwoDatesEqual = (
  firstDate: Date | string | number | null | undefined,
  secondDate: Date | string | number | null | undefined,
  format?: string
) => {
  if (!firstDate || !secondDate) return false;
  return formatDate(firstDate, format) === formatDate(secondDate, format);
};

export const createArrayWithDateAndTimes = (terms: string[] | Date[]) => {
  const newTerms: {
    date: string;
    times: Date[];
  }[] = [];

  terms.forEach((term) => {
    const date = format(new Date(term), "MM/dd/yyyy");
    const existingTerm = newTerms.find(
      (t) => format(new Date(t.date), "MM/dd/yyyy") === date
    );

    if (existingTerm) {
      existingTerm.times.push(new Date(term));
    } else {
      newTerms.push({
        date: date,
        times: [new Date(term)],
      });
    }
  });

  return newTerms;
};

export const removePastDates = (dates: Date[]) =>
  dates.filter((date) => isAfter(date, new Date()));

export const sortDates = (dates: Date[]): Date[] =>
  dates.sort((a, b) => a.getTime() - b.getTime());

export const extractTimeUnits = (input: string): Record<string, number> => {
  const timeRegex = /(\d+)\s+(day|hour|minute|second|week|year)s?/g;
  const matches = Array.from(input.matchAll(timeRegex));

  const extractedUnits: Record<string, number> = {};

  let foundMatch = false;
  matches.forEach((match) => {
    foundMatch = true;
    const value = parseInt(match[1]);
    const unit = match[2];

    if (!extractedUnits[unit]) {
      extractedUnits[unit] = value;
    } else {
      extractedUnits[unit] += value;
    }
  });

  if (!foundMatch) {
    const numberRegex = /\d+/g;
    const numberMatches = Array.from(input.matchAll(numberRegex));

    numberMatches.forEach((match) => {
      const value = parseInt(match[0]);
      extractedUnits["hour"] = value;
    });
  }

  return extractedUnits;
};

export const addTimeToDate = (
  date: Date | string | number,
  time: {
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    week?: number;
    year?: number;
    month?: number;
  }
) => {
  return add(new Date(date), {
    years: time.year || 0,
    months: time.month || 0,
    weeks: time.week || 0,
    days: time.day || 0,
    hours: time.hour || 0,
    minutes: time.minute || 0,
    seconds: time.second || 0,
  });
};
