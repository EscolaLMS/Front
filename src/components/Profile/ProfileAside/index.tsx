import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { NavLink, useHistory } from "react-router-dom";
import UserSidebar from "@/components/Profile/UserSidebar";
import { UserIcon } from "../../../icons";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
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
  background: ${({ theme }) =>
    theme.mode === "dark" ? theme.dm__background : theme.white};
  border-radius: ${({ theme }) => theme.cardRadius}px;

  .user-main-sidebar {
    margin-bottom: ${isMobile ? "20px" : "5px"};

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

type Props = {
  tabs: NavigationTab[];
  isProfile?: boolean;
};

const ProfileAside: React.FC<Props> = ({ tabs, isProfile = true }) => {
  const { settings } = useContext(EscolaLMSContext);
  const [menuOpened] = useState(false);
  const { logout, fetchProgress } = useContext(EscolaLMSContext);
  const { t } = useTranslation();

  const history = useHistory();

  useEffect(() => {
    fetchProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledAsideWrapper>
      {isProfile && (
        <Title level={2} as="h2">
          {t("MyProfilePage.YourAccount")}
        </Title>
      )}

      <StyledAside opened={menuOpened}>
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
