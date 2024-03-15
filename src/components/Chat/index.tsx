import ChatWindow from "@/components/Chat/ChatWindow";
import { ChatIcon } from "@/icons/index";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import styled, { CSSProperties, css } from "styled-components";

const StyledAIChatWrapper = styled.div<{ $isMobile: boolean }>`
  ${({ $isMobile }) =>
    $isMobile &&
    css`
      height: 100dvh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    `};
`;

const StyledAIChatContainer = styled.div<{ $placement?: CSSProperties }>`
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
        top: "120px",
        position: "absolute",
        width: "100%",
        bottom: "0px",
      }
    : {
        bottom: "0px",
        right: "15px",
        position: "absolute",
      },
}) => {
  const [state, setState] = useState(false);

  return (
    <StyledAIChatWrapper $isMobile={isMobile}>
      <StyledAIChatContainer
        $placement={
          isMobile
            ? { ...placement, top: state ? "initial" : "120px" }
            : placement
        }
      >
        {!state && (
          <StyledAIChatButton
            onClick={() => setState(true)}
            $isMobile={isMobile}
          >
            <ChatIcon />
          </StyledAIChatButton>
        )}

        <ChatWindow
          isOpen={state}
          lessonID={lessonID}
          onClose={() => setState(false)}
        />
      </StyledAIChatContainer>
    </StyledAIChatWrapper>
  );
};

export default AIChat;
