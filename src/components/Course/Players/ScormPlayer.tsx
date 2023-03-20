import React, {
  ReactElement,
  FunctionComponent,
  useContext,
  useState,
} from "react";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import { ResizeIcon } from "../../../icons";

const StyledDiv = styled.div<{ fullview: boolean }>`
  > button {
    position: fixed;
    right: 5px;
    bottom: 5px;
    z-index: 9999;
    svg path {
      fill: white;
    }
  }
  iframe {
    border: none;
    display: block;
    width: 100%;
  }
  ${(props) => {
    if (props.fullview) {
      return css`
        iframe {
          position: fixed;
          top: 90px;
          left: 0;
          height: calc(100% - 90px - 80px);

          z-index: 9999;
        }
      `;
    } else {
      return css`
        display: flex;

        min-height: 80vh;
        max-height: 80vh;
        height: 100vh;
        iframe {
          height: 100%;
        }
      `;
    }
  }}
`;

interface ScormPlayerProps {
  title: string;
  uuid: string;
}

const ScormPlayer: FunctionComponent<{
  value: ScormPlayerProps;
}> = ({ value }): ReactElement => {
  const { apiUrl } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [fullView, setFullView] = useState(false);

  return (
    <div className="scorm-wrapper">
      <StyledDiv fullview={fullView}>
        <Button onClick={() => setFullView(!fullView)}>
          {" "}
          {t("Scorm.Resize")} <ResizeIcon />
        </Button>
        <iframe
          title={value.title}
          src={`${apiUrl}/api/scorm/play/${value.uuid}`}
        />
      </StyledDiv>
    </div>
  );
};

export default ScormPlayer;
