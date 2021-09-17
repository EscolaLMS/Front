import React, { ReactElement, FunctionComponent, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const fontSizes = ["small", "regular", "bigger", "big"];

const TextPlayer: FunctionComponent<{
  value?: string;
  onLoad: () => void;
  fontSize: number;
}> = ({ value, onLoad, fontSize }): ReactElement => {
  useEffect(() => {
    value && onLoad();
  }, [value]);

  return (
    <div className={`container-xl typebase size-${fontSizes[fontSize]}`}>
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  );
};

export default TextPlayer;
