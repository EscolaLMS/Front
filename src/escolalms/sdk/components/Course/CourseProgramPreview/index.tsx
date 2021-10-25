import React, { useMemo } from 'react';
import { API } from '@escolalms/sdk/lib';
import { TopicType } from '@escolalms/sdk/lib/services/courses';
import { Player } from '@escolalms/h5p-react';
import Embed from 'react-tiny-oembed';
import ReactPlayer from 'react-player';
import PdfPlayer from './../Players/PdfPlayer';
import MarkdownReader from '@/escolalms/sdk/components/Markdown/MarkdownReader';
import "./index.scss";

export const CourseProgramPreview: React.FC<{
  topic: API.Topic;
  onClose: () => void;
}> = ({ topic, onClose }) => {
  const topicRender = useMemo(() => {
    if (topic && topic.topicable_type) {
      switch (topic.topicable_type) {
        case TopicType.H5P:
          return (
            <Player
              id={topic.topicable.value}
              styles={[`${window.location.origin}/h5p_overwrite.css`]}
            />
          );
        case TopicType.OEmbed:
          return <Embed url={topic.topicable.value} />;
        case TopicType.RichText:
          return (
            <div className="container-xl">
              <MarkdownReader>{topic.topicable.value}</MarkdownReader>
            </div>
          );
        case TopicType.Video:
          return <ReactPlayer url={topic.topicable.url} controls width="100%" height="80vh" />;
        case TopicType.Image:
          return (
            <div className="img-container-xl">
              <img src={topic.topicable.url} alt={topic.title} />
            </div>
          );
        case TopicType.Audio:
          // eslint-disable-next-line jsx-a11y/media-has-caption
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
