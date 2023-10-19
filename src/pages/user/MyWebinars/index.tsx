import { useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileWebinars from "@/components/Profile/ProfileWebinars";

export enum WebinarStatus {
  UPCOMING = "in_coming",
  PAST = "is_ended",
  STARTED = "is_started",
}

const MyWebinarsStyled = styled.section`
  margin-top: -70px;
  .tabs-menu {
    margin: 0 0 70px 40px;
  }
`;

const MyWebinarsPage = () => {
  const { userWebinars, fetchUserWebinars } = useContext(EscolaLMSContext);
  const { user } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    fetchUserWebinars();
  }, [fetchUserWebinars]);

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const upcomingWebinars = useMemo(
    () =>
      userWebinars.list?.filter(
        (webinar) => webinar.in_coming || webinar.is_started
      ) || [],
    [userWebinars.list]
  );

  const pastWebinars = useMemo(
    () => userWebinars.list?.filter((webinar) => webinar.is_ended) || [],
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
      <MyWebinarsStyled>
        <Tabs tabs={myTabs.tabs} defaultActiveKey={myTabs.defaultActiveKey} />
      </MyWebinarsStyled>
    </ProfileLayout>
  );
};

export default MyWebinarsPage;
