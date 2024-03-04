import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import routeRoutes from "@/components/Routes/routes";

const WebinarBreadcrumbs = () => {
  const { webinar } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  if (!webinar.value) {
    return null;
  }
  return (
    <Breadcrumbs
      items={[
        <Link to={routeRoutes.home}>{t("Home")}</Link>,
        <Link to={routeRoutes.webinars}>{t("Menu.Webinars")}</Link>,
        <Text size="12">{webinar.value.name}</Text>,
      ]}
    />
  );
};

export default WebinarBreadcrumbs;
