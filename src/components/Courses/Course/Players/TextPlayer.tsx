import { ReactElement, FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { API } from "@escolalms/sdk/lib";
import { Download } from "@escolalms/components/lib/components/atoms/Download/Download";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";

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
  .resources-container {
    padding: 24px 0;
    margin-top: 24px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${({ theme }) => theme.primaryColor};
  }
`;

const TextPlayer: FunctionComponent<{
  value?: string;
  onLoad?: () => void;
  resources?: API.TopicResource[];
}> = ({ value, onLoad, resources }): ReactElement => {
  const { t } = useTranslation();
  const isResources = resources && resources.length > 0;

  useEffect(() => {
    value && onLoad && onLoad();
  }, [value, onLoad]);

  return (
    <TextPlayerStyles>
      {value && <MarkdownRenderer>{value}</MarkdownRenderer>}
      {isResources && (
        <div className="resources-container">
          <Text>{t("CoursePage.Resources")}</Text>
          {resources.map(({ name, url }) => (
            <Download href={url} fileName={name} />
          ))}
        </div>
      )}
    </TextPlayerStyles>
  );
};

export default TextPlayer;
