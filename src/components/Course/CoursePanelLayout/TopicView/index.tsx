import { useCoursePanel } from "@/components/Course/Context";
import { TopicViewWrapper } from "@/components/Course/CoursePanelLayout/TopicView/styles";
import CourseProgramContent from "@/components/Course/CourseProgramContent";

export const TopicView = () => {
  const { currentTopic } = useCoursePanel();

  return (
    <TopicViewWrapper>
      <CourseProgramContent topic={currentTopic} />
    </TopicViewWrapper>
  );
};
