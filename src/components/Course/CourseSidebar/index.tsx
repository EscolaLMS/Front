import React, { useCallback, useContext } from "react";
import { API } from "@escolalms/sdk/lib";
import { CourseAgenda } from "@escolalms/components/lib/components/organisms/CourseAgenda/CourseAgenda";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { useLessonProgram } from "../../../hooks/useLessonProgram";

const StyledSidebar = styled.aside`
  padding-bottom: 100px;
`;

export const CourseSidebar: React.FC<{
  course: API.CourseProgram;
  lessonId: number;
  topicId: number;
}> = ({ course, lessonId, topicId }) => {
  const { setIsDisabledNextTopicButton, sendProgress } =
    useLessonProgram(course);
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

  const onCompleteTopic = useCallback((): void => {
    setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(false);
    if (course?.id) {
      sendProgress(course?.id, [{ topic_id: Number(topicId), status: 1 }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [program, topicId, setIsDisabledNextTopicButton, sendProgress]);
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
        onMarkFinished={() => onCompleteTopic()}
        onTopicClick={(topic) =>
          history.push(`/course/${course.id}/${topic.lesson_id}/${topic.id}`)
        }
      />
    </StyledSidebar>
  );
};

export default CourseSidebar;
