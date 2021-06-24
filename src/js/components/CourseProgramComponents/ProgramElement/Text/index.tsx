import React, { ReactElement, FunctionComponent, useEffect } from "react";
import { IProgramLecture } from "../../../../interfaces/course/program";
import ReactMarkdown from "react-markdown";

const Text: FunctionComponent<{
  lecture?: IProgramLecture;
  onLoad: () => void;
}> = ({ lecture, onLoad }): ReactElement => {
  useEffect(() => {
    lecture && onLoad();
  }, [lecture]);

  return lecture?.contenttext ? (
    <ReactMarkdown className="program-markdown">
      {lecture.contenttext}
    </ReactMarkdown>
  ) : (
    <p>No lesson data.</p>
  );
};

export default Text;
