import Layout from "@/components/_App/Layout";
import ConsultationsContainer from "@/components/Consultations/ConsultationsContainer";
import ConsultationsProvider from "@/components/Consultations/ConsultationsProvider";
import { useTranslation } from "react-i18next";
import Container from "@/components/Container";

const ConsultationsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout metaTitle={t("ConsultationsPageMeta")}>
      <ConsultationsProvider>
        <section className="consultations-page">
          <Container>
            <ConsultationsContainer />
          </Container>
        </section>
      </ConsultationsProvider>
    </Layout>
  );
};

export default ConsultationsPage;
