import Layout from "@/components/_App/Layout";
import ConsultationsContainer from "@/components/Consultations/List/ConsultationsContainer";
import ConsultationsProvider from "@/components/Consultations/List/ConsultationsProvider";
import { useTranslation } from "react-i18next";
import Container from "@/components/Common/Container";

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
