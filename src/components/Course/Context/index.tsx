import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useParams } from "react-router-dom";
import { isAfter } from "date-fns";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

import {
  getFlatLessons,
  getFlatTopics,
  getLessonParentsIds,
  getPrevNextTopic,
} from "@/utils/course";

export type CourseParams = Record<
  "id" | "lessonID" | "topicID" | string,
  string
>;

interface CourseContext {
  courseId?: string;
  flatLessons?: API.Lesson[];
  flatTopics?: API.Topic[];
  prevTopic?: API.Topic | null;
  currentTopic?: API.Topic;
  nextTopic?: API.Topic | null;
  currentLesson?: API.Lesson;
  currentCourseProgram?: API.CourseProgram;
  isNextTopicButtonDisabled?: boolean;
  setIsNextTopicButtonDisabled?: (b: boolean) => void;
  completeCurrentTopic?: () => void;
  finishedTopicsIds?: number[];
  availableTopicsIds?: number[];
  currentLessonParentsIds?: number[];
  isCourseFinished?: boolean;
  isAnyDataLoading?: boolean;
}

const Context = React.createContext<CourseContext>({});

export const useCoursePanel = () => useContext(Context);

const DISABLE_NEXT_BUTTON_TYPES = [
  API.TopicType.H5P,
  API.TopicType.Audio,
  API.TopicType.Video,
  API.TopicType.Project,
  API.TopicType.GiftQuiz,
];

const CoursePanelProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { sendProgress, program, fetchProgram, progress, fetchProgress } =
    useContext(EscolaLMSContext);
  const [isNextTopicButtonDisabled, setIsNextTopicButtonDisabled] =
    useState(false);

  // :id/:lessonID?/:topicID
  const {
    id: courseId,
    lessonID: paramLessonId,
    topicID: paramTopicId,
  } = useParams<CourseParams>();

  const currentCourseProgram = useMemo(() => program.value, [program.value]);

  // For development purposes only
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    // @ts-ignore
    window.resetProgress = () =>
      sendProgress(
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        currentCourseProgram?.id!,
        (flatTopics ?? []).map((topic) => ({
          topic_id: Number(topic?.id),
          status: API.CourseProgressItemElementStatus.INCOMPLETE,
        }))
      );
  }

  const flatLessons = useMemo(
    () => getFlatLessons(currentCourseProgram?.lessons ?? []),
    [currentCourseProgram?.lessons]
  );

  const flatTopics = useMemo(
    () => getFlatTopics(currentCourseProgram?.lessons ?? []),
    [currentCourseProgram?.lessons]
  );

  const findLessonById = useCallback(
    (id: number) => flatLessons.find((l) => l.id === id),
    [flatLessons]
  );

  const findTopicById = useCallback(
    (id: number) => flatTopics.find((t) => t.id === id),
    [flatTopics]
  );

  const prevTopic = useMemo(
    () => getPrevNextTopic(Number(paramTopicId), flatTopics),
    [flatTopics, paramTopicId]
  );

  const currentTopic = useMemo(
    () => findTopicById(Number(paramTopicId)),
    [findTopicById, paramTopicId]
  );

  const nextTopic = useMemo(
    () => getPrevNextTopic(Number(paramTopicId), flatTopics, "next"),
    [flatTopics, paramTopicId]
  );

  const currentLesson = useMemo(
    () => currentTopic && findLessonById(currentTopic?.lesson_id),
    [findLessonById, currentTopic]
  );

  const currentCourseProgress = useMemo(
    () =>
      (progress.value ?? []).find(
        ({ course }) => course.id === Number(courseId)
      ),
    [progress, courseId]
  );

  const completeCurrentTopic = useCallback(() => {
    if (currentCourseProgram?.id === undefined) return;
    if (currentTopic?.id === undefined) return;

    setIsNextTopicButtonDisabled(false);
    sendProgress(currentCourseProgram.id, [
      {
        topic_id: currentTopic.id,
        status: API.CourseProgressItemElementStatus.COMPLETE,
      },
    ]);
  }, [sendProgress, currentCourseProgram?.id, currentTopic?.id]);

  const finishedTopicsIds = useMemo(
    () =>
      (currentCourseProgress?.progress ?? []).reduce<number[]>(
        (acc, { status, topic_id }) =>
          status === API.CourseProgressItemElementStatus.COMPLETE
            ? [...acc, topic_id]
            : acc,
        []
      ),
    [currentCourseProgress]
  );

  const availableTopicsIds = useMemo(() => {
    const activeLessons = (currentCourseProgram?.lessons ?? []).filter(
      (l) =>
        l.active_from === null ||
        (l.active_from && isAfter(new Date(), new Date(l.active_from)))
    );

    const activeLessonsFlatTopics = getFlatTopics(activeLessons);

    const { incomplete, in_progress, complete } =
      activeLessonsFlatTopics.reduce<{
        in_progress: number[];
        complete: number[];
        incomplete: number[];
      }>(
        (acc, t) => {
          const el = (currentCourseProgress?.progress ?? []).find(
            ({ topic_id }) => topic_id === t.id
          );
          if (!el) return acc;

          const statusMap = {
            [API.CourseProgressItemElementStatus.INCOMPLETE]: "incomplete",
            [API.CourseProgressItemElementStatus.COMPLETE]: "complete",
            [API.CourseProgressItemElementStatus.IN_PROGRESS]: "in_progress",
          } as const;

          return {
            ...acc,
            [statusMap[el.status]]: [...acc[statusMap[el.status]], t.id],
          };
        },
        {
          in_progress: [],
          incomplete: [],
          complete: [],
        }
      );

    if (in_progress.length) return [...in_progress, ...complete];

    const firstInCompletedLessonId = incomplete?.[0] ? [incomplete[0]] : [];
    return [...complete, ...firstInCompletedLessonId];
  }, [currentCourseProgram?.lessons, currentCourseProgress?.progress]);

  const currentLessonParentsIds: number[] = useMemo(() => {
    if (!currentLesson) return [];

    return getLessonParentsIds(flatLessons, currentLesson);
  }, [currentLesson, flatLessons]);

  useEffect(() => {
    if (!courseId) return;

    fetchProgram(Number(courseId));
  }, [courseId, fetchProgram]);

  useEffect(() => {
    if (!paramTopicId) return;

    fetchProgress();
  }, [fetchProgress, paramTopicId]);

  // disable next button
  useEffect(() => {
    if (!currentTopic?.topicable_type) return;

    setIsNextTopicButtonDisabled(
      DISABLE_NEXT_BUTTON_TYPES.includes(currentTopic?.topicable_type)
    );
  }, [currentTopic?.topicable_type]);

  const isCourseFinished = useMemo(
    () =>
      Boolean(
        currentCourseProgress?.progress &&
          currentCourseProgress?.progress.every(
            ({ status }) =>
              status === API.CourseProgressItemElementStatus.COMPLETE
          )
      ),
    [currentCourseProgress?.progress]
  );

  const isAnyDataLoading = useMemo(
    () => program.loading || progress.loading,
    [program.loading, progress.loading]
  );

  return (
    <Context.Provider
      value={{
        courseId,
        flatLessons,
        flatTopics,
        prevTopic,
        currentTopic,
        nextTopic,
        currentLesson,
        currentCourseProgram,
        isNextTopicButtonDisabled,
        setIsNextTopicButtonDisabled,
        completeCurrentTopic,
        availableTopicsIds,
        finishedTopicsIds,
        currentLessonParentsIds,
        isCourseFinished,
        isAnyDataLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CoursePanelProvider;
