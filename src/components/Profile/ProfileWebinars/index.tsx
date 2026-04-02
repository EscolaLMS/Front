import { memo, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import ContentLoader from "@/components/_App/ContentLoader";
import styled from "styled-components";
import ProfileNoData from "../NoData";
import routes from "../../Routes/routes";
import WebinarsContainerItem from "../../Webinars/List/WebinarsContainer/Items/Item";
import { API } from "@escolalms/sdk/lib";
import { ProfileWebinarItemFooter } from "./ItemFooter";
import { ProfileWebinarItemActions } from "./ItemActions";
import WebinarMeetModal from "@/components/Webinars/Webinar/WebinarMeetModal";
import { WebinarsContext } from "@/components/Webinars/List/WebinarsContext";

const RowStyled = styled(Row)`
  gap: 30px 0;
`;

interface ProfileWebinarsProps {
  webinars: API.Webinar[];
  loading: boolean;
  isPast?: boolean;
}

const ProfileWebinars = ({
  webinars,
  loading,
}: // isPast,
ProfileWebinarsProps) => {
  const [webinarJoinId, setWebinarJoinId] = useState<number | undefined>(
    undefined
  );
  const [webinarData, setWebinarData] = useState<API.Webinar | undefined>(
    undefined
  );

  const webinarsContext = useContext(WebinarsContext);
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
    <RowStyled>
      {webinars.map((webinar) => (
        <Col key={webinar.id} xs={12} md={6} lg={4}>
          <WebinarsContainerItem
            webinar={webinar}
            actions={
              <ProfileWebinarItemActions
                webinar={webinar}
                onJoin={() => {
                  setWebinarData(webinar);
                  setWebinarJoinId(webinar.id);
                  webinarsContext?.setModalOpen?.(true);
                }}
              />
            }
            footer={<ProfileWebinarItemFooter webinar={webinar} />}
          />
        </Col>
      ))}
      {!!webinarJoinId && (
        <WebinarMeetModal
          visible={!!webinarJoinId}
          onClose={() => setWebinarJoinId(undefined)}
          webinarId={webinarJoinId}
          webinar={webinarData}
        />
      )}
    </RowStyled>
  );
};

export default memo(ProfileWebinars);
