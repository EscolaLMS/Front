import { css } from "styled-components";

export const fadeInAnimation = () => css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  opacity: 1;
  animation-name: fadeIn;
  animation-duration: 0.5s;
`;
