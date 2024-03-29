import { MOBILE_DEVICE } from "@/config/index";
import { Capacitor } from "@capacitor/core";
import React from "react";
import styled from "styled-components";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  $isMobileDevice?: boolean; // The prop can be optional or required based on your use case
};

const StyledContainer = styled.div<Props>`
  box-sizing: border-box;
  position: relative;
  margin-inline: auto;
  padding-inline: 15px;
  max-width: 540px;
  padding-top: ${({ $isMobileDevice }) => $isMobileDevice && "80px"};

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

const Container: React.FC<Props> = (props) => {
  const isIos = Capacitor.getPlatform() === "ios";

  return (
    <StyledContainer
      $isMobileDevice={MOBILE_DEVICE === "true" && isIos}
      {...props}
    >
      {props.children}
    </StyledContainer>
  );
};

export default Container;
