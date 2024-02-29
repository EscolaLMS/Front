import Layout from "../../../components/_App/Layout";
import ProfileAside from "@/components/Profile/ProfileAside";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactNode, useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Col, Row } from "react-grid-system";
import Container from "@/components/Common/Container";
import routeRoutes from "@/components/Routes/routes";

type Props = {
  children: ReactNode;
  title: string;
  withTabs?: boolean;
  actions?: ReactNode;
};

const StyledProfile = styled.section`
  background-color: ${({ theme }) => theme.gray4};
  padding-top: 100px;
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
`;

const ProfileLayout: React.FC<Props> = ({
  children,
  title,
  withTabs,
  actions,
}) => {
  const { user } = useContext(EscolaLMSContext);
  const history = useHistory();

  useEffect(() => {
    if (!user.loading && !user.value) {
      history.push(routeRoutes.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout metaTitle={title}>
      <StyledProfile>
        <Container>
          <Row>
            <Col lg={3}>
              <ProfileAside />
            </Col>
            <Col lg={9}>
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
