import { useContext } from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import Container from "@/components/Container";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import CompaniesSection from "@/components/CompaniesSection";
import TutorsSection from "@/components/TutorsSection";
import DescriptionSection from "@/components/DescriptionSection";
import WebinarBreadcrumbs from "./WebinarBreadcrumbs";
import WebinarInfo from "./WebinarInfo";
import WebinarSidebar from "./WebinarSidebar";
import { WebinarContentStyles } from "./WebinarContentStyles";

const WebinarContent = () => {
  const { webinar } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  return (
    <Container>
      <WebinarContentStyles>
        <Row>
          <Col md={12} lg={9}>
            <WebinarBreadcrumbs />
            <WebinarInfo />
            <CompaniesSection title={t("WebinarPage.CompaniesTitle")} />
            <TutorsSection
              users={webinar.value?.trainers || []}
              title={t("Tutors")}
            />
            <DescriptionSection description={webinar.value?.description} />
            <DescriptionSection
              title={t("Agenda")}
              description={webinar.value?.agenda}
            />
          </Col>
          <Col md={12} lg={3}>
            <WebinarSidebar />
          </Col>
        </Row>
      </WebinarContentStyles>
    </Container>
  );
};

export default WebinarContent;
