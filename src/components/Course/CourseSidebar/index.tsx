import React, { useContext, useState, useMemo } from "react";
import { API } from "@escolalms/sdk/lib";
import { CourseAgenda } from "@escolalms/components/lib/components/organisms/CourseAgenda/CourseAgenda";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";
import { useLessonProgram } from "../../../hooks/useLessonProgram";
import { Button } from "@escolalms/components";
import { t } from "i18next";
import { Topic } from "@escolalms/sdk/lib/types/api";

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
        theme.mode === "dark" ? theme.dm__background : theme.background};
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
  topicId: number;
  onCompleteTopic?: () => void;
  onCourseFinish?: () => void;
}> = ({ course, topicId, onCompleteTopic, onCourseFinish }) => {
  const { progress } = useLessonProgram(course);
  const { courseProgressDetails } = useContext(EscolaLMSContext);

  const history = useHistory();
  const [agendaVisible, setAgendaVisible] = useState(false);
  const program = (course?.lessons || []).filter(
    (lesson) => lesson && lesson.topics && lesson?.topics?.length > 0
  ) as API.Lesson[];
  const { topicIsFinished } = useContext(EscolaLMSContext);
  const allTopics = course.lessons.map((item) => item.topics);
  //@ts-ignore
  const arrayOfTopics = [].concat.apply([], allTopics);

  const getCourseProgress = useMemo(() => {
    const courseId = course.id;
    if (
      courseProgressDetails &&
      courseProgressDetails.byId &&
      courseProgressDetails.byId[Number(courseId)] &&
      courseProgressDetails.byId[Number(courseId)].value
    ) {
      return courseProgressDetails.byId[Number(courseId)].value;
    }
    return (
      progress &&
      progress.value &&
      progress.value.find(
        (courseProgress: API.CourseProgressItem) =>
          courseProgress.course.id === Number(courseId)
      )?.progress
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, course]);

  const finishedTopics = arrayOfTopics
    .filter((item: API.Topic) => {
      return (
        topicIsFinished(item.id) ||
        getCourseProgress?.some(
          (progressItem) =>
            progressItem.topic_id === item.id && progressItem.status === 1
        )
      );
    })
    .map((item: API.Topic) => item.id);

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
          onNextTopicClick={() => {
            let nextTopic;

            course.lessons.forEach((lesson, lIndex, lessons) => {
              lesson.topics &&
                lesson.topics.forEach((topic, tIndex) => {
                  if (topic.id === topicId) {
                    // try find next topic in current lesson
                    if (lesson.topics && lesson.topics[tIndex + 1]) {
                      nextTopic =
                        lesson.topics[tIndex + 1] && lesson.topics[tIndex + 1];
                      // try find first topic in next lesson
                    } else if (lessons[lIndex + 1]) {
                      nextTopic =
                        lessons[lIndex + 1].topics &&
                        //@ts-ignore
                        lessons[lIndex + 1].topics[0];
                      // otherwise this is end so going back to first lesson and topic
                    } else {
                      nextTopic = lessons[0].topics && lessons[0].topics[0];
                    }
                  }
                });
            });

            if (nextTopic) {
              history.push(
                `/course/${course.id}/${(nextTopic as Topic).lesson_id}/${
                  (nextTopic as Topic).id
                }`
              );
              setAgendaVisible(false);
            }
          }}
          mobile={isMobile}
          lessons={course.lessons}
          currentTopicId={topicId}
          finishedTopicIds={finishedTopics}
          onMarkFinished={() => onCompleteTopic?.()}
          onTopicClick={(topic) => {
            history.push(`/course/${course.id}/${topic.lesson_id}/${topic.id}`);
            setAgendaVisible(false);
          }}
          onCourseFinished={() => onCourseFinish?.()}
        />
      </div>
    </StyledSidebar>
  );
};

export default CourseSidebar;
