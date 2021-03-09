import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
  useRef,
} from "react";

import LectureFinished from "./finished";
import Loader from "../../../Loader";

import { h5pProgress } from "../../../../services/progress";
import { ICurriculumLecture } from "../../../../interfaces/course/curriculum";

interface IH5PPlayerProps {
  courseId: string;
  lecture: ICurriculumLecture;
  completed: boolean;
  loading: boolean;
}

const H5PPlayer: FunctionComponent<IH5PPlayerProps> = ({
  courseId,
  lecture,
  completed,
  loading,
}): ReactElement => {
  const [height, setHeight] = useState<number>(100);
  const iframeEl = useRef<HTMLIFrameElement>(null);

  const [isCompleted, setIsCompleted] = useState(completed);

  useEffect(() => {
    setIsCompleted(completed);
  }, [lecture.media.id]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data.id && event.data.id == lecture.media.id) {
        if (event.data.iFrameHeight) {
          setHeight(event.data.iFrameHeight);
        }
        if (event?.data?.statement) {
          h5pProgress(
            courseId,
            Number(lecture.lecture_quiz_id),
            event?.data?.statement
          );
        }
      }
    };
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [iframeEl, lecture.media.id]);

  if (isCompleted) {
    return <LectureFinished onRetry={() => setIsCompleted(false)} />;
  }

  return (
    <div>
      {loading && <Loader width={100} height={100} />}
      <iframe
        ref={iframeEl}
        src={lecture.media.url}
        style={{ height }}
      ></iframe>
    </div>
  );
};

export default H5PPlayer;
