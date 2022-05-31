import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import React, { ReactNode, useContext, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Link, useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import UserSidebar from "@/components/Profile/UserSidebar";
import { ProgressTropy, UserIcon } from "../../../icons";

type NavigationTab = {
  title: string;
  key: string;
  component: ReactNode;
  url: string;
};

const StyledAside = styled.aside`
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

const mainTabs: NavigationTab[] = [
  {
    key: "PAYMENTS",
    title: "Płatności",
    url: "/",
    component: <></>,
  },
  {
    key: "INVOICES",
    title: "Faktury",
    url: "/",
    component: <></>,
  },
  {
    key: "CURSES",
    title: "Kursy",
    url: "/",
    component: <></>,
  },
  {
    key: "NOTIFICATIONS",
    title: "Powiadomienia",
    url: "/",
    component: <></>,
  },
];

const ProfileAside: React.FC = () => {
  const { user, logout, certificates, progress, fetchProgress } =
    useContext(EscolaLMSContext);
  const history = useHistory();
  useEffect(() => {
    fetchProgress();
  }, []);

  const finishedCourses = useMemo(() => {
    return (progress.value || []).filter(
      (course: API.CourseProgressItem) => course.finish_date
    );
  }, [progress]);
  return (
    <StyledAside>
      <div className="user-main-sidebar">
        <UserSidebar title="Twoje konto" icon={<UserIcon />}>
          <div className="avatar-wrapper">
            <Avatar size="small" src={user.value?.avatar_url || ""} alt="" />
          </div>
          <Title className="name" level={4}>
            {user.value?.first_name} {user.value?.last_name}
          </Title>
          <nav className="navigation">
            {mainTabs.map((item) => (
              <Link to={item.url}>
                <Text>{item.title}</Text>
              </Link>
            ))}
          </nav>
          <div className="logout-wrapper">
            <button onClick={() => logout().then(() => history.push("/"))}>
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
    </StyledAside>
  );
};

export default ProfileAside;
