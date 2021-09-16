import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";

import { TopicType } from "@/escolalms/services/courses";
import { Player } from "h5p-headless-player";
import Embed from "react-tiny-oembed";
import ReactPlayer from "react-player";
import PdfPlayer from "./Players/PdfPlayer";

export const CourseProgramPreview: React.FC<{
  topic: API.Topic;
  onClose: () => void;
}> = ({ topic, onClose }) => {
  const topicRender = useMemo(() => {
    if (topic && topic.topicable_type) {
      switch (topic.topicable_type) {
        case TopicType.H5P:
          return <Player id={topic.topicable.value} />;
        case TopicType.OEmbed:
          return <Embed url={topic.topicable.value} />;
        case TopicType.RichText:
          return (
            <div className="container-xl">
              <ReactMarkdown>{topic.topicable.value}</ReactMarkdown>
            </div>
          );
        case TopicType.Video:
          return (
            <ReactPlayer
              url={topic.topicable.url}
              controls
              width="100%"
              height="80vh"
            />
          );
        case TopicType.Image:
          return (
            <div className="img-container-xl">
              <img src={topic.topicable.url} />
            </div>
          );
        case TopicType.Audio:
          return <audio src={topic.topicable.url} controls />;
        case TopicType.Pdf:
          return <PdfPlayer url={topic.topicable.url} />;
        default:
          return <pre>{topic.topicable_type}</pre>;
      }
    }
    return <React.Fragment />;
  }, [topic]);

  return (
    <div className="topic-preview-modal">
      <button onClick={onClose}>
        <i className="bx bx-x"></i>
      </button>
      <div className="topic-preview-modal-content">{topicRender}</div>
    </div>
  );
};

export default CourseProgramPreview;
