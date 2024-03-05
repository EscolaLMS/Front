import { useState } from "react";
import {
  LeftColumn,
  RightColumn,
  Wrapper,
} from "@/components/Courses/Course/CoursePanelLayout/Content/styles";
import { CourseSchedule } from "@/components/Courses/Course/CoursePanelLayout/Schedule";
import { Subheader } from "@/components/Courses/Course/CoursePanelLayout/Subheader";
import { TopicView } from "@/components/Courses/Course/CoursePanelLayout/TopicView";
import { ButtonsNav } from "@/components/Courses/Course/CoursePanelLayout/ButtonsNav";

export const CoursePanelLayoutContent = () => {
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
