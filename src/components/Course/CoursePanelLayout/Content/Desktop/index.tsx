import {
  LeftColumn,
  RightColumn,
  Wrapper,
} from "@/components/Course/CoursePanelLayout/Content/Desktop/styles";
import { CourseSchedule } from "@/components/Course/CoursePanelLayout/Schedule";
import { Subheader } from "@/components/Course/CoursePanelLayout/Subheader";
import { TopicView } from "@/components/Course/CoursePanelLayout/TopicView";
import { ButtonsNav } from "@/components/Course/CoursePanelLayout/ButtonsNav";

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
