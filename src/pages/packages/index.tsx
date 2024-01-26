import Layout from "@/components/_App/Layout";
import { useTranslation } from "react-i18next";
import Container from "@/components/Container";
import PackagesProvider from "@/components/Packages/PackagesProvider";
import PackagesContainer from "@/components/Packages/PackagesContainer";

const PackagesPage = () => {
  const { t } = useTranslation();
  return (
    <Layout metaTitle={t("PackagesPage.Events")}>
      <PackagesProvider>
        <section className="packages-page">
          <Container>
            <PackagesContainer />
          </Container>
        </section>
      </PackagesProvider>
    </Layout>
  );
};

export default PackagesPage;
