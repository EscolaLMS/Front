import { useCoursePanel } from "@/components/Courses/Course/Context";
import {
  ProgressBarContainer,
  SubHeaderIconWrapper,
  SubheaderTitle,
  SubheaderWrapper,
} from "@/components/Courses/Course/CoursePanelLayout/Subheader/styles";
import { IconMenuSchedule } from "@/icons/index";
import { ProgressBar } from "@escolalms/components/lib/index";
import { useTranslation } from "react-i18next";

interface Props {
  menuOnClick?: () => void;
}

export const Subheader = ({ menuOnClick }: Props) => {
  const {
    finishedTopicsIds,
    flatTopics,
    currentLessonParentsIds,
    flatLessons,
    currentTopic,
    currentLesson,
  } = useCoursePanel();
  const { t } = useTranslation();

  const parentLesson = flatLessons?.find(
    ({ id }) => id === currentLessonParentsIds?.at(0)
  );
  const progress =
    ((finishedTopicsIds ?? []).length / (flatTopics ?? []).length) * 100;

  return (
    <SubheaderWrapper>
      <ProgressBarContainer>
        <ProgressBar
          currentProgress={progress}
          maxProgress={100}
          label={
            <SubheaderTitle level={2}>
              <span>{parentLesson?.title || currentLesson?.title || ""}</span>{" "}
              {currentTopic?.title}
            </SubheaderTitle>
          }
          variant="square"
        />
      </ProgressBarContainer>
      {/* Mobile */}
      <SubHeaderIconWrapper
        role="button"
        aria-label={t("CoursePanel.MenuButtonAria")}
        onClick={menuOnClick}
      >
        <IconMenuSchedule />
      </SubHeaderIconWrapper>
    </SubheaderWrapper>
  );
};
