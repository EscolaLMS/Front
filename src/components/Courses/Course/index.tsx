import CoursePanelProvider from "@/components/Courses/Course/Context";
import { CoursePanelLayout } from "@/components/Courses/Course/CoursePanelLayout";

export const CoursePanel = () => {
  return (
    <CoursePanelProvider>
      <CoursePanelLayout />
    </CoursePanelProvider>
  );
};
