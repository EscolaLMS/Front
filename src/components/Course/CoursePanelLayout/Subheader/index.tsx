import { useCoursePanel } from "@/components/Course/Context";
import {
  ProgressBarContainer,
  SubheaderTitle,
  SubheaderWrapper,
} from "@/components/Course/CoursePanelLayout/Subheader/styles";
import { ProgressBar } from "@escolalms/components/lib/index";

export const Subheader = () => {
  const {
    finishedTopicsIds,
    flatTopics,
    currentLessonParentsIds,
    flatLessons,
    currentTopic,
    currentLesson,
  } = useCoursePanel();

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
        />
      </ProgressBarContainer>
    </SubheaderWrapper>
  );
};
