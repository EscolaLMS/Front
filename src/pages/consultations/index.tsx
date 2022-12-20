import Layout from "@/components/_App/Layout";
import ConsultationsCollection from "@/components/Consultations/ConsultationsCollection";
import ConsultationsProvider from "@/components/Consultations/ConsultationsProvider";
import { useTranslation } from "react-i18next";
import Container from "@/components/Container";

const ConsultationsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout metaTitle={t("ConsultationsPageMeta")}>
      <Container>
        <ConsultationsProvider>
          <ConsultationsCollection />
        </ConsultationsProvider>
      </Container>
    </Layout>
  );
};

export default ConsultationsPage;
