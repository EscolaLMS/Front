import React, { ReactElement, FunctionComponent, useEffect } from "react";
import { ICurriculumLecture } from "../../../../interfaces/course/curriculum";
import ReactMarkdown from "react-markdown";

const Text: FunctionComponent<{
  lecture?: ICurriculumLecture;
  onLoad: () => void;
}> = ({ lecture, onLoad }): ReactElement => {
  useEffect(() => {
    lecture && onLoad();
  }, [lecture]);

  return lecture?.contenttext ? (
    <ReactMarkdown className="curriculum-markdown">
      {lecture.contenttext}
    </ReactMarkdown>
  ) : (
    <p>No lesson data.</p>
  );
};

export default Text;
