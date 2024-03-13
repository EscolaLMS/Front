import ChatMessage from "@/components/Chat/ChatMessage";
import { StyledChatWindow } from "@/components/Chat/ChatWindow/style";
import { sendChatMessage } from "@/components/Chat/api";
import ContentLoader from "@/components/_App/ContentLoader";
import { BackArrow } from "@/icons/index";
import { Text } from "@escolalms/components/lib/index";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useCallback, useContext, useId, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

type Props = {
  lessonID: number;
  onClose: () => void;
};

type Message = {
  message: string;
  isAi?: boolean;
};

type State = {
  isLoading: boolean;
  messages: Message[];
  inputValue: string;
  error: string;
  conversationId: string | null;
};

const ChatWindow: React.FC<Props> = ({ lessonID, onClose }) => {
  const { token } = useContext(EscolaLMSContext);
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [state, setState] = useState<State>({
    isLoading: false,
    messages: [],
    inputValue: "",
    error: "",
    conversationId: null,
  });
  const { t } = useTranslation();
  const id = useId();

  const handleSendMessage = useCallback(async () => {
    setState({
      ...state,
      isLoading: true,
    });
    if (state.inputValue.length < 5) {
      setState({
        ...state,
        error: "Podaj więcej jak 5 znaków",
        isLoading: false,
      });
      return;
    }
    if (token) {
      const data = state.conversationId
        ? {
            question: state.inputValue,
            conversation_id: state.conversationId,
          }
        : {
            question: state.inputValue,
          };
      const message = await sendChatMessage(lessonID, data, token);

      if (message.data) {
        setState((prevState) => ({
          ...prevState,
          error: "",
          isLoading: false,
          messages: [
            ...prevState.messages,
            { message: prevState.inputValue },
            {
              message: message.data?.answer ?? prevState.inputValue,
              isAi: !!message.data?.conversation_id,
            },
          ],
          inputValue: "",
          conversationId:
            prevState.conversationId ?? message.data?.conversation_id ?? null,
        }));
      }

      if (!message.data) {
        setState({
          ...state,
          isLoading: false,
          error: message.message,
        });
      }
    }
  }, [state, lessonID, token]);

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
          {state.messages.map((message, index) => (
            <ChatMessage
              key={`message=${index}-${id}`}
              message={message.message}
              isAI={message.isAi}
            />
          ))}
        </div>
        <div>
          <div className="chatwindow__content--input">
            <input
              value={state.inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              type="text"
              title="chatmessage"
            />
            <button title="send-message" onClick={handleSendMessage}>
              {state.isLoading ? (
                <ContentLoader width="20px" height="20px" />
              ) : (
                <BackArrow />
              )}
            </button>
          </div>
          <div className="chatwindow__content--error">
            <Text size="11">{state.error}</Text>
          </div>
        </div>
      </div>
    </StyledChatWindow>
  );
};

export default ChatWindow;
