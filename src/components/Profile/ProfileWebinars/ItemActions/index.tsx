import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import Button from "@escolalms/components/lib/components/atoms/Button/Button";

interface Props {
  webinar: API.Webinar;
  onJoin?: () => void;
}

export const ProfileWebinarItemActions = ({ webinar, onJoin }: Props) => {
  const isStarted = webinar.is_started;
  const { t } = useTranslation();
  const history = useHistory();

  if (isStarted) {
    return (
      <Button mode="secondary" onClick={onJoin}>
        {t("Join")}
      </Button>
    );
  }

  return (
    <Button
      mode="secondary"
      onClick={() => history.push(`/webinar/${webinar.id}`)}
    >
      {t("Show")}
    </Button>
  );
};
