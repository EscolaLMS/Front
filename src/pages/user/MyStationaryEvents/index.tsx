import React, { useEffect, useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileStationaryEvents from "@/components/Profile/ProfileStationaryEvents";

import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";

const MyStationaryEvents = () => {
  const { fetchUserStationaryEvents } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  useEffect(() => {
    fetchUserStationaryEvents();
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
      <Tabs
        tabs={eventsTabs.tabs}
        defaultActiveKey={eventsTabs.defaultActiveKey}
      />
    </ProfileLayout>
  );
};

export default MyStationaryEvents;
