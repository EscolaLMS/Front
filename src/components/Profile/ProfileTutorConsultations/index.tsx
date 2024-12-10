import {
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Col, Row } from "react-grid-system";
import { ConsultationStatus } from "../../../pages/user/my-consultations";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import ConsultationTutorCard from "@/components/Consultations/ConsultationTutorCard";
import { CourseCardSkeleton } from "@/components/Skeletons/CourseCard";
import { API } from "@escolalms/sdk/lib";
import { API_URL } from "@/config/index";
interface ProfileTutorConsultationsProps {
  type: ConsultationStatus;
}

const ProfileTutorConsultations = ({
  type,
}: ProfileTutorConsultationsProps) => {
  const { tutorConsultations, fetchTutorConsultations, token } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [consultationsData, setConsultationsData] = useState<
    API.AppointmentTerm[]
  >([]);

  const filterConstulations = useMemo(
    () =>
      tutorConsultations.list?.data.filter((consultation) =>
        type === ConsultationStatus.STARTED ||
        type === ConsultationStatus.UPCOMING
          ? consultation.in_coming || consultation.is_started
          : consultation.is_ended
      ) || [],
    [type, tutorConsultations.list?.data]
  );

  const refreshConsultation = useCallback(
    async (id: number, termId: number) => {
      try {
        const request = await fetch(
          `${API_URL}/api/consultations/my-schedule?ids[]=${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const response = await request.json();

        if (response.success && response.data.length > 0) {
          const responseIndex = response.data.findIndex(
            (consultation: API.AppointmentTerm) =>
              consultation?.consultation_term_id === termId
          );
          setConsultationsData((prev) => {
            const index = prev.findIndex(
              (consultation: API.AppointmentTerm) =>
                consultation?.consultation_term_id === termId
            );

            if (index !== -1) {
              prev[index] = response.data[responseIndex];
            }

            return [...prev];
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [token]
  );

  const handleRefreshIfTimePassed = useCallback(() => {
    consultationsData.forEach((consultation) => {
      if (!consultation.is_started && !consultation.is_ended) {
        refreshConsultation(
          // @ts-ignore
          consultation?.consultation_id,
          consultation?.consultation_term_id
        );
      }
    });
  }, [consultationsData, refreshConsultation]);

  useEffect(() => {
    fetchTutorConsultations();
  }, [fetchTutorConsultations]);

  useEffect(() => {
    setConsultationsData([]);
    setConsultationsData(filterConstulations);
    const interval = setInterval(() => {
      handleRefreshIfTimePassed();
    }, 30000);
    return () => {
      setConsultationsData([]);
      clearInterval(interval);
    };
  }, [type, filterConstulations, handleRefreshIfTimePassed]);

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
                key={consultation?.consultation_term_id}
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
