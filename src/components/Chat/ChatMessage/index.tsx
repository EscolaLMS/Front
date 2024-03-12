import { Text } from "@escolalms/components/lib/index";
import styled from "styled-components";

const StyledMessage = styled.div<{ $isAI: boolean }>`
  border-radius: ${({ $isAI }) =>
    $isAI ? "15px 15px 15px 0px" : "15px 15px 0px 15px"};
  background-color: ${({ theme, $isAI }) =>
    $isAI ? theme.gray4 : `rgba(238, 49, 47, 0.07)`};
  padding: 12px 17px;
  width: 80%;
  max-width: 260px;
  margin-bottom: 10px;
  margin-left: ${({ $isAI }) => ($isAI ? "0" : "auto")};
`;

type Props = {
  message?: string;
  isAI?: boolean;
};

const ChatMessage: React.FC<Props> = ({ isAI = false }) => {
  return (
    <StyledMessage $isAI={isAI}>
      <Text size="16">
        Dzień dobry, fajnie Cię widzieć korzystającego z kursu. Jestem Twoim
        asystentem AI i chętnie Ci pomogę.
      </Text>
    </StyledMessage>
  );
};

export default ChatMessage;
