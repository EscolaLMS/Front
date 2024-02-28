import styled from "styled-components";

export const StyledTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`;

export const StyledDescription = styled.div`
  padding: 50px 45px;
  margin: 45px 0 0;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.gray1 : theme.gray5};
  border-radius: ${({ theme }) => theme.cardRadius}px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const StyledRelatedConsultations = styled.section`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? theme.gray1 : theme.gray5};
  padding: 20px 0;
  margin-top: 60px;
`;

export const StyledConsultationSidebar = styled.div`
  width: 100%;
  left: 0;
  position: sticky;
  top: 130px;
  bottom: unset;
  z-index: 100;
`;

export const StyledMobileConsultationSidebar = styled.div`
  width: 100%;
  left: 0;
  position: fixed;
  top: unset;
  bottom: 0;
  z-index: 100;
`;
