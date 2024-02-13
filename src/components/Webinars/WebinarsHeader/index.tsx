import { useTranslation } from "react-i18next";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import WebinarsHeaderStyles from "./WebinarsHeaderStyles";
import WebinarsHeaderFilters from "./Filters";

const WebinarHeader = () => {
  const { t } = useTranslation();

  return (
    <WebinarsHeaderStyles>
      <Title level={1}> {t("WebinarsPage.Webinars")}</Title>
      <WebinarsHeaderFilters />
    </WebinarsHeaderStyles>
  );
};

export default WebinarHeader;
