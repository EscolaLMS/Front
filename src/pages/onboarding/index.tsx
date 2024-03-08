import Onboarding from "@/components/Onboarding";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: #f8f8f8;
  height: 100%;
  min-height: calc(100vh - 110px);
  padding: 50px 150px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const OnboardingPage = () => {
  return (
    <StyledWrapper>
      <Onboarding />
    </StyledWrapper>
  );
};
export default OnboardingPage;
