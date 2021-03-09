import React, { ReactElement } from "react";

import Icon from "../Icon";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "./index.scss";

const VideoProgress: React.FC = (): ReactElement => {
  return (
    <div className="video-progress-circle">
      <CircularProgressbarWithChildren strokeWidth={12} value={10}>
        <Icon name="play" />
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default VideoProgress;
