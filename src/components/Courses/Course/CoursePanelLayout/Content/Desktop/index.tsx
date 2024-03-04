import {
  LeftColumn,
  RightColumn,
  Wrapper,
} from "@/components/Courses/Course/CoursePanelLayout/Content/Desktop/styles";
import { CourseSchedule } from "@/components/Courses/Course/CoursePanelLayout/Schedule";
import { Subheader } from "@/components/Courses/Course/CoursePanelLayout/Subheader";
import { TopicView } from "@/components/Courses/Course/CoursePanelLayout/TopicView";
import { ButtonsNav } from "@/components/Courses/Course/CoursePanelLayout/ButtonsNav";
import { useState } from "react";

export const CoursePanelLayoutContentDesktop = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <Wrapper>
      <LeftColumn>
        <Subheader menuOnClick={() => setIsScheduleOpen((prev) => !prev)} />
        <TopicView />
        <ButtonsNav />
      </LeftColumn>
      <RightColumn $isOpen={isScheduleOpen}>
        <CourseSchedule />
      </RightColumn>
    </Wrapper>
  );
};
