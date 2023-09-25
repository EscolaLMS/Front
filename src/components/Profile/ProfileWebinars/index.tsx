import { memo, useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { Col, Row } from "react-grid-system";
import { WebinarStatus } from "../../../pages/user/MyWebinars";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import ContentLoader from "@/components/ContentLoader";

interface ProfileWebinarsProps {
  type: WebinarStatus;
}

const ProfileWebinars = ({ type }: ProfileWebinarsProps) => {
  const { userWebinars, fetchUserWebinars } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const webinarsData = useMemo(
    () =>
      userWebinars.list?.filter((webinar) =>
        type === WebinarStatus.STARTED || type === WebinarStatus.UPCOMING
          ? webinar.in_coming || webinar.is_started
          : webinar.is_ended
      ) || [],
    [type, userWebinars.list]
  );

  useEffect(() => {
    fetchUserWebinars();
  }, [fetchUserWebinars]);

  return (
    <>
      {userWebinars.loading ? (
        <ContentLoader />
      ) : webinarsData.length === 0 ? (
        <Text style={{ paddingLeft: isMobile ? 20 : 40 }}>
          {t<string>("MyProfilePage.OrdersEmpty")}
        </Text>
      ) : (
        <Row
          style={{
            gap: "30px 0",
          }}
        >
          {webinarsData.map((webinar) => (
            <Col key={webinar.id} xs={12} md={6} lg={4}>
              {webinar.name}
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default memo(ProfileWebinars);
