import { useTranslation } from "react-i18next";
import { API } from "@escolalms/sdk/lib";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";
import { Link } from "react-router-dom";

interface Props {
  webinar: API.Webinar;
  onJoin?: () => void;
}

export const ProfileWebinarItemActions = ({ webinar, onJoin }: Props) => {
  const isStarted = webinar.is_started;
  const { t } = useTranslation();

  if (isStarted) {
    return (
      <Button mode="secondary" onClick={onJoin}>
        {t("Join")}
      </Button>
    );
  }

  return (
    <Link to={`/webinar/${webinar.id}`}>
      <Button mode="secondary">{t("Show")}</Button>
    </Link>
  );
};
