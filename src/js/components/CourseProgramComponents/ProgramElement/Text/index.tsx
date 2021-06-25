import React, { ReactElement, FunctionComponent, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Text: FunctionComponent<{
  topic?: API.Topic;
  onLoad: () => void;
}> = ({ topic, onLoad }): ReactElement => {
  useEffect(() => {
    topic && onLoad();
  }, [topic]);

  console.log(topic);

  return topic?.topicable.value ? (
    <ReactMarkdown className="program-markdown">
      {topic.topicable.value}
    </ReactMarkdown>
  ) : (
    <p>No lesson data.</p>
  );
};

export default Text;
