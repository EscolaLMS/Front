import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { Notification } from "@escolalms/components/lib/components/molecules/Notification/Notification";
import styled from "styled-components";
import { getEventType } from "../../utils";
import { t } from "i18next";
import Preloader from "@/components/Preloader";

const NotificationsContainer = styled.div`
  margin-top: 11px;
  row-gap: 11px;
  display: flex;
  flex-direction: column;
  .single-notification {
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray5};
  }
`;

const MyNotificationsPage = () => {
  const { user, fetchNotifications, notifications, readNotify } =
    useContext(EscolaLMSContext);
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      fetchNotifications();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <ProfileLayout title={t("MyProfilePage.Notifications")}>
      <NotificationsContainer>
        {notifications &&
          notifications.list?.map((item) => (
            <div className="single-notification">
              <Notification
                key={item.id}
                notification={{
                  id: "324241",
                  unread: true,
                  title: t<string>(`Notifications.${getEventType(item.event)}`),
                  description: "",
                  dateTime: new Date(item.created_at),
                }}
                onClick={() => {
                  readNotify(item.id);
                }}
                maxLengthDesc={60}
              />
            </div>
          ))}
      </NotificationsContainer>
      {notifications.loading && <Preloader />}
    </ProfileLayout>
  );
};

export default MyNotificationsPage;
