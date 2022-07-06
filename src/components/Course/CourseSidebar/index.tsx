import React, { useCallback, useContext, useState } from "react";
import { API } from "@escolalms/sdk/lib";
import { CourseAgenda } from "@escolalms/components/lib/components/organisms/CourseAgenda/CourseAgenda";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";
import { useLessonProgram } from "../../../hooks/useLessonProgram";
import { Button } from "@escolalms/components";
import { t } from "i18next";

const StyledSidebar = styled.aside`
  padding-bottom: 100px;
  .show-agenda-btn {
    width: 100%;
  }
  .agenda-wrapper {
    ${isMobile &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transform: translate(100%, 0);
      transition: transform 0.25s;
      overflow: scroll;
      padding: 40px 0 55px;
      z-index: 10;
      background-color: ${({ theme }) =>
        theme.mode === "dark" ? theme.backgroundDark : theme.backgroundLight};

      &--visible {
        transform: translate(0, 0);
      }

      .hide-agenda-btn {
        display: block;
        margin: 0 15px 0 auto;
      }
    `}
  }
`;

export const CourseSidebar: React.FC<{
  course: API.CourseProgram;
  lessonId: number;
  topicId: number;
}> = ({ course, lessonId, topicId }) => {
  const { setIsDisabledNextTopicButton, sendProgress } =
    useLessonProgram(course);
  const history = useHistory();
  const [agendaVisible, setAgendaVisible] = useState(false);
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
      {isMobile && (
        <Button
          mode="outline"
          className="show-agenda-btn"
          onClick={() => setAgendaVisible(true)}
        >
          {t("CourseProgram.ShowAgenda")}
        </Button>
      )}
      <div
        className={`${
          agendaVisible
            ? "agenda-wrapper agenda-wrapper--visible"
            : "agenda-wrapper"
        }`}
      >
        {isMobile && (
          <Button
            className="hide-agenda-btn"
            mode="secondary"
            onClick={() => setAgendaVisible(false)}
          >
            &#10005;
          </Button>
        )}
        <CourseAgenda
          mobile={isMobile}
          lessons={course.lessons}
          currentTopicId={topicId}
          finishedTopicIds={finishedTopics}
          onMarkFinished={() => onCompleteTopic()}
          onTopicClick={(topic) => {
            history.push(`/course/${course.id}/${topic.lesson_id}/${topic.id}`);
            setAgendaVisible(false);
          }}
        />
      </div>
    </StyledSidebar>
  );
};

export default CourseSidebar;
