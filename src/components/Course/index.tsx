import CoursePanelProvider from "@/components/Course/Context";
import { CoursePanelLayout } from "@/components/Course/CoursePanelLayout";

export const CoursePanel = () => {
  return (
    <CoursePanelProvider>
      <CoursePanelLayout />
    </CoursePanelProvider>
  );
};
