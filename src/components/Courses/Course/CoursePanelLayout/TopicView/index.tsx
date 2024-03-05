import { useCoursePanel } from "@/components/Courses/Course/Context";
import { TopicViewWrapper } from "@/components/Courses/Course/CoursePanelLayout/TopicView/styles";
import CourseProgramContent from "@/components/Courses/Course/CourseProgramContent";
import ContentLoader from "@/components/_App/ContentLoader";

export const TopicView = () => {
  const { currentTopic, isAnyDataLoading } = useCoursePanel();

  return (
    <TopicViewWrapper>
      <CourseProgramContent topic={currentTopic} />
      {isAnyDataLoading && <ContentLoader />}
    </TopicViewWrapper>
  );
};
