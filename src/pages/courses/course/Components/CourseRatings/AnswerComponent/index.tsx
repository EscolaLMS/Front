import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

import { API } from "@escolalms/sdk/lib";
import { FC } from "react";
import { Container } from "./styles";
import { Avatar, Row, Stack } from "@escolalms/components";
import { APP_CONFIG } from "@/config/app";
import { formatDate } from "@/utils/date";
import { HeaderUser } from "@/icons/index";
import { useTheme } from "styled-components";

interface CourseRatingsProps {
  question: API.QuestionAnswer;
}

export const AnswerComponent: FC<CourseRatingsProps> = ({ question }) => {
  const { user, note, updated_at } = question;
  const theme = useTheme();

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
      <Text>{formatDate(updated_at, APP_CONFIG.defaultDateFormat)}</Text>
    </Container>
  );
};
