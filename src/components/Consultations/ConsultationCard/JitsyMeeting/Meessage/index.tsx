import { Button, Text } from "@escolalms/components";
import styled from "styled-components";

type Props = {
  message: string;
  closeToast: () => void;
  userConsentedRef: React.MutableRefObject<boolean | null>;
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const JitsyMeetingMessage: React.FC<Props> = ({
  message,
  closeToast,
  userConsentedRef,
}) => {
  return (
    <div>
      <Text size="16">{message}</Text>
      <ButtonWrapper>
        <Button
          onClick={() => [(userConsentedRef.current = true), closeToast()]}
        >
          Tak
        </Button>
        <Button
          mode="secondary"
          onClick={() => [(userConsentedRef.current = false), closeToast()]}
        >
          Nie
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default JitsyMeetingMessage;
