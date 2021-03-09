import React, {
  ReactElement,
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
} from "react";

import { useParams } from "react-router-dom";

import { ICurriculumLecture } from "../../../interfaces/course/curriculum";
import { IDefaultApiError } from "../../../interfaces/redux";

import { completeLecture } from "../../../services/lectureComplete";
import { pingLecture } from "../../../services/pingLecture";

import H5PPlayer from "./H5P/player";
import Text from "./Text";
import PdfViewer from "./PdfViewer";

const CurriculumElement: FunctionComponent<{
  lecture: ICurriculumLecture;
  completed: boolean;
  loading: boolean;
  error: boolean | IDefaultApiError;
}> = ({ lecture, completed, loading, error }): ReactElement => {
  const { id: courseId } = useParams<{
    id: string;
  }>();

  const lectureId = useMemo(() => {
    return lecture?.lecture_quiz_id;
  }, [lecture]);

  const onCompleteLectrue = useCallback((): void => {
    if (!completed && !loading && !error && lectureId) {
      completeLecture(courseId, lectureId);
    }
  }, [lectureId, completed, loading, navigator, error]);

  useEffect(() => {
    if (lectureId) {
      const interval = setInterval(() => {
        pingLecture(lectureId);
      }, 60000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [lectureId]);

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
};

export default CurriculumElement;
