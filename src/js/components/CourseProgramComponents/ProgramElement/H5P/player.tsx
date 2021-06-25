import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
  useRef,
} from "react";

import TopicFinished from "./finished";
import Loader from "../../../Loader";

import { h5pProgress } from "../../../../services/progress";

import { EditorContextProvider } from "../../../../../../node_modules/h5p-player/src/components/hh5p/context/index";
import Player from "../../../../../../node_modules/h5p-player/src/components/hh5p/player/index";

interface IH5PPlayerProps {
  courseId: string;
  topic: API.Topic;
  completed: boolean;
  loading: boolean;
}

import API from "./../../../../services/api";

const H5PPlayer: FunctionComponent<IH5PPlayerProps> = ({
  courseId,
  topic,
  completed,
  loading,
}): ReactElement => {
  const url = API.getpath("/hh5p");
  return (
    <EditorContextProvider url={url}>
      <Player
        id={Number(
          topic.topicable?.value
        )} /* onXAPI={(event) => h5pProgress(courseId, topic.id, event.statement)} */
      />
    </EditorContextProvider>
  );
};

export default H5PPlayer;
