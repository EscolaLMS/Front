import React, { useEffect, useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileCourses from "@/components/Profile/ProfileCourses";
import ProfileCertificates from "@/components/Profile/ProfileCertificates";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useRoles } from "@/hooks/useRoles";

export enum CourseStatus {
  IN_PROGRESS = "inProgress",
  PLANNED = "planned",
  FINISHED = "finished",
  AUTHORED = "authored",
  ALL = "all",
}

const Content = styled.section`
  .courses-wrapper {
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
const MyProfile = () => {
  const { user } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();
  const { isTutor } = useRoles();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const coursesTabs = {
    tabs: [
      {
        label: t("MyProfilePage.ALlCourses"),
        key: 1,
        component: <ProfileCourses filter={CourseStatus.ALL} />,
      },
      {
        label: t("MyProfilePage.InProgress"),
        key: 2,
        component: <ProfileCourses filter={CourseStatus.IN_PROGRESS} />,
      },
      {
        label: t("MyProfilePage.Planned"),
        key: 3,
        component: <ProfileCourses filter={CourseStatus.PLANNED} />,
      },
      {
        label: t("MyProfilePage.Finished"),
        key: 4,
        component: <ProfileCourses filter={CourseStatus.FINISHED} />,
      },
      {
        label: "Autorskie",
        key: 5,
        component: <ProfileCourses filter={CourseStatus.AUTHORED} />,
      },
    ],
    defaultActiveKey: 1,
  };

  return (
    <ProfileLayout title={t("MyProfilePage.MyCourses")} withTabs>
      <Content>
        <div className="courses-wrapper">
          <Tabs
            tabs={coursesTabs.tabs}
            defaultActiveKey={coursesTabs.defaultActiveKey}
          />
        </div>
        <div className="certificates-container">
          <Title level={2}>{t<string>("MyProfilePage.MyCertificates")}</Title>
          <ProfileCertificates />
        </div>
      </Content>
    </ProfileLayout>
  );
};

export default MyProfile;
