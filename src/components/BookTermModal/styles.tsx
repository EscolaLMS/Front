import styled from "styled-components";

export const StyledBookTermButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.54rem;
  margin: 0.5rem 0 2rem 0;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  button {
    animation: fadeIn 0.4s;
  }
`;
