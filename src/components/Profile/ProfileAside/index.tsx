import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import React, { useContext, useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Link, NavLink, useHistory } from "react-router-dom";
import UserSidebar from "@/components/Profile/UserSidebar";
import { HeaderUser, UserIcon } from "../../../icons";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import AvatarUpload from "../AvatarUpload";
import routeRoutes from "@/components/Routes/routes";

export type NavigationTab = {
  title: string;
  key: string;
  url: string;
};

const StyledAsideWrapper = styled.div`
  h2 {
    margin-bottom: 10px;
  }
`;

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
    theme.mode === "dark" ? theme.dm__background : theme.white};
  border-radius: ${({ theme }) => theme.cardRadius}px;

  .user-main-sidebar {
    margin-bottom: ${isMobile ? "70px" : "5px"};

    .name {
      margin: ${isMobile ? "0 0 0 21px" : "16px 0 0 0"};
    }
    .navigation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 10px;
      cursor: pointer;
      position: relative;
      button {
        all: unset;
      }
      a,
      button {
        text-decoration: none;
        display: block;
        width: 100%;
        border-radius: ${({ theme }) => theme.cardRadius}px;
        transition: background-color 0.3s ease, color 0.3s ease;
        p {
          padding: 10px 20px;
        }
        &:hover {
          background-color: ${({ theme }) => theme.gray3};
        }
        &.selected {
          background-color: ${({ theme }) => theme.primaryColor};
          p {
            color: ${({ theme }) => theme.white};
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

type Props = {
  tabs: NavigationTab[];
  isProfile?: boolean;
};

const ProfileAside: React.FC<Props> = ({ tabs, isProfile = true }) => {
  const { settings } = useContext(EscolaLMSContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const { user, logout, fetchProgress } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const theme = useTheme();
  const history = useHistory();

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ settings });

  return (
    <StyledAsideWrapper>
      {isProfile && (
        <Title level={2} as="h2">
          {t("MyProfilePage.YourAccount")}
        </Title>
      )}

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
          <UserSidebar icon={<UserIcon />}>
            <nav className="navigation">
              {tabs.map((item) => (
                <NavLink
                  activeClassName="selected"
                  to={item.url}
                  key={item.key}
                >
                  <Text size="16">{item.title}</Text>
                </NavLink>
              ))}

              {isProfile && settings.value.config.termsPage && (
                <NavLink to={`/${settings.value.config.termsPage}`}>
                  <Text size="16">{t("Terms")}</Text>
                </NavLink>
              )}
            </nav>
          </UserSidebar>
        </div>
      </StyledAside>
      {isProfile && (
        <StyledAside opened={menuOpened}>
          <div className="user-main-sidebar">
            <UserSidebar>
              <div className="navigation">
                <button
                  onClick={() =>
                    logout().then(() => history.push(routeRoutes.home))
                  }
                >
                  <Text>{t<string>("MyProfilePage.Logout")}</Text>
                </button>
              </div>
            </UserSidebar>
          </div>
        </StyledAside>
      )}
    </StyledAsideWrapper>
  );
};

export default ProfileAside;
