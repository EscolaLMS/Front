import React, { ReactElement, FunctionComponent, useEffect } from "react";
import ReactMarkdownWithTrim from "../../ReactMarkdownWithTrim";

const fontSizes = ["small", "regular", "bigger", "big"];

const TextPlayer: FunctionComponent<{
  value?: string;
  onLoad?: () => void;
  fontSize: number;
}> = ({ value, onLoad, fontSize }): ReactElement => {
  useEffect(() => {
    value && onLoad && onLoad();
  }, [value, onLoad]);

  return (
    <div
      className={`container-xl center-image-richtext typebase size-${fontSizes[fontSize]}`}
    >
      {value && <ReactMarkdownWithTrim>{value}</ReactMarkdownWithTrim>}
    </div>
  );
};

export default TextPlayer;
