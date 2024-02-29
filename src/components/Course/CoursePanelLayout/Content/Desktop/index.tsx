import {
  LeftColumn,
  RightColumn,
  Wrapper,
} from "@/components/Course/CoursePanelLayout/Content/Desktop/styles";
import { CourseSchedule } from "@/components/Course/CoursePanelLayout/Schedule";
import { Subheader } from "@/components/Course/CoursePanelLayout/Subheader";

export const CoursePanelLayoutContentDesktop = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <Subheader />
      </LeftColumn>
      <RightColumn>
        <CourseSchedule />
      </RightColumn>
    </Wrapper>
  );
};
