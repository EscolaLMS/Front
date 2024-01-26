import { useTranslation } from "react-i18next";
import { Title } from "@escolalms/components";
import PackagesHeaderStyles from "./styles";
import PackagesHeaderFilters from "./Filters";

const PackagesHeader = () => {
  const { t } = useTranslation();

  return (
    <PackagesHeaderStyles>
      <Title level={1}> {t("PackagesPage.Packages")}</Title>
      <PackagesHeaderFilters />
    </PackagesHeaderStyles>
  );
};

export default PackagesHeader;
