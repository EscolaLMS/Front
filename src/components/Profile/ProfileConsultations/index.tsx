import { memo, useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Col, Row } from "react-grid-system";
import { ConsultationStatus } from "../../../pages/user/my-consultations";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import ConsultationCard from "@/components/ConsultationCard";
import ContentLoader from "@/components/ContentLoader";

interface ProfileConsultationsProps {
  type: ConsultationStatus;
}

const ProfileConsultations = ({ type }: ProfileConsultationsProps) => {
  const { userConsultations, fetchUserConsultations } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const consultationsData = useMemo(
    () =>
      userConsultations.list?.data.filter((consultation) =>
        type === ConsultationStatus.STARTED ||
        type === ConsultationStatus.UPCOMING
          ? consultation.in_coming || consultation.is_started
          : consultation.is_ended
      ) || [],
    [type, userConsultations.list?.data]
  );

  useEffect(() => {
    fetchUserConsultations();
  }, [type, fetchUserConsultations]);

  return userConsultations.loading ? (
    <ContentLoader />
  ) : consultationsData.length === 0 ? (
    <Text style={{ paddingLeft: isMobile ? 20 : 40 }}>
      {t<string>("MyProfilePage.OrdersEmpty")}
    </Text>
  ) : (
    <Row
      style={{
        gap: "30px 0",
      }}
    >
      {consultationsData.map((consultation) => (
        <Col key={consultation.id} xs={12} md={6} lg={4}>
          <ConsultationCard consultation={consultation} />
        </Col>
      ))}
    </Row>
  );
};

export default memo(ProfileConsultations);
