import { useCoursePanel } from "@/components/Courses/Course/Context";
import { TopicViewWrapper } from "@/components/Courses/Course/CoursePanelLayout/TopicView/styles";
import CourseProgramContent from "@/components/Courses/Course/CourseProgramContent";

export const TopicView = () => {
  const { currentTopic } = useCoursePanel();

  return (
    <TopicViewWrapper>
      <CourseProgramContent topic={currentTopic} />
    </TopicViewWrapper>
  );
};
