import ProfileLayout from "@/components/Profile/ProfileLayout";
import { MyProfileForm } from "@escolalms/components/lib/components/organisms/MyProfileForm/MyProfileForm";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledWrapper = styled.div`
  margin-top: 20px;
  max-width: 450px;
`;

const MyData = () => {
  const { t } = useTranslation();
  return (
    <ProfileLayout title={t("MyProfilePage.EditData")}>
      <StyledWrapper>
        <MyProfileForm />
      </StyledWrapper>
    </ProfileLayout>
  );
};

export default MyData;
