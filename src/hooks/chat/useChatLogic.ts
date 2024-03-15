import { useCallback, useState } from "react";
import { sendChatMessage, Answer } from "@/components/Chat/api";
import { useTranslation } from "react-i18next";

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

const INITIAL_STATE: State = {
  isLoading: false,
  messages: [],
  inputValue: "",
  error: "",
  conversationId: null,
};

const useChatLogic = (lessonID: number, token: string | null | undefined) => {
  if (!token) throw new Error("Token is required");

  const [chatState, setChatState] = useState<State>(INITIAL_STATE);
  const { t } = useTranslation();
  const handleInputError = useCallback(
    (error: string) => {
      setChatState((prevState) => ({
        ...prevState,
        error,
        isLoading: false,
      }));
    },
    [setChatState]
  );

  const sendMessageToLesson = useCallback(async () => {
    const data = chatState.conversationId
      ? {
          question: chatState.inputValue,
          conversation_id: chatState.conversationId,
        }
      : {
          question: chatState.inputValue,
        };

    if (token) {
      return await sendChatMessage(lessonID, data, token);
    }
    return {
      status: 500,
      message: t("UnexpectedError"),
      data: null,
    };
  }, [chatState, lessonID, token, t]);

  const handleSuccessfulMessage = useCallback(
    (message: Answer) => {
      setChatState((prevState) => ({
        ...prevState,
        error: "",
        isLoading: false,
        messages: [
          ...prevState.messages,
          { message: prevState.inputValue },
          {
            message: message.answer ?? prevState.inputValue,
            isAi: !!message.conversation_id,
          },
        ],
        inputValue: "",
        conversationId:
          prevState.conversationId ?? message.conversation_id ?? null,
      }));
    },
    [setChatState]
  );

  const handle422Error = useCallback(
    (errorMessage: string) => {
      setChatState((prevState) => ({
        ...prevState,
        isLoading: false,
        error: errorMessage,
      }));
    },
    [setChatState]
  );

  const handleUnexpectedError = useCallback(() => {
    setChatState((prevState) => ({
      ...prevState,
      isLoading: false,
      error: t("UnexpectedError"),
    }));
  }, [setChatState, t]);

  const handleSendMessage = useCallback(async () => {
    setChatState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    if (chatState.inputValue.length < 5) {
      handleInputError(t("SpecifyMore", { count: 5 }));
      return;
    }

    const message = await sendMessageToLesson();

    if (message.status === 200) {
      message.data && handleSuccessfulMessage(message.data);
    } else if (message.status === 422) {
      handle422Error(message.message);
    } else {
      handleUnexpectedError();
    }
  }, [
    chatState,
    t,
    handleInputError,
    handleSuccessfulMessage,
    handle422Error,
    handleUnexpectedError,
    sendMessageToLesson,
  ]);

  return {
    chatState,
    handleSendMessage,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setChatState({
        ...chatState,
        inputValue: e.target.value,
      });
    },
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSendMessage();
      }
    },
  };
};

export default useChatLogic;
