import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

import { API } from "@escolalms/sdk/lib";
import { FC } from "react";
import { Container } from "./styles";
import { Avatar, Row, Stack } from "@escolalms/components";
import { APP_CONFIG } from "@/config/app";
import { formatDate } from "@/utils/date";
import { HeaderUser, StarOrange } from "@/icons/index";
import { useTheme } from "styled-components";

interface AnswerComponentProps {
  question: API.QuestionAnswer;
}

export const AnswerComponent: FC<AnswerComponentProps> = ({ question }) => {
  const { user, note, updated_at, rate } = question;
  const theme = useTheme();

  if (!note) {
    return <></>;
  }

  return (
    <Container>
      <Row $gap={16}>
        {user.avatar ? (
          <Avatar src={user.avatar} alt="" />
        ) : (
          <HeaderUser mode={theme.mode === "dark" ? "light" : "dark"} />
        )}

        <Stack $justifyContent="space-between">
          <Title level={5}>{user.name}</Title>
          <Text>{note}</Text>
        </Stack>
      </Row>
      <Stack $gap={8}>
        <Text noMargin>
          {formatDate(updated_at, APP_CONFIG.defaultDateFormat)}
        </Text>
        {rate > 0 && (
          <Row $gap={16}>
            <StarOrange />
            <Text>{rate}</Text>
          </Row>
        )}
      </Stack>
    </Container>
  );
};
