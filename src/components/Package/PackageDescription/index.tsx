import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
const PackageDescription = () => {
  const { product } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const description = product.value?.description;

  if (!description) {
    return null;
  }
  return (
    <section className="package-description-short with-border">
      <Title level={4}>{t("PackagePage.DescriptionTitle")}</Title>
      <Text>{description}</Text>
    </section>
  );
};

export default PackageDescription;
