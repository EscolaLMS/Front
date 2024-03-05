import ProfileLayout from "@/components/Profile/ProfileLayout";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ProfileCertificates from "@/components/Profile/ProfileCertificates";

const StyledWrapper = styled.div`
  margin-top: 20px;
`;

const MyCertificates = () => {
  const { t } = useTranslation();
  return (
    <ProfileLayout title={t("MyProfilePage.MyCertificates")}>
      <StyledWrapper>
        <ProfileCertificates />
      </StyledWrapper>
    </ProfileLayout>
  );
};

export default MyCertificates;
