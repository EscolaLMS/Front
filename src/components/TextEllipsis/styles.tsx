import styled from "styled-components";

export const StyledSpan = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
  color: ${(props) => props.color};
`;

export const StyledSpanTail = styled.span<
  React.HTMLAttributes<HTMLSpanElement>
>`
  color: ${(props) => props.color};
  ${StyledSpan}:hover & {
    display: none;
  }
`;

export const StyledSpanChild = styled.span<
  React.HTMLAttributes<HTMLSpanElement>
>`
  color: ${(props) => props.color};
  display: none;
  ${StyledSpan}:hover & {
    display: block;
  }
`;
