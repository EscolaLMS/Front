import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import Container from "@/components/Container";
import WebinarsProvider from "@/components/Webinars/WebinarsProvider";
import WebinarsContainer from "@/components/Webinars/WebinarsContainer";

const WebinarsPage = () => {
  const { t } = useTranslation();
  return (
    <Layout metaTitle={t("WebinarsPage.Webinars")}>
      <WebinarsProvider>
        <section className="webinars-page">
          <Container>
            <WebinarsContainer />
          </Container>
        </section>
      </WebinarsProvider>
    </Layout>
  );
};

export default WebinarsPage;
