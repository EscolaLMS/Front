import React, { useContext, useEffect, useMemo, useCallback } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { TopicType } from "@escolalms/sdk/lib/services/courses";
import { XAPIEvent } from "@escolalms/h5p-react";
import TextPlayer from "./Players/TextPlayer";
import { API } from "@escolalms/sdk/lib";
import { ImagePlayer } from "@escolalms/components/lib/components/players/ImagePlayer/ImagePlayer";
import { AudioVideoPlayer } from "@escolalms/components/lib/components/players/AudioVideoPlayer/AudioVideoPlayer";
import { OEmbedPlayer } from "@escolalms/components/lib/components/players/OEmbedPlayer/OEmbedPlayer";
import { H5Player } from "@escolalms/components/lib/components/players/H5Player/H5Player";
import { PdfPlayer } from "@escolalms/components/lib/components/players/PdfPlayer/PdfPlayer";
import { isMobile } from "react-device-detect";
import ScormPlayer from "./Players/ScormPlayer";
import styled from "styled-components";

const StyledPdfPlayer = styled(PdfPlayer)`
  .course-pdf-player {
    .react-pdf__Page__svg,
    svg {
      width: 100% !important;
      height: auto !important;
    }
  }
`;

export const CourseProgramContent: React.FC<{
  lessonId: number;
  isThereAnotherTopic?: boolean;
  topicId?: number;
  preview?: boolean;
  customNoCompletedEventsIds?: string[];
  disableNextTopicButton?: (b: boolean) => void;
}> = ({
  lessonId,
  topicId,
  preview = false,
  disableNextTopicButton,
  customNoCompletedEventsIds = [
    "http://h5p.org/libraries/H5P.GuessTheAnswer-1.5",
  ],
  isThereAnotherTopic = true,
}) => {
  const {
    program,
    topicPing,
    topicIsFinished,
    fontSize,
    sendProgress,
    h5pProgress,
  } = useContext(EscolaLMSContext);

  const topic = useMemo(() => {
    return program.value?.lessons
      ?.find((lesson: API.Lesson) => lesson.id === lessonId)
      ?.topics?.find((topic: API.Topic) => topic.id === topicId);
  }, [program, lessonId, topicId]);

  const onCompleteTopic = useCallback((): void => {
    if (program?.value?.id) {
      sendProgress(program?.value?.id, [
        { topic_id: Number(topicId), status: 1 },
      ]);
    }
  }, [program, topicId, sendProgress]);

  const onXAPI = useCallback(
    (event: XAPIEvent): void => {
      isThereAnotherTopic &&
        disableNextTopicButton &&
        disableNextTopicButton(!Boolean(event?.statement?.verb?.id));

      if (event?.statement) {
        h5pProgress(
          String(program?.value?.id),
          Number(topicId),
          event?.statement as API.IStatement
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      program,
      topicId,
      h5pProgress,
      disableNextTopicButton,
      customNoCompletedEventsIds,
    ]
  );

  useEffect(() => {
    const isTopicFinished = topic?.id && topicIsFinished(topic.id);

    isThereAnotherTopic &&
      disableNextTopicButton &&
      isTopicFinished &&
      disableNextTopicButton(!isTopicFinished && !Boolean(topic?.can_skip));
  }, [disableNextTopicButton, topic, isThereAnotherTopic, topicIsFinished]);

  useEffect(() => {
    if (!preview) {
      const ping = () =>
        topicId && !topicIsFinished(topicId) && topicPing(topicId);
      const interval = setInterval(() => {
        ping();
      }, 5000);
      ping();
      return () => clearInterval(interval);
    }
  }, [topicPing, preview, topicId, topicIsFinished]);

  if (!topic) {
    return <React.Fragment />;
  }

  if (!topic.topicable?.value) {
    return (
      <pre className="error">Error: topic.topicable?.value is missing</pre>
    );
  }
  if (topic.topicable_type) {
    // TODO: specific interface for advanced topic players -> example: ImagePlayer
    switch (topic.topicable_type) {
      case TopicType.H5P:
        return (
          <H5Player
            onXAPI={(e: XAPIEvent) => onXAPI(e)}
            //@ts-ignore
            h5pObject={topic.topicable.content as API.H5PObject}
          />
        );
      case TopicType.OEmbed:
        return (
          <>
            <OEmbedPlayer url={topic.topicable.value} key={topicId} />
          </>
        );
      case TopicType.RichText:
        return <TextPlayer value={topic.topicable.value} fontSize={fontSize} />;
      case TopicType.Video:
        return (
          <AudioVideoPlayer
            mobile={isMobile}
            url={topic.topicable.url}
            light
            onFinish={(): void => onCompleteTopic()}
          />
        );
      case TopicType.Image:
        return <ImagePlayer topic={topic} onLoad={() => onCompleteTopic()} />;

      case TopicType.Audio:
        return (
          <AudioVideoPlayer
            mobile={isMobile}
            audio
            url={topic.topicable.value}
            light
            onFinish={(): void => onCompleteTopic()}
          />
        );

      case TopicType.Pdf:
        return (
          <StyledPdfPlayer
            url={topic.topicable.url}
            pageConfig={{
              renderMode: "svg",
              className: "course-pdf-player",
            }}
          />
        );

      case TopicType.Scorm:
        return (
          <ScormPlayer
            value={{
              title: topic.title,
              uuid: topic.topicable.uuid,
            }}
          />
        );
      default:
        return <pre>{topic.topicable_type}</pre>;
    }
  }

  return <pre>loading... (or error)</pre>;
};

export default CourseProgramContent;
