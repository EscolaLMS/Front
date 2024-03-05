import { useTranslation } from "react-i18next";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { CenteredWrapper } from "@/components/Courses/Course/CoursePanelLayout/FinishPage/styles";
import { IconCongrats } from "@/icons/index";

interface Props {
  onNextClick: () => void;
}

export const CoursePanelFinishPageCongrats = ({ onNextClick }: Props) => {
  const { t } = useTranslation();

  return (
    <CenteredWrapper>
      <div className="icon-container">
        <IconCongrats />
      </div>
      <Title className="title" level={1}>
        {t("CoursePanel.FinishPage.Congrats")}
      </Title>
      <Title className="subtitle" level={2}>
        {t("CoursePanel.FinishPage.Subtitle")}
      </Title>
      <Text className="text">{t("CoursePanel.FinishPage.Text")}</Text>
      <Button className="button" onClick={onNextClick}>
        {t("Next")}
      </Button>
    </CenteredWrapper>
  );
};
