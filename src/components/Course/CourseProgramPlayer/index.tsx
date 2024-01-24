import React from "react";
import { Col, Row } from "react-grid-system";
import { API } from "@escolalms/sdk/lib";
import { XAPIEvent } from "@escolalms/h5p-react";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";

import CourseProgramContent from "@/components/Course/CourseProgramContent";
import CourseDownloads from "../CourseDownloads";

interface Props {
  lesson: API.Lesson | undefined;
  topic: API.Topic | undefined;
  disableNextTopicButton: React.Dispatch<React.SetStateAction<boolean>>;
  getNextPrevTopic: (
    topicId: number,
    next?: boolean | undefined
  ) => API.Topic | null;
  onXAPI?: (event: XAPIEvent) => void;
  onVideoEnd?: () => void;
  onAudioEnd?: () => void;
}

const CourseProgramPlayer = ({
  lesson,
  topic,
  disableNextTopicButton,
  getNextPrevTopic,
  onXAPI,
  onVideoEnd,
  onAudioEnd,
}: Props) => {
  const columnWidth =
    lesson && lesson.summary && topic && topic.summary ? 6 : 12;

  return (
    <div className="course-program-player">
      <div className="course-program-player-content">
        {topic && topic.introduction && (
          <MarkdownRenderer>{topic.introduction}</MarkdownRenderer>
        )}
        <div
          className="course-program-player-content__wrapper"
          style={{
            ...((topic?.json?.wrapperStyle as object) || {}),
          }}
        >
          <CourseProgramContent
            key={topic?.id}
            topic={topic}
            disableNextTopicButton={disableNextTopicButton}
            isThereAnotherTopic={Boolean(getNextPrevTopic(Number(topic?.id)))}
            onXAPI={(event) => onXAPI?.(event)}
            onVideoEnd={onVideoEnd}
            onAudioEnd={onAudioEnd}
          />
        </div>
      </div>
      <div className="course-program-content__container">
        <Row>
          {lesson && lesson.summary && (
            <Col sm={12} md={columnWidth} lg={columnWidth}>
              <div className="course-program-summary">
                <MarkdownRenderer>{lesson.summary}</MarkdownRenderer>
              </div>
            </Col>
          )}
          {topic && topic.summary && (
            <Col sm={12} md={columnWidth} lg={columnWidth}>
              <div className="course-program-summary">
                <MarkdownRenderer>{topic.summary}</MarkdownRenderer>

                {topic && topic.resources && topic.resources?.length > 0 && (
                  <CourseDownloads
                    resources={topic.resources || []}
                    subtitle={topic.introduction || ""}
                  />
                )}
              </div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default CourseProgramPlayer;
