import { FC, useState } from "react";
import { API } from "@escolalms/sdk/lib";
import {
  Button,
  Rate,
  Stack,
  TextArea,
  Title,
  Text,
} from "@escolalms/components";
import { useTranslation } from "react-i18next";
interface QuestionBoxProps {
  withStarsRating?: boolean;
  data: API.QuestionnaireQuestion;
  textareaPlaceholder: string;
  handleSubmit: (rate: number, note?: string) => void;
}

export const QuestionBox: FC<QuestionBoxProps> = ({
  data,
  textareaPlaceholder,
  withStarsRating,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  const { title, description } = data;
  const [answer, setAnswer] = useState({ rate: 0, note: "" });

  const submit = () => {
    handleSubmit(answer.rate, answer.note);
    setAnswer({ rate: 0, note: "" });
  };

  return (
    <form onSubmit={submit}>
      {withStarsRating ? (
        <Rate
          onSubmit={(rate) => setAnswer((prev) => ({ ...prev, rate }))}
          header={data.title}
        >
          <TextArea
            placeholder={textareaPlaceholder}
            style={{ marginTop: "30px" }}
            value={answer.note}
            onChange={({ target: { value } }) =>
              setAnswer((prev) => ({ ...prev, note: value }))
            }
          />
        </Rate>
      ) : (
        <Stack $gap={30}>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <TextArea
            placeholder={textareaPlaceholder}
            value={answer.note}
            onChange={({ target: { value } }) =>
              setAnswer((prev) => ({ ...prev, note: value }))
            }
          />
          <Button
            type="submit"
            mode="primary"
            style={{ width: "fit-content", alignSelf: "center" }}
          >
            {answer.note.length
              ? t("RateCourse.SendAnswer")
              : t("RateCourse.NoAnswer")}
          </Button>
        </Stack>
      )}
    </form>
  );
};
