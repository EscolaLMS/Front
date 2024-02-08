import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileConsultations from "@/components/Profile/ProfileConsultations";
import ProfileTutorConsultations from "@/components/Profile/ProfileTutorConsultations";
import { useRoles } from "@/hooks/useRoles";

export enum ConsultationStatus {
  UPCOMING = "in_coming",
  PAST = "is_ended",
  STARTED = "is_started",
}

const MyConsultationsPage = () => {
  const { t } = useTranslation();
  const { isTutor } = useRoles();

  const elo = () => {
    useEffect(() => {}, [isTutor]);
  };

  const myConsultationsTabs = useMemo(
    () => ({
      tabs: isTutor
        ? [
            {
              label: t("MyProfilePage.Upcoming"),
              key: 1,
              component: (
                <ProfileTutorConsultations type={ConsultationStatus.UPCOMING} />
              ),
            },
            {
              label: t("MyProfilePage.Archived"),
              key: 2,
              component: (
                <ProfileTutorConsultations type={ConsultationStatus.PAST} />
              ),
            },
            {
              label: t("MyProfilePage.BoughtUpcoming"),
              key: 3,
              component: (
                <ProfileConsultations type={ConsultationStatus.UPCOMING} />
              ),
            },
            {
              label: t("MyProfilePage.BoughtArchived"),
              key: 4,
              component: (
                <ProfileConsultations type={ConsultationStatus.PAST} />
              ),
            },
          ]
        : [
            {
              label: t("MyProfilePage.Upcoming"),
              key: 1,
              component: (
                <ProfileConsultations type={ConsultationStatus.UPCOMING} />
              ),
            },
            {
              label: t("MyProfilePage.Archived"),
              key: 2,
              component: (
                <ProfileConsultations type={ConsultationStatus.PAST} />
              ),
            },
          ],
      defaultActiveKey: 1,
    }),
    [isTutor, t],
  );

  return (
    <ProfileLayout title={t("MyProfilePage.MyConsultations")} withTabs>
      <Tabs
        tabs={myConsultationsTabs.tabs}
        defaultActiveKey={myConsultationsTabs.defaultActiveKey}
      />
    </ProfileLayout>
  );
};

export default MyConsultationsPage;
