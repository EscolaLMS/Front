import React, { ReactElement, FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";

const TextPlayerStyles = styled.div`
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.9em;
  }
`;

const TextPlayer: FunctionComponent<{
  value?: string;
  onLoad?: () => void;
}> = ({ value, onLoad }): ReactElement => {
  useEffect(() => {
    value && onLoad && onLoad();
  }, [value, onLoad]);

  return (
    <TextPlayerStyles>
      {value && <MarkdownRenderer>{value}</MarkdownRenderer>}
    </TextPlayerStyles>
  );
};

export default TextPlayer;
