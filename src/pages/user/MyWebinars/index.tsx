import { useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileWebinars from "@/components/Profile/ProfileWebinars";
import { API } from "@escolalms/sdk/lib";

export enum WebinarStatus {
  UPCOMING = "in_coming",
  PAST = "is_ended",
  STARTED = "is_started",
}

const MyWebinarsPage = () => {
  const { userWebinars, fetchUserWebinars } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  useEffect(() => {
    fetchUserWebinars();
  }, [fetchUserWebinars]);

  const { upcomingWebinars, pastWebinars } = useMemo(
    () =>
      (userWebinars.list ?? []).reduce<{
        upcomingWebinars: API.Webinar[];
        pastWebinars: API.Webinar[];
      }>(
        (acc, webinar) => {
          if (webinar.in_coming || webinar.is_started)
            acc.upcomingWebinars.push(webinar);
          if (webinar.is_ended) acc.pastWebinars.push(webinar);
          return acc;
        },
        { upcomingWebinars: [], pastWebinars: [] }
      ),
    [userWebinars.list]
  );

  const myTabs = useMemo(
    () => ({
      tabs: [
        {
          label: t("MyProfilePage.Upcoming"),
          key: 1,
          component: (
            <ProfileWebinars
              webinars={upcomingWebinars}
              loading={userWebinars.loading}
            />
          ),
        },
        {
          label: t("MyProfilePage.Archived"),
          key: 2,
          component: (
            <ProfileWebinars
              webinars={pastWebinars}
              loading={userWebinars.loading}
              isPast
            />
          ),
        },
      ],
      defaultActiveKey: 1,
    }),
    [pastWebinars, t, upcomingWebinars, userWebinars.loading]
  );

  return (
    <ProfileLayout title={t("MyProfilePage.MyWebinars")} withTabs>
      <Tabs tabs={myTabs.tabs} defaultActiveKey={myTabs.defaultActiveKey} />
    </ProfileLayout>
  );
};

export default MyWebinarsPage;
