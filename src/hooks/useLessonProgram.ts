import { useCallback, useContext, useEffect, useMemo, useState } from "react";
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
  const {
    sendProgress,
    getNextPrevTopic,
    progress,
    courseProgressDetails,
    fetchProgress,
  } = useContext(EscolaLMSContext);
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

  useEffect(() => {
    if (!topicId) return;
    fetchProgress();
  }, [fetchProgress, topicId]);

  const lesson = useMemo(
    () => flatLessons.find((lesson) => lesson.id === lessonId),
    [flatLessons, lessonId]
  );

  const topic = useMemo(
    () => flatTopics.find((topic) => topic.id === topicId),
    [flatTopics, topicId]
  );

  const isLastTopic = useMemo(
    () => flatTopics.at(-1)?.id === topic?.id,
    [flatTopics, topic?.id]
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
    const prevTopic = getNextPrevTopic(Number(topicId), false);
    if (program.id && topic?.can_skip) {
      sendProgress(program.id, [{ topic_id: Number(topicId), status: 1 }]).then(
        () => {
          prevTopic &&
            push(
              `${courseRouteName}${program.id}/${prevTopic.lesson_id}/${prevTopic.id}`,
              null
            );
        }
      );
      return;
    }
    prevTopic &&
      push(
        `${courseRouteName}${program.id}/${prevTopic.lesson_id}/${prevTopic.id}`,
        null
      );
  }, [
    topicId,
    program,
    push,
    getNextPrevTopic,
    sendProgress,
    courseRouteName,
    topic,
  ]);

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
    courseProgressDetails,
    isLastTopic,
  } as const;
}
