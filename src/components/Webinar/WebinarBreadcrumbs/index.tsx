import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

const WebinarBreadcrumbs = () => {
  const { webinar } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  if (!webinar.value) {
    return null;
  }
  return (
    <Breadcrumbs
      items={[
        <Link to="/">{t("Home")}</Link>,
        <Link to="/webinars">{t("Menu.Webinars")}</Link>,
        <Text size="12">{webinar.value.name}</Text>,
      ]}
    />
  );
};

export default WebinarBreadcrumbs;
