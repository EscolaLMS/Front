import React, { useContext, useEffect, useMemo, useCallback } from 'react';

import { EscolaLMSContext } from '@escolalms/sdk/lib/react/context';

import { TopicType, completed, noCompletedEventsIds } from '@escolalms/sdk/lib/services/courses';
import { Player, XAPIEvent } from '@escolalms/h5p-react';
import Embed from 'react-tiny-oembed';
import ImagePlayer from '../../../../components/Course/ImagePlayer';
import VideoPlayer from './Players/VideoPlayer';
import AudioPlayer from './Players/AudioPlayer';
import TextPlayer from './Players/TextPlayer';
import PdfPlayer from './Players/PdfPlayer';
import { API } from '@escolalms/sdk/lib';
import VideoPlayButton from '@/components/Common/LmsVideoPlay';

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
  const { program, topicPing, topicIsFinished, fontSize, sendProgress, h5pProgress } =
    useContext(EscolaLMSContext);

  const topic = useMemo(() => {
    return program.value?.lessons
      ?.find((lesson: API.Lesson) => lesson.id === lessonId)
      ?.topics?.find((topic: API.Topic) => topic.id === topicId);
  }, [program, lessonId, topicId]);

  useEffect(() => {
    setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(false);

    if (topic?.topicable_type === TopicType.Video || topic?.topicable_type === TopicType.Audio) {
      setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(true);
    }
  }, [topicId, lessonId, program, topic?.topicable_type, setIsDisabledNextTopicButton]);

  const onCompleteTopic = useCallback((): void => {
    setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(false);
    if (program?.value?.id) {
      sendProgress(program?.value?.id, [{ topic_id: Number(topicId), status: 1 }]);
    }
  }, [program, topicId, setIsDisabledNextTopicButton, sendProgress]);

  const onXAPI = useCallback(
    (event): void => {
      setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(true);

      if (event?.statement) {
        if (
          completed.includes(event?.statement?.verb?.id) ||
          [...noCompletedEventsIds, ...customNoCompletedEventsIds].includes(
            event?.statement?.context?.contextActivities?.category &&
              event?.statement?.context?.contextActivities?.category[0]?.id,
          )
        ) {
          setIsDisabledNextTopicButton && setIsDisabledNextTopicButton(false);
        }

        h5pProgress(String(program?.value?.id), Number(topicId), event?.statement);
      }
    },
    [program, topicId, h5pProgress, setIsDisabledNextTopicButton, customNoCompletedEventsIds],
  );

  useEffect(() => {
    if (!preview) {
      const ping = () => topicId && !topicIsFinished(topicId) && topicPing(topicId);
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
    return <pre className="error">Error: topic.topicable?.value is missing</pre>;
  }

  if (topic.topicable_type) {
    // TODO: specific interface for advanced topic players -> example: ImagePlayer

    switch (topic.topicable_type) {
      case TopicType.H5P:
        return (
          <Player
            onXAPI={(e: XAPIEvent) => onXAPI(e)}
            id={topic?.topicable?.value}
            styles={[`${window.location.origin}/h5p_overwrite.css`]}
          />
        );
      case TopicType.OEmbed:
        return (
          <Embed
            options={{ maxheight: 1000, maxwidth: 2000 }}
            url={topic.topicable.value}
            key={topicId}
            FallbackElement={
              <Player onXAPI={(e: XAPIEvent) => onXAPI(e)} id={topic?.topicable?.value} /> // TODO can't be any
            }
          />
        );
      case TopicType.RichText:
        return <TextPlayer value={topic.topicable.value} fontSize={fontSize} />;
      case TopicType.Video:
        return (
          <VideoPlayer topicUrl={topic.topicable.url} onFinish={(): void => onCompleteTopic()}>
            <VideoPlayButton />
          </VideoPlayer>
        );
      case TopicType.Image:
        return <ImagePlayer topic={topic} onLoad={() => onCompleteTopic()} />;

      case TopicType.Audio:
        return <AudioPlayer url={topic.topicable.url} onFinish={(): void => onCompleteTopic()} />;

      case TopicType.Pdf:
        return <PdfPlayer url={topic.topicable.url} />;
      default:
        return <pre>{topic.topicable_type}</pre>;
    }
  }

  return <pre>loading... (or error)</pre>;
};

export default CourseProgramContent;
