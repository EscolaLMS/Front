import ChatMessage from "@/components/Chat/ChatMessage";
import { StyledChatWindow } from "@/components/Chat/ChatWindow/style";
import { BackArrow } from "@/icons/index";
import { Text } from "@escolalms/components/lib/index";
import { useCallback, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

type Props = {
  lessonID: number;
  onClose: () => void;
};

const ChatWindow: React.FC<Props> = ({ lessonID, onClose }) => {
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [state, setState] = useState({
    messages: [],
    inputValue: "",
  });
  const { t } = useTranslation();

  const handleSendMessage = useCallback(() => {
    setState({
      ...state,
      inputValue: "",
    });
    // Handle sending message here
  }, [state]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        inputValue: e.target.value,
      });
    },
    [state]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  const handleClose = useCallback(() => {
    setCloseAnimation(true);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  return (
    <StyledChatWindow
      className="chatwindow"
      $closeAnimation={closeAnimation}
      $isMobile={isMobile}
    >
      <header className="chatwindow__header">
        <Text size="18" bold>
          {t("LetsTalk")}
        </Text>
        <button
          title="close-chat"
          className="chatwindow__header--close"
          onClick={handleClose}
        >
          <span></span>
        </button>
      </header>
      <div className="chatwindow__content">
        <div className="chatwindow__content--messages">
          {state.messages.length === 0 && (
            <div className="chatwindow__content--messages__empty">
              <Text size="16">{t("StartChat")}</Text>
            </div>
          )}
          <ChatMessage isAI />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage isAI />
          <ChatMessage />
          <ChatMessage />
        </div>
        <div className="chatwindow__content--input">
          <input
            value={state.inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            type="text"
            title="chatmessage"
          />
          <button title="send-message" onClick={handleSendMessage}>
            <BackArrow />
          </button>
        </div>
      </div>
    </StyledChatWindow>
  );
};

export default ChatWindow;
