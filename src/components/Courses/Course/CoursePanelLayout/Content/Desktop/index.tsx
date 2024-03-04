import {
  LeftColumn,
  RightColumn,
  Wrapper,
} from "@/components/Courses/Course/CoursePanelLayout/Content/Desktop/styles";
import { CourseSchedule } from "@/components/Courses/Course/CoursePanelLayout/Schedule";
import { Subheader } from "@/components/Courses/Course/CoursePanelLayout/Subheader";
import { TopicView } from "@/components/Courses/Course/CoursePanelLayout/TopicView";
import { ButtonsNav } from "@/components/Courses/Course/CoursePanelLayout/ButtonsNav";

export const CoursePanelLayoutContentDesktop = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <Subheader />
        <TopicView />
        <ButtonsNav />
      </LeftColumn>
      <RightColumn>
        <CourseSchedule />
      </RightColumn>
    </Wrapper>
  );
};
