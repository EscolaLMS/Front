import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { Notification } from "@escolalms/components/lib/components/molecules/Notification/Notification";
import { getEventType } from "../../utils";
import ContentLoader from "@/components/ContentLoader";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import Pagination from "@/components/Pagination";

const NotificationsContainer = styled.div`
  margin-top: 11px;
  margin-bottom: 11px;
  row-gap: 11px;
  display: flex;
  flex-direction: column;
  .single-notification {
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.gray1 : theme.gray5};

    > section {
      box-sizing: border-box;
    }
  }
`;

const MyNotificationsPage = () => {
  const {
    user,
    fetchNotifications,
    notifications,
    readNotify,
    readAllNotifications,
  } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();
  const meta = notifications.list?.meta;
  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/login");
    } else {
      fetchNotifications({
        page: 1,
        per_page: 10,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfileLayout
      title={t("MyProfilePage.Notifications")}
      actions={
        <Button
          mode={"secondary"}
          onClick={() => {
            readAllNotifications();
          }}
          disabled={notifications.loading || !notifications.list?.data.length}
        >
          {t("ReadAll")}
        </Button>
      }
    >
      <NotificationsContainer>
        {notifications.loading && <ContentLoader />}
        {notifications &&
          notifications.list?.data?.map((item, index) => (
            <div key={index} className="single-notification">
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
      {meta && meta.total > meta.per_page && (
        <Pagination
          currentPage={meta.current_page}
          total={meta.total}
          perPage={10}
          onPage={(i) =>
            fetchNotifications({
              page: i,
              per_page: 10,
            })
          }
        />
      )}
    </ProfileLayout>
  );
};

export default MyNotificationsPage;
