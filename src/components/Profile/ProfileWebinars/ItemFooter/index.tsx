import { API } from "@escolalms/sdk/lib";
import { useTranslation } from "react-i18next";
import { addTimeToDate, extractTimeUnits } from "@/utils/date";
import DateInfo, { DateInfoTypes } from "@/components/DateInfo";

interface Props {
  webinar: API.Webinar;
}

export const ProfileWebinarItemFooter = ({ webinar }: Props) => {
  const isEnded = webinar.is_ended;
  const isStarted = webinar.is_started;
  const { t } = useTranslation();

  if (isEnded && webinar.active_to) {
    return (
      <DateInfo
        type={DateInfoTypes.ENDED}
        date={addTimeToDate(
          webinar.active_to,
          extractTimeUnits(`${webinar.duration}`)
        )}
      />
    );
  }
  if (isStarted && webinar.active_to) {
    return (
      <DateInfo
        type={DateInfoTypes.ACCEPTED}
        date={webinar.active_to}
        info={t("MyProfilePage.WebinarIsStarted")}
      />
    );
  }
  if (webinar.active_to) {
    return <DateInfo type={DateInfoTypes.DEFAULT} date={webinar.active_to} />;
  }
  return null;
};
