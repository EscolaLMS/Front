import React from "react";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileCourses from "@/components/Profile/ProfileCourses";
import ProfileCertificates from "@/components/Profile/ProfileCertificates";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";
import { useRoles } from "@/hooks/useRoles";
import { useSearchParams } from "@/hooks/useSearchParams";
import Layout from "@/components/_App/Layout";
import Container from "@/components/Common/Container";

export enum CourseStatus {
  IN_PROGRESS = "inProgress",
  PLANNED = "planned",
  FINISHED = "finished",
  AUTHORED = "authored",
  ALL = "all",
}

const Content = styled.section`
  background-color: ${({ theme }) => theme.gray4};
  .courses-wrapper {
    padding-top: 100px;

    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
`;
const MyProfile = () => {
  const { t } = useTranslation();
  const { isTutor } = useRoles();
  const { query, setQueryParam } = useSearchParams();

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
        label: t("MyProfilePage.Finished"),
        key: 4,
        component: <ProfileCourses filter={CourseStatus.FINISHED} />,
      },
      {
        label: t("MyProfilePage.Authored"),
        key: 5,
        component: <ProfileCourses filter={CourseStatus.AUTHORED} />,
        hidden: !isTutor,
      },
    ],
    defaultActiveKey: Number(query.get("status") || 1),
  };

  return (
    <Layout>
      <Container>
        <Content>
          <div className="courses-wrapper">
            <Tabs
              onClick={(key) => {
                setQueryParam("status", String(key));
                setQueryParam("page", "1");
              }}
              tabs={coursesTabs.tabs}
              defaultActiveKey={coursesTabs.defaultActiveKey}
            />
          </div>
          <div className="certificates-container">
            <Title level={2}>{t<string>("MyProfilePage.MyCertificates")}</Title>
            <ProfileCertificates />
          </div>
        </Content>
      </Container>
    </Layout>
  );
};

export default MyProfile;
