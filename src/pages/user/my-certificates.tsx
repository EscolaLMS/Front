import ProfileLayout from "@/components/Profile/ProfileLayout";

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ProfileCertificates from "@/components/Profile/ProfileCertificates";
import { Title } from "@escolalms/components/lib/index";

const StyledWrapper = styled.div`
  margin-top: 20px;
  max-width: 450px;
`;

const MyCertificates = () => {
  const { t } = useTranslation();
  return (
    <ProfileLayout title={t("MyProfilePage.MyCertificates")}>
      <StyledWrapper>
        <Title level={2}>{t<string>("MyProfilePage.MyCertificates")}</Title>
        <ProfileCertificates />
      </StyledWrapper>
    </ProfileLayout>
  );
};

export default MyCertificates;
