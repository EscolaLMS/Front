import { CoursePanelLayoutContent } from "@/components/Course/CoursePanelLayout/Content";
import { CoursePanelHeader } from "@/components/Course/CoursePanelLayout/Header";
import { LayoutWrapper } from "@/components/Course/CoursePanelLayout/styles";

export const CoursePanelLayout = () => {
  return (
    <LayoutWrapper>
      <CoursePanelHeader />
      <CoursePanelLayoutContent />
    </LayoutWrapper>
  );
};
