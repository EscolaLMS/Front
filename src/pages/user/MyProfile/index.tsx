import React, { useEffect, useContext, useMemo } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import Layout from "../../../components/_App/Layout";
import { useTranslation } from "react-i18next";
import "./index.scss";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileCourses from "@/components/Profile/ProfileCourses";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Link } from "react-router-dom";
import UserSidebar from "@/components/Profile/UserSidebar";
import { ProgressTropy, UserIcon } from "../../../icons";
import ProfileCertificates from "@/components/Profile/ProfileCertificates";

const StyledProfile = styled.section`
  .profile-header {
    position: relative;
    z-index: 1;
    padding: 105px 0 0;
    &:before {
      position: absolute;
      z-index: -1;
      content: "";
      left: 0;
      top: 0;
      height: 260px;
      width: 100%;
      background: ${({ theme }) =>
        theme.mode === "dark" ? theme.gray1 : theme.gray5};
    }
    .tabs-menu {
      margin: 25px 0 65px 40px;
    }
    h1 {
      margin-left: 40px;
    }
  }

  .certificates-container {
    margin-top: 70px;
    h2 {
      margin-left: 40px;
    }
  }

  .user-main-sidebar {
    .avatar-wrapper {
      margin-bottom: 16px;
    }
    .name {
      margin-bottom: 21px;
    }
    .navigation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 15px;
      margin-bottom: 50px;
      a {
        text-decoration: none;
      }
    }
    .logout-wrapper {
      position: relative;
      &:before {
        position: absolute;
        content: "";
        left: 0;
        top: -16px;
        height: 1px;
        width: 24px;
        background: ${({ theme }) =>
          theme.mode === "dark" ? theme.gray5 : theme.gray1};
      }
      button {
        appearance: none;
        outline: none;
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
        cursor: pointer;
      }
    }
  }
`;

const SingleProgress = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  .number {
    min-width: 56px;
    color: ${({ theme }) => theme.primaryColor};
  }
  .label {
    margin-left: 11px;
    position: relative;
    top: -12px;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
  }
`;

const MyProfile = () => {
  const {
    user,
    logout,
    progress,
    fetchProgress,
    fetchCertificates,
    certificates,
  } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      fetchProgress();
      fetchCertificates();
    }
  }, [history, user]);

  const finishedCourses = useMemo(() => {
    return (progress.value || []).filter(
      (course: API.CourseProgressItem) => course.finish_date
    );
  }, [progress]);

  console.log(user);
  const tabsNavigation = {
    tabs: [
      {
        label: "Wszystkie kursy",
        key: 1,
        component: <ProfileCourses filter="all" />,
      },
      {
        label: "W trakcie",
        key: 2,
        component: <ProfileCourses filter="inProgress" />,
      },
      {
        label: "Zaplanowane",
        key: 3,
        component: <ProfileCourses filter="planned" />,
      },
      {
        label: "Ukończone",
        key: 4,
        component: <ProfileCourses filter="finished" />,
      },
    ],
    defaultActiveKey: 1,
  };

  return (
    <Layout>
      <StyledProfile>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="profile-header">
                <Title level={1}>Moje szkolenia</Title>
                <div className="tabs-wrapper">
                  <Tabs
                    onClick={() => console.log("")}
                    tabs={tabsNavigation.tabs}
                    defaultActiveKey={tabsNavigation.defaultActiveKey}
                  />
                </div>
              </div>
              <div className="certificates-container">
                <Title level={2}>Moje certyfikaty</Title>
                <ProfileCertificates certificates={certificates} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="user-main-sidebar">
                <UserSidebar title="Twoje konto" icon={<UserIcon />}>
                  <div className="avatar-wrapper">
                    <Avatar
                      size="small"
                      src={user.value?.avatar_url || ""}
                      alt=""
                    />
                  </div>
                  <Title className="name" level={4}>
                    {user.value?.first_name} {user.value?.last_name}
                  </Title>
                  <nav className="navigation">
                    <Link to="/" className="navigation-link">
                      <Text>Płatności</Text>
                    </Link>
                    <Link to="/" className="navigation-link">
                      <Text>Faktury</Text>
                    </Link>
                    <Link to="/" className="navigation-link">
                      <Text>Webinary</Text>
                    </Link>
                    <Link to="/" className="navigation-link">
                      <Text>Powiadomienia</Text>
                    </Link>
                  </nav>
                  <div className="logout-wrapper">
                    <button
                      onClick={() => logout().then(() => history.push("/"))}
                    >
                      <Text>Wyloguj</Text>
                    </button>
                  </div>
                </UserSidebar>
              </div>
              <div className="user-progress sidebar">
                <UserSidebar title="Moje postępy" icon={<ProgressTropy />}>
                  <SingleProgress>
                    <Title className="number" level={1}>
                      {finishedCourses.length}
                    </Title>
                    <Text className="label">ukończonych kursów</Text>
                  </SingleProgress>
                  <SingleProgress>
                    <Title className="number" level={1}>
                      {certificates.list?.data.length}
                    </Title>
                    <Text className="label">zdobytych certyfikatów</Text>
                  </SingleProgress>
                  <SingleProgress>
                    <Title className="number" level={1}>
                      65
                    </Title>
                    <Text className="label">godzin nauki</Text>
                  </SingleProgress>
                </UserSidebar>
              </div>
            </div>
          </div>
        </div>
      </StyledProfile>
    </Layout>
  );
};

export default MyProfile;
