import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

type Props = {
  message: string;
  description?: string;
  closeToast: () => void;
  userConsentedRef: React.MutableRefObject<boolean | null>;
};

const Container = styled.div`
  padding: 30px 23px 0 23px;
  text-align: center;
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    max-width: 80%;
    margin: 20px auto;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  button {
    min-width: 130px;
  }
`;

const JitsyMeetingMessage: React.FC<Props> = ({
  message,
  description,
  closeToast,
  userConsentedRef,
}) => {
  const { t } = useTranslation();
  return (
    <Container className="jitsy-message">
      <Title className="jitsy-message__title">
        {t("ConsultationPage.EmotionConsent")}
      </Title>
      <Text size="16">{message}</Text>
      {description && <Text size="16">{description}</Text>}
      <ButtonWrapper>
        <Button
          mode="secondary"
          onClick={() => [(userConsentedRef.current = false), closeToast()]}
        >
          {t("ConsultationPage.No")}
        </Button>
        <Button
          onClick={() => [(userConsentedRef.current = true), closeToast()]}
        >
          {t("ConsultationPage.Yes")}
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default JitsyMeetingMessage;
