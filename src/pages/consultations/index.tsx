import Layout from "@/components/_App/Layout";
import ConsultationsContainer from "@/components/Consultations/List/ConsultationsContainer";
import ConsultationsProvider from "@/components/Consultations/List/ConsultationsProvider";
import { useTranslation } from "react-i18next";
import EntityPageWrapper from "@/components/Layouts";

const ConsultationsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout metaTitle={t("ConsultationsPageMeta")}>
      <ConsultationsProvider>
        <EntityPageWrapper title={t("ConsultationsPageMeta")}>
          <ConsultationsContainer />
        </EntityPageWrapper>
      </ConsultationsProvider>
    </Layout>
  );
};

export default ConsultationsPage;
