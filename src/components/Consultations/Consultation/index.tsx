import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import Preloader from "@/components/_App/Preloader";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import ConsultationHero from "@/components/Consultations/Consultation/ConsultationHero";
import ConsultationSidebar from "@/components/Consultations/Consultation/ConsultationSidebar";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { fixContentForMarkdown } from "@escolalms/components/lib/utils/components/markdown";
import {
  StyledDescription,
  StyledRelatedConsultations,
} from "@/components/Consultations/Consultation/style";
import ConsultationsSlider from "@/components/Consultations/ConsultationsSlider";
import Layout from "@/components/_App/Layout";
import Container from "../../Common/Container";
import routeRoutes from "@/components/Routes/routes";
import SidebarSkeleton from "@/components/Skeletons/CoursePage/sidebar";
import { StyledCoursePage } from "@/pages/courses/course/styles";
import ConsultationPageContentSkeleton from "@/components/Skeletons/Consultation";

const Consultation = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { consultation, fetchConsultation, consultations } =
    useContext(EscolaLMSContext);

  console.log(consultations);

  const consultationCategories = consultation.value?.categories?.map(
    (category: EscolaLms.Categories.Models.Category) => category.name
  );

  useEffect(() => {
    if (id) {
      fetchConsultation(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (consultation.loading && !consultation.value?.id) {
    return <Preloader />;
  }

  if (consultation.error) {
    return <pre>{consultation.error.message}</pre>;
  }

  return (
    <Layout metaTitle={`${t("Consultation")} ${consultation.value?.name}`}>
      {consultation.loading && (
        <>
          <StyledCoursePage>
            <Container>
              <Row>
                <Col md={12} lg={8}>
                  <ConsultationPageContentSkeleton />
                </Col>
                <Col md={12} lg={3} offset={{ lg: 1 }}>
                  <SidebarSkeleton />
                </Col>
              </Row>
            </Container>
          </StyledCoursePage>
        </>
      )}
      {!consultation.loading && (
        <StyledCoursePage>
          <Container>
            <Row>
              <Col xs={12}>
                <Breadcrumbs
                  items={[
                    <Link to={routeRoutes.home}>{t("Home")}</Link>,
                    <Link to={routeRoutes.consultations}>
                      {t("Consultations")}
                    </Link>,
                    <Text size="12">{consultation?.value?.name}</Text>,
                  ]}
                />
              </Col>
              <Col xs={12} md={9}>
                <ConsultationHero consultation={consultation.value} />

                {consultation?.value?.description &&
                  fixContentForMarkdown(consultation.value.description) !==
                    "" && (
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
        </StyledCoursePage>
      )}
      {consultationCategories && consultationCategories.length > 0 && (
        <StyledRelatedConsultations>
          <Container>
            {consultationCategories.map((category) => (
              <ConsultationsSlider
                key={category}
                category={category}
                title={`${t("Inni specjaliści")} ${category}`}
                consultations={
                  consultations?.list?.data?.filter(
                    (consultation) => consultation.id !== Number(id)
                  ) || []
                }
              />
            ))}
          </Container>
        </StyledRelatedConsultations>
      )}
    </Layout>
  );
};

export default Consultation;
