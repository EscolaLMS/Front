import { format } from "date-fns";
import { APP_CONFIG } from "@/config/app";

export const formatDate = (
  date: string | number | Date | null,
  dateFormat: string = APP_CONFIG.defaultDateFormat
) => {
  if (!date) return "";
  return format(new Date(date), dateFormat);
};
