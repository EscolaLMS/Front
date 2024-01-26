import { useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

import Layout from "@/components/_App/Layout";
import Container from "@/components/Container";
import PackageProvider from "@/components/Package/PackageProvider";
import PackageContainer from "@/components/Package/PackageContainer";

const PackagePage = () => {
  const { product } = useContext(EscolaLMSContext);
  return (
    <Layout metaTitle={product.value?.name}>
      <PackageProvider>
        <Container>
          <PackageContainer />
        </Container>
      </PackageProvider>
    </Layout>
  );
};

export default PackagePage;
