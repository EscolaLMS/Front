import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { useCallback, useContext, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export function useLessonProgram(
  program: API.CourseProgram,
  courseRouteName: string = "/course/"
) {
  const { sendProgress, getNextPrevTopic, progress } =
    useContext(EscolaLMSContext);
  const [isDisabledNextTopicButton, setIsDisabledNextTopicButton] =
    useState(false);
  const { lessonID, topicID } =
    useParams<{ lessonID: string; topicID: string }>();
  const { push } = useHistory();

  const lessonId = lessonID ? lessonID : program.lessons[0].id;
  const topicId = topicID
    ? topicID
    : (program &&
        program.lessons &&
        program.lessons[0] &&
        program.lessons[0].topics &&
        program?.lessons[0]?.topics[0]?.id) ||
      0;

  const lesson: API.Lesson | undefined = useMemo(
    () => program.lessons.find((lesson) => lesson.id === Number(lessonId)),
    [program, lessonId]
  );

  const topic: API.Topic | undefined = useMemo(
    () =>
      lesson &&
      lesson.topics &&
      lesson.topics.find((topic) => topic.id === Number(topicId)),
    [lesson, topicId]
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
    isDisabledNextTopicButton,
    setIsDisabledNextTopicButton,
    onNextTopicPreview,
    sendProgress,
    progress,
  } as const;
}
