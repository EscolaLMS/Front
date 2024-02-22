import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

import { API } from "@escolalms/sdk/lib";
import { FC } from "react";
import { Container } from "./styles";

import { Avatar } from "@escolalms/components/lib/components/atoms/Avatar/Avatar";
import { Row } from "@escolalms/components/lib/components/atoms/Row/index";
import { Stack } from "@escolalms/components/lib/components/atoms/Stack/index";
import { APP_CONFIG } from "@/config/app";
import { formatDate } from "@/utils/date";

import styled, { useTheme } from "styled-components";

const AnswerWrapper = styled.div`
  .date {
    color: ${({ theme }) => theme.gray2};
    margin-bottom: 5px;
  }
`;

const RandomAvatar = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    text-transform: uppercase;
  }
`;

interface AnswerComponentProps {
  question: API.QuestionAnswer;
}

const AvatarWithInitial: FC<{ name: string }> = ({ name }) => {
  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const initials = name.charAt(0).toUpperCase();

  return (
    <RandomAvatar style={{ backgroundColor: randomColor() }}>
      <Text size={"18"}>{initials}</Text>
    </RandomAvatar>
  );
};

export const AnswerComponent: FC<AnswerComponentProps> = ({ question }) => {
  const { user, note, updated_at } = question;
  const theme = useTheme();

  if (!note) {
    return null;
  }

  return (
    <AnswerWrapper>
      <Container>
        <Row $gap={19}>
          {user.avatar ? (
            <Avatar src={user.avatar} alt={`user-avatar-${user.name}`} />
          ) : (
            <AvatarWithInitial name={user.name} />
          )}

          <Stack $justifyContent="flex-start" $alignItems="flex-start">
            <Text noMargin color={theme.gray2} className="date" size="13">
              {formatDate(updated_at, APP_CONFIG.defaultDateFormat)}
            </Text>

            <Text className="note" size="13">
              {note}
            </Text>
          </Stack>
        </Row>
      </Container>
    </AnswerWrapper>
  );
};
