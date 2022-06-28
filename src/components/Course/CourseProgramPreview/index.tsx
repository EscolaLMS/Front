import React, { useContext, useMemo } from "react";
import { API } from "@escolalms/sdk/lib";
import { TopicType } from "@escolalms/sdk/lib/services/courses";
import { OEmbedPlayer } from "@escolalms/components/lib/components/players/OEmbedPlayer/OEmbedPlayer";
import { AudioVideoPlayer } from "@escolalms/components/lib/components/players/AudioVideoPlayer/AudioVideoPlayer";
import { PdfPlayer } from "@escolalms/components/lib/components/players/PdfPlayer/PdfPlayer";
import { MarkdownPlayer } from "@escolalms/components/lib/components/players/MarkdownPlayer/MarkdownPlayer";
import { ImagePlayer } from "@escolalms/components/lib/components/players/ImagePlayer/ImagePlayer";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { H5P } from "@escolalms/components/lib/components/players/H5Player/H5Player";

export const CourseProgramPreview: React.FC<{
  topic: API.Topic;
}> = ({ topic }) => {
  const { apiUrl } = useContext(EscolaLMSContext);
  const topicRender = useMemo(() => {
    if (topic && topic.topicable_type) {
      switch (topic.topicable_type) {
        case TopicType.H5P:
          return <H5P id={topic?.topicable?.value} />;
        case TopicType.OEmbed:
          return <OEmbedPlayer url={topic?.topicable?.value} />;
        case TopicType.RichText:
          return (
            <div className="container-xl">
              <MarkdownPlayer
                children={topic.topicable.value}
                onLoad={() => console.log("MarkdownPlayer onLoad")}
              />
            </div>
          );
        case TopicType.Video:
        case TopicType.Audio:
          return <AudioVideoPlayer url={topic.topicable.url} />;
        case TopicType.Image:
          return <ImagePlayer topic={topic} onLoad={() => console.log("")} />;
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
    return <React.Fragment />;
  }, [topic, apiUrl]);

  return (
    <div className="topic-preview-modal">
      <div className="topic-preview-modal-content">{topicRender}</div>
    </div>
  );
};

export default CourseProgramPreview;
