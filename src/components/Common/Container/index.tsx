import React from "react";
import styled from "styled-components";

type Props = React.ComponentPropsWithoutRef<"div">;

const StyledContainer = styled.div<Props>`
  box-sizing: border-box;
  position: relative;
  margin-inline: auto;
  padding-inline: 15px;
  max-width: 540px;

  @media (min-width: 768px) {
    max-width: 750px;
  }

  @media (min-width: 991px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Container: React.FC<Props> = (props) => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

export default Container;
