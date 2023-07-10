import styled from "styled-components";

export const ConsultationTutorCardStyles = styled.div`
  .course-section {
    margin-top: 0px;
  }

  .course-card-buttons-group {
    margin: 0;
    width: 100%;

    button {
      width: 100%;
      margin: 0;
    }
  }

  p {
    font-family: ${({ theme }) => theme.font};
  }
`;
