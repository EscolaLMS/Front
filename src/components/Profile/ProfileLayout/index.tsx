import Layout from "../../../components/_App/Layout";
import ProfileAside, { NavigationTab } from "@/components/Profile/ProfileAside";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactNode, useContext, useEffect, useMemo } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Common/Container";
import routeRoutes from "@/components/Routes/routes";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

type Props = {
  children: ReactNode;
  title: string;
  withTabs?: boolean;
  actions?: ReactNode;
};

const StyledProfile = styled.section`
  background-color: ${({ theme }) => theme.gray4};
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 70vh;
  .tabs-menu {
    padding: 0 0 70px 40px;
    background: #f8f8f8;
  }
  .certificates-container {
    margin-top: 70px;
    h2 {
      margin-left: 40px;
    }
  }
  @media (max-width: 767px) {
    padding-top: 80px;
    min-height: auto;
  }
`;

const ProfileLayout: React.FC<Props> = ({
  children,
  title,
  withTabs,
  actions,
}) => {
  const { user } = useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push(routeRoutes.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const mainTabs: NavigationTab[] = useMemo(
    () => [
      {
        key: "ORDERS",
        title: t("MyProfilePage.OrdersHistory"),
        url: routeRoutes.myOrders,
      },
      {
        key: "EDIT",
        title: t("MyProfilePage.EditData"),
        url: routeRoutes.myData,
      },
      {
        key: "CERS",
        title: t("MyProfilePage.MyCertificates"),
        url: routeRoutes.myCertificates,
      },
      {
        key: "SUBSCRIPTIONS",
        title: t("MyProfilePage.Subscriptions"),
        url: routeRoutes.mySubscriptions,
      },
      {
        key: "COURSES",
        title: t("MyProfilePage.MyCourses"),
        url: routeRoutes.myProfile,
      },
      {
        key: "CONSULTATIONS",
        title: t("MyProfilePage.MyConsultations"),
        url: routeRoutes.myConsultations,
      },
    ],
    [t]
  );

  return (
    <Layout metaTitle={title}>
      <StyledProfile>
        <Container>
          <Row>
            {!isMobile && (
              <Col lg={3}>
                <ProfileAside tabs={mainTabs} />
              </Col>
            )}

            <Col offset={{ lg: 0.5 }} lg={isMobile ? 12 : 8.5}>
              <ProfileHeader
                title={title}
                withTabs={withTabs}
                actions={actions}
              />
              {children}
            </Col>
          </Row>
        </Container>
      </StyledProfile>
    </Layout>
  );
};

export default ProfileLayout;
