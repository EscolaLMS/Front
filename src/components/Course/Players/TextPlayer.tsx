import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import React, { ReactElement, FunctionComponent, useEffect } from "react";

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
      className={`center-image-richtext typebase size-${fontSizes[fontSize]}`}
    >
      {value && <MarkdownRenderer>{value}</MarkdownRenderer>}
    </div>
  );
};

export default TextPlayer;
