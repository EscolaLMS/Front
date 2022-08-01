import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import React, { ReactElement, FunctionComponent, useEffect } from "react";
import { Link } from "@escolalms/components/lib/components/atoms/Link/Link";

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
      {value && (
        <MarkdownRenderer
          components={{
            a: (props) => <Link {...props} underline />,
          }}
        >
          {value}
        </MarkdownRenderer>
      )}
    </div>
  );
};

export default TextPlayer;
