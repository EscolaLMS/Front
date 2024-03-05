import { useCoursePanel } from "@/components/Courses/Course/Context";
import CourseFinishModal from "@/components/Courses/Course/CourseFinishModal";
import { CoursePanelLayoutContent } from "@/components/Courses/Course/CoursePanelLayout/Content";
import { CoursePanelHeader } from "@/components/Courses/Course/CoursePanelLayout/Header";
import { LayoutWrapper } from "@/components/Courses/Course/CoursePanelLayout/styles";

export const CoursePanelLayout = () => {
  const { showFinishModal, courseId } = useCoursePanel();

  return (
    <LayoutWrapper>
      <CoursePanelHeader />
      <CoursePanelLayoutContent />
      {showFinishModal && <CourseFinishModal courseId={Number(courseId)} />}
    </LayoutWrapper>
  );
};
