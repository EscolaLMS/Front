import { useCallback, useContext, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import {
  getFlatLessons,
  getFlatTopics,
} from "@escolalms/components/lib/utils/course";

export function useLessonProgram(
  program: API.CourseProgram,
  courseRouteName: string = "/course/"
) {
  const { sendProgress, getNextPrevTopic, progress } =
    useContext(EscolaLMSContext);
  const [isNextTopicButtonDisabled, disableNextTopicButton] = useState(false);
  const { lessonID, topicID } = useParams<{
    lessonID: string;
    topicID: string;
  }>();
  const { push } = useHistory();

  const flatLessons = useMemo(
    () => getFlatLessons(program?.lessons ?? []),
    [program?.lessons]
  );
  const flatTopics = useMemo(
    () => getFlatTopics(program?.lessons ?? []),
    [program?.lessons]
  );

  const lessonId = lessonID ? Number(lessonID) : flatLessons?.[0]?.id;
  const topicId = topicID ? Number(topicID) : flatTopics?.[0]?.id;

  const lesson = useMemo(
    () => flatLessons.find((lesson) => lesson.id === lessonId),
    [flatLessons, lessonId]
  );

  const topic = useMemo(
    () => flatTopics.find((topic) => topic.id === topicId),
    [flatTopics, topicId]
  );

  const onNextTopic = useCallback(() => {
    program.id &&
      sendProgress(program.id, [{ topic_id: Number(topicId), status: 1 }]).then(
        () => {
          const nextTopic = getNextPrevTopic(Number(topicId));

          nextTopic &&
            push(
              `${courseRouteName}${program.id}/${nextTopic.lesson_id}/${nextTopic.id}`,
              null
            );
        }
      );
  }, [topicId, program, push, getNextPrevTopic, sendProgress, courseRouteName]);
  const onPrevTopic = useCallback(() => {
    program.id &&
      sendProgress(program.id, [{ topic_id: Number(topicId), status: 1 }]).then(
        () => {
          const prevTopic = getNextPrevTopic(Number(topicId), false);

          prevTopic &&
            push(
              `${courseRouteName}${program.id}/${prevTopic.lesson_id}/${prevTopic.id}`,
              null
            );
        }
      );
  }, [topicId, program, push, getNextPrevTopic, sendProgress, courseRouteName]);

  const onNextTopicPreview = useCallback(
    (next = true) => {
      const nextTopic = getNextPrevTopic(Number(topicId), next);

      nextTopic &&
        push(
          `${courseRouteName}${program.id}/${nextTopic?.lesson_id}/${nextTopic?.id}`
        );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lessonId, topicId, program, program.id, push, courseRouteName]
  );

  return {
    topic,
    lesson,
    onNextTopic,
    onPrevTopic,
    getNextPrevTopic,
    isNextTopicButtonDisabled,
    disableNextTopicButton,
    onNextTopicPreview,
    sendProgress,
    progress,
  } as const;
}
