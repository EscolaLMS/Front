import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Preloader from "@/components/Preloader";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Col, Container, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import ConsultationHero from "@/components/Consultation/ConsultationHero";
import ConsultationSidebar from "@/components/Consultation/ConsultationSidebar";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { fixContentForMarkdown } from "@escolalms/components/lib/utils/components/markdown";
import {
  StyledDescription,
  StyledRelatedConsultations,
} from "@/components/Consultation/style";
import ConsultationsSlider from "@/components/ConsultationsSlider";

const Consultation = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { consultation, fetchConsultation, consultations } =
    useContext(EscolaLMSContext);

  const consultationCategories = consultation.value?.categories?.map(
    (category) => category.name
  );

  useEffect(() => {
    if (id) {
      fetchConsultation(Number(id));
    }
  }, [id]);

  if (consultation.loading) {
    return <Preloader />;
  }

  if (consultation.error) {
    return <pre>{consultation.error.message}</pre>;
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Breadcrumbs
              items={[
                <Link to="/">{t("Home")}</Link>,
                <Link to="/consultations">{t("Consultations")}</Link>,
                <Text size="12">{consultation?.value?.name}</Text>,
              ]}
            />
          </Col>
          <Col xs={12} md={9}>
            <ConsultationHero consultation={consultation.value} />

            {consultation?.value?.description &&
              fixContentForMarkdown(consultation.value.description) !== "" && (
                <StyledDescription>
                  <MarkdownRenderer>
                    {consultation.value.description}
                  </MarkdownRenderer>
                </StyledDescription>
              )}
          </Col>
          {consultation?.value?.product && (
            <Col xs={12} md={3}>
              <ConsultationSidebar consultation={consultation.value} />
            </Col>
          )}
        </Row>
      </Container>
      <StyledRelatedConsultations>
        <Container>
          {consultationCategories?.map((category) => (
            <ConsultationsSlider
              key={category}
              category={category}
              title={`${t("Inni specjaliści")} ${category}`}
              consultations={consultations?.list?.data || []}
            />
          ))}
        </Container>
      </StyledRelatedConsultations>
    </>
  );
};

export default Consultation;
