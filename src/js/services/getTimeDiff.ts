import { differenceInMinutes } from "date-fns";

export const getTimeDiff = (start: Date, nDate: string): string => {
  const minutes = differenceInMinutes(start, new Date(nDate));
  const hours = minutes / 60;
  const days = hours / 24;
  if (days >= 1) {
    return `${days.toFixed(0)} days`;
  }
  if (hours >= 1) {
    return `${hours.toFixed(0)} hrs ${(minutes % 60).toFixed(0)} min`;
  }
  return `${minutes} min`;
};
