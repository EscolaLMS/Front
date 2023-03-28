import { useTranslation } from "react-i18next";
import { Title, Button } from "@escolalms/components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { NoDataStyles } from "./NoDataStyles";
import { useHistory } from "react-router-dom";

const ProfileStationaryEventsNoData = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <NoDataStyles>
      <Title level={3}>{t("MyProfilePage.EmptyEventTitle")}</Title>
      <Text className="small-text">{t("MyProfilePage.EmptyEventText")}</Text>
      <Button onClick={() => history.push("/events")} mode="secondary">
        {t("MyProfilePage.EmptyEventsBtnText")}
      </Button>
    </NoDataStyles>
  );
};

export default ProfileStationaryEventsNoData;
