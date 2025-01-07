import { FC, useState } from "react";
import { API } from "@escolalms/sdk/lib";
import { useTranslation } from "react-i18next";

import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Rate } from "@escolalms/components/lib/components/molecules/Rate/Rate";
import { Stack } from "@escolalms/components/lib/components/atoms/Stack/index";
import { TextArea } from "@escolalms/components/lib/components/atoms/TextArea/TextArea";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { QuestionBoxWrapper } from "@/components/QuestionBox/styles";
import { Row } from "@escolalms/components/lib/components/atoms/Row";
import { QuestionnaireModelType } from "@/types/questionnaire";

interface QuestionBoxProps {
  entityModel: QuestionnaireModelType;
  questionnaireTitle?: string;
  withStarsRating?: boolean;
  data: API.QuestionnaireQuestion;
  textareaPlaceholder?: string;
  handleSubmit: (rate: number, note?: string) => void;
  onClose: () => void;
}

export const QuestionBox: FC<QuestionBoxProps> = ({
  entityModel,
  data,
  textareaPlaceholder,
  questionnaireTitle,
  withStarsRating,
  handleSubmit,
  onClose,
}) => {
  const { t } = useTranslation();

  const [answer, setAnswer] = useState({ rate: 0, note: "" });

  const submit = (rate?: number) => {
    handleSubmit(rate ? rate : answer.rate, answer.note);
    setAnswer({ rate: 0, note: "" });
  };

  return (
    <QuestionBoxWrapper>
      <Title className="question-box__title">
        {t(
          entityModel === QuestionnaireModelType.COURSE
            ? "RateCourse.Title"
            : questionnaireTitle || "Ankieta"
        )}
      </Title>
      <div className="question-box__content">
        {!!withStarsRating ? (
          <Rate
            // @ts-ignore TODO: add to sdk
            score={data.max_score}
            onSubmit={(rate) => submit(rate)}
            header={data.title}
            onCancel={onClose}
          >
            <Text className="question-box__content--textarea-title">
              {t("RateCourse.WriteComment")}
            </Text>
            <TextArea
              className="question-box__content--textarea"
              placeholder={textareaPlaceholder}
              value={answer.note}
              onChange={({ target: { value } }) =>
                setAnswer((prev) => ({ ...prev, note: value }))
              }
              rows={5}
            />
          </Rate>
        ) : (
          <Stack>
            <Title className="question-box__content--title">
              {data?.title}
            </Title>
            <Text className="question-box__content--description">
              {data?.description}
            </Text>
            <Text className="question-box__content--textarea-title">
              {t(
                entityModel === QuestionnaireModelType.COURSE
                  ? "RateCourse.WriteComment"
                  : "RateCourse.WriteAnswer"
              )}
            </Text>
            <TextArea
              className="question-box__content--textarea"
              placeholder={textareaPlaceholder}
              value={answer.note}
              onChange={({ target: { value } }) =>
                setAnswer((prev) => ({ ...prev, note: value }))
              }
              rows={5}
            />
            <Row
              className="question-box__content--buttons"
              $alignItems="center"
              $justifyContent="center"
              $gap={12}
            >
              <Button type="button" mode="white" onClick={onClose}>
                {t("RateCourse.NoAnswer")}
              </Button>
              <Button
                onClick={() => submit()}
                type="button"
                mode="primary"
                disabled={!answer.note.length}
              >
                {t("RateCourse.SendAnswer")}
              </Button>
            </Row>
          </Stack>
        )}
      </div>
    </QuestionBoxWrapper>
  );
};
