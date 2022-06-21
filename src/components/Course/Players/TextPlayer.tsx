import React, { ReactElement, FunctionComponent, useEffect } from "react";
import MarkdownReader from "../../Markdown/MarkdownReader";

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
      {value && <MarkdownReader>{value}</MarkdownReader>}
    </div>
  );
};

export default TextPlayer;
