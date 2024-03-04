import { useContext } from "react";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import Loader from "@/components/_App/Preloader";

import { PackageSidebar } from "@/components/Packages/Package/PackageSidebar";
import { PackageBreadcrumbs } from "@/components/Packages/Package/PackageBreadcrumbs";
import { PackageInfo } from "@/components/Packages/Package/PackageInfo";
import CompaniesSection from "@/components/CompaniesSection";
import TutorsSection from "@/components/TutorsSection";
import PackageDescription from "@/components/Packages/Package/PackageDescription";

import { PackageContainerStyles } from "./styles";

const PackageContainer = () => {
  const { product } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  if (product.loading || !product.value) {
    return <Loader />;
  }
  return (
    <PackageContainerStyles>
      <Row>
        <Col md={12} lg={9}>
          <PackageBreadcrumbs />
          <PackageInfo />
          <CompaniesSection title={t("PackagePage.CompaniesSectionTitle")} />
          <PackageDescription />
          <TutorsSection
            title={t("PackagePage.TutorsSectionTitle")}
            users={product.value.authors}
          />
        </Col>
        <Col md={12} lg={3}>
          <PackageSidebar />
        </Col>
      </Row>
    </PackageContainerStyles>
  );
};
export default PackageContainer;
