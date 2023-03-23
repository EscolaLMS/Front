import React, { useEffect, useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileStationaryEvents from "@/components/Profile/ProfileStationaryEvents";

import ProfileLayout from "@/components/Profile/ProfileLayout";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

const Content = styled.section`
  .events-wrapper {
    margin-top: -70px;
    @media (max-width: 991px) {
      margin-top: 0;
    }
    .tabs-menu {
      margin: 0 0 70px 40px;
      @media (max-width: 991px) {
        margin: 0 0 40px 0;
      }
    }
  }
  .certificates-container {
    margin-top: 70px;
    h2 {
      margin: ${isMobile ? "0 0 22px 20px" : "0 0 22px 40px"};
    }
  }
`;
const MyStationaryEvents = () => {
  const { user, fetchUserStationaryEvents } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();
  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/login");
    } else {
      fetchUserStationaryEvents();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventsTabs = {
    tabs: [
      {
        label: t("MyProfilePage.ALlCourses"),
        key: 1,
        component: <ProfileStationaryEvents filter="all" />,
      },
      {
        label: t("MyProfilePage.InProgress"),
        key: 2,
        component: <ProfileStationaryEvents filter="inProgress" />,
      },
      {
        label: t("MyProfilePage.Planned"),
        key: 3,
        component: <ProfileStationaryEvents filter="planned" />,
      },
      {
        label: t("MyProfilePage.Finished"),
        key: 4,
        component: <ProfileStationaryEvents filter="finished" />,
      },
    ],
    defaultActiveKey: 1,
  };

  return (
    <ProfileLayout title={t("MyProfilePage.MyStationaryEvents")} withTabs>
      <Content>
        <div className="events-wrapper">
          <Tabs
            tabs={eventsTabs.tabs}
            defaultActiveKey={eventsTabs.defaultActiveKey}
          />
        </div>
      </Content>
    </ProfileLayout>
  );
};

export default MyStationaryEvents;
