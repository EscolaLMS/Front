import Layout from "@/components/_App/Layout";
import { Container } from "react-grid-system";
import ConsultationsCollection from "@/components/Consultations/ConsultationsCollection";
import ConsultationsProvider from "@/components/Consultations/ConsultationsProvider";

const ConsultationsPage = () => {
  return (
    <Layout>
      <Container>
        <ConsultationsProvider>
          <ConsultationsCollection />
        </ConsultationsProvider>
      </Container>
    </Layout>
  );
};

export default ConsultationsPage;
