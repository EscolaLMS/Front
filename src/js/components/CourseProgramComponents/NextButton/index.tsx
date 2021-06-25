import React, { ReactElement, useCallback, useMemo } from "react";

import { useHistory } from "react-router-dom";

import { IProgramButton } from "../../../interfaces/course/program";

import Button from "../../FormElements/Button/Button";

import "./index.scss";

const NextButton: React.FC<IProgramButton> = ({
  active,
  topic,
  lesson,
  courseId,
  loading,
  state,
}): ReactElement => {
  const history = useHistory();

  const text = useMemo(() => {
    switch (state) {
      case "EMPTY":
        return "Start";
      case "NOTFOUND":
        return "Continue";
      case "COMPLETE":
        return "Finish";
      default:
        return "Next";
    }
  }, [state]);

  const onButtonClick = useCallback(() => {
    if (state === "COMPLETE") {
      history.push(`/course/${courseId}/program/`);
    } else if (lesson && topic) {
      history.push(`/course/${courseId}/program/${lesson}/${topic}`);
    }
  }, [state, lesson, topic]);

  return (
    <Button
      className="next-button"
      onClick={() => onButtonClick()}
      disabled={!active || loading}
      loading={loading}
    >
      {text}
    </Button>
  );
};

export default NextButton;
