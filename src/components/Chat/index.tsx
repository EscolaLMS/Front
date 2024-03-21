import ChatWindow from "@/components/Chat/ChatWindow";
import { ChatIcon } from "@/icons/index";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import styled, { CSSProperties, css, keyframes } from "styled-components";

const StyledAIChatWrapper = styled.div<{
  $isMobile: boolean;
  $isOpen?: boolean;
}>`
  ${({ $isMobile, $isOpen }) =>
    $isMobile &&
    $isOpen &&
    css`
      height: 100dvh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    `};
`;

const bottomOutAnim = keyframes`
  from {
    bottom:  0;
  }
  to {
    bottom:  -100%;
  }
`;

const bottomInAnim = keyframes`
  from {
    bottom:  -100%;
  }
  to {
    bottom:  0;
  }
`;

const StyledAIChatContainer = styled.div<{
  $placement?: CSSProperties;
  $isOpen?: boolean;
}>`
  ${({ $placement }) =>
    $placement &&
    css`
      ${Object.keys($placement)
        .map(
          (property) =>
            `${property}: ${$placement[property as keyof CSSProperties]};`
        )
        .join("\n")}
    `}
  ${({ $isOpen }) =>
    $isOpen
      ? css`
          animation: ${bottomInAnim} 0.5s ease forwards;
          bottom: 0;
        `
      : css`
          animation: ${bottomOutAnim} 0.5s ease forwards;
          bottom: -100%;
        `}
  padding-bottom: env(safe-area-inset-bottom);
`;

const StyledAIChatButton = styled.div<{ $isMobile: boolean }>`
  width: ${({ $isMobile }) => ($isMobile ? "45px" : "68px")};
  height: ${({ $isMobile }) => ($isMobile ? "45px" : "68px")};
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: ${({ $isMobile }) => ($isMobile ? "0" : "50%")};
  box-shadow: 0px 5px 15px #00000058;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;
  margin-bottom: 15px;
  position: fixed;
  bottom: 5px;
  right: 15px;

  &:hover {
    transform: scale(1.05) translateY(-3px);
  }
  .badge {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondaryColor};
    position: absolute;
    left: 14px;
    top: 15px;
  }
  ${({ $isMobile }) =>
    $isMobile &&
    css`
      margin-left: auto;
      border-top-left-radius: 29px;
      border-bottom-left-radius: 29px;
      top: 110px;
      right: 0%;
      svg {
        width: 23px;
        height: 23px;
      }
    `}
`;

type Props = {
  lessonID: number;
  placement?: CSSProperties;
};

const AIChat: React.FC<Props> = ({
  lessonID,
  placement = isMobile
    ? {
        right: "0px",
        position: "absolute",
        width: "100%",
        bottom: "-100%",
      }
    : {
        bottom: "-100%",
        right: "15px",
        position: "absolute",
      },
}) => {
  const [state, setState] = useState(false);

  return (
    <StyledAIChatWrapper $isMobile={isMobile} $isOpen={state}>
      <StyledAIChatContainer $placement={placement} $isOpen={state}>
        <ChatWindow
          isOpen={state}
          lessonID={lessonID}
          onClose={() => setState(false)}
        />
      </StyledAIChatContainer>
      {!state && (
        <StyledAIChatButton onClick={() => setState(true)} $isMobile={isMobile}>
          <ChatIcon />
        </StyledAIChatButton>
      )}
    </StyledAIChatWrapper>
  );
};

export default AIChat;
