import React, { useCallback, useContext, useEffect } from "react";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { XAPIEvent } from "@escolalms/h5p-react";
import TextPlayer from "./Players/TextPlayer";
import { API } from "@escolalms/sdk/lib";
import { ImagePlayer } from "@escolalms/components/lib/components/players/ImagePlayer/ImagePlayer";
import { AudioVideoPlayer } from "@escolalms/components/lib/components/players/AudioVideoPlayer/AudioVideoPlayer";
import { OEmbedPlayer } from "@escolalms/components/lib/components/players/OEmbedPlayer/OEmbedPlayer";
import { H5Player } from "@escolalms/components/lib/components/players/H5Player/H5Player";
import { PdfPlayer } from "@escolalms/components/lib/components/players/PdfPlayer/PdfPlayer";
import { ProjectPlayer } from "@escolalms/components/lib/components/players/ProjectPlayer/ProjectPlayer";
import { isMobile } from "react-device-detect";
import ScormPlayer from "./Players/ScormPlayer";
import GiftQuizPlayer from "@escolalms/components/lib/components/quizzes";
import { useCoursePanel } from "@/components/Courses/Course/Context";

export const CourseProgramContent: React.FC<{
  topic: API.Topic | undefined;
  preview?: boolean;
}> = ({ topic, preview = false }) => {
  const { courseId, nextTopic, setIsNextTopicButtonDisabled, showFinishModal } =
    useCoursePanel();

  const { topicPing, topicIsFinished, h5pProgress, fetchCourseProgress } =
    useContext(EscolaLMSContext);

  const isThereNextTopic = !!nextTopic;
  const topicId = topic?.id;

  const onXAPI = useCallback(
    (event: XAPIEvent): void => {
      if (event?.statement) {
        h5pProgress(
          String(courseId),
          Number(topicId),
          event?.statement as API.IStatement
        )?.then(() => {
          fetchCourseProgress(Number(courseId));
        });
      }
    },
    [h5pProgress, courseId, topicId, fetchCourseProgress]
  );

  useEffect(() => {
    const isTopicFinished = Boolean(topicId && topicIsFinished(topicId));
    isThereNextTopic &&
      isTopicFinished &&
      setIsNextTopicButtonDisabled?.(
        !isTopicFinished && !Boolean(topic?.can_skip)
      );
  }, [
    setIsNextTopicButtonDisabled,
    topicId,
    topic?.can_skip,
    isThereNextTopic,
    topicIsFinished,
  ]);

  useEffect(() => {
    if (!preview && !showFinishModal) {
      const ping = () =>
        topicId && !topicIsFinished(topicId) && topicPing(topicId);

      const interval = setInterval(() => {
        ping();
      }, 5000);

      ping();
      return () => clearInterval(interval);
    }
  }, [topicPing, topicId, topicIsFinished, preview, showFinishModal]);

  const enableNextButton = useCallback(
    () => setIsNextTopicButtonDisabled?.(false),
    [setIsNextTopicButtonDisabled]
  );

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
            onTopicEnd={enableNextButton}
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
            onTopicEnd={enableNextButton}
          />
        );

      case API.TopicType.Pdf:
        return (
          <PdfPlayer
            url={topic.topicable.url}
            pageConfig={{
              className: "course-pdf-player",
            }}
            onTopicEnd={enableNextButton}
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
        return <GiftQuizPlayer topic={topic} onTopicEnd={enableNextButton} />;
      case API.TopicType.Project:
        return (
          <ProjectPlayer
            course_id={Number(courseId)}
            topic={topic}
            onSuccess={enableNextButton}
            onProjectsChange={enableNextButton}
          />
        );
      default:
        return <pre>{(topic as API.Topic).topicable_type}</pre>;
    }
  }

  return <pre>loading... (or error)</pre>;
};

export default CourseProgramContent;
