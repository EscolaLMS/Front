import Layout from "../../../components/_App/Layout";
import ProfileAside from "@/components/Profile/ProfileAside";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactNode, useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Col, Container, Row } from "react-grid-system";

type Props = {
  children: ReactNode;
  title: string;
  withTabs?: boolean;
};

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

const ProfileLayout: React.FC<Props> = ({ children, title, withTabs }) => {
  const { user } = useContext(EscolaLMSContext);
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout metaTitle={title}>
      <StyledProfile>
        <Container>
          <Row>
            <Col lg={9}>
              <ProfileHeader title={title} withTabs={withTabs} />
              {children}
            </Col>
            <Col lg={3}>
              <ProfileAside />
            </Col>
          </Row>
        </Container>
      </StyledProfile>
    </Layout>
  );
};

export default ProfileLayout;
