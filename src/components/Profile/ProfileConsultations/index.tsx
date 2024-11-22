import { memo, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Col, Row } from "react-grid-system";
import { ConsultationStatus } from "../../../pages/user/my-consultations";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import ConsultationCard from "@/components/Consultations/ConsultationCard";
import ProfileConsultationsProvider from "./ProfileConsultationsProvider";
import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";
import { API } from "@escolalms/sdk/lib";

interface ProfileConsultationsProps {
  type: ConsultationStatus;
}

const ProfileConsultations = ({ type }: ProfileConsultationsProps) => {
  const { userConsultations, fetchUserConsultations } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [consultationsData, setConsultationsData] = useState<
    API.Consultation[]
  >([]);

  const filterConstulations = useMemo(() => {
    const filtered =
      userConsultations.list?.data.filter((consultation) =>
        type === ConsultationStatus.STARTED ||
        type === ConsultationStatus.UPCOMING
          ? consultation.in_coming || consultation.is_started
          : consultation.is_ended
      ) || [];
    const uniqueConsultations = Array.from(
      new Map(filtered.map((item) => [item.id, item])).values()
    );

    return uniqueConsultations;
  }, [type, userConsultations.list?.data]);

  useEffect(() => {
    fetchUserConsultations();
  }, [type, fetchUserConsultations]);

  useEffect(() => {
    setConsultationsData([]);
    setConsultationsData(filterConstulations);
    return () => {
      setConsultationsData([]);
    };
  }, [type, filterConstulations]);

  return (
    <ProfileConsultationsProvider>
      <Row
        style={{
          gap: "30px 0",
        }}
      >
        {userConsultations.loading ? (
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
            {consultationsData.map((consultation) => (
              <Col key={consultation.id} xs={12} md={6} lg={3}>
                <ConsultationCard consultation={consultation} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </ProfileConsultationsProvider>
  );
};

export default memo(ProfileConsultations);
