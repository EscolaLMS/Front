import { memo, useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Col, Row } from "react-grid-system";
import { ConsultationStatus } from "../../../pages/user/my-consultations";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import ConsultationTutorCard from "@/components/Consultations/ConsultationTutorCard";
import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";

interface ProfileTutorConsultationsProps {
  type: ConsultationStatus;
}

const ProfileTutorConsultations = ({
  type,
}: ProfileTutorConsultationsProps) => {
  const { tutorConsultations, fetchTutorConsultations } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const consultationsData = useMemo(
    () =>
      tutorConsultations.list?.data.filter((consultation) =>
        type === ConsultationStatus.STARTED ||
        type === ConsultationStatus.UPCOMING
          ? consultation.in_coming || consultation.is_started
          : consultation.is_ended
      ) || [],
    [type, tutorConsultations.list?.data]
  );

  useEffect(() => {
    fetchTutorConsultations();
  }, [fetchTutorConsultations]);

  return (
    <>
      <Row
        style={{
          gap: "30px 0",
        }}
      >
        {tutorConsultations.loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <Col md={3} key={`skeleton-card-${index}`}>
              <CourseCardSkeleton />
            </Col>
          ))
        ) : consultationsData.length === 0 ? (
          <Text style={{ paddingLeft: isMobile ? 20 : 40 }}>
            {t<string>("MyProfilePage.OrdersEmpty")}
          </Text>
        ) : (
          <>
            {" "}
            {consultationsData.map((consultation) => (
              <Col
                key={consultation.consultation_term_id}
                xs={12}
                md={6}
                lg={3}
              >
                <ConsultationTutorCard consultation={consultation} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
};

export default memo(ProfileTutorConsultations);
