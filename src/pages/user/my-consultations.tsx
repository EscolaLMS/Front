import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ContentLoader from "@/components/ContentLoader";
import { isMobile } from "react-device-detect";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import ConsultationCard from "@/components/ConsultationCard";
import { Col, Row } from "react-grid-system";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import styled from "styled-components";

enum ConsultationStatus {
  UPCOMING = "upcoming",
  PAST = "past",
}

interface MyConsultationsTabsPanelProps {
  type: ConsultationStatus;
}

const StyledConsultations = styled.section`
  margin-top: -70px;
  .tabs-menu {
    margin: 0 0 70px 40px;
  }
`;

const MyConsultationsPage = () => {
  const { user, userConsultations, fetchUserConsultations } =
    useContext(EscolaLMSContext);
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/login");
    } else {
      fetchUserConsultations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MyConsultationsTabsPanel: React.FC<MyConsultationsTabsPanelProps> = (
    props
  ) => {
    const { type } = props;
    return (
      <Row
        style={{
          gap: "30px 0",
        }}
      >
        {userConsultations.list?.data
          .filter((consultation) => {
            return type === ConsultationStatus.UPCOMING
              ? consultation.in_coming === true
              : consultation.is_ended === true;
          })
          .map((consultation) => (
            <Col key={consultation.id} xs={12} md={6} lg={4}>
              <ConsultationCard consultation={consultation} />
            </Col>
          ))}
      </Row>
    );
  };

  const myConsultationsTabs = {
    tabs: [
      {
        label: t("MyProfilePage.Upcoming"),
        key: 1,
        component: (
          <MyConsultationsTabsPanel type={ConsultationStatus.UPCOMING} />
        ),
      },
      {
        label: t("MyProfilePage.Archived"),
        key: 2,
        component: <MyConsultationsTabsPanel type={ConsultationStatus.PAST} />,
      },
    ],
    defaultActiveKey: 1,
  };

  return (
    <ProfileLayout title={t("MyProfilePage.MyConsultations")} withTabs>
      {userConsultations.loading ? (
        <ContentLoader />
      ) : userConsultations.list?.data.length === 0 ? (
        <Text style={{ paddingLeft: isMobile ? 20 : 40 }}>
          {t<string>("MyProfilePage.OrdersEmpty")}
        </Text>
      ) : (
        <StyledConsultations>
          <Tabs
            tabs={myConsultationsTabs.tabs}
            defaultActiveKey={myConsultationsTabs.defaultActiveKey}
          />
        </StyledConsultations>
      )}
    </ProfileLayout>
  );
};

export default MyConsultationsPage;
