import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Link, useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import UserSidebar from "@/components/Profile/UserSidebar";
import { ProgressTropy, UserIcon } from "../../../icons";
import { isMobile } from "react-device-detect";

type NavigationTab = {
  title: string;
  key: string;
  url: string;
};

const StyledAside = styled("aside")<{ opened: boolean }>`
  ${isMobile &&
  `
    box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    transition: all 0.25s;
    z-index: 1000;
    overflow: scroll;
    `}
  transform: ${(props) =>
    props.opened && isMobile
      ? "translate(0, 0%)"
      : !props.opened && isMobile
      ? "translate(0, 91%)"
      : "translate(0, 0)"};
  background: ${({ theme }) =>
    theme.mode === "dark" ? theme.backgroundDark : theme.backgroundLight};
  .user-main-sidebar {
    margin-bottom: ${isMobile ? "70px" : "22px"};
    .avatar-wrapper {
      margin-bottom: ${isMobile ? "30px" : "21px"};
      display: flex;
      justify-content: flex-start;
      align-items: ${isMobile ? "center" : "flex-start"};
      flex-direction: ${isMobile ? "row" : "column"};
    }
    .name {
      margin: ${isMobile ? "0 0 0 21px" : "16px 0 0 0"};
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
  .progress-container {
    display: flex;
    flex-direction: ${isMobile ? "row" : "column"};
    flex-wrap: wrap;
    justify-content: ${isMobile ? "space-between" : "flex-start"};
    align-items: ${isMobile ? "center" : "flex-start"};
  }
`;

const SingleProgress = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: ${isMobile ? "flex-start" : "flex-end"};
  flex-direction: ${isMobile ? "column" : "row"};
  &:not(:last-child) {
    margin-bottom: ${isMobile ? 0 : "14px"};
    margin-right: ${isMobile ? "10px" : 0};
  }
  .number {
    min-width: 56px;
    color: ${({ theme }) => theme.primaryColor};
  }
  .label {
    margin-left: ${isMobile ? 0 : "11px"};
    position: relative;
    top: ${isMobile ? 0 : "-12px"};
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
    max-width: ${isMobile ? "80px" : "unset"};
  }
`;

const MobileHeader = styled("div")<{ onClick: () => void; opened: boolean }>`
  padding: 17px 15px;
  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  &:after {
    content: "";
    display: ${({ opened }) => (opened ? "block" : "none")};
    position: absolute;
    right: 22px;
    top: 50%;
    transform: translate(0, -50%) rotate(-45deg);
    width: 12px;
    height: 12px;
    border-left: 2px solid
      ${({ theme }) => (theme.mode === "dark" ? theme.gray5 : theme.gray1)};
    border-bottom: 2px solid
      ${({ theme }) => (theme.mode === "dark" ? theme.gray5 : theme.gray1)};
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
  }
`;

const mainTabs: NavigationTab[] = [
  {
    key: "PAYMENTS",
    title: "Moje szkolenia",
    url: "/",
  },
  {
    key: "PAYMENTS",
    title: "Płatności",
    url: "/",
  },
  {
    key: "INVOICES",
    title: "Faktury",
    url: "/",
  },
  {
    key: "NOTIFICATIONS",
    title: "Powiadomienia",
    url: "/",
  },
];

const ProfileAside: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
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
    <StyledAside opened={menuOpened}>
      {isMobile && (
        <MobileHeader
          opened={menuOpened}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className="content-wrapper">
            <Avatar
              size="extraSmall"
              src={user.value?.avatar_url || ""}
              alt=""
            />
            <Text>
              <strong>
                {user.value?.first_name} {user.value?.last_name}
              </strong>
            </Text>
          </div>
        </MobileHeader>
      )}
      <div className="user-main-sidebar">
        <UserSidebar title="Twoje konto" icon={<UserIcon />}>
          <div className="avatar-wrapper">
            <Avatar size="small" src={user.value?.avatar_url || ""} alt="" />
            <Title className="name" level={4}>
              {user.value?.first_name} {user.value?.last_name}
            </Title>
          </div>
          <nav className="navigation">
            {mainTabs.map((item) => (
              <Link to={item.url} key={item.key}>
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
          <div className="progress-container">
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
          </div>
        </UserSidebar>
      </div>
    </StyledAside>
  );
};

export default ProfileAside;
