import React, { useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { XAPIEvent } from "@escolalms/h5p-react";
import TextPlayer from "./Players/TextPlayer";
import { API } from "@escolalms/sdk/lib";
import { ImagePlayer } from "@escolalms/components/lib/components/players/ImagePlayer/ImagePlayer";
import { AudioVideoPlayer } from "@escolalms/components/lib/components/players/AudioVideoPlayer/AudioVideoPlayer";
import { OEmbedPlayer } from "@escolalms/components/lib/components/players/OEmbedPlayer/OEmbedPlayer";
import { H5Player } from "@escolalms/components/lib/components/players/H5Player/H5Player";
import { PdfPlayer } from "@escolalms/components/lib/components/players/PdfPlayer/PdfPlayer";
import {
  ProjectPlayer,
  ProjectsData,
} from "@escolalms/components/lib/components/players/ProjectPlayer/ProjectPlayer";
import { isMobile } from "react-device-detect";
import ScormPlayer from "./Players/ScormPlayer";
import styled from "styled-components";
import GiftQuizPlayer from "@escolalms/components/lib/components/quizzes";

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
  topic: API.Topic | undefined;
  isThereAnotherTopic?: boolean;
  preview?: boolean;
  disableNextTopicButton?: (b: boolean) => void;
  onXAPI?: (event: XAPIEvent) => void;
  onVideoEnd?: () => void;
  onAudioEnd?: () => void;
  onPdfEnd?: () => void;
  onQuizEnd?: () => void;
  onProjectEnd?: () => void;
  onProjectsChange?: (projects: ProjectsData) => void;
}> = ({
  topic,
  preview = false,
  disableNextTopicButton,
  isThereAnotherTopic = true,
  onXAPI,
  onVideoEnd,
  onAudioEnd,
  onPdfEnd,
  onQuizEnd,
  onProjectEnd,
  onProjectsChange,
}) => {
  const { program, topicPing, topicIsFinished } = useContext(EscolaLMSContext);

  useEffect(() => {
    const isTopicFinished = topic?.id && topicIsFinished(topic.id);

    isThereAnotherTopic &&
      disableNextTopicButton &&
      isTopicFinished &&
      disableNextTopicButton(!isTopicFinished && !topic?.can_skip);
  }, [disableNextTopicButton, topic, isThereAnotherTopic, topicIsFinished]);

  useEffect(() => {
    if (!preview) {
      const ping = () =>
        topic?.id && !topicIsFinished(topic?.id) && topicPing(topic?.id);
      const interval = setInterval(() => {
        ping();
      }, 5000);
      ping();
      return () => clearInterval(interval);
    }
  }, [topicPing, preview, topic?.id, topicIsFinished]);

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
      case API.TopicType.H5P:
        return (
          <H5Player
            onXAPI={(e: XAPIEvent) => onXAPI?.(e)}
            //@ts-ignore
            h5pObject={topic.topicable.content as API.H5PObject}
            hideActionButtons
          />
        );
      case API.TopicType.OEmbed:
        return (
          <>
            <OEmbedPlayer url={topic.topicable.value} key={topic.id} />
          </>
        );
      case API.TopicType.RichText:
        return (
          <TextPlayer
            value={topic.topicable.value}
            resources={topic.resources}
          />
        );
      case API.TopicType.Video:
        return (
          <AudioVideoPlayer
            mobile={isMobile}
            url={topic.topicable.url}
            light
            onTopicEnd={onVideoEnd}
          />
        );
      case API.TopicType.Image:
        return <ImagePlayer topic={topic} onLoad={() => {}} />;
      case API.TopicType.Audio:
        return (
          <AudioVideoPlayer
            mobile={isMobile}
            audio
            url={topic.topicable.url}
            light
            onTopicEnd={onAudioEnd}
          />
        );

      case API.TopicType.Pdf:
        return (
          <StyledPdfPlayer
            url={topic.topicable.url}
            pageConfig={{
              renderMode: "svg",
              className: "course-pdf-player",
            }}
            onTopicEnd={onPdfEnd}
          />
        );

      case API.TopicType.Scorm:
        return (
          <ScormPlayer
            value={{
              title: topic.title,
              uuid: topic.topicable.uuid,
            }}
          />
        );

      case API.TopicType.GiftQuiz:
        return <GiftQuizPlayer topic={topic} onTopicEnd={onQuizEnd} />;
      case API.TopicType.Project:
        return (
          <ProjectPlayer
            course_id={program.value?.id ?? 0}
            topic={topic}
            onSuccess={onProjectEnd}
            onProjectsChange={onProjectsChange}
          />
        );
      default:
        return <pre>{(topic as API.Topic).topicable_type}</pre>;
    }
  }

  return <pre>loading... (or error)</pre>;
};

export default CourseProgramContent;
