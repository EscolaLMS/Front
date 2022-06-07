import React, { useContext } from "react";
import { API } from "@escolalms/sdk/lib";
import { CourseAgenda } from "@escolalms/components/lib/components/organisms/CourseAgenda/CourseAgenda";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  padding-bottom: 100px;
`;

export const CourseSidebar: React.FC<{
  course: API.CourseProgram;
  lessonId: number;
  topicId: number;
}> = ({ course, lessonId, topicId }) => {
  const history = useHistory();
  const program = (course?.lessons || []).filter(
    (lesson) => lesson && lesson.topics && lesson?.topics?.length > 0
  ) as API.Lesson[];
  const { topicIsFinished } = useContext(EscolaLMSContext);
  const allTopics = course.lessons.map((item) => item.topics);
  //@ts-ignore
  const arrayOfTopics = [].concat.apply([], allTopics);
  const finishedTopics = arrayOfTopics
    .filter((item: API.Topic) => topicIsFinished(item.id))
    .map((item: API.Topic) => item.id);
  if (!course && !program) {
    return <React.Fragment />;
  }
  return (
    <StyledSidebar>
      <CourseAgenda
        mobile={isMobile}
        lessons={course.lessons}
        currentTopicId={topicId}
        finishedTopicIds={finishedTopics}
        onMarkFinished={() => console.log("clicked")}
        onTopicClick={(topic) =>
          history.push(`/course/${course.id}/${topic.lesson_id}/${topic.id}`)
        }
      />
    </StyledSidebar>
  );
};

export default CourseSidebar;
