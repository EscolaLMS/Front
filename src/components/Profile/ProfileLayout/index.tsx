import Layout from "../../../components/_App/Layout";
import ProfileAside from "@/components/Profile/ProfileAside";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactNode, useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

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
  const { user, fetchProgress, fetchCertificates } =
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

  return (
    <Layout metaTitle={title}>
      <StyledProfile>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <ProfileHeader title={title} withTabs={withTabs} />
              {children}
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

export default ProfileLayout;
