import { useCallback, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import { XAPIEvent } from "@escolalms/h5p-react";
import { completed } from "@escolalms/sdk/lib/services/courses";

export const noCompletedEventsIds: string[] = [
  "http://h5p.org/libraries/H5P.ImageJuxtaposition-1.4",
  "http://h5p.org/libraries/H5P.Crossword-0.4",
];

const isXAPIEventAllowed = (event: XAPIEvent) => {
  const { statement } = event;
  const eventContextCategoriesIds =
    statement?.context?.contextActivities?.category?.map(({ id }) => id);
  const isContextCategoryAllowed =
    eventContextCategoriesIds &&
    noCompletedEventsIds.some((value) =>
      eventContextCategoriesIds?.some((id) => id.includes(value))
    );
  return isContextCategoryAllowed;
};

interface Props {
  program: API.CourseProgram;
  disableNextTopicButton?: (b: boolean) => void;
  isThereAnotherTopic?: boolean;
}

export const useCourseProgram = ({
  program,
  disableNextTopicButton,
  isThereAnotherTopic = true,
}: Props) => {
  const { topicID } = useParams<{ lessonID: string; topicID: string }>();
  const { sendProgress, h5pProgress } = useContext(EscolaLMSContext);
  const [lastH5pEvent, setLastH5pEvent] = useState<XAPIEvent | null>(null);

  const onCompleteH5pTopic = useCallback(
    (event: XAPIEvent, clearState: boolean = true): void => {
      if (program?.id) {
        h5pProgress(
          String(program?.id),
          Number(topicID),
          event?.statement as API.IStatement
        )?.then(() => {
          if (clearState) {
            setLastH5pEvent(null);
          }
        });
      }
    },
    [program?.id, topicID, h5pProgress]
  );

  const onCompleteTopic = useCallback(
    (topicCanSkip?: boolean): void => {
      disableNextTopicButton && disableNextTopicButton(false);
      if (program?.id && !lastH5pEvent) {
        sendProgress(program?.id, [{ topic_id: Number(topicID), status: 1 }]);
      } else if (lastH5pEvent) {
        onCompleteH5pTopic(
          {
            ...lastH5pEvent,
            statement: {
              ...lastH5pEvent.statement,
              verb: {
                ...lastH5pEvent.statement.verb,
                id:
                  topicCanSkip || isXAPIEventAllowed(lastH5pEvent)
                    ? (completed.find((value) =>
                        value.includes("completed")
                      ) as string)
                    : lastH5pEvent.statement.verb.id,
              },
            },
          },
          true
        );
      }
    },
    [
      lastH5pEvent,
      disableNextTopicButton,
      program?.id,
      sendProgress,
      topicID,
      onCompleteH5pTopic,
    ]
  );

  const onXAPI = useCallback(
    (event: XAPIEvent): void => {
      isThereAnotherTopic &&
        disableNextTopicButton &&
        disableNextTopicButton(!event?.statement?.verb?.id);

      setLastH5pEvent(event);
      if (
        event?.statement &&
        event?.statement?.verb?.id !==
          completed.find((value) => value.includes("completed"))
      ) {
        onCompleteH5pTopic(event, false);
      }
    },
    [isThereAnotherTopic, disableNextTopicButton, onCompleteH5pTopic]
  );

  return {
    onCompleteTopic,
    onXAPI,
    onCompleteH5pTopic,
  };
};
