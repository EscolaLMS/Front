import React, { useContext } from "react";
import "./index.scss";
import CourseTimetableTopic from "../../../Course/CourseTimetable/CourseTimetableTopic";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { useTranslation } from "react-i18next";
import { getTopicType } from "../../../../utils/helpers";

const CourseTimetableTopicList: React.FC<{
  className?: string;
  topics: API.Topic[];
  courseId: number;
  lessonId: number;
  activeTopicId: number;
  preview: boolean;
}> = ({
  className = "",
  topics,
  courseId,
  lessonId,
  activeTopicId,
  preview,
}) => {
  const { t } = useTranslation();
  const { topicIsFinished } = useContext(EscolaLMSContext);

  return (
    <ul className={`course-timetable-topic-list ${className}`}>
      {(topics || []).map((topic) => {
        return (
          <li
            key={topic.id}
            className={`course-timetable-topic-list__topic ${
              activeTopicId === topic.id ? "active" : ""
            } ${
              topic && topic.id && topicIsFinished(topic.id) ? "finished" : ""
            }`}
          >
            <CourseTimetableTopic
              className={`${activeTopicId === topic.id ? "active" : ""} ${
                topic && topic.id && topicIsFinished(topic.id) ? "finished" : ""
              }`}
              title={topic.title || ""}
              to={
                preview
                  ? `/courses/preview/${courseId}/${lessonId}/${topic.id}`
                  : `/course/${courseId}/${lessonId}/${topic.id}`
              }
              meta={
                topic &&
                topic.topicable_type &&
                t(`${getTopicType(topic.topicable_type)}`)
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CourseTimetableTopicList;
