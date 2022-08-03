import React, { useContext, useState } from "react";

import styled from "styled-components";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useTranslation } from "react-i18next";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { Note } from "@escolalms/components/lib/components/atoms/Note/Note";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";

const StyledAside = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  > div {
    padding-top: 5px;
    padding-bottom: 5px;
    align-items: center;
    margin-bottom: 0;
  }
  button {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .time {
    margin: 0;
  }
`;

const Warning = () => {
  const { settings } = useContext(EscolaLMSContext);
  const [showWarning, setShowWarning] = useState(true);

  const { t } = useTranslation();

  const footerFromApi: string = settings?.value?.config?.footerWarning;

  const handleClick = () => {
    localStorage.setItem("hideWarning", "true");
    setShowWarning(false);
  };

  if (!showWarning || !footerFromApi) {
    return <React.Fragment />;
  }

  return (
    <StyledAside>
      <Note
        time={
          <Button mode="outline" onClick={handleClick}>
            {t("I'm aware")}
          </Button>
        }
        description={<MarkdownRenderer>{footerFromApi}</MarkdownRenderer>}
      />
    </StyledAside>
  );
};

export default Warning;
