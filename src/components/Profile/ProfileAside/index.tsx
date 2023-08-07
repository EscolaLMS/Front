import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { NavLink, useHistory } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import UserSidebar from "@/components/Profile/UserSidebar";
import { HeaderUser, ProgressTropy, UserIcon } from "../../../icons";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import ProfileAsideCollapse from "../ProfileAsideCollapse";
import AvatarUpload from "../AvatarUpload";

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
    theme.mode === "dark" ? theme.dm__background : theme.background};
  .user-main-sidebar {
    margin-bottom: ${isMobile ? "70px" : "22px"};
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
        &:hover {
          p {
            color: ${({ theme }) => theme.primaryColor};
          }
        }
        &.selected {
          p {
            color: ${({ theme }) => theme.primaryColor};
          }
        }
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
        p {
          &:hover {
            color: ${({ theme }) => theme.primaryColor};
          }
        }
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
  display: grid;
  grid-template-columns: auto 1fr;

  &:not(:last-child) {
    margin-bottom: ${isMobile ? 0 : "14px"};
    margin-right: ${isMobile ? "10px" : 0};
  }
  .number {
    color: ${({ theme }) => theme.primaryColor};
  }
  .label {
    margin-left: ${isMobile ? 0 : "11px"};
    margin-top: 10px;
    position: relative;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
    max-width: ${isMobile ? "80px" : "unset"};
  }

  .list-box {
    padding: 0;
    list-style: none;
    width: 100%;
    grid-column: 1/3;
    font-family: "Mulish", sans-serif;
  }

  .list-box-item {
    font-size: 14px;

    :not(:last-child) {
      margin-bottom: 16px;
    }

    &__time {
      color: ${({ theme }) =>
        theme.mode === "dark" ? theme.dm__textColor : theme.textColor};
      opacity: 0.6;
      margin: 0;
      display: flex;
      align-items: center;

      &:first-of-type {
        margin-top: 8px;
      }

      svg {
        width: 12px;
        height: auto;
        fill: ${({ theme }) =>
          theme.mode === "dark" ? theme.dm__textColor : theme.textColor};
        opacity: 0.6;
      }
    }

    &__value {
      font-size: 12px;
      line-height: 1.5;
      margin-left: 4px;
    }
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
    flex-direction: ${isMobile ? "column" : "row"};
  }
`;

const ProfileAside: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { user, logout, certificates, progress, fetchProgress } =
    useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const theme = useTheme();
  const history = useHistory();

  const computedTime = (seconds?: number) => {
    if (!seconds) return "-";

    let secs = seconds;

    const hours = Math.trunc(seconds / 3600);
    if (hours >= 1) secs -= hours * 3600;

    const minutes = Math.trunc(seconds / 60);
    if (minutes >= 1) secs -= minutes * 60;

    return `
        ${hours >= 1 ? hours + "h " : ""}${
      minutes >= 1 ? minutes + "min " : ""
    }${secs >= 1 ? secs + "s" : ""}
    `;
  };

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finishedCourses = useMemo(() => {
    return (progress.value || []).filter(
      (course: API.CourseProgressItem) => course.finish_date
    );
  }, [progress]);

  const mainTabs: NavigationTab[] = [
    {
      key: "COURSES",
      title: t("MyProfilePage.MyCourses"),
      url: "/user/my-profile",
    },
    {
      key: "CONSULTATIONS",
      title: t("MyProfilePage.MyConsultations"),
      url: "/user/my-consultations",
    },
    {
      key: "EVENTS",
      title: t("MyProfilePage.MyStationaryEvents"),
      url: "/user/my-stationary-events",
    },
    {
      key: "TASKS",
      title: t("MyProfilePage.MyTasks"),
      url: "/user/my-tasks",
    },
    {
      key: "BOOKMARKS",
      title: t("MyProfilePage.MyBookmarks"),
      url: "/user/my-bookmarks",
    },
    {
      key: "ORDERS",
      title: t("MyProfilePage.OrdersHistory"),
      url: "/user/my-orders",
    },
    {
      key: "NOTIFICATIONS",
      title: t("MyProfilePage.Notifications"),
      url: "/user/my-notifications",
    },
    {
      key: "EDIT",
      title: t("MyProfilePage.EditData"),
      url: "/user/my-data",
    },
  ];

  return (
    <StyledAside opened={menuOpened}>
      {isMobile && (
        <MobileHeader
          opened={menuOpened}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className="content-wrapper">
            {user.value?.avatar ? (
              <AvatarUpload size="extraSmall" />
            ) : (
              <HeaderUser mode={theme.mode === "dark" ? "light" : "dark"} />
            )}
            <Text>
              <strong>
                {user.value?.first_name} {user.value?.last_name}
              </strong>
            </Text>
          </div>
        </MobileHeader>
      )}
      <div className="user-main-sidebar">
        <UserSidebar title={t("MyProfilePage.YourAccount")} icon={<UserIcon />}>
          <div className="avatar-wrapper">
            {user.value?.avatar ? (
              <AvatarUpload size="small" />
            ) : (
              <HeaderUser mode={theme.mode === "dark" ? "light" : "dark"} />
            )}
            <Title className="name" level={4} as="h3">
              {user.value?.first_name} {user.value?.last_name}
            </Title>
          </div>
          <nav className="navigation">
            {mainTabs.map((item) => (
              <NavLink activeClassName="selected" to={item.url} key={item.key}>
                <Text size="14">{item.title}</Text>
              </NavLink>
            ))}
          </nav>
          <div className="logout-wrapper">
            <button onClick={() => logout().then(() => history.push("/"))}>
              <Text>{t<string>("MyProfilePage.Logout")}</Text>
            </button>
          </div>
        </UserSidebar>
      </div>
      <div className="user-progress sidebar">
        <UserSidebar
          title={t("MyProfilePage.MyProgress")}
          icon={<ProgressTropy />}
        >
          <div className="progress-container">
            <SingleProgress>
              <Title className="number" level={1}>
                {finishedCourses.length}
              </Title>
              <Text className="label">
                {t<string>("MyProfilePage.FinishedCourses")}
              </Text>

              <ul className="list-box">
                {finishedCourses.map((finishedCourse, index) => (
                  <li className="list-box-item">
                    <ProfileAsideCollapse
                      initialValue={index === 0}
                      headerTitle={finishedCourse.course.title}
                      headerClassName="list-box-item__title"
                    >
                      {finishedCourse.start_date && finishedCourse.finish_date && (
                        <p className="list-box-item__time">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                          </svg>

                          <span className="list-box-item__value">
                            {new Date(
                              finishedCourse.start_date
                            ).toLocaleDateString()}
                            {" - "}
                            {new Date(
                              finishedCourse.finish_date
                            ).toLocaleDateString()}
                          </span>
                        </p>
                      )}

                      <p className="list-box-item__time">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 14h6v-6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6zm16 0c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328z" />
                        </svg>

                        <span className="list-box-item__value">
                          {computedTime(finishedCourse.total_spent_time)}
                        </span>
                      </p>
                    </ProfileAsideCollapse>
                  </li>
                ))}
              </ul>
            </SingleProgress>

            <SingleProgress>
              <Title className="number" level={1}>
                {certificates.list?.data.length}
              </Title>
              <Text className="label">
                {t<string>("MyProfilePage.TotalCertificates")}
              </Text>
            </SingleProgress>
          </div>
        </UserSidebar>
      </div>
    </StyledAside>
  );
};

export default ProfileAside;
