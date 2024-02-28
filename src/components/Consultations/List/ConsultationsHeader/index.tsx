import { useTranslation } from "react-i18next";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import ConsultationsHeaderFilters from "./ConsultationsFilter";
import ConsultationsHeaderStyles from "./ConsultationsHeaderStyles";

const ConsultationsHeader = () => {
  const { t } = useTranslation();

  return (
    <ConsultationsHeaderStyles>
      <Title level={1}> {t("Menu.Consultations")}</Title>
      <ConsultationsHeaderFilters />
    </ConsultationsHeaderStyles>
  );
};

export default ConsultationsHeader;
