import React, { ReactElement, FunctionComponent } from "react";

import Button from "../../../FormElements/Button/Button";
import Icon from "../../../Icon";

import "./index.scss";

interface IProps {
  onRetry: () => void;
}

const TopicFinished: FunctionComponent<IProps> = ({
  onRetry,
}): ReactElement => {
  return (
    <div className="topic-finished">
      <div className="topic-finished__head">
        <h2>Lesson completed</h2>
      </div>
      <Button className="grey" onClick={(): void => onRetry()}>
        <Icon name="retry" />
        Retry
      </Button>
    </div>
  );
};

export default TopicFinished;
