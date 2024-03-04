import { FlattenSimpleInterpolation, css } from "styled-components";

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

type BreakpointsProp = keyof typeof breakpoints;

export const mediaQueriesMixin = (
  size: BreakpointsProp,
  styles: string | FlattenSimpleInterpolation
) => css`
  @media (min-width: ${breakpoints[size]}) {
    ${styles}
  }
`;
