import React, { ReactElement, useCallback } from "react";

import { IProgramMenu } from "../../../interfaces/course/program";

import Accordion from "../../Accordion";

import MenuElement from "./listItem";

import "react-circular-progressbar/dist/styles.css";
import "./index.scss";

const Menu: React.FC<IProgramMenu> = ({
  courseId,
  data,
  selectedLesson,
  selectedTopic,
  allCompleted,
}): ReactElement => {
  const checkIfComplete = useCallback(
    (topicId: number) => {
      return (
        (allCompleted?.length > 0 && allCompleted?.includes(topicId)) || false
      );
    },
    [allCompleted]
  );

  const checkIfActive = useCallback(
    (topicId: number) => {
      return (selectedTopic && topicId === selectedTopic) || false;
    },
    [selectedTopic]
  );

  return (
    <div className="course-menu">
      <h4>Course content</h4>
      <ul>
        {data?.map((lesson: API.Lesson) => {
          return (
            <li key={lesson.id}>
              <Accordion
                defaultActive={
                  (!!selectedLesson && lesson.id === selectedLesson) || false
                }
                title={lesson.title}
              >
                <ul>
                  {lesson?.topics
                    ?.filter((topic: API.Topic) => topic?.id)
                    .map((topic: API.Topic, index: number) => {
                      return (
                        <MenuElement
                          key={index}
                          active={checkIfActive(topic.id)}
                          completed={checkIfComplete(topic.id)}
                          link={`/course/${courseId}/program/${lesson.id}/${topic?.id}`}
                          title={topic?.title}
                        />
                      );
                    })}
                </ul>
              </Accordion>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
