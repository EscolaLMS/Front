import React, { ReactElement, useCallback, useMemo } from "react";

import { useHistory } from "react-router-dom";

import { ICurriculumButton } from "../../../interfaces/course/curriculum";

import Button from "../../FormElements/Button/Button";

import "./index.scss";

const NextButton: React.FC<ICurriculumButton> = ({
  active,
  lesson,
  section,
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
      history.push(`/course/${courseId}/curriculum/`);
    } else if (lesson && section) {
      history.push(`/course/${courseId}/curriculum/${section}/${lesson}`);
    }
  }, [state, lesson, section]);

  return (
    <Button
      className="next-button"
      onClick={() => onButtonClick()}
      disabled={!active || loading}
      loading={loading}
    >
      {!loading && <> {text} </>}
    </Button>
  );
};

export default NextButton;
