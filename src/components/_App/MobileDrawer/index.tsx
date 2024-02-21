import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";
import styled, { createGlobalStyle } from "styled-components";

const StyledMobileDrawer = styled.div`
  .close {
    all: unset;
    cursor: pointer;
  }
`;

const GlobalDrawer = createGlobalStyle<{ $height?: string }>`
  .mobile-drawer-drawer-wrapper { 
     height: ${({ $height }) => $height || "40vh"};
      width: 100%;
      bottom: 0;
      border-radius: 10px 10px 0px 0px; 
  }
`;

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  height?: string;
};

const MobileDrawer: React.FC<Props> = ({
  children,
  isOpen,
  onClose,
  height,
}) => {
  return (
    <StyledMobileDrawer>
      <GlobalDrawer $height={height} />
      <Drawer
        open={isOpen}
        classNames={{
          wrapper: "mobile-drawer-drawer-wrapper",
          content: "drawer-content",
        }}
        onClose={onClose}
        placement="bottom"
      >
        {children}
      </Drawer>
    </StyledMobileDrawer>
  );
};
export default MobileDrawer;
