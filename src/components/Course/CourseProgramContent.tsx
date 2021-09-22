import React, { useContext, useEffect, useMemo, useCallback } from "react";

import { EscolaLMSContext } from "../../escolalms/context/index";
import {
  completed,
  noCompletedEventsIds,
  TopicType,
} from "../../escolalms/services/courses";
import { Player } from "h5p-headless-player";
import Embed from "react-tiny-oembed";
import ImagePlayer from "./Players/ImagePlayer";
import VideoPlayer from "./Players/VideoPlayer";
import AudioPlayer from "./Players/AudioPlayer";
import TextPlayer from "./Players/TextPlayer";
import PdfPlayer from "./Players/PdfPlayer";

export const CourseProgramContent: React.FC<{
  lessonId: number;
  topicId: number;
  preview?: boolean;
  setIsDisabledNextTopicButton?: (b: boolean) => void;
}> = ({ lessonId, topicId, preview = false, setIsDisabledNextTopicButton }) => {
  const {
    program,
    topicPing,
    topicIsFinished,
    fontSize,
    sendProgress,
    h5pProgress,
  } = useContext(EscolaLMSContext);

  useEffect(() => {
    setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(false);
    if (
      topic.topicable_type === TopicType.H5P ||
      topic.topicable_type === TopicType.Video ||
      topic.topicable_type === TopicType.Audio
    ) {
      setIsDisabledNextTopicButton(true);
    }
  }, [topicId, lessonId, program]);

  const topic = useMemo(() => {
    return program.value?.lessons
      ?.find((lesson) => lesson.id === lessonId)
      ?.topics?.find((topic) => topic.id === topicId);
  }, [program, lessonId, topicId]);

  const onCompleteTopic = useCallback((): void => {
    setIsDisabledNextTopicButton(false);
    sendProgress(program?.value?.id, [
      { topic_id: Number(topicId), status: 1 },
    ]);
  }, [program, lessonId, topicId]);

  const onXAPI = useCallback(
    (event): void => {
      setIsDisabledNextTopicButton(true);

      if (event?.statement) {
        if (
          completed.includes(event?.statement?.verb?.id) ||
          noCompletedEventsIds.includes(
            event?.statement.context.contextActivities.category[0].id
          )
        ) {
          setIsDisabledNextTopicButton(false);
        }
        h5pProgress(
          String(program?.value?.id),
          Number(topicId),
          event?.statement
        );
      }
    },
    [program, lessonId, topicId]
  );

  useEffect(() => {
    if (!preview) {
      const ping = () => !topicIsFinished(topicId) && topicPing(topicId);
      const interval = setInterval(() => {
        ping();
      }, 2000);
      ping();
      return () => clearInterval(interval);
    }
  }, [topicPing, preview]);

  if (!topic) {
    return <React.Fragment />;
  }

  if (!topic.topicable?.value) {
    return (
      <pre className="error">Error: topic.topicable?.value is missing</pre>
    );
  }

  if (topic.topicable_type) {
    switch (topic.topicable_type) {
      case TopicType.H5P:
        return <Player onXAPI={(e) => onXAPI(e)} id={topic.topicable.value} />;
      case TopicType.OEmbed:
        return (
          <Embed
            options={{ maxheight: 1000, maxwidth: 2000 }}
            url={topic.topicable.value}
            key={topicId}
            FallbackElement={
              <Player onXAPI={(e) => onXAPI(e)} id={topic.topicable.value} />
            }
          />
        );
      case TopicType.RichText:
        return (
          <TextPlayer
            value={topic.topicable.value}
            onLoad={() => onCompleteTopic()}
            fontSize={fontSize}
          />
        );
      case TopicType.Video:
        return (
          <VideoPlayer
            topicUrl={topic.topicable.url}
            onFinish={(): void => onCompleteTopic()}
          />
        );
      case TopicType.Image:
        return <ImagePlayer topic={topic} onLoad={() => onCompleteTopic()} />;

      case TopicType.Audio:
        return (
          <AudioPlayer
            url={topic.topicable.url}
            onFinish={(): void => onCompleteTopic()}
          />
        );

      case TopicType.Pdf:
        return (
          <PdfPlayer
            url={topic.topicable.url}
            onLoad={() => onCompleteTopic()}
          />
        );
      default:
        return <pre>{topic.topicable_type}</pre>;
    }
  }

  return topic ? <p>{topic.title}</p> : <pre>loading...</pre>;
};

export default CourseProgramContent;
