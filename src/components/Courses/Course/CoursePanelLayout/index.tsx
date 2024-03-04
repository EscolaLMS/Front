import { CoursePanelLayoutContent } from "@/components/Courses/Course/CoursePanelLayout/Content";
import { CoursePanelHeader } from "@/components/Courses/Course/CoursePanelLayout/Header";
import { LayoutWrapper } from "@/components/Courses/Course/CoursePanelLayout/styles";

export const CoursePanelLayout = () => {
  return (
    <LayoutWrapper>
      <CoursePanelHeader />
      <CoursePanelLayoutContent />
    </LayoutWrapper>
  );
};
