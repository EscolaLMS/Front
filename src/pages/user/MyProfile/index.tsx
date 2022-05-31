import React, { useEffect, useContext } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useHistory } from "react-router-dom";
import Layout from "../../../components/_App/Layout";
import "./index.scss";
import styled from "styled-components";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Tabs } from "@escolalms/components/lib/components/atoms/Tabs/Tabs";
import ProfileCourses from "@/components/Profile/ProfileCourses";

import ProfileCertificates from "@/components/Profile/ProfileCertificates";
import ProfileAside from "@/components/Profile/ProfileAside";
import ProfileHeader from "@/components/Profile/ProfileHeader";

const StyledProfile = styled.section`
  .courses-wrapper {
    margin-top: -70px;
    .tabs-menu {
      margin: 0 0 70px 40px;
    }
  }
  .certificates-container {
    margin-top: 70px;
    h2 {
      margin-left: 40px;
    }
  }
`;
const MyProfile = () => {
  const { user, fetchProgress, fetchCertificates, certificates } =
    useContext(EscolaLMSContext);
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/authentication");
    } else {
      fetchProgress();
      fetchCertificates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, user]);

  const coursesTabs = {
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
              <ProfileHeader title="Moje szkolenia" withTabs />
              <div className="courses-wrapper">
                <Tabs
                  onClick={() => console.log("")}
                  tabs={coursesTabs.tabs}
                  defaultActiveKey={coursesTabs.defaultActiveKey}
                />
              </div>
              <div className="certificates-container">
                <Title level={2}>Moje certyfikaty</Title>
                <ProfileCertificates certificates={certificates} />
              </div>
            </div>
            <div className="col-lg-3">
              <ProfileAside />
            </div>
          </div>
        </div>
      </StyledProfile>
    </Layout>
  );
};

export default MyProfile;
