import React, {
  ReactElement,
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
} from "react";

import { useParams } from "react-router-dom";
import Embed from "react-tiny-oembed";

import { IDefaultApiError } from "../../../interfaces/redux";

import { completeTopic } from "../../../services/topicComplete";
import { pingTopic } from "../../../services/pingTopic";

export enum TopicType {
  Unselected = "",
  RichText = "EscolaLms\\Courses\\Models\\TopicContent\\RichText",
  OEmbed = "EscolaLms\\Courses\\Models\\TopicContent\\OEmbed",
  Audio = "EscolaLms\\Courses\\Models\\TopicContent\\Audio",
  Video = "EscolaLms\\Courses\\Models\\TopicContent\\Video",
  H5P = "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
  Image = "EscolaLms\\Courses\\Models\\TopicContent\\Image",
}

import H5PPlayer from "./H5P/player";
import Text from "./Text";
import PdfViewer from "./PdfViewer";

const programElement: FunctionComponent<{
  topic: API.Topic;
  completed: boolean;
  loading: boolean;
  error: boolean | IDefaultApiError;
}> = ({ topic, completed, loading, error }): ReactElement => {
  const { id: courseId } = useParams<{
    id: string;
  }>();

  const topicId = useMemo(() => {
    return topic?.id;
  }, [topic]);

  const onCompleteTopic = useCallback((): void => {
    if (!completed && !loading && !error && topicId) {
      completeTopic(courseId, topicId);
    }
  }, [topicId, completed, loading, navigator, error]);

  useEffect(() => {
    if (topicId) {
      const interval = setInterval(() => {
        pingTopic(topicId);
      }, 60000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [topicId]);

  switch (topic.topicable_type) {
    case TopicType.Image:
      return <img src={topic.topicable.url} alt={topic.title} />;
    case TopicType.Audio:
      return (
        <audio
          src={topic.topicable.url}
          onEnded={(): void => onCompleteTopic()}
          controls
        >
          Your browser does not support the audio.
        </audio>
      );
    case TopicType.Video:
      return (
        <video
          src={topic.topicable.url}
          onEnded={(): void => onCompleteTopic()}
          controls
        >
          Your browser does not support the video.
        </video>
      );
    case TopicType.RichText:
      return <Text onLoad={() => onCompleteTopic()} topic={topic} />;
    case TopicType.H5P:
      return (
        <H5PPlayer
          courseId={courseId}
          topic={topic}
          completed={completed}
          loading={loading}
        />
      );
    case TopicType.OEmbed:
      return <Embed url={topic.topicable.value} />;
    default:
      return <pre>ELENMENT {topic.topicable_type}</pre>;
  }

  /*

  switch (lecture.media.type) {
    case "VIDEO":
      return (
        <video
          src={lecture.media.url}
          onEnded={(): void => onCompleteLectrue()}
          controls
        >
          Your browser does not support the video.
        </video>
      );
    case "AUDIO":
      return (
        <audio
          src={lecture.media.url}
          onEnded={(): void => onCompleteLectrue()}
          controls
        >
          Your browser does not support the audio.
        </audio>
      );
    case "DOCUMENT":
      return (
        <PdfViewer url={lecture.media.url} onLoad={() => onCompleteLectrue()} />
      );
    case "INTERACTIVE":
      return (
        <H5PPlayer
          courseId={courseId}
          lecture={lecture}
          completed={completed}
          loading={loading}
        />
      );
    default:
      return <Text onLoad={() => onCompleteLectrue()} lecture={lecture} />;
  }

  */
};

export default programElement;
