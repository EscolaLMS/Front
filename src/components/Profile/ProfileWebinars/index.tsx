import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import ContentLoader from "@/components/ContentLoader";
import ProfileNoData from "../NoData";
import routes from "../../Routes/routes";
import WebinarsContainerItem from "../../Webinars/WebinarsContainer/Items/Item";
import { API } from "@escolalms/sdk/lib";
import { ProfileWebinarItemFooter } from "./ItemFooter";
import { ProfileWebinarItemActions } from "./ItemActions";
import WebinarMeetModal from "@/components/Webinar/WebinarMeetModal";

interface ProfileWebinarsProps {
  webinars: API.Webinar[];
  loading: boolean;
  isPast?: boolean;
}

const ProfileWebinars = ({
  webinars,
  loading,
  isPast,
}: ProfileWebinarsProps) => {
  const [webinarJoinId, setWebinarJoinId] = useState<number | undefined>(
    undefined
  );
  const { t } = useTranslation();

  if (loading) {
    return <ContentLoader />;
  }

  if (webinars.length === 0) {
    return (
      <ProfileNoData
        title={t("MyProfilePage.EmptyWebinarTitle")}
        description={t("MyProfilePage.EmptyWebinarText")}
        buttonText={t("MyProfilePage.EmptyWebinarsBtnText")}
        buttonLocation={routes.webinars}
      />
    );
  }
  return (
    <Row
      style={{
        gap: "30px 0",
      }}
    >
      {webinars.map((webinar) => (
        <Col key={webinar.id} xs={12} md={6} lg={4}>
          <WebinarsContainerItem
            webinar={webinar}
            actions={
              <ProfileWebinarItemActions
                webinar={webinar}
                onJoin={() => setWebinarJoinId(webinar.id)}
              />
            }
            footer={<ProfileWebinarItemFooter webinar={webinar} />}
          />
        </Col>
      ))}
      {/* MEET MODAL */}
      {!!webinarJoinId && (
        <WebinarMeetModal
          visible={!!webinarJoinId}
          onClose={() => setWebinarJoinId(undefined)}
          webinarId={webinarJoinId}
        />
      )}
    </Row>
  );
};

export default memo(ProfileWebinars);
