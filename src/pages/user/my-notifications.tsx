import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { Notification } from "@escolalms/components/lib/components/atoms/Notification/Notification";
import styled from "styled-components";

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
  const { user, fetchNotifications, notifications } =
    useContext(EscolaLMSContext);
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      fetchNotifications();
    }
  }, [user]);
  console.log(notifications);

  return (
    <ProfileLayout title="Powiadomienia">
      <NotificationsContainer>
        <div className="single-notification">
          <Notification
            notification={{
              id: "324241",
              unread: true,
              title: "Ostatni dzwonek na szkolenie BHP",
              description:
                "Już za tydzień upływa termin szkolenia BHP przy produkcji Big Mac Vege.",
              dateTime: new Date(),
            }}
            onClick={() => console.log("click")}
            maxLengthDesc={60}
          />
        </div>
      </NotificationsContainer>
    </ProfileLayout>
  );
};

export default MyNotificationsPage;
