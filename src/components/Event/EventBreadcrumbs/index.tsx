import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import routeRoutes from "@/components/Routes/routes";

const EventBreadcrumbs = () => {
  const { stationaryEvent } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  if (!stationaryEvent.value) {
    return null;
  }
  return (
    <Breadcrumbs
      items={[
        <Link to={routeRoutes.home}>{t("Home")}</Link>,
        <Link to={routeRoutes.events}>{t("Menu.Events")}</Link>,
        <Text size="12">{stationaryEvent.value.name}</Text>,
      ]}
    />
  );
};

export default EventBreadcrumbs;
