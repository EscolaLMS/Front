import React, { useContext, useEffect, useMemo, useCallback } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { TopicType } from "@escolalms/sdk/lib/services/courses";
import { XAPIEvent } from "@escolalms/h5p-react";
import TextPlayer from "./Players/TextPlayer";
import { API } from "@escolalms/sdk/lib";
import { ImagePlayer } from "@escolalms/components/lib/components/players/ImagePlayer/ImagePlayer";
import { AudioVideoPlayer } from "@escolalms/components/lib/components/players/AudioVideoPlayer/AudioVideoPlayer";
import { OEmbedPlayer } from "@escolalms/components/lib/components/players/OEmbedPlayer/OEmbedPlayer";
import { H5P } from "@escolalms/components/lib/components/players/H5Player/H5Player";
import { PdfPlayer } from "@escolalms/components/lib/components/players/PdfPlayer/PdfPlayer";
import { isMobile } from "react-device-detect";

export const CourseProgramContent: React.FC<{
  lessonId: number;
  topicId?: number;
  preview?: boolean;
  customNoCompletedEventsIds?: string[];
  setIsDisabledNextTopicButton?: (b: boolean) => void;
}> = ({
  lessonId,
  topicId,
  preview = false,
  setIsDisabledNextTopicButton,
  customNoCompletedEventsIds = [],
}) => {
  const {
    program,
    topicPing,
    topicIsFinished,
    fontSize,
    sendProgress,
    h5pProgress,
    apiUrl,
  } = useContext(EscolaLMSContext);
  const topic = useMemo(() => {
    return program.value?.lessons
      ?.find((lesson: API.Lesson) => lesson.id === lessonId)
      ?.topics?.find((topic: API.Topic) => topic.id === topicId);
  }, [program, lessonId, topicId]);
  useEffect(() => {
    setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(false);

    if (
      topic?.topicable_type === TopicType.Video ||
      topic?.topicable_type === TopicType.Audio
    ) {
      setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(true);
    }
  }, [
    topicId,
    lessonId,
    program,
    topic?.topicable_type,
    setIsDisabledNextTopicButton,
  ]);
  const onCompleteTopic = useCallback((): void => {
    setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(false);
    if (program?.value?.id) {
      sendProgress(program?.value?.id, [
        { topic_id: Number(topicId), status: 1 },
      ]);
    }
  }, [program, topicId, setIsDisabledNextTopicButton, sendProgress]);

  const onXAPI = useCallback(
    (event: XAPIEvent): void => {
      setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(true);

      if (event?.statement) {
        /* 
        TODO This doesn't work 
        if (
          (event?.statement?.verb?.id &&
            completed.includes(event?.statement?.verb?.id)) ||
          [...noCompletedEventsIds, ...customNoCompletedEventsIds].includes(
            event?.statement?.context?.contextActivities?.category &&
              event?.statement?.context?.contextActivities?.category[0]?.id
          )
        ) {
          setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(false);
        }
        

        h5pProgress(
          String(program?.value?.id),
          Number(topicId),
          event?.statement
        );
        */
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      program,
      topicId,
      h5pProgress,
      setIsDisabledNextTopicButton,
      customNoCompletedEventsIds,
    ]
  );
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
          <H5P
            onXAPI={(e: XAPIEvent) => onXAPI(e)}
            id={topic?.topicable?.value}
          />
        );
      case TopicType.OEmbed:
        return (
          <>
            <OEmbedPlayer
              url={topic.topicable.value}
              key={topicId}
              FallbackElement={
                <H5P
                  onXAPI={(e: XAPIEvent) => onXAPI(e)}
                  id={topic?.topicable?.value}
                />
              }
            />
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
        return <PdfPlayer url={topic.topicable.url} />;

      case TopicType.Scorm:
        return (
          <div className="scorm-wrapper">
            <iframe
              title={topic.topicable.value}
              src={`${apiUrl}/api/scorm/play/${topic.topicable.uuid}`}
            />
          </div>
        );
      default:
        return <pre>{topic.topicable_type}</pre>;
    }
  }

  return <pre>loading... (or error)</pre>;
};

export default CourseProgramContent;
