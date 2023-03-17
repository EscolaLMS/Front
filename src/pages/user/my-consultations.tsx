import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useContext, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import styled from "styled-components";
import ProfileConsultations from "@/components/Profile/ProfileConsultations";

export enum ConsultationStatus {
  UPCOMING = "in_coming",
  PAST = "is_ended",
  STARTED = "is_started",
}

const StyledConsultations = styled.section`
  margin-top: -70px;
  .tabs-menu {
    margin: 0 0 70px 40px;
  }
`;

const MyConsultationsPage = () => {
  const { user } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myConsultationsTabs = useMemo(
    () => ({
      tabs: [
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
          component: <ProfileConsultations type={ConsultationStatus.PAST} />,
        },
      ],
      defaultActiveKey: 1,
    }),
    [t]
  );

  return (
    <ProfileLayout title={t("MyProfilePage.MyConsultations")} withTabs>
      <StyledConsultations>
        <Tabs
          tabs={myConsultationsTabs.tabs}
          defaultActiveKey={myConsultationsTabs.defaultActiveKey}
        />
      </StyledConsultations>
    </ProfileLayout>
  );
};

export default MyConsultationsPage;
