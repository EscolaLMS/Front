import { useTranslation } from "react-i18next";
import { Notification } from "@escolalms/components/lib/components/molecules/Notification/Notification";
import { getNotificationTranslationObject } from "../../utils";
import ContentLoader from "@/components/_App/ContentLoader";
import { Text, Title } from "@escolalms/components/lib/index";
import { useNotifications } from "@/hooks/useNotification";
import { RedArrow } from "@/icons/index";

type Props = {
  onClose?: () => void;
};

const Notifications: React.FC<Props> = ({ onClose }) => {
  const {
    list,
    loading,
    handleReadNotify,
    handleReadAllNotify,
    hasNextPage,
    sentryRef,
  } = useNotifications();
  const { t } = useTranslation();

  return (
    <>
      <div className="notifications-drawer__content__header">
        <Title level={2}>{t("Notifications.notifications")}</Title>
        <button onClick={onClose} title="closebutton">
          <RedArrow />
        </button>
      </div>

      {
        <div className="notifications-drawer__content--clear-all">
          {list.length > 0 && !loading && (
            <button onClick={handleReadAllNotify}>
              {t("Notifications.readAll")}
            </button>
          )}

          {list.length === 0 && !loading && (
            <div>
              <Text> {t("Notifications.empty")}</Text>
            </div>
          )}
        </div>
      }

      <div className="notifications-drawer__content--list">
        {list?.map((item) => (
          <div ref={sentryRef} key={item.id}>
            <Notification
              notification={{
                id: item.id,
                unread: true,
                title: t(
                  getNotificationTranslationObject(item).translation,
                  getNotificationTranslationObject(item).object
                ),
                description: "",
                dateTime: new Date(item.created_at),
              }}
              onClick={() => {
                handleReadNotify(item.id);
              }}
              maxLengthDesc={60}
            />
          </div>
        ))}
        {(loading || hasNextPage) && <ContentLoader />}
      </div>
    </>
  );
};

export default Notifications;
